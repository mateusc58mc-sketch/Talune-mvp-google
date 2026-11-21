# Direção de Arte, Tecnologia e Produção

Fonte histórica: [quadro Project Talune no Miro](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081). A direção 3D/Godot que aparece no quadro foi substituída pela atualização atual do projeto. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Direção vigente

Idle RPG 2D de navegador, com avatares padronizados em **Paperdoll 2D**, progressão automática de squad, torre de andares e ecossistema de mercado/cosméticos com foco em RMT.

Stack definida: **Next.js (App Router), TypeScript, Tailwind CSS e Supabase**.

A proposta anterior do Miro — arte 3D low-poly, Godot, modelos GLB e pipeline Blender — é histórica e não deve orientar novas entregas. As notas 3D permanecem no board original, mas estão supersedidas para esta wiki. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Direção de arte: Paperdoll 2D

- Criar uma base de avatar padronizada e equipar peças cosméticas/equipamentos como camadas 2D alinhadas por âncoras comuns.
- Definir ordem de camadas e regras de sobreposição/oclusão para cabeça, corpo, mãos, armas e acessórios; a lista final de slots ainda precisa ser aprovada.
- Manter silhueta e leitura claras durante o combate idle, na tela de personagem, inventário e listagem do mercado.
- Diferenciar raridade e cosméticos por paleta, contorno, moldura e efeitos 2D; preservar contraste e legibilidade em tamanhos pequenos.
- Escolher estilo visual (pixel art, ilustração ou outro), resolução-base, proporções, estados de animação e formatos de exportação antes de produzir em escala; esses detalhes não foram definidos nesta atualização.

## Pipeline de produção visual

1. Fechar guia visual 2D e especificação do avatar-base: dimensões, proporções, pivôs/âncoras, zonas de recorte e escala de exibição.
2. Produzir um avatar de referência com camadas separadas e um conjunto pequeno de cosméticos para provar encaixe e combinações.
3. Definir convenções de arquivo, nomes, IDs de itens, raridade, slots e metadados; manter catálogo de assets separado da lógica de jogo.
4. Montar Paperdoll no navegador e validar alinhamento, oclusão, animação idle e leitura em combate, inventário e preview do mercado.
5. Automatizar exportação, revisão e publicação de assets; verificar transparência, dimensões e variantes antes de disponibilizar cosméticos.
6. Expandir o catálogo somente depois de validar o fluxo completo de criação, montagem, preview e uso no squad.

**Critério de pronto:** peças combinam sem desalinhamento ou clipping, o avatar mantém leitura consistente em todas as telas previstas, e o mesmo asset pode ser exibido no squad e no mercado.

## Stack e responsabilidades técnicas

- **Next.js App Router + TypeScript:** estrutura web, telas e fluxos do jogo; tipar catálogo, equipamento, progressão e transações.
- **Tailwind CSS:** componentes e layout responsivo da interface; não substituir o sistema de composição visual dos sprites.
- **Supabase:** backend de dados e serviços do projeto. Definir quais partes usar de Postgres, Auth, Storage e Realtime conforme o fluxo final.
- **Estado de jogo e RMT:** mutações de moeda, inventário, progressão e mercado devem passar por validação confiável no servidor e políticas de acesso; não confiar em valores enviados pelo cliente.
- **Renderização Paperdoll:** decidir entre camadas DOM/CSS ou Canvas por meio de um protótipo, considerando animações, quantidade de avatares simultâneos e desempenho no navegador.

## Prioridades de produção

1. Protótipo jogável de um squad pequeno com avatares Paperdoll e ciclo idle na torre.
2. Especificação de progressão automática, atualização offline e representação das recompensas.
3. Inventário e preview de equipamento/cosméticos usando a mesma composição visual do squad.
4. Fluxos de mercado/RMT e cosméticos, incluindo ownership, preço, liquidação, taxas, disputas e trilha de auditoria.
5. Testes de performance, responsividade, legibilidade e consistência dos assets em navegadores-alvo.

## Decisões ainda abertas

