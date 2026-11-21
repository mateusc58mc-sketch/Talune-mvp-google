# Talune — MVP Scope & Acceptance Specification

**Status:** Draft de escopo para revisão e aprovação
**Versão:** 0.1
**Data:** 19/11/2026
**Fonte de produto:** decisões aprovadas em `docs/DESIGN_DECISIONS.md`, Product Brief, World Foundation e páginas especializadas do Notion.
**Objetivo:** transformar a visão aprovada de Talune em um primeiro produto jogável, pequeno e verificável, sem antecipar decisões de balanceamento ou arquitetura ainda abertas.

---

## 1. Resumo executivo

O MVP de Talune será um **vertical slice online de MMORPG idle cooperativo**, web-first e mobile-first, com arte 2D ilustrada. Ele precisa provar o ciclo completo: criar personagem, entrar em uma Party, preparar habilidades, combater automaticamente, receber progresso e recompensas individuais, melhorar o personagem e continuar a expedição com estado persistente.

O primeiro território será o **Vale de Brumafonte** (nome provisório). A experiência começa pequena e cresce em marcos: primeiro uma arena e um inimigo para validar o núcleo; depois o território com três monstros comuns e um chefe. Isso evita produzir todo o conteúdo antes de validar combate, multiplayer, persistência e pipeline visual.

**O MVP não é** uma versão reduzida de todos os sistemas finais. É uma fatia pequena que demonstra as promessas centrais do produto com segurança e qualidade suficiente para testes fechados.

## 2. Objetivos do MVP

1. Provar que um jogador consegue desenvolver um personagem próprio e persistente.
2. Provar que uma Party de até quatro integrantes funciona com jogadores reais e bots de preenchimento.
3. Provar combate automático com decisões táticas relevantes e regras executadas pelo servidor.
4. Provar progressão individual dentro de conteúdo compartilhado.
5. Provar recompensas individuais sem duplicação ou manipulação pelo cliente.
6. Provar a direção visual 2D ilustrada e um pipeline de conteúdo reutilizável.
7. Validar desempenho e legibilidade em desktop e viewport mobile 9:16.
8. Construir uma base técnica pequena que permita expansão sem reescrever o núcleo.

## 3. Não objetivos

Ficam explicitamente fora do MVP inicial:

- Mercado entre jogadores, leilão, RMT, cash-in/cash-out, Pix ou liquidação real.
- Árvores completas de talentos.
- Especializações de nível 100 e todo o conteúdo de progressão avançada.
- Torre como estrutura principal de progressão; a direção macro vigente é mundo conectado por continentes e regiões.
- Múltiplos continentes ou regiões jogáveis.
- Cartas, sockets, refino, sets e sistemas avançados de itemização.
- Transmog/coleção cosmética completa.
- Guildas, PvP, chat global, ranking competitivo, eventos sazonais e sistemas sociais avançados.
- Loja, pagamentos ou monetização. VIP pode existir apenas como entitlement de teste se necessário para validar limite offline; não implementar cobrança.
- Aplicativo nativo. O alvo é navegador responsivo.

## 4. Escopo por marcos

### Marco A — Primeira fatia jogável (prova do núcleo)

Objetivo: provar rapidamente o ciclo técnico antes de produzir o território inteiro.

Inclui:

- Uma conta de teste autenticada e um personagem persistente, começando como Aprendiz.
- Uma Party com até quatro slots; bots completam vagas vazias.
- Uma arena 2D e um monstro comum de teste.
- Combate automático server-authoritative: ataque básico, ao menos uma habilidade utilizável, cooldown e recursos.
- ASPD afeta ataques básicos; Haste afeta cooldowns de habilidades.
- Estado de combate sincronizado entre clientes conectados.
- XP mínima para demonstrar evolução e persistência.
- Interface mínima de arena, Party, HP, cooldown e progresso.
- Testes de reconexão e de rejeição de comandos inválidos.

Critério de saída: dois clientes reais podem observar a mesma Party/encontro (com bots nas vagas restantes), desconectar/reconectar e receber o mesmo estado autoritativo, sem duplicação de progresso ou recompensas.

