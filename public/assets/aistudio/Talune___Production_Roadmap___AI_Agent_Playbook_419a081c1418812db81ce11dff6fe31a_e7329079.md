# Talune — Production Roadmap & AI Agent Playbook

> **Governança atualizada — 16/11/2026:** esta página mantém o histórico de decisões técnicas e orientações para agentes de IA. Para acompanhar o estado real da produção, use a página canônica [Talune — Fases de Desenvolvimento & Roadmap](Talune%20%E2%80%94%20Fases%20de%20Desenvolvimento%20&%20Roadmap%2041aa081c14188148958ed77c1542aca2.md). Para avaliação e visão geral, consulte [Talune — Status do Projeto & Avaliação Atual](Talune%20%E2%80%94%20Status%20do%20Projeto%20&%20Avalia%C3%A7%C3%A3o%20Atual%2041aa081c141881d98726d96d0e100a31.md). A estrutura do mundo está em avaliação; referências antigas à torre como estrutura aprovada estão supersedidas até decisão explícita.
> 

## Marca oficial — Talune (16/11/2026)

**Talune** foi aprovado pelo usuário como nome oficial do projeto em 16/11/2026. A documentação de produto e design passa a usar essa marca. A aprovação do nome não equivale a uma liberação jurídica: buscas formais de marca, domínio e disponibilidade em lojas permanecem pendentes. Repositórios, pacotes, domínios e identificadores técnicos serão migrados em etapa técnica separada, com plano e testes.

## Atualização aprovada — marcos iniciais de progressão (15/11/2026)

- **Nível 5:** desbloqueia a escolha de uma das quatro classes-base (Guerreiro, Caçador, Clérigo ou Mago). Substitui a proposta anterior de nível 10.
- **Nível 50:** o personagem deverá ter desbloqueado aproximadamente metade do total de slots ativos de habilidades.
- **Nível 100:** todos os slots ativos de habilidades estarão desbloqueados e o personagem poderá escolher sua especialização. Substitui a proposta histórica de especialização no nível 40.
- A curva exata dos desbloqueios intermediários será definida junto com o desenvolvimento de cada mecânica, evitando antecipar decisões sem contexto. A intenção é usar a progressão como tutorial jogável: introduzir sistemas, opções e aprimoramentos em etapas, conforme o jogador aprende e ganha familiaridade.
- A quantidade total de slots ainda não está definida. “Metade no nível 50” é uma proporção, não uma confirmação de quatro, cinco ou qualquer outro total.

**Estado:** níveis 5, 50 e 100 e os marcos descritos estão aprovados; distribuição exata dos slots e demais desbloqueios permanece em aberto.

## Atualização de decisões — XP, loot e admissão na Party (15/11/2026)

- XP é individual, com bônus por jogar em Party com jogadores reais. Fórmula, valor e critérios de elegibilidade precisam ser definidos e testados.
- Loot é individual: cada personagem recebe sua própria rolagem/recompensa, sem disputa por um conjunto único de itens.
- A entrada de jogador com progresso inferior depende da aprovação do líder. Se aprovada, fica pendente até o combate atual terminar; no início do próximo ciclo, o servidor recalcula o progresso compartilhado pelo menor progresso individual entre os membros reais elegíveis. A Party pode retornar ao estágio desse integrante, sem reduzir ou apagar o progresso individual já conquistado pelos demais.
- O MVP deve testar essas regras no servidor, com concessões idempotentes de XP/itens e sem duplicação em reconexões.
- O design econômico precisa medir o efeito de até quatro rolagens individuais por encontro sobre a inflação de itens e moedas.
- A UI de convite/entrada deve mostrar ao líder o progresso atual da Party e o progresso do candidato antes da decisão.

## Atualização aprovada — bots, progresso da Party e reset de especialização

- Party de até quatro integrantes deve existir desde o começo. Vagas sem jogadores reais são preenchidas por bots.
- Bots acompanham o nível do personagem principal usado como referência, mas possuem poder de combate inferior ao de jogadores reais equivalentes. O valor dessa diferença será definido por testes.
- Todos os membros da Party compartilham o mesmo ponto de avanço no conteúdo cooperativo (andar/estágio/mapa/dungeon). Progressão individual, XP, inventário e equipamentos continuam separados.
- Especializações poderão ser redefinidas mediante custo in-game; custo e restrições ainda pendentes.
- Não tratar bots como adiamento pós-MVP: o preenchimento por bots é parte da experiência inicial e precisa ser contemplado na primeira vertical slice.
- O MVP deve validar a Party mista (jogadores reais + bots), sincronização de estágio e preservação do estado quando membros entram, saem ou desconectam.

