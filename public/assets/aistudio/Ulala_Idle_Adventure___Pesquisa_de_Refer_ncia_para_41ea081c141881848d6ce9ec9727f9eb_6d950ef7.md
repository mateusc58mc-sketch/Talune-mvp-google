# Ulala: Idle Adventure — Pesquisa de Referência para Talune

**Tipo:** acervo de pesquisa de referência para design de sistemas, UX e gameplay
**Estado:** pesquisa inicial consolidada; requer validação visual com a versão atual do jogo
**Data da pesquisa:** 20/11/2026
**Regra de uso:** Ulala é referência de sistemas e experiência, não fonte para copiar assets, textos, personagens, interface ou implementação proprietária. Talune deve reinterpretar princípios em mecânicas próprias.

## 1. Objetivo e método

Esta página reúne informações públicas sobre o funcionamento de Ulala: Idle Adventure que podem informar o design de Talune. Foram consultadas páginas oficiais de lojas, guias comunitários, discussões de jogadores, wiki comunitária, fóruns e vídeos de gameplay.

As fontes não têm o mesmo grau de confiabilidade. Para evitar transformar relatos antigos em regras atuais, cada conclusão deve ser lida com a classificação abaixo:

- **Alta confiança:** descrição oficial da loja ou mecânica corroborada por múltiplos relatos e vídeos.
- **Média confiança:** documentação comunitária detalhada, mas não confirmada na versão atual.
- **Histórica / validar:** informação de 2019–2021, que pode ter mudado com atualizações.
- **Hipótese de design:** interpretação para Talune, não afirmação sobre Ulala.

A listagem do Google Play consultada informa atualização em 8 de outubro de 2026 e descreve o jogo como RPG idle multiplayer, com equipe, habilidades, equipamentos e mascotes. A App Store também o descreve como multiplayer idle RPG. Isso confirma a continuidade do posicionamento do produto, mas não valida por si só cada detalhe histórico de mecânica.

## 2. Loop principal e estrutura de progressão

### 2.1 Combate automático e equipe

A proposta central é uma aventura cooperativa em que personagens e mascotes combatem automaticamente. O jogador prepara personagem, habilidades, equipamento e mascote; não precisa comandar cada ataque manualmente. A página oficial destaca formação de equipes, bônus por jogar em grupo, evolução automática, variedade de habilidades e equipamentos e mascotes que crescem junto do personagem.

Uma avaliação longa da App Store descreve uma equipe de quatro pessoas que não precisa estar online ao mesmo tempo para que a preparação feita previamente continue produzindo efeito. O relato também destaca dependência dos companheiros para manter o progresso coletivo e comunicação entre eles.

**Implicação para Talune:** preparação tática persistente e cooperação assíncrona são parte central da experiência, não recursos secundários.

### 2.2 Monstros comuns, ondas e chefes

Guias comunitários descrevem uma separação entre:

- ondas de monstros comuns usadas para farm;
- encontros de chefe que bloqueiam a progressão para o próximo estágio;
- tentativas de chefe que podem exigir ajustes na equipe.

O jogador pode permanecer farmando no conteúdo comum enquanto tenta melhorar a equipe para vencer o chefe. A progressão principal depende da vitória no chefe, não apenas de acumular tempo de combate.

Há vídeos de regiões inteiras em que chefes aparecem em estágios recorrentes, com habilidades ou condições alteradas. Em um vídeo de Puke Glacier, o criador documenta vários chefes, tempos de batalha e ajustes específicos de estratégia; alguns encontros incluem lacaios que precisam ser eliminados para permitir a interrupção correta do chefe.

**Implicação para Talune:** a separação entre farm de estágio e desafio de progressão é uma referência forte para nossa estrutura de estágios. O chefe pode ser uma barreira tática enquanto os monstros comuns continuam sendo uma atividade de farm.

### 2.3 Eficiência de farm e rendimento por minuto

Discussões da comunidade explicam que a eficiência do conjunto AFK influencia o rendimento de XP e moedas por minuto. Um relato histórico cita duas ondas por minuto como teto prático observado e cerca de 15–20 segundos para eliminar uma onda. Outro jogador relata que trocar a configuração para habilidades AoE aumentou XP e shells por minuto.

Esses valores são históricos e não devem ser importados para Talune. O princípio mais confiável é que o tempo de eliminação e a configuração de habilidades influenciam o throughput do farm.