### Marco B — MVP fechado do Vale de Brumafonte

Objetivo: entregar a primeira experiência completa de Talune para testes fechados.

Inclui:

- Fluxo de conta, seleção/criação de personagem e retorno à sessão.
- Aprendiz do nível 1 ao 5; escolha de uma classe-base no nível 5: Guerreiro, Caçador, Clérigo ou Mago.
- Party de até quatro integrantes, composição livre, com bots preenchendo vagas.
- Convites e entrada/saída de Party no mínimo necessário para testes fechados.
- Um único estágio compartilhado por Party; sem instâncias paralelas dentro do grupo.
- Vale de Brumafonte com hub Acampamento da Travessia e áreas encadeadas: Campos da Margem, Bosque das Raízes e Ruínas da Nascente.
- Três monstros comuns com identidades de combate distintas:
    - Lodo-de-Rio — referência de resistência.
    - Lobo-de-Várzea — referência de agressividade.
    - Broto de Raiz — referência de controle.
- Um chefe, Guardião da Fenda, com pelo menos duas fases mecanicamente distintas, telegraph legível e janela de resposta/vulnerabilidade.
- Combate automático por prioridade de habilidades; habilidades indisponíveis são ignoradas; ataque básico é o fallback.
- XP individual com bônus cooperativo por jogadores reais, após definição da fórmula.
- Loot individual por personagem elegível, calculado pelo servidor.
- Inventário mínimo, equipamento funcional básico e comparação/equipar/desequipar.
- Ouro apenas como moeda funcional interna se necessário ao loop; fontes e sinks limitados e documentados. Sem negociação.
- Progresso compartilhado da Party e progresso pessoal persistente.
- Pelo menos um jogador real online para avançar de estágio; sem jogadores reais online, a Party pode continuar farmando o estágio atual, sem avançar.
- Relatório básico de encontro e recompensas.
- Telemetria/logs mínimos para diagnosticar combate, reconexão e concessão de recompensas.

Critério de saída: uma Party mista (jogadores reais e bots) completa a sequência do Vale, derrota o chefe, recebe XP/loot individual, equipa uma melhoria, reentra depois de sair e mantém o estado correto.

### Marco C — Extensão offline do MVP

Objetivo: validar a promessa idle sem enfraquecer a autoridade do servidor.

Inclui:

- Acumulação offline padrão de até 12 horas por conta.
- Até 24 horas para conta com entitlement VIP; sem pagamentos no MVP.
- Se todos os jogadores reais estiverem offline, a Party continua farmando somente o estágio atual; não avança.
- Cálculo e concessão de XP, ouro e itens no servidor, usando tabela offline própria.
- Equipamentos podem cair offline com probabilidade menor que online, sem inventar taxas antes de balanceamento.
- Relatório de retorno com duração considerada e recompensas.
- Resgate idempotente, proteção contra reconexão/reenvio e limites por conta.
- Tratamento de inventário cheio e overflow definido antes de habilitar drops offline.

Critério de saída: avançar relógio em testes controlados, retornar após períodos diferentes, receber exatamente uma concessão válida e não conseguir duplicar ganhos por refresh, múltiplas sessões ou reenvio.

**Decisão de escopo:** o Marco C faz parte do MVP completo, mas só começa após os Marcos A e B estarem estáveis. Isso mantém o risco de simulação offline fora do caminho crítico do primeiro combate online.

## 5. Regras de produto obrigatórias no MVP

### Personagem e progressão

- Um jogador controla e evolui somente seu personagem.
- Todos começam Aprendiz.
- A escolha de classe-base é desbloqueada no nível 5.
- Classes disponíveis: Guerreiro, Caçador, Clérigo e Mago.
- Nível 50/100, slots avançados e especializações são regras de progressão futura; não precisam ser alcançados no MVP.
- XP, atributos, skills, equipamento e inventário são individuais.

### Party e bots

