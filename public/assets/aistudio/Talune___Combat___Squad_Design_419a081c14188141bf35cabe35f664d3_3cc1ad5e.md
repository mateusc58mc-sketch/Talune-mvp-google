# Talune — Combat & Squad Design

# Atualização — regras de loot e bots

**Decisões confirmadas pelo usuário em 15/11/2026:**

- Bots não geram drops e não participam de negociação.
- Loot é individual por jogador elegível; não existe divisão de um item compartilhado.
- Equipamentos podem dropar independentemente da classe do personagem que os encontrou. Um personagem pode receber equipamento destinado a outra classe, criando incentivo para negociação entre jogadores.
- Encontrar um item não garante que o personagem possa equipá-lo; requisitos de classe, nível ou especialização podem ser aplicados.
- Itens de raridade alta devem ter chances drasticamente menores. As probabilidades exatas permanecem pendentes de balanceamento econômico.

O servidor deve realizar as rolagens e validar elegibilidade. O cliente não escolhe, altera ou confirma resultados de drop. Não conceder recompensas retroativas a um jogador que entrou na Party depois do encerramento do encontro.

## Regras de recompensa e admissão — decisões aprovadas (15/11/2026)

- **XP individual + bônus cooperativo:** cada personagem recebe XP individualmente e recebe um bônus por jogar com jogadores reais. O valor/fórmula e a elegibilidade ainda serão balanceados. Bots não contam automaticamente como jogadores reais para esse bônus.
- **Loot individual:** cada personagem tem sua própria recompensa/rolagem de loot. Não há distribuição de um conjunto compartilhado de itens da Party.
- **Admissão com progresso inferior — CONFIRMADO:** depende da aprovação do líder. Se aprovada, a entrada fica pendente até o combate atual terminar. No início do próximo ciclo, o servidor recalcula o progresso compartilhado pelo menor progresso individual entre os membros reais elegíveis; a Party pode retornar ao estágio desse integrante. A regressão afeta somente a expedição compartilhada e não reduz nem apaga o progresso individual já conquistado pelos demais. Não existem estágios paralelos dentro da mesma Party.
- **Estado de encontro e avanço continuam compartilhados:** a Party não pode manter membros em andares/estágios paralelos durante a mesma expedição.

Requisitos técnicos:

- XP e loot são calculados e concedidos no servidor.
- Cada concessão deve ser idempotente para impedir duplicação em reconexões ou reenvio de eventos.
- A rolagem individual deve usar tabelas e regras versionadas/configuradas no servidor.
- Entrada durante combate precisa respeitar um ponto seguro e regras de elegibilidade ainda pendentes.
- Registrar quantidade de jogadores reais elegíveis no momento do encontro para cálculo posterior do bônus de XP.

## Atualização de combate — Party com bots e progresso sincronizado

- A Party comporta até quatro integrantes e deve estar funcional desde o início da jornada.
- Vagas não ocupadas por jogadores reais são preenchidas por bots controlados por IA.
- Bots usam o nível do personagem principal definido como referência de escala, mas recebem poder de combate inferior ao de um jogador real equivalente. A proporção ainda depende de protótipos e balanceamento.
- Jogadores reais continuam controlando somente seus próprios personagens. Bots são companheiros automatizados do sistema, não personagens adicionais administrados pelo usuário.
- A Party compartilha um único estado de avanço de conteúdo. Todos devem estar no mesmo andar/estágio/mapa/dungeon durante a sessão cooperativa.
- A progressão individual (nível, XP, classe, skills, atributos, inventário e equipamentos) permanece separada por personagem.
- A composição continua livre; bots não devem impor uma formação fixa nem tornar obrigatória uma classe específica.
- O motor de combate precisa suportar personagens reais e bots sob as mesmas regras autoritativas, com diferença explícita de parâmetros de poder.

O nível de referência dos bots, sua composição, substituição por jogadores reais e comportamento em desconexões permanecem pendentes de especificação.

## Correção de conceito — modelo oficial de Party

**Esta seção substitui qualquer trecho antigo desta página que descreva quatro heróis sob controle de um jogador.** Talune usa o modelo de MMORPG cooperativo: cada pessoa controla e evolui um único personagem. A Party tem até quatro jogadores. O jogador pode criar ou entrar em uma Party. A composição é livre; quatro Tanks são permitidos, embora possam ter menor eficiência em encontros que exigem dano, cura ou controle. Tank, Healer e DPS são funções/sinergias, não vagas obrigatórias. Não codificar Tank obrigatório nem composição 1 Tank + 1 Healer + 2 DPS.