**Implicação para Talune:** o servidor pode calcular o rendimento com base em ondas concluídas, duração, composição e configuração, com limites claros e determinísticos. O ritmo deve ser balanceado em testes próprios.

## 3. Dois perfis de habilidades: Hunting e AFK

Esta é uma das descobertas mais relevantes.

Guias comunitários descrevem dois conjuntos de habilidades:

- **Hunting:** usado em chefes, Mystic Realm e Arena; prioriza a mecânica específica do encontro.
- **AFK:** usado contra ondas de monstros comuns; costuma priorizar habilidades AoE e eliminação rápida.

A ordem das habilidades pode ser alterada. Jogadores recomendam escolher habilidades pelo comportamento do chefe, não apenas pela raridade ou nível da habilidade.

Para Hunting, as recomendações variam de acordo com o encontro:

- interrupção e silêncio para impedir conjurações;
- remoção de debuffs;
- cura de alvo único ou em área;
- dano concentrado;
- AoE para eliminar lacaios;
- ajustes de ordem para sincronizar interrupções.

Para AFK, a orientação histórica é privilegiar habilidades em área para eliminar grupos rapidamente.

**O que isso sugere para Talune (proposta, não decisão):**

1. manter uma configuração tática de farm;
2. manter uma configuração tática de chefe;
3. permitir alternância entre configurações antes do encontro ou por regra validada pelo servidor;
4. não fazer o jogador reorganizar manualmente toda a rotação a cada mudança de atividade;
5. preservar a nossa regra de skills por prioridade, cooldown, Haste e ASPD.

Não copiar a implementação de slots ou a progressão de skills de Ulala sem avaliar a compatibilidade com nosso design.

## 4. Mecânicas de chefes e leitura do combate

Relatos, guias e vídeos mostram que os chefes possuem padrões que exigem resposta:

- habilidades com tempo de conjuração e barra visual;
- habilidades interrompíveis;
- efeitos que podem ser silenciados;
- debuffs aplicados ao tanque ou ao grupo;
- lacaios que precisam ser eliminados;
- janelas em que interromper uma habilidade evita dano ou altera a vulnerabilidade do chefe;
- pressão de tempo/frenzy em certos encontros.

Um guia de jogador descreve uma barra azul de conjuração e recomenda interrupção ou silêncio quando o chefe prepara uma habilidade. Também descreve chefes com lacaios, para os quais habilidades AoE são úteis.

Vídeos de progressão mostram que a mesma família de chefe pode reaparecer com habilidades ou condições modificadas. A estratégia precisa ser revista quando o padrão muda.

**Implicação para Talune:** chefe não deve ser apenas uma versão com mais HP do monstro comum. Precisamos de telegraph, cast, habilidades interrompíveis quando apropriado, lacaios, efeitos e fases que possam ser compreendidos e respondidos pela preparação tática.

## 5. Ferramentas de análise e pós-combate

A comunidade documenta uma área de informações de batalha acessada a partir do indicador de XP/min ou da tela de combate. Os relatos descrevem:

1. **Battle Log:** duração da luta e DPS por personagem.
2. **Pet Details:** influência/efetividade do mascote contra o chefe atual.
3. **Skill Sequence / Skill Serial Number:** linha temporal da ordem em que personagens e chefe usam habilidades.

Um fórum descreve ainda um relatório de equipes que venceram o mesmo estágio, incluindo composição e possibilidade de assistir a uma reprodução das ações. A disponibilidade e o formato atual dessas ferramentas precisam ser confirmados no cliente atual.

**Implicação para Talune:** pós-combate deve explicar o resultado, não apenas exibir vitória/derrota. Um relatório útil pode incluir:

- duração;
- dano por personagem;
- cura e mitigação;
- habilidades usadas e interrompidas;
- eventos decisivos;
- causa provável da derrota;
- recompensas concedidas;
- recomendação contextual, sem automatizar decisões táticas do jogador.

A linha temporal de eventos é particularmente valiosa para depurar e para o jogador entender por que a configuração falhou.

## 6. Cooperação e controle de companheiros

Há relatos históricos sobre o recurso chamado **Golden Finger**, que permite que companheiros autorizados alterem habilidades e mascotes de jogadores ausentes. Guias também descrevem acesso à equipe e alteração da configuração tática dos integrantes.