- Limite absoluto de quatro integrantes.
- Composição livre; não exigir Tank/Healer/DPS.
- Bots ocupam vagas vazias e não são contas reais.
- Bots não recebem loot persistente e não contam para bônus de cooperação real.
- O conteúdo/estágio é compartilhado; não existem estágios paralelos dentro da mesma Party.
- Ao menos um jogador real online é necessário para avançar o estágio.
- A admissão de membro com progresso inferior segue D-024: aprovação do líder, entrada após o combate atual e recálculo do estágio compartilhado pelo menor progresso individual elegível. A regressão não apaga progresso individual.
- Qualquer membro real online pode ajustar a configuração tática de skills dos membros da Party, sem alterar atributos, equipamentos, recursos ou progressão alheia.

### Combate

- ASPD controla a cadência dos ataques básicos.
- Haste reduz cooldowns de habilidades; não acelera ataques básicos.
- Percorrer habilidades na ordem de prioridade e executar a primeira disponível.
- Ignorar temporariamente habilidades sem recurso, em cooldown ou inválidas.
- Se nenhuma habilidade puder ser usada, realizar ataque básico.
- Chefes exigem mecânicas além de HP elevado.
- Nenhuma fórmula numérica dos protótipos é considerada balanceamento oficial. O motor de combate v0.2.0 foi corrigido para corresponder ao contrato experimental aprovado D-025 e permanece isolado; o simulador antigo também permanece isolado como referência. A integração depende da implementação e validação do adaptador server-authoritative.

### Recompensas e persistência

- XP individual com bônus por cooperação real; fórmula ainda precisa ser fechada.
- Loot individual por personagem elegível.
- Cliente nunca determina XP, dano final, drop, moeda, inventário ou avanço.
- Operações críticas devem ser transacionais/idempotentes.
- Reconexão, refresh e reenvio de mensagens não podem duplicar personagem, XP, moeda ou itens.

## 6. Experiência e telas mínimas

1. **Entrada/autenticação:** criar conta, entrar e recuperar sessão.
2. **Personagem:** criar/selecionar personagem; mostrar nome, nível, classe, XP e equipamento.
3. **Party:** quatro slots, nome/retrato, nível/classe, estado online/bot e ações de convite/saída conforme permissão.
4. **Arena:** cena principal persistente com Party, inimigo/chefe, HP, dano/efeitos essenciais, cooldowns, estado do encontro e progresso do estágio.
5. **Habilidades:** visualizar e ordenar as skills disponíveis; configuração tática claramente separada de atributos/equipamentos.
6. **Inventário/equipamento:** lista simples, raridade/tipo/atributos essenciais e ações equipar/desequipar.
7. **Resultado/retorno:** XP, itens, ouro e progresso obtidos no encontro ou no período offline.

A arena deve manter o foco; inventário, equipamento e habilidades abrem em painéis/telas dedicadas, sem cobrir permanentemente a leitura do combate. A interface deve ser mobile-first, legível em 9:16 e adaptável a desktop.

## 7. Requisitos técnicos e de qualidade

- Servidor autoritativo para combate, progressão, drops, inventário, moeda, presença e cálculo offline.
- Cliente envia intenções; servidor valida identidade, propriedade, permissões, estado e limites.
- Separar regras de domínio, transporte/UI e persistência.
- Estado de Party e estado individual precisam ter propriedade e ciclo de vida explícitos.
- Usar IDs estáveis, eventos auditáveis e idempotency keys para concessões.
- RNG determinístico em testes/simulações; seed não controlada pelo cliente em produção.
- Testes unitários, integração e concorrência para combate, Party, progressão, reconexão e recompensas.
- Testar viewport 9:16, desktop e pelo menos um dispositivo/modo de desempenho modesto.
- Medir custo e limites antes de ativar serviços ou aumentar infraestrutura.
- Next.js/TypeScript/Supabase continuam stack candidata; não estão congelados. Não criar tabelas, Auth, buckets, segredos ou recursos pagos como consequência desta especificação.
- Não integrar os protótipos de combate sem corrigir custo negativo de mana, divergências de fórmula/tempo/cadência, overkill, limite de Party, validação de entradas e fase do chefe.

## 8. Critérios de aceite consolidados do MVP completo