Todos começam como Aprendiz e escolhem Guerreiro, Caçador, Clérigo ou Mago ao nível 10. Especializações são desbloqueadas posteriormente. Regras de posicionamento, targeting, solo e preenchimento por IA permanecem pendentes.

## 1. Objetivo

O combate é automático, mas precisa ter leitura tática. A unidade cooperativa é a Party de até quatro jogadores reais. Cada integrante controla exclusivamente seu próprio personagem; ninguém administra os personagens dos demais. O jogador deve perceber por que a Party venceu ou perdeu, quem está recebendo dano, quando uma habilidade foi ativada e como a composição e as builds individuais mudam o resultado.

## 2. Papéis de combate

Os papéis descrevem tendências de classe/build, não vagas obrigatórias da Party:

- Tank: pode absorver ou redirecionar ataques, gerar ameaça, mitigar dano e proteger aliados.
- Healer/Suporte: pode monitorar HP dos aliados, priorizar alvos feridos e aplicar cura, escudos, buffs ou remoção de efeitos.
- DPS: pode maximizar dano por alvo e/ou em área, respeitando prioridades e mecânicas de chefe.

A Party pode conter qualquer combinação de classes, inclusive quatro personagens com a mesma classe ou função. Composições desequilibradas devem continuar jogáveis, mas podem ter menor eficiência em certos encontros. O balanceamento deve recompensar sinergias sem impor uma composição única.

## 3. Formação

**Tamanho do squad — CONFIRMADO para o MVP:** quatro heróis: um Tank, um Healer e dois DPS.

A proposta atual é dividir o squad em:

- Front Line: linha dianteira, inicialmente ocupada pelo Tank.
- Back Line: linha traseira, inicialmente ocupada pelo Healer e pelos dois DPS.

O Miro também registra uma possível linha intermediária (Mid Line). Não adicionar essa camada sem necessidade comprovada. A confirmação de quatro heróis não implica, por si só, a adoção de uma terceira linha.

## 4. Regras de targeting propostas

1. Ataques podem selecionar alvos por ameaça, provocação, alcance, posição, alvo marcado ou regra específica do encontro.
2. Provocar só altera a seleção de alvo quando a skill e o inimigo permitem; não pressupor que todo Tank tem provocação ativa.
3. Sem Tank, ataques normais ainda precisam selecionar alvos de forma válida e previsível.
4. Ataques de chefe podem ter targeting especial, telegraph e condições de resposta.
5. Ataques em área devem respeitar alvos elegíveis, alcance e limites de dano definidos pelo encontro.
6. Skills de cura/suporte selecionam aliados segundo condições configuráveis, como menor HP percentual, maior ameaça ou efeito negativo.
7. DPS seleciona alvos válidos segundo prioridade configurável ou regra do encontro.

## 5. Habilidades e telegraph de chefe

Chefes devem apresentar:

- Nome e barra de HP.
- Barra de conjuração.
- Aviso visual do tipo de ataque.
- Janela clara para interrupção.
- Resultado visível: interrompido, conjuração concluída, alvo atingido e efeitos aplicados.

Interromper deve cancelar a ação apenas quando o alvo, janela e regra da habilidade permitirem. Não pode ser apenas um efeito visual.

## 6. Feedback de combate

- Dano normal, crítico, cura, escudo, bloqueio, esquiva e Miss devem ter leitura distinta.
- HP deve atualizar suavemente, sem atrasar o estado real.
- Skills devem mostrar ícone, ativação e cooldown.
- Chefes devem ter efeitos de cast e impacto.
- Animações não podem ocultar informações ou prejudicar performance.

## 7. Simulação e autoridade

O cliente apresenta animações e interpolações. Regras de dano, cura, drops, XP, ouro, cooldowns, recursos e estado de encontro devem ser resolvidas por lógica confiável no servidor.

Randomização de combate deve ser reproduzível para testes, com seed e logs de eventos quando necessário.

## 8. Cenários de teste