Uma avaliação da App Store observa que a equipe pode continuar operando com preparação feita previamente, sem exigir que todos estejam online simultaneamente.

**Implicação para Talune:** isso valida a relevância de uma camada de permissões táticas compartilhadas. Nossa regra aprovada é mais específica: qualquer membro real online pode alterar configurações táticas dos integrantes, inclusive offline, mas não atributos, equipamentos ou recursos. A implementação deve ser server-authoritative e auditável.

## 7. Composição de equipe e papéis

Guias comunitários frequentemente recomendam uma composição tradicional de tanque, curandeiro e dois causadores de dano. Relatos antigos mencionam também um bônus de composição para uma combinação específica de papéis (tanque, healer, DPS corpo a corpo e DPS à distância).

Isso é uma observação sobre Ulala, não uma recomendação automática para Talune.

**Limite de adaptação:** Talune já aprovou composição livre, sem exigir Tank/Healer/DPS. Podemos aproveitar sinergias entre funções e habilidades, mas não devemos criar uma composição obrigatória que contradiga a decisão aprovada.

## 8. Mascotes, elementos e preparação

Fontes comunitárias descrevem mascotes que:

- lutam junto ao personagem;
- oferecem atributos ou funções auxiliares;
- podem ser capturados com comida preparada e armadilhas;
- têm atributos e afinidades elementais;
- podem ser trocados conforme o chefe;
- podem ajudar em dano, defesa ou suporte dependendo do tipo.

Há relatos de ciclos elementais e de escolha de mascotes para contrapor o elemento predominante do chefe. A documentação comunitária também descreve telas que mostram a efetividade do mascote contra o chefe.

Um vídeo de 2021 apresenta tela de personagem, atributos, mascotes, captura, treinamento, inventário e evolução. Um vídeo de 2023 documenta uma atualização de mascotes, telas de pet skills e Battle Information.

**Implicação para Talune:** mascotes podem se tornar uma camada tática e de progressão própria no futuro. Não é necessário incluí-los no Marco A. Antes de desenhar esse sistema, precisamos entender a versão atual e decidir se mascotes serão companheiros de combate, bônus passivos ou ambos.

## 9. Equipamentos, melhorias e recursos

Guias comunitários descrevem:

- equipamentos obtidos durante o farm;
- aprimoramento de slots de equipamento;
- sistemas de temperamento/rolagem de atributos secundários;
- desmontagem automática de equipamentos inferiores;
- conversão de itens indesejados em recursos;
- em algumas versões/guias, melhoria vinculada ao slot, preservada quando o item equipado é substituído.

O guia de progressão publicado em outubro de 2026 descreve aprimoramentos associados aos slots e transferência do nível de melhoria para o novo item equipado. Como essa fonte é um guia de terceiros, a regra precisa ser confirmada visualmente na versão atual.

**Implicação para Talune:** vale estudar a separação entre item-base e investimento permanente do slot. Isso pode reduzir fricção quando o jogador troca de equipamento, mas muda a economia de progressão e precisa de análise antes de ser adotado.

## 10. Recompensas AFK e foco de recursos

Relatos de jogadores descrevem um seletor de foco de recompensa AFK, acessado a partir do mapa/equipe, que pode priorizar categorias como shells, equipamento, comida, habilidades, gemas e cristais. Uma discussão antiga menciona um bônus de 3x associado ao recurso escolhido e que a seleção seria controlada pelo capitão/equipe.

Esse detalhe é histórico e deve ser validado no jogo atual. Não assumir que todos os recursos, multiplicadores ou regras continuam iguais.

**Implicação para Talune:** pode existir uma escolha de prioridade de expedição/farm, permitindo que a equipe decida entre acelerar moeda, equipamento ou materiais. Isso criaria uma decisão útil sem exigir presença constante. É uma hipótese para avaliação, não uma mecânica aprovada.

## 11. Progressão e sistemas paralelos

As fontes mostram sistemas além do loop principal, como:

- pets e pet skills;
- cooking e captura;
- skill cards e evolução de slots;
- Hero Hill e progressão de temporada;
- Hero Souls;
- Clatter Cards;
- Toys;
- Hero Training Ground;
- Mystic Realm;
- Arena, clãs e eventos.

Esses sistemas mostram como Ulala adiciona camadas de progressão sobre um loop relativamente simples. Não significa que Talune precise reproduzir todos. Devemos selecionar apenas sistemas que acrescentem escolhas significativas, sem sobrecarregar o MVP.