O MVP será aceito quando todos os itens abaixo forem demonstrados em ambiente de teste:

1. Conta e personagem podem ser criados, carregados e persistidos.
2. Personagem novo inicia como Aprendiz e escolhe classe ao atingir nível 5.
3. Party nunca excede quatro integrantes e pode ser composta por jogadores reais e bots.
4. Jogadores reais veem o mesmo encontro e estado cooperativo autoritativo.
5. Uma Party pode percorrer os três tipos de monstros e enfrentar o Guardião da Fenda.
6. O chefe apresenta ao menos duas fases com comportamento realmente distinto e telegraph compreensível.
7. ASPD e Haste produzem efeitos distintos e verificáveis.
8. A sequência automática de habilidades respeita prioridade, recursos e cooldowns, usando ataque básico como fallback.
9. XP e loot são calculados individualmente no servidor.
10. Um membro não consegue forjar dano, XP, drop, moeda, item ou progresso alterando mensagens do cliente.
11. Desconexão, refresh, reconexão e reenvio de comandos não duplicam estado ou recompensas.
12. Progresso individual permanece intacto quando o progresso compartilhado da Party é recalculado.
13. Pelo menos um membro real online é exigido para avançar estágio.
14. Arena e telas essenciais são legíveis em mobile 9:16 e desktop.
15. O Marco C offline passa nos testes de limites, resgate único, overflow e idempotência.
16. Testes automatizados cobrem caminhos críticos e falhas reproduzidas; resultados e limitações são registrados.
17. O pacote pode ser executado por outra pessoa seguindo README e instruções versionadas, sem depender do ambiente local do autor.

## 9. Pendências que precisam ser fechadas antes de implementação ampla

Esta especificação define o que o MVP deve provar; não inventa os valores ou contratos que ainda não foram aprovados.

| ID | Pendência | Necessário para |
| --- | --- | --- |
| S-01 | Contrato mínimo de tempo/cadência, dano experimental, ASPD e Haste | Resolvido para o Marco A por D-025 e `COMBAT_CONTRACT_MARCO_A.md`; balanceamento final, crítico, esquiva e resistências continuam fora do Marco A |
| S-02 | Kit inicial do Aprendiz e conjunto mínimo de skills/classes | Marco A/B |
| S-03 | Curva XP 1–5, atributos iniciais e recompensa de level-up | Marco A/B |
| S-04 | Alvo único, morte, derrota, empate e encerramento do encontro | Parcialmente resolvido para o Marco A por D-025; respawn e políticas de encontros posteriores continuam pendentes |
| S-05 | Contrato de sessão, Party, presença, reconexão, liderança e substituição de bots | Rascunho técnico em `SESSION_PARTY_SERVER_CONTRACT.md`; precisa de revisão/aprovação e decisões de borda |
| S-06 | Regra de referência de nível dos bots, comportamento mínimo e escala de poder | Marco A/B |
| S-07 | Estágios do Vale, ordem dos encontros e condições exatas de desbloqueio | Marco B |
| S-08 | Mecânicas/fases definitivas do Guardião da Fenda | Marco B |
| S-09 | Fórmula do bônus de XP por jogadores reais e elegibilidade | Marco B |
| S-10 | Elegibilidade e tabelas iniciais de loot, ouro e inventário | Marco B |
| S-11 | Contrato de equipamento mínimo e atributos exibidos | Marco B |
| S-12 | Regras de offline, tabela offline, VIP entitlement e overflow | Marco C |
| S-13 | Stack e arquitetura de runtime autoritativo, simulação e persistência | Antes de scaffold |
| S-14 | Alvo de concorrência, latência, orçamento de custo e observabilidade | Antes de beta fechado |
| S-15 | Fluxos de onboarding, conteúdo textual e acessibilidade | Antes de teste externo |

### Política para pendências

