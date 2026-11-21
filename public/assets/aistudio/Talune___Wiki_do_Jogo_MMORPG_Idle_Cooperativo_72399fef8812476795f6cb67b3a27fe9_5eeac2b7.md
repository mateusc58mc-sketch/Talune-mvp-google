# Talune — Wiki do Jogo | MMORPG Idle Cooperativo

## Marca oficial — Talune (16/11/2026)

**Talune** foi aprovado pelo usuário como nome oficial do projeto em 16/11/2026. A documentação de produto e design passa a usar essa marca. A aprovação do nome não equivale a uma liberação jurídica: buscas formais de marca, domínio e disponibilidade em lojas permanecem pendentes. Repositórios, pacotes, domínios e identificadores técnicos serão migrados em etapa técnica separada, com plano e testes.

## Direção de produto vigente

O projeto é um MMORPG idle cooperativo de fantasia, mobile-first, com combate automático tático, Party de até quatro jogadores, bots de preenchimento, progressão compartilhada de conteúdo (estrutura do mundo ainda em avaliação) e desenvolvimento individual de personagens. As quatro grandes referências de design são Ragnarok Online, World of Warcraft, MU Online e Ulala: Idle Adventure; seus princípios serão reinterpretados em sistemas e arte originais.

# Visão geral

Wiki de design do **Talune — MMORPG Idle Cooperativo**. Use este hub para acompanhar o status, o roadmap, as decisões de mundo e navegar pelos sistemas do jogo. A torre é uma hipótese em avaliação, não uma estrutura aprovada; mercado/RMT é uma possibilidade futura e não faz parte do MVP inicial.

> **Princípio de documentação:** cada sistema deve registrar objetivo, fluxo, regras, fórmulas, entradas e saídas, dependências, parâmetros de balanceamento e decisões ainda abertas. Valores marcados como exemplo não são regras finais.
> 

## Loop principal do jogador

1. O personagem combate mobs automaticamente no andar atual.
2. Cada inimigo derrotado concede XP e pode gerar Gold e itens.
3. O jogador evolui atributos, equipa itens e pode refinar ou anunciar itens no mercado.
4. Em andares de chefão, o avanço fica bloqueado até derrotar o boss.
5. A progressão atualiza o maior andar/checkpoint alcançado; ao morrer, o personagem retorna ao checkpoint definido.
6. O ciclo continua com inimigos e recompensas escalando conforme o andar. O progresso offline também pode conceder XP.
7. Opcionalmente, o jogador pode fazer prestígio para reiniciar/descer a torre em troca de bônus permanentes.

## Fluxos do sistema

### Progressão de combate

`Entrar no andar → combater mobs → receber XP / drops / Gold → verificar level-up e melhorias → avançar`

`Chegar ao andar de boss → enfrentar boss → vencer: liberar avanço e atualizar progresso | perder: retornar ao checkpoint conforme regra final`

### Progresso idle

`Jogador fica offline → calcular progresso permitido → conceder XP (e outras recompensas, se definidas) → aplicar ao retornar`

### Ciclo de item

`Drop → avaliar raridade e atributos → equipar, vender ao NPC, refinar ou listar no mercado → venda/refino remove Gold, cobra taxa ou pode remover item da economia`

## Sistemas da wiki

- **Progressão da Torre:** andares, waves, bosses, checkpoints e prestígio.
- **Combate e atributos:** seis atributos primários e fórmulas de dano/mitigação em consolidação.
- **XP e leveling:** fontes de experiência, progresso offline e curva de nível.
- **Drops e itens:** raridades, atributos aleatórios, sockets e refinamento.
- **Mercado e economia:** Gold, Cristais de Talune, escrow, leilão e taxas.
- **Classes e habilidades:** [Classes, Skills e Templo das Artes Mágicas](Classes,%20Skills%20e%20Templo%20das%20Artes%20M%C3%A1gicas%207b9fc40ffc664e658267b579de583a2e.md).
- **Regras e balanceamento:** [Sistemas, Atributos e Progressão](Sistemas,%20Atributos%20e%20Progress%C3%A3o%204889bf388ff14557ae419f9116ed97be.md).
- **Produção visual e técnica:** [Direção de Arte, Tecnologia e Produção](Dire%C3%A7%C3%A3o%20de%20Arte,%20Tecnologia%20e%20Produ%C3%A7%C3%A3o%2033526f74366b4f179aa08a19c48549ea.md).