## 12. Lições aplicáveis a Talune

| Área | Princípio observado | Possível adaptação em Talune | Estado |
| --- | --- | --- | --- |
| Combate | Preparação automática antes da luta | Presets táticos persistentes | Avaliar |
| Farm | Ondas comuns e eficiência por minuto | Farm em ciclos/ondas server-side | Avaliar |
| Skills | Hunting e AFK com objetivos distintos | Presets de chefe e farm | Avaliar |
| Chefes | Cast, interrupção, lacaios e padrões | Bosses com mecânicas legíveis | Direção compatível |
| Pós-combate | DPS, pets e timeline | Relatório de batalha e replay/event log | Avaliar |
| Party | Preparação assíncrona | Tática de companheiros offline | Já aprovado em princípio |
| Composição | Sinergias entre papéis | Sinergias sem papéis obrigatórios | Preservar decisão Talune |
| Mascotes | Afinidade e função de suporte | Sistema futuro de companheiros | Futuro |
| Equipamento | Investimento por slot | Avaliar progressão independente do item | Futuro |
| AFK | Foco de recompensa | Prioridade de farm da Party | Avaliar |

## 13. O que não devemos copiar

- Personagens, monstros, nomes, ícones, ilustrações, telas ou animações.
- Fórmulas, números de balanceamento ou probabilidades sem validação.
- A composição obrigatória de equipe, pois Talune já aprovou composição livre.
- A progressão de classes e habilidades de Ulala como substituta dos sistemas já definidos.
- Sistemas paralelos só porque existem no jogo de referência.
- Limites de recompensa ou tempos históricos como se fossem valores atuais.

## 14. Lacunas da pesquisa e material que precisamos capturar

A pesquisa pública permitiu entender os conceitos, mas não substitui a observação do fluxo atual do cliente. As fontes mais detalhadas de habilidades, sequência e eficiência são em grande parte comunitárias e históricas.

Precisamos confirmar:

1. Tela atual de combate normal/farm.
2. Tela de chefe antes de iniciar o desafio.
3. Tela de combate contra chefe, incluindo barras de conjuração e efeitos.
4. Tela de resultado após vitória e após derrota.
5. Relatório de batalha com DPS, timeline e detalhes de mascote.
6. Como alternar entre Hunting e AFK, e como as configurações são salvas.
7. Tela de Party/equipe e permissões para alterar configurações de companheiros.
8. Tela do mapa e seleção de foco de recompensa AFK.
9. Tela de personagem, habilidades, equipamentos e mascotes para entender o fluxo entre menus.

**Material solicitado ao usuário:** capturas de tela dessas telas e, se possível, vídeos curtos (30–90 segundos) mostrando transições entre preparação, combate, resultado e relatório. Não é necessário gravar tudo de uma vez; começar por combate normal, preparação de chefe, batalha de chefe e pós-combate já permitirá fechar a maior parte das dúvidas de UX e fluxo.

## 15. Fontes consultadas

### Fontes oficiais