- Não transformar números de exemplos ou protótipos em valores oficiais.
- Fechar somente o necessário para o marco atual; parâmetros de nível 50/100, especializações e economia avançada não bloqueiam o Marco A.
- Quando uma pendência exigir decisão de produto, apresentar alternativas objetivas e registrar a escolha.
- Quando for apenas uma melhoria técnica reversível, o agente pode executar sem aprovação, respeitando [AGENTS.md](http://AGENTS.md).

## 10. Sequência de produção recomendada

1. **Contrato mínimo de combate:** unificar relógio, cadência, dano, recursos, eventos e validações; corrigir falhas reproduzidas nos protótipos sem integrar código ainda.
2. **Prova de arquitetura:** demonstrar sessão real, Party compartilhada e resolução de combate no servidor; medir custo/limites antes de escolher runtime.
3. **Marco A:** criar scaffold mínimo e primeiro combate persistente com testes.
4. **Progressão/Party:** completar criação de personagem, classe nível 5, bots, convites, presença e reconexão.
5. **Marco B:** produzir pipeline visual final e completar Vale, monstros, chefe, XP, loot e inventário.
6. **Marco C:** implementar simulação offline e resgate idempotente.
7. **Teste fechado:** validar segurança, performance, UX e custo com jogadores reais.

## 11. Riscos e mitigação

- **Combate indefinido:** fechar contrato mínimo antes de integrar protótipos; manter parâmetros experimentais separados de regras aprovadas.
- **Multiplayer complexo cedo demais:** validar uma Party pequena e duas sessões reais antes de escalar conteúdo.
- **Bots escondendo problemas de multiplayer:** testes precisam incluir duas ou mais contas reais; bots não substituem teste de sincronização.
- **Offline prematuro:** só iniciar depois do loop online persistente estar estável.
- **Produção de arte cara:** limitar o primeiro território e provar pipeline com um avatar, três monstros e um chefe.
- **Stack/custo incerto:** prova técnica isolada e estimativa antes de provisionar recursos.
- **Escopo inflado:** qualquer recurso não listado em Marco A/B/C é pós-MVP até revisão explícita.

## 12. Relação com as fontes canônicas

- Registro de decisões: `docs/DESIGN_DECISIONS.md`.
- Visão do produto: `docs/PRODUCT_BRIEF.md`.
- Mundo e Vale: `docs/WORLD_FOUNDATION.md`.
- Roadmap: `docs/ROADMAP.md`.
- Base técnica: `docs/TECHNICAL_BASELINE.md`.
- Auditoria dos protótipos: `docs/PROTOTYPE_REVIEW.md` e `docs/audits/COMBAT_PROTOTYPE_AUDIT_2026-11-19.md`.
- Wiki e páginas especializadas: Master Vision, Wiki do Jogo, Mundo/Mapa, Combat & Squad, Character Progression & Party, RPG Systems e Art Bible.

## Atualização técnica — próxima dependência do Marco A (20/11/2026)

O contrato mínimo de combate D-025 foi aprovado e o motor v0.2.0 foi corrigido, testado e mesclado na `main`. A próxima especificação é o [rascunho de contrato de sessão, Party e presença](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/SESSION_PARTY_SERVER_CONTRACT.md).

O documento está em rascunho e não congela arquitetura, transporte ou infraestrutura. A stack e o custo operacional permanecem pendentes de comparação antes de qualquer provisionamento.

## Direção free-first para o MVP — 20/11/2026

O usuário aprovou manter o custo de infraestrutura em **US$ 0/mês** durante o desenvolvimento do MVP, sem upgrades, serviços pagos ou cobrança automática. A primeira direção reversível será Vercel Functions + Supabase Auth/Postgres nos planos gratuitos, usando comandos HTTP e polling de snapshots primeiro. Supabase Realtime poderá ser adicionado se a necessidade for demonstrada e as quotas permitirem.

O Vercel Hobby é destinado a uso pessoal/não comercial; antes de beta público ou uso comercial, revisar os termos e o plano necessário. O plano efetivo da conta deve ser conferido antes de deploy; não presumir que está no Free.

O adaptador event-driven v0.2.0 adicionou projeção de relógio lógico e passou 13/13 testes locais; o motor passou novamente 18/18. Isso ainda não prova transação Postgres real: relógio lógico, snapshot de combate e idempotency ledger precisam ser persistidos atomicamente por CAS/transação antes de aprovar a arquitetura.

- Arquitetura free-first: [https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/FREE_FIRST_MVP_ARCHITECTURE.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/FREE_FIRST_MVP_ARCHITECTURE.md)
- Adaptador v0.2.0: [https://github.com/mateusc58mc-sketch/Talune/tree/main/prototypes/event-driven-adapter](https://github.com/mateusc58mc-sketch/Talune/tree/main/prototypes/event-driven-adapter)
- ZIP: [https://github.com/mateusc58mc-sketch/Talune/blob/main/artifacts/releases/event-driven-adapter-v0.2.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/main/artifacts/releases/event-driven-adapter-v0.2.0.zip)

Nenhum schema, Auth, variável, segredo, deploy ou recurso cloud foi criado nesta etapa. O projeto Supabase existente permanece ACTIVE_HEALTHY.

## Persistência PostgreSQL do Marco A — 20/11/2026

A primeira migration de persistência foi aplicada ao projeto Supabase Talune (PostgreSQL 17.12), registrada como `20261120124642_create_encounter_persistence_v0_1_0`.

O módulo cria:

- `encounter_states`: status, relógio lógico, instante de parede do banco, versão e snapshot JSONB.
- `encounter_commands`: ledger idempotente por encontro/comando, armazenando hash e resposta original.
- `encounter_rewards`: chave única por encontro/personagem/tipo de recompensa.
- RPCs `create_encounter` e `advance_encounter`; esta última usa bloqueio de linha, validação de versão, relógio do banco e gravação atômica de snapshot, ledger e recompensas.

Segurança: RLS habilitado; sem políticas de cliente; privilégios diretos revogados; RPCs liberadas somente para `service_role`. A chave service-role deve permanecer no backend, nunca no navegador.

**Testes reais:** teste SQL transacional cobriu criação, avanço, replay idempotente, recompensa única, conflito de versão e rejeição de reutilização de command ID com payload diferente. Em teste concorrente, duas chamadas independentes foram disparadas em paralelo para a mesma versão: uma confirmou a versão 1; a outra recebeu SQLSTATE `40001`. Snapshot final correspondeu apenas à vencedora e a fixture foi removida.

**Limites:** isso prova a atomicidade/CAS na fronteira do PostgreSQL, não autenticação, autorização de Party, duas sessões de navegador, Vercel Functions, presença, pausa/rebase, recuperação após restart ou integração ao runtime. A arquitetura completa segue em validação. Próxima etapa: backend confiável com autenticação e verificação de ownership/membership antes de expor qualquer RPC.

Código, migration, testes e relatório: [GitHub — supabase module](https://github.com/mateusc58mc-sketch/Talune/tree/main/supabase) e [relatório de prova](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/PERSISTENCE_POSTGRES_PROOF_2026-11-20.md).

## Backend HTTP e identidade/Party do Marco A — 20/11/2026

Foi implementada a primeira camada backend em branch isolada do GitHub: `feat/marco-a-auth-party-backend-v0.1.0`. Ainda não foi implantada.

**O que entrou:**

- Vercel Functions nativas em `api/v1`, Node.js 22+, TypeScript e fetch nativo, sem dependências runtime.
- Validação do Supabase Auth access token em cada request pelo endpoint `/auth/v1/user`.
- Rotas para health, identidade, personagem próprio, criação de Party e leitura autorizada de Party/encontro.
- O servidor gera IDs e define proprietário, classe Aprendiz, nível 1 e XP inicial; o cliente não escolhe owner, nível, classe, snapshot ou recompensas.
- Party com quatro slots fixos: um personagem real e três placeholders `mvp_placeholder_v1`. Os placeholders ainda não têm stats, IA ou skills.
- Migration `20261120125933_marco_a_identity_party_and_invoker_rpc` aplicada ao Supabase. RPCs privilegiadas usam `SECURITY INVOKER`, execução restrita a `service_role`, e validação de ownership/membership no banco.
- Secret key moderna `sb_secret_` é enviada somente pelo header `apikey` no backend; nunca como Bearer nem para o navegador.

**Validação:** GitHub Actions em Node 22 passou 16/16 testes unitários/rota e TypeScript estrito. Teste SQL transacional passou. Prova concorrente real no PostgreSQL com actor e membership: uma requisição avançou versão 0→1; a segunda recebeu SQLSTATE 40001. Fixtures removidas. Tabelas públicas ficaram sem dados de teste.

**Não realizado:** não foram criadas contas Auth reais, secrets/variáveis Vercel, deploy, UI, endpoints de combate, convites, presença/heartbeat ou duas sessões reais de navegador. A arquitetura completa segue em validação.

Fontes: [documentação backend](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/docs/BACKEND_MARCO_A.md), [API](https://github.com/mateusc58mc-sketch/Talune/tree/feat/marco-a-auth-party-backend-v0.1.0/api/v1), [migration](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/supabase/migrations/20261120125933_marco_a_identity_party_and_invoker_rpc.sql), [CI](https://github.com/mateusc58mc-sketch/Talune/actions/workflows/backend-ci.yml).

## Backend Marco A v0.1.0 — integração server-authoritative — 20/11/2026

A etapa backend foi concluída em branch isolada `feat/marco-a-auth-party-backend-v0.1.0`, sem deploy.

**Implementado:**

- Vercel Functions nativas em Node.js 22/TypeScript, sem dependências runtime.
- Validação do Supabase access token em cada request via Auth `/auth/v1/user`.
- APIs de personagem próprio, Party, leitura de encontro, início e avanço de combate.
- Personagem Aprendiz nível 1 vinculado ao usuário Auth; Party com quatro slots (1 jogador real + 3 placeholders de bot).
- Motor de combate v0.2.0 chamado server-side. O cliente envia somente commandId; relógio, seed RNG, snapshot, dano, HP/MP, resultado e recompensas permanecem no servidor.
- PostgreSQL retorna relógio confiável; RPC de avanço faz row lock/CAS e grava snapshot, logical clock e ledger de comando na mesma transação. Replay concorrente do mesmo commandId retorna a resposta original; commandIds distintos na mesma versão resultam em um commit e um conflito SQLSTATE 40001.
- Seed RNG e relógios internos não são expostos nas respostas públicas; log de combate persistido é limitado aos últimos 100 eventos.
- Quatro migrations aplicadas e versionadas no GitHub. RLS ativo, acesso direto de clientes revogado, funções SECURITY INVOKER restritas ao service_role.

**Validação:** GitHub Actions Node 22 passou 20/20 testes unitários/rota e TypeScript estrito. Testes SQL transacionais passaram; testes concorrentes reais foram executados no PostgreSQL 17.12. Fixtures temporárias foram removidas.

**Limitação importante:** stats do Aprendiz, Lodo de Treino, skill de treino e escala 65% dos bots são fixtures técnicas experimentais, não balanceamento aprovado. Ainda não há XP/loot, presença/heartbeat, pause/rebase, UI, Auth users reais, duas sessões reais de navegador ou deploy. O MVP Scope permanece Draft e o contrato de Party permanece draft.

Fontes: [documentação do backend](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/docs/BACKEND_MARCO_A.md), [API](https://github.com/mateusc58mc-sketch/Talune/tree/feat/marco-a-auth-party-backend-v0.1.0/api/v1), [migrations](https://github.com/mateusc58mc-sketch/Talune/tree/feat/marco-a-auth-party-backend-v0.1.0/supabase/migrations), [CI](https://github.com/mateusc58mc-sketch/Talune/actions/workflows/backend-ci.yml).

## Conclusão da etapa técnica — Backend Marco A v0.1.0 (20/11/2026)

A primeira fatia backend server-authoritative está implementada e validada na branch `feat/marco-a-auth-party-backend-v0.1.0` (ainda não mesclada nem implantada).

- Vercel Functions nativas Node.js 22 para Auth validation, personagem, Party, início/leitura/avanço de encontro.
- Supabase Auth access token validado server-side; ownership e membership verificados no backend e nas RPCs.
- Motor de combate v0.2.0 executado no servidor. Cliente envia apenas commandId; snapshot, relógio, RNG seed, HP/dano e recompensas não são aceitos do cliente.
- Cinco migrations aplicadas no Supabase; sete tabelas em `public`, todas com RLS ativo, grants diretos de cliente revogados e zero linhas persistentes de teste.
- RPCs SECURITY INVOKER restritas a service_role. Índices de quatro FKs adicionados após auditoria de performance.
- Teste SQL transacional passou; PostgreSQL real comprovou replay concorrente do mesmo commandId sem avanço duplicado e CAS de commandIds distintos (um commit, um SQLSTATE 40001).
- GitHub Actions Node 22: 20/20 testes unitários/rota e TypeScript estrito passaram. ZIP de release é gerado e validado automaticamente no CI.

**Limites:** os números de Aprendiz, bots e Lodo de Treino são fixtures técnicas experimentais, não balanceamento aprovado. Ainda não há Auth users reais, secrets Vercel, deploy, UI, duas sessões reais de navegador, presence/heartbeat, pause/rebase, XP/loot ou progressão offline. MVP Scope permanece Draft e Party contract permanece draft.

**Código e continuidade:** [Backend Marco A](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/docs/BACKEND_MARCO_A.md) · [API](https://github.com/mateusc58mc-sketch/Talune/tree/feat/marco-a-auth-party-backend-v0.1.0/api/v1) · [Supabase migrations](https://github.com/mateusc58mc-sketch/Talune/tree/feat/marco-a-auth-party-backend-v0.1.0/supabase/migrations) · [Release ZIP](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/artifacts/releases/talune-backend-marco-a-v0.1.0.zip) · [Handoff para próximas sessões](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/docs/AGENT_PLAYBOOK.md).

### Release package final — Backend Marco A v0.1.0

- ZIP: [talune-backend-marco-a-v0.1.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-auth-party-backend-v0.1.0/artifacts/releases/talune-backend-marco-a-v0.1.0.zip)
- Size: 65,431 bytes
- SHA-256: `e0217e16a35af0d680f29f7d90e82ab0b757a05a51f41eb1c0449e12bc67d657`
- Git blob: `96b164dc3cb63e4cbe5617fb0a13f264547b7a80`
- CI: 20/20 tests, TypeScript strict and ZIP integrity passed.
- Release ZIP contains five migrations and the canonical combat engine source; MANIFEST records checksums for included files.

**Correção do checksum final do ZIP (20/11/2026):** após a última atualização da documentação, o pacote foi regenerado pelo CI e validado novamente.

- Tamanho: 65.499 bytes
- SHA-256: `0c9d99a881252f7e0f5ded0ac31debcd6273d444a79ea88c3b4f1ad974aecdd6`
- Git blob: `55d77c5390be20793d0f5ad725776b88f382c692`
- CI: 20/20 testes, TypeScript estrito e integridade do ZIP passaram.

**Checksum final reproduzível do release ZIP (20/11/2026):**

- Tamanho: 63.234 bytes
- SHA-256: `da2939bc6524b357384126a0d9eadd0298e26755419d8e576871b86904b9aa43`
- Git blob: `6850467cab144cddc49cf87c073b91eaff9231d4`
- O CI agora normaliza timestamps e ordena entradas para tornar o ZIP reproduzível; integridade validada com `unzip -t`.

## Progresso do cliente web alpha (20/11/2026)

O desenvolvimento autônomo do MVP está em andamento. Primeiro cliente browser implementado com Auth, personagem, Party, presença, convites/join/leave e arena de treino. CI Node 22 57/57, JavaScript syntax, TypeScript strict e ZIP integrity aprovados. Dez migrations estão aplicadas e os testes SQL de Party access passaram com rollback.

O escopo segue Draft e o MVP não está concluído: faltam duas sessões reais, progressão/XP, recompensas/loot, inventário/equipamento, conteúdo do Vale e chefe, arte final e farm offline completo. Regras provisórias de Party não alteram decisões canônicas sem reconciliação posterior.