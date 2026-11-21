# Talune — Contrato de Combate do Marco A

**Status:** APROVADO — contrato técnico/de design v0.1 (19/11/2026)
**Data:** 19/11/2026
**Escopo:** primeira fatia jogável (Marco A), não é contrato completo de combate do jogo final.
**Fontes:** `docs/DESIGN_DECISIONS.md`, `docs/MVP_SCOPE_AND_ACCEPTANCE.md`, auditoria dos protótipos e páginas Combat & Squad / RPG Systems / Character Progression do Notion.

## 1. Objetivo e limites

Este contrato define o comportamento mínimo e reproduzível para provar o combate automático de Talune em uma Party online, com autoridade do servidor.

O Marco A precisa demonstrar:

- 1 a 4 integrantes, reais e/ou bots;
- um único monstro por encontro;
- ataques básicos físicos;
- uma habilidade ativa ofensiva de teste por personagem;
- HP, MP e cooldown;
- ASPD e Haste com efeitos independentes;
- execução automática, prioridade/fallback;
- vitória, derrota, empate e timeout;
- sincronização entre dois clientes reais;
- XP de teste persistida e concedida uma única vez.

**Fora do Marco A:** classes e kits finais, especializações, passivas, múltiplas skills por loadout, cura, escudos, crítico, precisão, esquiva, resistências, efeitos de status, interrupção, ameaça, posicionamento, AoE, múltiplos monstros, fases de chefe, loot, economia e farm offline. Esses sistemas não são rejeitados; ficam fora desta primeira prova para reduzir variáveis.

## 2. Invariantes já aprovados

Estas regras não estão sendo reabertas:

1. Party comporta no máximo quatro personagens.
2. Cada jogador controla e evolui apenas o próprio personagem.
3. A composição é livre; não há vagas obrigatórias de Tank/Healer/DPS.
4. Bots preenchem vagas vazias e têm poder inferior ao de um jogador real equivalente.
5. Bots não são jogadores reais, não recebem drops e não contam para bônus cooperativo de XP.
6. ASPD controla a frequência dos ataques básicos.
7. Haste reduz cooldowns de habilidades; não acelera ataques básicos.
8. A fila de skills respeita prioridade: pular skills indisponíveis e executar a primeira válida; se nenhuma puder ser usada, usar ataque básico.
9. O servidor é autoridade para estado, ações, dano, recursos, XP e persistência.
10. O cliente envia intenções e apresenta o estado recebido; nunca determina o resultado.

## 3. Modelo de tempo e execução

### 3.1 Relógio

- O combate usa tempo lógico inteiro em milissegundos.
- Somente o servidor avança o relógio, usando fonte monotônica; relógio do navegador e timestamps enviados pelo cliente não são aceitos como autoridade.
- A simulação usa uma fila de eventos agendada, não depende de quantos frames o navegador renderiza.
- Eventos são processados em ordem crescente de timestamp.
- Eventos com o mesmo timestamp são resolvidos como um lote simultâneo: todos são calculados a partir do mesmo snapshot anterior ao lote; os efeitos são aplicados juntos; só então se verifica vitória/derrota. Isso evita vantagem artificial por ordem de iteração.
- A sequência de eventos recebe identificadores/ordem estável para logs e reprodução de testes.

### 3.2 Início e cadência

- No instante inicial (t=0), cada personagem verifica sua habilidade de teste. Se estiver válida e houver MP, ela pode ser usada imediatamente.
- O primeiro ataque básico ocorre após seu intervalo calculado por ASPD; não há ataque básico gratuito em t=0.
- O primeiro ataque do monstro ocorre após o intervalo de ataque configurado para ele; não há ataque gratuito em t=0.
- Após cada ataque básico, o próximo é agendado pelo intervalo de ASPD.
- Skills usam seus próprios cooldowns e não alteram nem reiniciam o relógio de ataques básicos.
- No Marco A existe apenas uma skill ofensiva por personagem. A política de múltiplas skills prontas no mesmo instante e eventual intervalo global entre skills fica para contrato posterior, antes de ampliar o loadout.

### 3.3 Fórmula de cadência

`attackIntervalMs = ceil(1000 / attacksPerSecond)`

ASPD é representada internamente como ataques por segundo (APS), sempre positiva e finita. Limites técnicos máximos devem ser configurados no servidor para impedir volumes de eventos abusivos; esse limite de segurança não é uma meta de balanceamento.

## 4. Haste e cooldown

Proposta de fórmula inicial, reaproveitando a convenção já testada no motor v0.1:

`effectiveCooldownMs = floor(baseCooldownMs / (1 + haste))`

- Haste é uma razão decimal: `0.25 = 25%`.
- Cooldown-base deve ser inteiro e estritamente positivo.
- Haste deve ser finita e não negativa.
- O cooldown começa no instante em que a skill é executada.
- Haste não altera ataques básicos.
- Para o Marco A, não haverá regeneração automática de MP durante o encontro; MP é consumido no uso da skill.
- Se não houver MP suficiente, a skill é ignorada e o personagem continua com ataques básicos. Nenhum MP pode ser criado por custo negativo.
- O limite máximo de Haste e o cooldown mínimo global continuam pendentes de balanceamento; a implementação deve ter limites técnicos configuráveis para evitar cooldown zero e loops.