- Estilo 2D, dimensões e proporções do avatar-base; número de bases/variações corporais.
- Slots definitivos, ordem de camadas, âncoras, estados e técnica de animação.
- CSS/DOM ou Canvas para renderização; formatos e pipeline de entrega dos assets.
- Escopo exato de RMT, moedas, pagamentos, conversões e regras de negociação; validar requisitos de plataforma e legislação antes do lançamento.
- Serviços Supabase utilizados em cada fluxo e desenho das permissões/validações.

## Correção de estado técnico — arquitetura ainda não congelada (20/11/2026)

A seção histórica acima que chama Next.js, TypeScript, Tailwind e Supabase de stack definida deve ser lida como direção/candidata, não como arquitetura multiplayer aprovada. A base técnica vigente registra que a stack e o runtime server-authoritative continuam pendentes de validação de latência, custo, presença, reconexão, concorrência e simulação idle.

A avaliação atual está em [ARCHITECTURE_OPTIONS_MARCO_A.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/ARCHITECTURE_OPTIONS_MARCO_A.md). Ela compara Vercel WebSockets + store, Colyseus dedicado e Supabase Functions + Realtime. Nenhuma opção foi aprovada ou provisionada.

WebSockets em Vercel Functions passaram a GA em 20/10/2026, mas as conexões têm duração limitada e as instâncias não compartilham memória; estado, presença e pub/sub precisam de coordenação externa. Supabase Realtime é transporte/broadcast, não motor de combate. Colyseus é alternativa de salas/estado, mas exige hospedagem persistente. O próximo passo é uma prova técnica local e comparação de custo antes de escolher infraestrutura.

**Escopo de produto:** mercado/RMT continua fora do MVP inicial, conforme decisão operacional vigente; esta página conserva notas históricas sobre economia, não autorização para implementação.

## Prova técnica event-driven — resultado inicial (20/11/2026)

Foi criado um POC isolado em `prototypes/event-driven-adapter/`, com pacote versionado `artifacts/releases/event-driven-adapter-v0.1.0.zip`.

**Resultado:** 6/6 testes passaram em Node.js 22.16.0. O POC verifica avanço do motor por relógio injetado no servidor, rejeição de tempo enviado pelo cliente, idempotência, compare-and-swap sob duas requisições concorrentes e pausa/retomada por presença controlada pelo servidor.

**Limites:** usa repositório em memória e não prova Supabase/Postgres, Vercel, transporte, autenticação, presença durável, recuperação após reinício ou relógio monotônico compartilhado entre instâncias serverless. O requisito de relógio monotônico de D-025 ainda impede aprovar a opção stateless sem prova adicional. Nenhuma arquitetura foi escolhida.

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

## Implicação técnica da regra D-027 — farm quando a Party está totalmente offline (20/11/2026)

A regra aprovada não pausa todo o combate quando o último jogador real desconecta. O servidor conclui o lote simultâneo do timestamp corrente e mantém o farm de monstros comuns no estágio atual; somente o desafio do chefe e o avanço de estágio ficam bloqueados até a reconexão de um jogador real. O sistema completo de farm offline (limites, cálculo de recompensas e resgate) continua no Marco C.

A implementação HTTP atual avança o encontro quando recebe requests e ainda não demonstra avanço durável enquanto todos os clientes estão desconectados. Portanto, o próximo estudo técnico deve avaliar um mecanismo server-side durável, econômico e recuperável após reinício, sem presumir Vercel Cron, Supabase Cron, filas ou serviço pago. Não afirmar que D-027 está implementada até existir teste automatizado e prova de recuperação.

A alteração tática de habilidades durante encontro também foi definida por D-028: só entra em vigor no próximo encontro; o encontro atual preserva a configuração congelada no início.

Referências: [avaliação de arquitetura Marco A](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/ARCHITECTURE_OPTIONS_MARCO_A.md) · [contrato de Party e presença](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/SESSION_PARTY_SERVER_CONTRACT.md) · [registro D-028](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/DESIGN_DECISIONS.md).