## Correção de conceito — requisito oficial de produto

**Substitui a interpretação antiga de quatro heróis controlados por um jogador.** Cada jogador controla e evolui somente o próprio personagem. A Party comporta até quatro jogadores, e o usuário pode criar uma Party ou entrar em uma existente. A composição é livre: quatro Tanks são possíveis; falta de dano, cura ou controle deve afetar a eficiência, não impedir a formação.

Todos começam como Aprendiz. Ao nível 10, escolhem uma das quatro classes-base: Guerreiro, Caçador, Clérigo ou Mago. Especializações vêm depois. O MVP precisa tratar Party e propriedade individual de personagens como pilares, não como multiplayer opcional adiado para depois do jogo solo.

## Decisão aprovada — modelo de personagem e Party

O usuário esclareceu que Talune segue o modelo de MMORPG Idle cooperativo: cada jogador controla e evolui **um único personagem próprio**. A Party comporta até quatro jogadores/personagens. O jogador pode criar uma Party ou entrar em uma existente. A composição é livre: quatro Tanks são permitidos, embora possam avançar mais lentamente por falta de dano, cura ou outras ferramentas. Não impor a composição Tank + Healer + 2 DPS.

Todos começam como **Aprendiz** e, no nível 10, escolhem uma das quatro classes-base: Guerreiro, Caçador, Clérigo ou Mago. Especializações são desbloqueadas mais adiante, após especificação e balanceamento.

Esta decisão substitui a interpretação anterior de quatro heróis controlados por um único jogador. Arquitetura, UI, persistência, combate, progressão e testes devem refletir personagens pertencentes a jogadores e grupos formados por jogadores.

## 1. Princípio de produção

Construir do zero, em entregas pequenas e verificáveis. A documentação do projeto é a fonte de verdade; o agente deve consultá-la antes de implementar.

Não gerar um protótipo superficial que apenas pareça pronto. Cada entrega deve funcionar, persistir quando necessário e possuir testes.

## 2. Fases de produção

### Fase 0 — Discovery e especificação

- Auditar documentos, decisões e protótipos.
- Especificar progressão individual: Aprendiz até nível 10, escolha de classe e especialização posterior.
- Especificar Party de até quatro jogadores: criar, entrar, convidar, sair, liderança e reconexão.
- Definir cooperação e composição livre, sem classes obrigatórias.
- Consolidar fórmulas e dados.
- Definir stack e fronteiras cliente/servidor.
- Aprovar Art Bible e protótipo visual de referência.

### Fase 1 — Vertical slice visual e cooperativa

- Uma arena com um bioma.
- Party funcional com até quatro integrantes, combinando jogadores reais e bots.
- Bots preenchem vagas vazias, escalam conforme o nível de referência do personagem principal e têm poder inferior ao de jogadores reais equivalentes (parâmetro a balancear).
- Um monstro comum e um chefe.
- Combate automático que funcione com composições variadas de classe e com bots.
- Um único estado de avanço de conteúdo sincronizado para todos os membros da Party.
- Interface de Party com criação, entrada e até quatro slots, distinguindo jogadores reais e bots.
- Tela de personagem individual e inventário navegável.
- Paperdoll com arma e armadura equipáveis.
- Validar 9:16, desktop e desempenho.

### Fase 2 — Núcleo de RPG

- Classes, atributos e progressão.
- Skills com dados e executor funcional.
- Equipamentos com bônus reais.
- Inventário, loot e comparação.
- Salvamento e recuperação de estado.
- Testes unitários e integração.

### Fase 3 — Torre e idle

- Waves, chefes, checkpoints e desbloqueio de andares.
- Curva de XP e Ouro.
- Recompensas offline com limite e auditoria.
- Bestiário e tabelas de drop.

### Fase 4 — Conteúdo e profundidade

- Especializações.
- Mais biomas, monstros e chefes.
- Refinamento, cartas e coleções.
- Projeto detalhado de talentos; implementação somente após aprovação.

### Fase 5 — Robustez multiplayer e operação cooperativa