## Decisões de design em aberto

- Definir o intervalo de andares entre bosses e o comportamento exato ao morrer.
- Definir o que é salvo como checkpoint e quando ele é atualizado.
- Especificar os bônus e custos de prestígio e como se relacionam com RMT/Cash.
- Revisar a fórmula de mitigação: a anotação atual (`HP / Defesa do Jogador`) não deixa claro de quem é o HP nem como a defesa reduz dano.
- Definir a fórmula final de crítico, velocidade de ataque e escalonamento de inimigos.
- Definir limites do progresso offline e quais recompensas ele concede.
- Definir probabilidades/atributos por raridade, regras de refinamento e taxa final do mercado.
- Especificar a distinção e as regras de conversão entre Gold, moeda premium e qualquer moeda ligada a dinheiro real.

## Consolidação do Miro

Esta wiki incorpora o quadro [Project Talune no Miro](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081), organizado em páginas por domínio. O material acrescenta a progressão de classes e o catálogo de 120 skills, regras do Templo, atributos e fórmulas, mapa de sistemas, direção de arte, arquitetura técnica e checklist de produção. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

A direção visual vigente registrada é um Idle RPG 2D de navegador com Paperdoll 2D e progressão automática de Party. A estrutura do mundo (incluindo a hipótese de torre) está em avaliação e não deve ser tratada como aprovada. Next.js (App Router), TypeScript, Tailwind CSS e Supabase são a direção técnica candidata, ainda sujeita a validação de arquitetura, multiplayer, autoridade do servidor e custos. Mercado/RMT é uma possibilidade de longo prazo, fora do MVP inicial e sujeita a análise legal e de plataforma. As notas antigas do Miro sobre 3D/Godot estão supersedidas; decisões mais recentes aprovadas pelo usuário prevalecem sobre material histórico. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Workflow para adicionar ou alterar uma mecânica

1. Descrever o objetivo da mecânica e em qual etapa do loop ela entra.
2. Registrar gatilhos, condições, entradas, saídas e casos de falha.
3. Escrever regras e fórmulas com nomes de variáveis definidos.
4. Identificar dependências com progressão, combate, itens e economia.
5. Listar parâmetros que precisam de balanceamento e marcar exemplos como provisórios.
6. Validar o fluxo normal, limites e casos de abuso/exploit econômico antes de fechar a regra.
7. Persistir a decisão aprovada imediatamente no documento especializado do Notion e em `docs/DESIGN_DECISIONS.md` no GitHub; atualizar Wiki, Master Vision, roadmap e demais resumos afetados. Registrar também os parâmetros que realmente continuarem pendentes, sem reabrir decisões já aprovadas.
8. Ao criar código, protótipo, simulador ou teste, salvar os arquivos-fonte, instruções e resultados no repositório Talune na mesma tarefa; não deixar o único exemplar no histórico do chat ou em ambiente temporário.
9. Antes de encerrar, reler os registros gravados e confirmar que os links/arquivos estão acessíveis. Seguir o [Protocolo de Continuidade do Talune](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/CONTINUITY_PROTOCOL.md).

[XP e Leveling](XP%20e%20Leveling%20f7a4af50531443499265068e888799d8.md)

[Progressão da Torre](Progress%C3%A3o%20da%20Torre%20875e4c0dd7bd466fa6ef430acbb4bfbe.md)

[Combate e Atributos](Combate%20e%20Atributos%209aa4edc99d214b369aaf73e6e470b22c.md)