## 5. Resolução de dano — proposta experimental

Para a primeira prova, manter o modelo simples e usar apenas dano físico. Fórmula candidata:

`rawDamage = floor(attack * skillPower)`
`mitigatedDamage = max(1, rawDamage - floor(defense / 2))`
`effectiveDamage = min(targetCurrentHp, mitigatedDamage)`

Regras:

- Ataque, defesa e multiplicador devem ser números finitos e não negativos.
- `skillPower` é um multiplicador de teste configurado no servidor; não é valor final de skill.
- Dano efetivo nunca excede o HP restante do alvo.
- Métricas e logs contabilizam somente dano efetivamente removido do HP, não overkill.
- Ataques acertam sempre no Marco A. Crítico, precisão, esquiva e resistências ficam desativados para isolar o contrato.
- HP nunca fica abaixo de zero.
- Um alvo com HP zero não recebe novas ações nem novos danos em lotes posteriores.

Esta fórmula é uma proposta de prototipagem, não uma decisão de balanceamento oficial. Ela deve ser validada com testes de curva antes de ser promovida.

## 6. Skill de teste do Aprendiz

- O Marco A usa uma única skill ofensiva universal, temporária, chamada provisoriamente **Golpe de Treino**.
- Ela existe para provar custo de MP, cooldown, prioridade e execução server-side; não representa o kit final do Aprendiz nem uma habilidade canônica de classe.
- A skill tem alvo único (o monstro do encontro), dano físico e multiplicador configurável.
- Custo de MP e cooldown-base são valores de fixture/configuração de teste, não balanceamento.
- A descrição exibida deve ser derivada dos mesmos dados usados pelo executor.
- O personagem possui um slot técnico de teste no Marco A. Isso não aprova quantidade final de slots ativos.

## 7. Alvo do monstro e fim do encontro

- O encontro contém um único monstro.
- O monstro escolhe aleatoriamente, por RNG controlado pelo servidor, um integrante vivo da Party a cada ataque.
- Nos testes, o RNG usa seed fixa para reproduzir resultados. Em produção, a seed é criada/controlada pelo servidor e nunca aceita do cliente.
- Não há ameaça, taunt, posição ou linha dianteira/traseira no Marco A.
- Ao atingir 0 HP, o personagem fica derrotado e deixa de agir; se todos os personagens estiverem derrotados, a Party perde.
- Se o monstro chega a 0 HP, a Party vence.
- Se monstro e último personagem da Party chegam a 0 HP no mesmo lote simultâneo, o resultado é **empate**. Empate não concede recompensa de vitória.
- Um limite máximo de duração encerra o encontro como **timeout**; valor configurável de teste, não balanceamento.
- Vitória, derrota, empate e timeout são estados terminais e não podem conceder a mesma recompensa mais de uma vez.

## 8. Party, bots e elegibilidade

- Party aceita 1–4 integrantes. Tentativa de adicionar o quinto é rejeitada pelo servidor.
- O Marco A permite testar uma Party com dois clientes reais e bots nas vagas restantes.
- Bots usam templates controlados pelo servidor, seguem a mesma API de combate e não podem enviar comandos como cliente.
- Para o primeiro teste, os bots usam parâmetros fixos de fixture. O multiplicador definitivo de poder inferior ao jogador real, referência de nível e regras de substituição continuam pendentes; valores de fixture não viram regra de produto.
- Um membro que entrar depois do início do encontro só participa do próximo encontro. Não recebe XP retroativo.
- Um membro desconectado durante o encontro mantém sua identidade e estado no servidor; reconexão recupera o snapshot atual. O tratamento completo de substituição por bot e farm quando todos estão offline fica para os marcos posteriores.
- Para não implementar offline antes do Marco C, a prova do Marco A pausa novos encontros quando não houver nenhum jogador real conectado. O estado do encontro atual deve ser persistido e retomado na reconexão. Essa é uma limitação temporária de escopo, não substitui a regra aprovada de farm offline no estágio atual.

## 9. XP e persistência no Marco A

- Vitória concede XP individual aos personagens reais elegíveis que pertenciam à Party no início do encontro.
- Bots não recebem XP persistente.
- O valor de XP é uma configuração de cenário de teste, não uma fórmula oficial.
- O Marco A persiste XP acumulada e nível calculado por uma tabela de limiares de teste. Os limiares podem ser ajustados sem alterar o contrato do motor.
- A escolha de classe no nível 5 é parte da progressão aprovada, mas a seleção completa das quatro classes pode ser concluída no Marco B; o Marco A precisa apenas persistir XP/nível e provar o evento de level-up com fixture.
- A recompensa é identificada por `encounterId + characterId + rewardType` (ou chave equivalente única) e concedida em transação/idempotência.
- Reconexão, refresh, reenvio de comando ou processamento repetido do mesmo evento não podem duplicar XP.
- Nenhum membro que entrou após o início do encontro recebe recompensa retroativa.

## 10. Contrato cliente-servidor