- Melhorias de sincronização, reconexão e recuperação de sessão.
- Regras para desconexão, ausência e retorno de membros.
- Substituição de bots por jogadores reais sem perda indevida do estado compartilhado.
- Proteção contra exploits, duplicação e manipulação de recompensas.
- Testes de carga com múltiplas Parties simultâneas.

### Fase 6 — Economia e operação

- Mercado e escrow.
- Taxas e ledger.
- Histórico, limites, antifraude e monitoramento.
- Revisão legal e das regras da plataforma antes de qualquer transação com dinheiro real.

## 3. Direção técnica inicial

A documentação existente registra Next.js App Router, TypeScript, Tailwind CSS e Supabase. O projeto Vercel já experimentou PixiJS para a arena 2D, Paperdoll e Sprite Lab.

Proposta para avaliação:

- Next.js: shell web, rotas e UI.
- TypeScript: tipos e contratos.
- PixiJS: renderização da arena e sprites quando validado por benchmark.
- Supabase: Auth, Postgres, Storage e Realtime conforme necessidade.
- Serviço confiável de jogo: combate, drops, recompensas, inventário e economia.
- Vercel: deploy da aplicação web e serviços compatíveis.

A decisão final sobre servidor de jogo deve considerar simulação idle, cooperação em tempo real, custo, latência, operação e segurança. Não mover lógica autoritativa para o navegador.

## 4. Regras permanentes para o agente de IA

1. Ler Master Vision, Art Bible, RPG Systems, Combat Design e Roadmap antes de codificar.
2. Identificar conflitos entre pedido novo e decisão documentada.
3. Perguntar antes de alterar decisões estruturais ou apagar funcionalidades/dados.
4. Não inventar valores de balanceamento; marcar exemplos como provisórios.
5. Não implementar UI falsa para simular sistemas inexistentes.
6. Não criar dados duplicados nem manter cálculos paralelos para o mesmo atributo.
7. Não confiar no cliente para moedas, inventário, dano, drops ou progresso.
8. Trabalhar em etapas pequenas, com escopo e critérios de aceite.
9. Testar a funcionalidade afetada e executar regressões relevantes.
10. Informar arquivos alterados, comportamento implementado, testes e limitações.
11. Não avançar para a próxima fase se os critérios de aceite da atual falharem.
12. Não implementar árvore de talentos ou RMT no MVP sem autorização explícita.

## 5. Template obrigatório de tarefa

Toda tarefa enviada ao agente deve conter:

- Objetivo.
- Contexto e documentos de referência.
- Escopo incluído.
- O que explicitamente não deve ser alterado.
- Regras de negócio.
- Requisitos visuais e responsivos.
- Dependências.
- Critérios de aceite observáveis.
- Testes obrigatórios.
- Relatório final esperado.

## 6. Prompt-base para iniciar o novo agente

Você é o engenheiro líder e parceiro técnico do projeto Talune. Antes de implementar qualquer coisa, leia toda a documentação vinculada a este projeto e apresente um resumo da arquitetura, dos pilares de gameplay, da direção visual, das decisões aprovadas e das decisões pendentes.

Não comece a programar imediatamente. Primeiro produza:

1. Auditoria de requisitos.
2. Lista de conflitos e dúvidas.
3. Proposta de arquitetura.
4. Plano de implementação em entregas pequenas.
5. Critérios de aceite e estratégia de testes.

A direção visual vigente é 2D ilustrada/pintada à mão, semi-chibi, fantasia colorida, com Paperdoll modular e interface mobile-first inspirada na clareza de idle RPGs como Ulala, sem copiar seus assets.

A experiência principal é combate automático em squad e progressão por torre. O jogador toma decisões relevantes sobre classes, skills, atributos, equipamentos e formação. O inventário e equipamentos devem ser sistemas funcionais, não telas decorativas.

Respeite o escopo do MVP. Não implemente árvore de talentos nem mercado RMT no MVP. Não substitua a arquitetura ou a identidade visual sem apresentar justificativa e obter aprovação.

Após a auditoria, aguarde aprovação do plano antes de iniciar alterações estruturais.

## 7. Definition of Done

Uma tarefa só está concluída quando:

- A implementação atende aos critérios de aceite.
- Não há erros relevantes no fluxo principal.
- Testes novos e existentes passam.
- Dados persistem e são validados quando aplicável.
- UI foi verificada em viewport móvel e desktop.
- A documentação foi atualizada.
- O agente reporta limitações conhecidas sem declarar sucesso prematuro.

## Auditoria inicial dos protótipos de combate — 19/11/2026

Os dois ZIPs históricos de combate foram localizados, extraídos e auditados inicialmente. Os testes originais passaram: motor v0.1 com 7/7 testes; simulador com 3 assertions no arquivo de teste. Os cenários de monstro e chefe do simulador também executaram até vitória.

A auditoria identificou problemas que impedem integração imediata: custo negativo de mana não validado no motor; simulador sem limite máximo de quatro membros; overkill contabilizado como dano integral no simulador; fórmulas e cadências diferentes entre as implementações; e fase 2 do chefe ainda sem mudança real de padrão/habilidades.

Curadoria técnica recomendada, ainda não decisão de design: manter os dois protótipos isolados; considerar o motor v0.1 como candidato mais forte ao núcleo de simulação; usar o simulador como referência inicial para telegraph/chefe, após correções. Fórmulas e parâmetros numéricos continuam provisórios. Nenhum código foi integrado ao app principal.

Relatório completo no GitHub: [Auditoria técnica dos protótipos de combate — 19/11/2026](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/audits/COMBAT_PROTOTYPE_AUDIT_2026-11-19.md).

## Organização dos protótipos no GitHub — 19/11/2026

O usuário esclareceu que havia enviado tanto os ZIPs quanto as pastas descompactadas dos dois protótipos diretamente ao repositório. As pastas descompactadas foram mantidas como fonte versionada. Os 11 arquivos das duas pastas foram comparados com as cópias extraídas dos ZIPs; todos tiveram correspondência exata de blob SHA-1 Git. Após a confirmação, os dois ZIPs redundantes foram removidos da raiz do GitHub para evitar duplicação.