- Tank vivo recebe ataque normal.
- Provocar altera a ameaça conforme esperado.
- Tank morto expõe os demais membros.
- Healer seleciona o aliado com menor HP percentual.
- Cura não ressuscita personagem morto sem efeito explícito de ressurreição.
- Interrupção dentro da janela cancela o cast.
- Interrupção fora da janela não cancela.
- Ataque AoE aplica dano aos alvos corretos.
- Morte, vitória, checkpoint e recompensa são persistidos sem duplicação.

## 9. Decisão registrada: Party cooperativa de até quatro jogadores

**Status: Confirmado pelo usuário.** A Party comporta até quatro personagens, cada um controlado por um jogador. Cada pessoa evolui apenas o próprio personagem. Não existe uma equipe fixa de quatro heróis sob controle de um único jogador.

A composição é livre: quatro Tanks são permitidos, assim como qualquer outra combinação. O jogo deve tornar claras as consequências estratégicas de uma composição (por exemplo, menos dano ou cura), sem bloquear a entrada ou impedir a progressão por regra artificial.

Cada personagem começa como Aprendiz e escolhe uma das quatro classes-base ao atingir o nível 10. A progressão de especializações ocorre mais adiante e deve ser especificada com base na documentação histórica e em balanceamento.

A formação Front/Back, regras de targeting, jogo solo e preenchimento de vagas com IA continuam pendentes. Não codificar a regra antiga de Tank obrigatório + Healer + dois DPS.

## Atualização — sequência automática de habilidades (decisão aprovada em 16/11/2026)

**Status: Confirmado pelo usuário. Aplicar como regra-base do sistema de combate.**

Talune utilizará uma fila de habilidades ordenada por prioridade pelo jogador. O sistema percorre a sequência continuamente e executa a primeira habilidade que estiver disponível e cujas condições de uso sejam válidas.

### Regras de execução

1. Verificar a primeira habilidade da sequência configurada.
2. Se estiver pronta e todas as condições forem atendidas, executá-la.
3. Se estiver em recarga, não tiver alvo válido, não puder atingir o alvo ou não atender a alguma condição de uso, ignorá-la temporariamente e verificar a próxima.
4. Se nenhuma habilidade da sequência puder ser usada, executar o ataque básico.
5. Reavaliar a sequência continuamente. Quando uma habilidade prioritária voltar a ficar disponível, ela poderá ser executada na próxima oportunidade válida.

### Comportamento por situação

| Situação | Comportamento |
| --- | --- |
| Habilidade pronta e alvo válido | Executar |
| Habilidade em recarga | Pular e verificar a próxima |
| Alvo incompatível ou inválido | Pular e verificar a próxima |
| Condição de uso não atendida | Pular e verificar a próxima |
| Recurso insuficiente (ex.: mana) | Pular e verificar a próxima |
| Nenhuma habilidade utilizável | Executar ataque básico |

### Separação entre ASPD e Haste

- **ASPD** controla exclusivamente a frequência dos ataques básicos.
- **Haste** reduz o tempo de recarga das habilidades.
- Haste não aumenta a frequência dos ataques básicos; ASPD não reduz recargas de habilidades.

### Exemplo de sequência

Configuração do jogador:

1. Golpe Poderoso
2. Investida
3. Grito de Batalha

Se Golpe Poderoso estiver em recarga, o personagem verifica Investida. Se Investida também não puder ser usada, verifica Grito de Batalha. Se nenhuma habilidade estiver disponível, continua atacando com ataques básicos até surgir uma oportunidade válida.

### Objetivo de design

O personagem não deve ficar parado aguardando uma habilidade entrar em recarga. A fila prioritária preserva a escolha tática do jogador, mantém o combate automático fluido e garante que a ordem configurada tenha impacto real.

### Requisitos para implementação e testes

- A validação e execução das habilidades devem ser autoritativas no servidor.
- A ordem configurada deve ser respeitada sem permitir que uma habilidade indisponível bloqueie as demais.
- O ataque básico deve continuar funcionando como fallback.
- A reavaliação da fila deve respeitar a cadência real de execução, cooldowns, recursos, alvo e condições específicas de cada habilidade.
- Testar: primeira habilidade pronta; primeira em recarga e segunda pronta; várias habilidades indisponíveis; recurso insuficiente; alvo inválido; retorno de habilidade prioritária à disponibilidade; fallback para ataque básico.
- Não definir ainda o intervalo exato de reavaliação, a cadência de execução ou fórmulas de cooldown: esses parâmetros serão especificados durante o balanceamento e a implementação.