O cliente pode solicitar:

- criar/entrar/sair de Party nos fluxos mínimos de teste;
- iniciar ou aceitar um encontro se tiver permissão e se o estado permitir;
- alterar a configuração da skill de teste quando autorizado;
- solicitar snapshot/recuperação após reconexão.

O cliente não pode enviar como autoridade:

- dano, cura, HP/MP finais, cooldown restante, resultado, XP, nível, drops, moeda ou progresso;
- relógio/tempo decorrido usado no cálculo;
- seed de RNG de produção;
- identidade de outro personagem ou permissões que não possui.

O servidor valida autenticação, propriedade do personagem, associação à Party, limite de integrantes, estado do encontro, formato, faixa e frequência dos comandos. Mensagens inválidas são rejeitadas sem alterar o estado.

Cada atualização publicada deve incluir versão/sequence number do estado e identificador do encontro, permitindo ao cliente descartar eventos duplicados ou antigos.

## 11. Validação obrigatória de entradas

Rejeitar:

- IDs vazios, duplicados ou fora do formato esperado;
- Party vazia ou acima de quatro;
- HP máximo não positivo; HP/MP atuais fora dos limites;
- valores negativos ou não finitos em ataque, defesa, ASPD, Haste, custo, cooldown, poder, XP ou duração;
- cooldown zero/negativo;
- custo de skill negativo;
- multiplicador negativo;
- nomes/strings fora dos limites de tamanho;
- arrays de prioridade duplicados ou com tamanho acima do permitido;
- timestamps, elapsed time ou sequência fornecidos pelo cliente;
- comandos fora do estado permitido ou sem autorização.

Validação de schema não substitui validação de regra de domínio. Toda mutação crítica é validada novamente no servidor.

## 12. Testes de aceite do contrato

1. Party com 1 e 4 integrantes é aceita; 0 e 5 são rejeitadas.
2. Dois clientes reais observam o mesmo encontro, HP, MP, cooldown e resultado.
3. Bots completam vagas sem serem tratados como jogadores reais.
4. Primeiro ataque básico ocorre após o intervalo ASPD; não ocorre em t=0.
5. Duplicar ASPD dobra a frequência de ataques básicos no mesmo intervalo de simulação, sem alterar cooldowns.
6. Aumentar Haste reduz cooldown de skill, sem alterar a cadência de ataques básicos.
7. Skill pronta no início pode ser usada em t=0; cooldown começa no uso.
8. Skill sem MP é ignorada; ataque básico continua.
9. Skill com custo negativo, cooldown inválido, poder inválido ou ID duplicado é rejeitada antes do combate.
10. Ataque letal registra apenas dano igual ao HP restante (sem overkill).
11. Mesma seed e mesmos inputs reproduzem o mesmo log de eventos.
12. Eventos no mesmo timestamp são resolvidos como lote simultâneo e produzem o mesmo resultado em execuções repetidas.
13. Personagem derrotado não age novamente; Party perde quando todos caem.
14. Vitória, derrota, empate e timeout são terminais e inequívocos.
15. XP é creditada uma única vez por personagem elegível, mesmo após reconexão/reenvio.
16. Membro que entra depois do início não recebe XP do encontro em andamento.
17. Reconexão restaura o estado autoritativo e não confia no estado local do cliente.
18. Nenhum comando inválido ou não autorizado altera o estado.

## 13. Pendências que não bloqueiam o Marco A

- Fórmulas finais de atributos e dano para classes completas.
- Crítico, precisão, esquiva, resistências e tipos elementais.
- Regeneração de HP/MP, cura e escudos.
- Múltiplas skills, passivas, slots finais e global cooldown.
- IA definitiva e multiplicador de poder dos bots.
- Regras finais de entrada/saída durante combate, substituição imediata por bot e liderança.
- XP final, bônus por quantidade de jogadores reais e curva oficial de níveis.
- Loot, drops, ouro e economia.
- Offline e limite de 12h/24h.
- Múltiplos monstros, chefes e efeitos de área.

## 14. Registro de aprovação v0.1

**Aprovação explícita do usuário:** 19/11/2026. As cinco propostas abaixo passam a ser o contrato aprovado do Marco A:

1. **Tempo:** simulação por eventos em milissegundos, primeiro ataque básico/monstro após seu intervalo; skill de teste pode ser usada em t=0.
2. **Dano:** fórmula experimental do motor v0.1, com dano efetivo limitado ao HP restante; sem crítico/miss no Marco A.
3. **Skill:** uma habilidade universal temporária do Aprendiz, sem declarar o nome/efeito como canon.
4. **Simultaneidade:** ações no mesmo timestamp resolvidas em lote, a partir do mesmo snapshot.
5. **Desconexão:** manter personagem e encontro persistidos; pausar início de novos encontros quando não houver jogadores reais conectados até a implementação do Marco C.

Esta aprovação fecha apenas o contrato mínimo do Marco A. A fórmula de dano e os parâmetros numéricos continuam experimentais para este marco, não são balanceamento definitivo. A aprovação não define arquitetura de infraestrutura, não autoriza criação de recursos Supabase e não integra automaticamente os protótipos existentes.