- Motor v0.1: [pasta no GitHub](https://github.com/mateusc58mc-sketch/Talune/tree/main/talune-combat-engine-v0.1/talune-combat-engine-v0.1) — 8 arquivos.
- Simulador: [pasta no GitHub](https://github.com/mateusc58mc-sketch/Talune/tree/main/talune-combat-simulator/talune-mvp) — 3 arquivos.

Os protótipos continuam isolados e não foram integrados à aplicação principal. O índice, a revisão dos protótipos, a auditoria técnica e a auditoria das fontes no GitHub foram atualizados para refletir essa organização.

## Instruções universais para agentes de IA — 19/11/2026

O repositório agora possui um arquivo de entrada obrigatório na raiz: [AGENTS.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/AGENTS.md). Todo agente, modelo ou sessão deve lê-lo antes de iniciar qualquer trabalho.

Arquivos de compatibilidade:

- [GitHub Copilot](https://github.com/mateusc58mc-sketch/Talune/blob/main/.github/copilot-instructions.md)
- [Claude Code](https://github.com/mateusc58mc-sketch/Talune/blob/main/CLAUDE.md)
- [Gemini CLI](https://github.com/mateusc58mc-sketch/Talune/blob/main/GEMINI.md)

Regras consolidadas:

- Leitura obrigatória das decisões, continuidade, roadmap, auditorias e documentos de domínio antes de trabalhar.
- Melhorias técnicas/organizacionais de baixo risco podem ser feitas autonomamente, sem aprovação rotineira.
- Mudanças de gameplay, balanceamento, escopo, custos, segurança, infraestrutura ou decisões difíceis de reverter exigem aprovação.
- Toda mudança durável deve ser salva no GitHub, documentada e verificada.
- Sistemas/módulos executáveis devem manter código-fonte extraído e pacote ZIP versionado em `artifacts/releases/` a cada marco utilizável. ZIP é pacote de distribuição/recuperação; documentação isolada não exige ZIP.
- Nunca afirmar salvamento, teste ou upload sem confirmação.

A fonte canônica das regras operacionais é o arquivo [AGENTS.md](http://AGENTS.md) no GitHub; esta página registra a política e aponta para a fonte para evitar divergência entre cópias.

## Entrega validada — motor de combate Marco A v0.2.0 (20/11/2026)

O motor isolado foi revisado contra o contrato aprovado D-025, e a versão v0.2.0 foi mesclada na branch `main`.

- PR #1: [https://github.com/mateusc58mc-sketch/Talune/pull/1](https://github.com/mateusc58mc-sketch/Talune/pull/1)
- Commit de merge por squash: `b84efd2cb20fdffdf12c1e840e767ce845ab077c`
- Fonte: `prototypes/combat-engine/`
- ZIP: `artifacts/releases/combat-engine-v0.2.0.zip`
- Verificação reproduzida do ZIP: 18/18 testes passaram; TypeScript estrito passou; integridade do arquivo ZIP confirmada.

O motor permanece um módulo de simulação isolado. A entrega não representa multiplayer real nem integração server-authoritative ao runtime. Party persistente, bots, transporte, autenticação, reconexão, XP/recompensas idempotentes e presença seguem como tarefas próprias.

A fórmula e os valores numéricos continuam experimentais para o Marco A, não balanceamento final.

## Próxima tarefa — contrato de sessão e Party (20/11/2026)

Após a entrega validada do motor v0.2.0, a próxima etapa é revisar o rascunho [SESSION_PARTY_SERVER_CONTRACT.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/SESSION_PARTY_SERVER_CONTRACT.md).

O rascunho consolida regras já aprovadas para Party, ownership, bots, roster de encontro, admissão tardia, progresso compartilhado, presença e reconexão. Não aprova arquitetura, transporte ou infraestrutura. As questões abertas devem ser fechadas antes da implementação do adaptador; comparar opções e custos sem provisionar recursos. A divergência C-001 sobre liderança permanece sem resolução.

## Avaliação preliminar de arquitetura — 20/11/2026

Foi registrada a comparação [ARCHITECTURE_OPTIONS_MARCO_A.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/ARCHITECTURE_OPTIONS_MARCO_A.md): Vercel WebSockets + store, Colyseus dedicado e Supabase Functions + Realtime.

A atualização de 20/10/2026 tornou WebSockets em Vercel Functions GA, mas a conexão ainda fecha ao atingir a duração máxima da Function e o estado não é compartilhado entre instâncias. Supabase Realtime pode distribuir eventos, mas não substitui o motor server-authoritative. Colyseus oferece salas de jogo, porém requer hospedagem persistente. Nenhuma opção foi aprovada; a próxima ação é prova técnica local, medição e comparação de custos, sem provisionar recursos.

## Resultado do POC de coordenação event-driven — 20/11/2026

O POC isolado `prototypes/event-driven-adapter/` passou 6/6 testes. Ele valida a orquestração do motor v0.2.0 com relógio injetado, rejeição de elapsed time do cliente, idempotência, CAS concorrente e pausa/retomada por presença server-owned.

Pacote: [event-driven-adapter-v0.1.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/main/artifacts/releases/event-driven-adapter-v0.1.0.zip).

**Não é implementação de rede nem runtime.** Repositório em memória, sem integração Vercel/Supabase, autenticação, presença real ou recuperação após restart. Não prova relógio monotônico compartilhado entre instâncias serverless; esse é um bloqueio importante para a opção stateless. A arquitetura continua sem aprovação.

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

## Marco browser alpha v0.2.0 — 20/11/2026

- [x]  Auth browser, onboarding de personagem e Party integrados ao backend.
- [x]  Heartbeat D-029: envio a cada 15s e expiração após 60s.
- [x]  Convites de Party, join/leave e defaults MVP documentados.
- [x]  D-028: prioridade tática persistida por personagem e congelada no snapshot de cada encontro.
- [x]  HUD permite selecionar membro real e reordenar duas skills de treino; catálogo/slots finais continuam pendentes.
- [x]  Onze migrations aplicadas e testes SQL com rollback.
- [x]  CI Node 22: 63/63 testes, syntax check, TypeScript strict e ZIP integrity.

Release: [talune-web-mvp-alpha-v0.2.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.2.0.zip). SHA-256: `2ccbf4200c46cc71e0d4b56e502563b1c48dd98399b0dbcfd35ff35c46265bc0`.

**Ainda não é o MVP jogável completo.** Pendências prioritárias: XP/nível e escolha de classe, monstros e chefe do primeiro território, recompensas/loot idempotentes, inventário/equipamento mínimo, duas contas reais em navegadores separados, reconexão/recuperação após restart e scheduler operacional econômico. Não implantar nem gerar custo automaticamente.

## Checkpoint alpha v0.6.0 — 20/11/2026

- Relatório pós-combate foi integrado ao HUD, baseado somente nas métricas do motor server-authoritative.
- Corrigida a duplicação de clear de estágio na RPC `advance_encounter` por migration corretiva aplicada no Supabase.
- Vercel Hobby preparada para Preview da branch de desenvolvimento: Node 22.x, região gru1, URL Supabase e publishable key restritas a Preview/branch.
- Ainda falta a chave secreta Supabase server-side; sem ela, endpoints autenticados não inicializam. O Preview continua protegido por SSO. Nenhum deploy ou merge foi executado.
- Workflow atualizado para gerar alpha v0.6.0; checksum só deve ser registrado após artefato lido e validado.

## Incremento alpha v0.7.0 — Guardião da Fenda

- Motor de combate estendido com fase 2, telegraph e ataque mágico em área opcionais, preservando monstros comuns.
- Guardião: fase 1 físico/alvo único; aos 50% HP, fase 2 eleva cadência e telegrapha Ruptura Arcana por 900ms, atingindo todos os integrantes vivos.
- HUD mostra fase e barra de preparação. Testes novos em `tests/boss-mechanics.test.mjs`.
- CI/ZIP v0.7.0 ainda não confirmados; não declarar pronto antes do artefato aparecer e ser verificado.

## Atualização — alpha v0.7.0 validada e preparação do Preview (20/11/2026)

- A release `talune-web-mvp-alpha-v0.7.0.zip` foi gerada e commitada pelo GitHub Actions. CI run [44798345511](https://github.com/mateusc58mc-sketch/Talune/actions/runs/44798345511): Node.js 22, 84/84 testes, sintaxe JavaScript do browser, TypeScript strict e integridade `unzip -t` aprovados.
- ZIP: 232.612 bytes; SHA-256 `f5be5801fb0c89be93e83e552e95e8bad993faffb6451721ba7d3e8b7d3c0702`; Git blob `7f522f7fe17a854df9fcb53e56056345b9230a17`.
- O registro oficial em `docs/RELEASES.md` foi atualizado no GitHub. O incremento mantém o Guardião da Fenda em duas fases, telegraph de 900ms e Ruptura Arcana em área; parâmetros permanecem provisórios de playtest.
- A variável `SUPABASE_SECRET_KEY` foi cadastrada como Sensitive/Encrypted, Preview only, branch `feat/mvp-browser-client`. O valor não é exposto pelo conector e não foi copiado para o chat ou repositório.
- Foi emitido um único commit com a marca `[deploy-preview]` para autorizar a tentativa de Preview. Aguardando confirmação do estado do deployment; nenhuma alteração em produção, merge em `main`, upgrade ou cobrança foi feita.
- Pendências de MVP: loot/inventário/equipamento, testes com duas contas reais, verificação ponta a ponta de reconexão/presença e operação do worker/scheduler de farm comum. O alpha v0.7.0 não deve ser tratado como MVP completo.

## Atualização — Preview alpha v0.7.0 publicado (21/11/2026 UTC)

- O deployment Vercel foi confirmado como READY: [abrir Talune Preview](https://talune-6k05bd1t4-aincrad6.vercel.app). ID `dpl_5Ewxp2PJ7vxPiqFmAJfpe1vrK8d4`; branch `feat/mvp-browser-client`; commit de deploy `fd1ebf0166d7da4670d3aacc7ec80174369d159f`.
- Build executou a regra de autorização `[deploy-preview]`, instalou dependências, completou `vercel build` e publicou os outputs na região de runtime `gru1`. O deployment está protegido por SSO, que permanece habilitado.
- A chave `SUPABASE_SECRET_KEY` está cadastrada como Sensitive/Encrypted, Preview only e vinculada à branch. O valor não é revelado pelo conector. Build READY ainda não prova que Auth/DB funcionam em runtime.
- Documentação operacional atualizada no GitHub: README, ROADMAP, WEB_CLIENT_MARCO_A e AGENT_PLAYBOOK; commit documental posterior `601a9b1b4e17eac7b1dbfc53f84489b6d4d48c7d` não altera o código do deployment.
- Próxima etapa: acessar o Preview via SSO e validar signup/login, criação de personagem/Party e arena; depois testar duas contas reais em navegadores separados. MVP ainda não concluído: loot/inventário/equipamento e worker/scheduler seguem pendentes.
- Sem merge em `main`, deploy de produção, upgrade ou cobrança adicional.

## Incidente de inicialização do Preview — hotfix v0.7.1 (21/11/2026 UTC)

- O usuário reportou `Unexpected token 'T', "The page c"... is not valid JSON` na tela de configuração. A inicialização consultava `/api/v1/config` e tentava interpretar qualquer resposta como JSON.
- Readback do Vercel confirmou as três variáveis `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` e `SUPABASE_SECRET_KEY` cadastradas para Preview, vinculadas ao branch `feat/mvp-browser-client`. O valor da secret não foi lido, exibido nem copiado.
- Diagnóstico: a resposta recebida era texto não JSON; o indício aponta para falha de encaminhamento/roteamento do endpoint, não para ausência das variáveis. Causa raiz ainda deve ser confirmada no smoke test de runtime.
- Hotfix v0.7.1: Function estática única `api/index.ts`, rewrite explícito `/api/v1/:path*` → `/api/index?path=:path*`, validação dos segmentos no adapter e erro amigável no bootstrap do browser para respostas não JSON. Nenhuma secret exposta.
- CI run [44847597235](https://github.com/mateusc58mc-sketch/Talune/actions/runs/44847597235): 85/85 testes, sintaxe browser, TypeScript strict e ZIP integrity aprovados.
- Preview novo READY: [https://talune-24zh1wmkv-aincrad6.vercel.app](https://talune-24zh1wmkv-aincrad6.vercel.app), deployment `dpl_Ayx6TucbMLonGdgjSDWvzyzRwMfp`, commit `9c9b2b3bb3923b9671a73f7ffef14e0aed09e047`. SSO permanece ativo; plano Hobby preservado.
- Próxima etapa: usuário acessa o Preview e confirma se aparece a tela de login. Depois verificar `/api/v1/config` e `/api/v1/health` no browser/runtime, sem expor a secret; então prosseguir com Auth, personagem, Party e arena.
- Não houve merge em `main`, deploy de produção, mudança de plano ou cobrança.

## Release v0.7.1 — metadados finais (21/11/2026 UTC)

- CI final [44847887002](https://github.com/mateusc58mc-sketch/Talune/actions/runs/44847887002): Node.js 22, 85/85 testes, browser syntax, TypeScript strict e ZIP integrity aprovados.
- ZIP: `artifacts/releases/talune-web-mvp-alpha-v0.7.1.zip`, 236.533 bytes; SHA-256 `9c83c8c1606bff508e89f01b2d8ddb65db713d37f602a595e489c99e9d6564be`; Git blob `b596e4e1cd60e5ea2c412ef1c9e20e7b584985b5`.
- Preview READY: [https://talune-24zh1wmkv-aincrad6.vercel.app](https://talune-24zh1wmkv-aincrad6.vercel.app). Deployment `dpl_Ayx6TucbMLonGdgjSDWvzyzRwMfp`; SSO permanece ativo.
- Próxima validação é manual no browser com SSO: confirmar que a tela de login abre. Em seguida verificar configuração/health, depois signup/login e fluxo de personagem/Party/arena. O runtime ainda não foi comprovado.
- Nenhum merge em `main`, deploy de produção, upgrade de plano ou mudança de cobrança.

## Vercel Preview runtime — correção v0.7.2 (21/11/2026)

O runtime 500 foi rastreado pelos logs até imports TypeScript não empacotados. A configuração da Function estática agora inclui `**/*.ts`, cobrindo também o motor de combate em `prototypes/combat-engine`; a arquitetura continua com uma única Function para o Vercel Hobby.

- CI [44851229426](https://github.com/mateusc58mc-sketch/Talune/actions/runs/44851229426): sucesso.
- Preview READY: [https://talune-r4nzjdia2-aincrad6.vercel.app](https://talune-r4nzjdia2-aincrad6.vercel.app).
- `/api/v1/config` e `/api/v1/health`: HTTP 200.
- A resposta de configuração contém URL Supabase e publishable key, nunca a secret.
- Pendente: confirmação visual do login pelo usuário, Auth real, onboarding e teste com duas contas.
- Não houve merge em `main`, produção, mudança de SSO ou upgrade de plano.

Fonte operacional e release: [https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/RELEASES.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/RELEASES.md)