[Talune — Contrato de Combate do Marco A](Talune%20%E2%80%94%20Contrato%20de%20Combate%20do%20Marco%20A%2041ea081c1418819989f4fc4249cb3f1d.md)

## Contrato de combate do Marco A — v0.1 APROVADO (19/11/2026)

O usuário aprovou explicitamente as cinco propostas do contrato mínimo do Marco A. Esta aprovação é restrita à primeira fatia jogável e não define o balanceamento final do jogo.

1. **Tempo:** simulação por eventos em milissegundos; skill de teste pode executar em t=0; ataques básicos e ataques do monstro começam após seus intervalos.
2. **Relógios independentes:** ASPD controla somente a cadência dos ataques básicos; Haste altera somente cooldowns de habilidades.
3. **Dano experimental:** `rawDamage = floor(attack * skillPower)`; mitigação por `floor(defense / 2)`; dano efetivo limitado ao HP restante. Sem crítico, miss, precisão ou esquiva no Marco A.
4. **Simultaneidade:** eventos no mesmo timestamp são calculados a partir do mesmo snapshot e aplicados em lote.
5. **Skill de teste:** habilidade ofensiva universal temporária do Aprendiz, sem canonizar o kit ou o balanceamento.
6. **Desconexão:** preservar estado do encontro e pausar novos encontros quando não houver jogador real conectado durante o Marco A.

**Próxima etapa:** criar testes de conformidade, corrigir o motor isoladamente e validar todos os critérios antes de qualquer integração. Referência canônica: [Contrato de Combate do Marco A](Talune%20%E2%80%94%20Contrato%20de%20Combate%20do%20Marco%20A%2041ea081c1418819989f4fc4249cb3f1d.md).

## Implementação isolada do contrato Marco A — motor v0.2.0 (20/11/2026)

Foi criada a branch GitHub `fix/combat-engine-marco-a-v0.2` para corrigir o protótipo sem tocar no runtime de Talune.

**Correções implementadas:** validação de custo de MP/cooldown; ASPD em intervalos inteiros `ceil(1000 / APS)`; Haste em cooldowns independentes `floor(baseCooldownMs / (1 + haste))` com mínimo técnico de 1 ms; skill em t=0; fórmula experimental aprovada do Marco A; remoção de crítico/miss/precisão/esquiva do resultado; dano efetivo limitado ao HP restante, inclusive overkill simultâneo; resolução em lote de eventos com o mesmo timestamp; empate terminal; validação de IDs/atributos/HP/MP/skills/tempos; orçamento técnico de eventos.

**Verificação executada em Node 22.16.0 / TypeScript 5.8.3:** 18/18 testes automatizados passaram; checagem TypeScript estrita passou; 250 cenários determinísticos adicionais passaram por invariantes de HP e contabilização de dano.

**Ainda não implementado/testado:** rede multiplayer real, autenticação, servidor autoritativo de transporte, Party persistente, bots, sincronização de dois clientes, reconexão, XP persistente/idempotência, elegibilidade de entrada tardia e pausa por presença. Esses pontos dependem do adaptador de servidor/Party e não são declarados conformes pelo motor isolado.

O motor permanece fora do runtime. A fórmula e os parâmetros continuam experimentais para o Marco A, não balanceamento final. Próximo passo: empacotamento ZIP verificável e revisão por PR antes de qualquer integração.

### Ajuste adicional após revisão de testes — 20/11/2026

Foi corrigido um caso de duração terminal: quando a luta termina antes do fim da janela pedida por `advanceCombat`, o estado agora preserva o timestamp real do evento terminal, em vez de avançar artificialmente até o fim da janela. A suíte permanece em 18/18 testes aprovados, com asserção específica para essa condição; TypeScript estrito e 250 cenários determinísticos adicionais passaram novamente.

## Atualização de entrega — motor de combate v0.2.0 (20/11/2026)

A revisão final confirmou que o motor isolado corresponde ao contrato aprovado D-025 do Marco A. A suíte foi reproduzida a partir do ZIP: 18/18 testes passaram em Node.js 22.16.0; a checagem TypeScript estrita passou; a integridade do ZIP foi confirmada e o SHA-256 local corresponde ao pacote revisado.

O PR #1 foi mesclado na branch `main` por squash. Commit resultante: `b84efd2cb20fdffdf12c1e840e767ce845ab077c`.