[Mercado e Economia](Mercado%20e%20Economia%20d9658d408b7e4dceae70bbba9e50c421.md)

[Drops e Itens](Drops%20e%20Itens%2038cf370069ea45f0a77bcbaa2130aa2e.md)

[Direção de Arte, Tecnologia e Produção](Dire%C3%A7%C3%A3o%20de%20Arte,%20Tecnologia%20e%20Produ%C3%A7%C3%A3o%2033526f74366b4f179aa08a19c48549ea.md)

[Sistemas, Atributos e Progressão](Sistemas,%20Atributos%20e%20Progress%C3%A3o%204889bf388ff14557ae419f9116ed97be.md)

[Classes, Skills e Templo das Artes Mágicas](Classes,%20Skills%20e%20Templo%20das%20Artes%20M%C3%A1gicas%207b9fc40ffc664e658267b579de583a2e.md)

[Talune — Master Vision & Game Design Bible](Talune%20%E2%80%94%20Master%20Vision%20&%20Game%20Design%20Bible%20419a081c141881588d92d2b2b1382d21.md)

[Talune — Art Bible & UI/UX](Talune%20%E2%80%94%20Art%20Bible%20&%20UI%20UX%20419a081c141881faa2f6eeb611d866b9.md)

[Talune — RPG Systems, Classes, Skills & Talents](Talune%20%E2%80%94%20RPG%20Systems,%20Classes,%20Skills%20&%20Talents%20419a081c14188153a630d3229caf26c7.md)

[Talune — Combat & Squad Design](Talune%20%E2%80%94%20Combat%20&%20Squad%20Design%20419a081c14188141bf35cabe35f664d3.md)

[Talune — Production Roadmap & AI Agent Playbook](Talune%20%E2%80%94%20Production%20Roadmap%20&%20AI%20Agent%20Playbook%20419a081c1418812db81ce11dff6fe31a.md)

[Talune — Skill Catalogue (120 Legacy Skills)](Talune%20%E2%80%94%20Skill%20Catalogue%20(120%20Legacy%20Skills)%20419a081c141881d1b6d8fe58e5640cd6.md)

[Talune — Talent Tree Design (Future System)](Talune%20%E2%80%94%20Talent%20Tree%20Design%20(Future%20System)%20419a081c141881b3b9ccd6428f559698.md)

## Nova documentação — Talune

- [Master Vision & Game Design Bible](Talune%20%E2%80%94%20Master%20Vision%20&%20Game%20Design%20Bible%20419a081c141881588d92d2b2b1382d21.md)
- [Art Bible & UI/UX](Talune%20%E2%80%94%20Art%20Bible%20&%20UI%20UX%20419a081c141881faa2f6eeb611d866b9.md)
- [RPG Systems, Classes, Skills & Talents](Talune%20%E2%80%94%20RPG%20Systems,%20Classes,%20Skills%20&%20Talents%20419a081c14188153a630d3229caf26c7.md)
- [Combat & Squad Design](Talune%20%E2%80%94%20Combat%20&%20Squad%20Design%20419a081c14188141bf35cabe35f664d3.md)
- [Production Roadmap & AI Agent Playbook](Talune%20%E2%80%94%20Production%20Roadmap%20&%20AI%20Agent%20Playbook%20419a081c1418812db81ce11dff6fe31a.md)
- [Skill Catalogue — 120 Legacy Skills](Talune%20%E2%80%94%20Skill%20Catalogue%20(120%20Legacy%20Skills)%20419a081c141881d1b6d8fe58e5640cd6.md)
- [Talent Tree Design — Future System](Talune%20%E2%80%94%20Talent%20Tree%20Design%20(Future%20System)%20419a081c141881b3b9ccd6428f559698.md)

**Governança:** as páginas novas distinguem direção vigente, dados históricos, propostas e decisões pendentes. Não tratar números antigos como balanceamento aprovado.