- [Ulala: Idle Adventure — Google Play](https://play.google.com/store/apps/details?id=com.xdg.and.wll) — descrição oficial, categorias e data de atualização exibida em outubro de 2026.
- [Ulala: Idle Adventure — Apple App Store](https://apps.apple.com/us/app/ulala-idle-adventure/id1473544990) — descrição oficial e avaliações de jogadores.
- [Site oficial](https://ulala.xdg.com/).

### Comunidade e documentação de mecânicas

- [Updated Starter Guide — Reddit](https://www.reddit.com/r/UlalaIdleAdventure/comments/daob8o/updated_starter_guide/) — Hunting/AFK, ordem de skills, interrupções, pets, battle log e timeline.
- [2 crucial tips — Reddit](https://www.reddit.com/r/UlalaIdleAdventure/comments/d93k3y/) — eficiência AFK e XP/shells por minuto.
- [Starter Guide — Reddit](https://www.reddit.com/r/UlalaIdleAdventure/comments/d4ubc6/) — composição, mascotes, tela de detalhes de batalha e sequência.
- [Golden Finger / equipe assíncrona — Something Awful Forums](https://forums.somethingawful.com/showthread.php?threadid=3900076) — relato histórico sobre permissões e organização de equipe.
- [Ulala Wiki — Fandom](https://ulala.fandom.com/wiki/Ulala%3A_Idle_Adventure_Wiki) — wiki comunitária mantida por jogadores.
- [Pets — Ulala Wiki](https://ulala.fandom.com/wiki/Pets) — captura e habilidades de mascotes.
- [Shells — Ulala Wiki](https://ulala.fandom.com/wiki/Shells) — moeda e usos.

### Guias e vídeos

- [Beginner Team and Progression Guide — AAYYY (13/10/2026)](https://www.aayyy.com/ulala-idle-adventure/ulala-beginner-team-progression-guide) — equipe, skills, pets, elementos e equipamento; fonte secundária recente, precisa de validação.
- [Puke Glacier Bosses [F2P] — YouTube, Zeo](https://www.youtube.com/watch?v=Q_nEDqAZRZI) — sequência de chefes, tempos e ajustes táticos.
- [Five Hero Bond Quests — YouTube, Zeo](https://www.youtube.com/watch?v=tVyONk-5gD4) — telas de combate, equipamento, skills, pets e progressão.
- [Pet Update Walkthrough — YouTube, Milky Kitty](https://www.youtube.com/watch?v=GjXnpz4lkM4) — atualização de pets, telas, pet skills e Battle Information.
- [Hero Transformation Overview — YouTube, Zeo](https://www.youtube.com/watch?v=hyK_mUbTp2E) — telas de personagem, equipamento, skills, pets e demonstração de batalha.
- [Chiwawa Gorge Guide — NO-P2W](https://www.no-p2w.de/2019/12/chiwawa-schlucht-guide-deutsch-ulala.html) — exemplos históricos de estratégia de chefes e interrupções.

## 16. Conclusão e status

A pesquisa pública já permite identificar princípios valiosos para o design de Talune: separação de farm e chefe, configurações de habilidades por contexto, eficiência por ondas, preparação tática assíncrona, chefes com padrões e telegraphs, análise pós-combate e sinergia entre integrantes.

**Ainda não é uma especificação de implementação.** As mecânicas propostas precisam ser confrontadas com o jogo atual, com as decisões aprovadas de Talune e com os limites do MVP.

A próxima etapa de pesquisa é uma inspeção visual guiada pelo usuário, priorizando combate, preparação de chefe e pós-combate. Depois disso, atualizaremos os contratos de gameplay e HUD somente onde houver ganho claro, sem reabrir decisões já aprovadas.

## 10. Investigação visual complementar — quatro clipes (20/11/2026)

O usuário forneceu uma análise focalizada produzida no Google AI Studio a partir dos quatro clipes anexados, com timestamps específicos. Ela detalha três eixos:

- **HUD:** party de quatro personagens, retratos, barras de estado contextuais, ondas de inimigos, cabeçalho de chefe, telegraphs/cast, números de dano/cura e separação entre HUD permanente e contextual.
- **Preparação:** painel pré-chefe com habilidades/fraquezas do chefe, seleção de integrantes, edição/reordenação de skills, custos/descrições e contextos separados de Habilidade de caça e Habilidade AFK.
- **Relatório:** tela imediata de vitória com recompensas e rendimento/min, painel analítico com DPS, dano recebido, cura, fontes de dano e timeline por integrante.

**Qualidade da evidência:** análise visual detalhada fornecida pelo usuário, com timestamps e alegação de inspeção dos frames. Converge com resultados anteriores obtidos via vidIQ, mas não foi inspecionada independentemente frame a frame nesta etapa. Aspectos não demonstrados (derrota, adaptação desktop/tablet, permissões completas, detalhes expansíveis e persistência de todos os presets) continuam não confirmados.

**Aplicações candidatas para Talune:** HUD limpo com estado de unidades e chefe; preparação contextual; possível separação de presets Farm/Chefe; resultado imediato enxuto e relatório analítico separado. Timeline, XP/min, benchmark de menor poder e replay ficam como evolução posterior.

**Limites canônicos:** não importar orbes, geração de energia por ataques, fila circular, composição obrigatória Tank/Healer/DPS ou números do Ulala. Talune mantém ASPD para ataques básicos, Haste para cooldowns e execução por prioridade. Presets Farm/Chefe continuam proposta de produto, ainda não decisão aprovada.

Documento técnico espelhado no GitHub: [ULALA_VISUAL_INVESTIGATION_2026-11-20.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/ULALA_VISUAL_INVESTIGATION_2026-11-20.md).