- Fonte editável: `prototypes/combat-engine/`.
- Pacote: `artifacts/releases/combat-engine-v0.2.0.zip`.
- Fórmula e parâmetros continuam experimentais para o Marco A, não são balanceamento final.
- O motor continua isolado: não foi integrado ao runtime e não implementa rede multiplayer, autenticação, Party persistente, bots, reconexão, XP persistente ou idempotência de recompensas.

Próxima etapa técnica: desenhar e validar o adaptador server-authoritative de sessão/Party/presença/reconexão antes de integrar o motor ao jogo.

## Regra aprovada — farm sem progressão quando a Party está totalmente offline (D-027, 20/11/2026)

Quando o último jogador real desconectar, o servidor conclui o lote de eventos do timestamp corrente. A Party continua farmando monstros comuns no estágio atual, mas não pode iniciar/desafiar o chefe nem avançar de estágio até que um jogador real reconecte. Bots não contam como presença real. A ausência de jogadores reais é uma trava de progressão, não uma pausa geral do combate/farm. O sistema completo de farm offline (limites, cálculo, recompensas e resgate) permanece no Marco C.

Registro: [D-027 — contrato de sessão e Party](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/SESSION_PARTY_SERVER_CONTRACT.md).

## 9. Referência visual complementar — preparação e relatório (20/11/2026)

A análise visual dos quatro clipes reporta um painel pré-chefe com resumo e habilidades do chefe, seleção dos quatro integrantes, visualização/reordenação dos slots de habilidades e configurações separadas de caça e AFK. Também reporta resultado imediato com recompensas/rendimento por minuto e painel analítico com DPS, dano recebido, cura, fontes de dano e timeline de habilidades.

**Aplicações candidatas para Talune (não aprovadas como novas regras):**

- Avaliar presets táticos independentes de Farm e Chefe, sem alterar a regra de execução por prioridade.
- Considerar uma preparação que reúna resumo do chefe, ameaças conhecidas e configuração da Party.
- Manter edição tática cooperativa dentro da permissão já aprovada: qualquer membro real online pode ajustar a ordem de skills dos integrantes, inclusive offline, sem alterar atributos, equipamento, recursos ou progressão alheia.
- Separar resultado imediato (duração, vitória/derrota, recompensas) de relatório analítico consultável.
- Avaliar comparativo por integrante de dano, cura e dano recebido; timeline detalhada pode ficar para etapa posterior.
- Não adicionar XP/min/moeda/min até haver definição real de farm e economia.

**Compatibilidade obrigatória:** ASPD controla ataques básicos; Haste reduz cooldowns; skills são verificadas por prioridade; indisponíveis são puladas; ataque básico é fallback. Não adotar orbes, energia gerada por ataques ou fila circular. O custo MP e o contrato D-025 permanecem vigentes.

A análise completa e suas limitações estão registradas em [ULALA_VISUAL_INVESTIGATION_2026-11-20.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/ULALA_VISUAL_INVESTIGATION_2026-11-20.md).

## Decisão aprovada — alterações táticas durante encontro (D-028, 20/11/2026)

Alterações na prioridade/ordem de habilidades feitas durante um encontro entram em vigor **somente no próximo encontro**. O encontro em andamento mantém congelada a configuração tática efetiva no seu início; mudanças realizadas durante a luta são salvas para o próximo encontro e não alteram ações, cooldowns, eventos ou resultados já em processamento.

A regra também se aplica quando um membro real online altera a configuração tática de um integrante que está offline. Permanece válida a permissão já aprovada de edição tática cooperativa; esta decisão define apenas o momento de aplicação. Não autoriza alterar atributos, equipamento, XP, recursos ou progressão de outro personagem.

**Racional:** previsibilidade, consistência do snapshot de encontro e ausência de mudanças retroativas durante a simulação server-authoritative.

**Contrato:** SESSION_PARTY_SERVER_[CONTRACT.md](http://CONTRACT.md), P-SESSION-02 resolvida. Critério de aceite: qualquer edição tática feita durante encontro deve persistir para o próximo encontro, enquanto o encontro corrente termina com a configuração congelada no início.

Registro GitHub: [D-028 — Design Decisions](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/DESIGN_DECISIONS.md) · [Contrato de Party e presença](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/SESSION_PARTY_SERVER_CONTRACT.md).