[Talune — Character Progression & Party System](Talune%20%E2%80%94%20Character%20Progression%20&%20Party%20System%20419a081c141881ceb5a1ff2567306366.md)

[Talune — Identidade da Marca & Brand Guide](Talune%20%E2%80%94%20Identidade%20da%20Marca%20&%20Brand%20Guide%2041aa081c141881b1a6caf4b698b63eed.md)

[Talune — Status do Projeto & Avaliação Atual](Talune%20%E2%80%94%20Status%20do%20Projeto%20&%20Avalia%C3%A7%C3%A3o%20Atual%2041aa081c141881d98726d96d0e100a31.md)

[Talune — Fases de Desenvolvimento & Roadmap](Talune%20%E2%80%94%20Fases%20de%20Desenvolvimento%20&%20Roadmap%2041aa081c14188148958ed77c1542aca2.md)

[Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

## Regra confirmada — admissão de membro com progresso inferior na Party

- Cada personagem mantém seu progresso individual persistente.
- A Party mantém um progresso compartilhado de expedição/conteúdo; todos jogam no mesmo estágio, sem instâncias paralelas por integrante.
- A entrada de um jogador cujo progresso individual seja inferior ao estágio atual depende da aprovação do líder.
- Se aprovada, a admissão fica pendente até o combate em andamento terminar. O novo integrante não participa retroativamente do encontro nem recebe suas recompensas.
- No início do próximo ciclo, o servidor recalcula o progresso compartilhado da Party pelo menor progresso individual entre os membros reais elegíveis. A Party pode, portanto, retornar ao estágio do integrante recém-admitido.
- Essa regressão altera somente o progresso compartilhado da expedição. Não reduz, apaga nem sobrescreve o progresso individual já conquistado pelos demais personagens; se saírem da Party, preservam seu progresso pessoal.
- O cálculo é server-authoritative e deve ser transacional/idempotente. Bots não participam da regra de menor progresso; acompanham o estágio da expedição.

Esta regra já estava aprovada e documentada em Character Progression & Party System. Esta atualização corrige a síntese resumida da Wiki e da Master Vision para que não volte a ser interpretada como “o novo membro apenas acompanha o estágio atual”.

[Talune — MVP Scope & Acceptance Specification](Talune%20%E2%80%94%20MVP%20Scope%20&%20Acceptance%20Specification%2041da081c141881e993d1d4b83bdfe11b.md)

[Ulala: Idle Adventure — Pesquisa de Referência para Talune](Ulala%20Idle%20Adventure%20%E2%80%94%20Pesquisa%20de%20Refer%C3%AAncia%20para%2041ea081c141881848d6ce9ec9727f9eb.md)

## Referência externa de gameplay — Ulala: Idle Adventure

[Ulala: Idle Adventure — Pesquisa de Referência para Talune](Ulala%20Idle%20Adventure%20%E2%80%94%20Pesquisa%20de%20Refer%C3%AAncia%20para%2041ea081c141881848d6ce9ec9727f9eb.md)

Acervo dedicado de pesquisa sobre loop idle, Hunting/AFK, eficiência de farm, chefes, habilidades, cooperação assíncrona, mascotes, equipamentos, análise pós-combate, fontes consultadas e lacunas que exigem validação visual. Esta referência não substitui decisões aprovadas nem contratos de Talune.

## Cliente web e primeiro vertical slice

A primeira interface navegável do Talune está em desenvolvimento na branch [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client). Consulte a documentação técnica [Cliente Web do Marco A](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WEB_CLIENT_MARCO_A.md) e o pacote alpha versionado no repositório.

## Atualização — Party access e cliente web

A branch [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client) inclui o primeiro cliente browser e fluxo de convites/entrada/saída de Party. Consulte [Cliente Web do Marco A](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WEB_CLIENT_MARCO_A.md) e [Defaults temporários de Party](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/MVP_IMPLEMENTATION_DEFAULTS.md).