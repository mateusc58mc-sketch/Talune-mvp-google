# Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)

> DIREÇÃO MACRO APROVADA — híbrido C + A: mundo de fantasia conectado por uma estrutura mística central, organizado em continentes e regiões. A estrutura detalhada, a lore e os biomas ainda serão desenvolvidos.
> 

## A questão de design

A ideia inicial combinou a progressão vertical e os andares de Aincrad (*Sword Art Online*) com a progressão por estágios e regiões de Ulala. A combinação é funcional para um idle RPG, mas corre o risco de parecer uma sequência genérica de fases se cada andar não tiver identidade, contexto e consequências.

A pergunta não é apenas “torre ou mapa aberto?”. É: **qual estrutura torna a jornada de Talune reconhecível, interessante e sustentável para um jogo idle cooperativo, sem exigir um mundo caro de produzir ou exploração manual que contradiga o ritmo idle?**

## Princípios recomendados

- O mundo deve reforçar a identidade de Talune, não parecer uma cópia de uma referência.
- A progressão deve ser visualmente legível: o jogador entende onde está, o que conquistou e o que vem depois.
- O jogo pode ter exploração visual e geográfica sem exigir movimentação manual contínua.
- Cada região precisa de identidade: silhueta, paleta, clima, arquitetura, fauna, inimigos, chefe e recompensas.
- O conteúdo deve ser modular e expansível: regiões, áreas, encontros e chefes podem ser adicionados sem reconstruir o mapa inteiro.
- A estrutura deve funcionar para sessões curtas, farm automático, progresso offline e Party assíncrona.
- O MVP precisa provar o pipeline com um único território pequeno, 3 monstros e 1 chefe em qualidade visual final.

## Referências pesquisadas e aprendizados

### Ulala: Idle Adventure

O mundo é organizado em continentes e mapas, com progressão por grande quantidade de estágios dentro de cada mapa. Isso mostra que uma estrutura linear de estágios pode coexistir com regiões temáticas e variedade visual; não é necessário que todo estágio seja um andar de torre. [Fonte: mapa de Ulala](https://ulalaidleadventure.fandom.com/wiki/Maps) · [Exemplo de continente e mapas](https://ulalaidleadventure.fandom.com/wiki/Fire_Continent)

**Lição para Talune:** manter a clareza e eficiência do avanço por estágios, mas agrupá-los em territórios com identidade visual e narrativa.

### JRPG Idle — diário de desenvolvimento

O diário de desenvolvimento descreve mapas de áreas clicáveis como alternativa a um mundo totalmente explorável: campos, cidades e dungeons dão sensação de jornada sem exigir exploração manual extensa. Também descreve regiões com um hub, campos e dungeons conectados. [Exploration Station](https://www.ramblingaboutgames.com/dev-log/devlog-4) · [Construção das regiões](https://www.ramblingaboutgames.com/dev-log/dev-log-7)

**Lição para Talune:** um mapa ilustrado selecionável e cenas de área estáticas/animadas podem comunicar o mundo com custo muito menor que um mundo aberto.

### Design de regiões e conexões

Materiais de design de níveis reforçam a importância de caminhos compreensíveis, escolhas significativas e relação entre locais, terreno e conexões. Um mundo maior só vale a pena quando as rotas e lugares têm função. [Cornell — Game Geography](https://www.cs.cornell.edu/courses/cs3152/2013sp/lectures/24-LevelDesign.pdf) · [Construção de regiões](https://inkanddice.substack.com/p/constructing-a-region)

**Lição para Talune:** projetar primeiro o fluxo entre hub, região, área de farm e dungeon/chefe; depois desenhar o mapa e os detalhes.

## Modelos de estrutura possíveis

### Opção A — Continente dividido em regiões conectadas

Um mundo principal com um hub central e várias regiões geográficas: floresta, litoral, deserto, montanhas, pântano, ruínas arcanas etc. Cada região contém áreas de caça, pontos especiais e uma dungeon/chefe.

- Vantagens: familiar, fácil de entender, dá sensação de jornada e variedade; permite expandir por regiões.
- Desvantagens: pode parecer genérico se não houver um elemento central próprio; exige mapa macro e transições coerentes.
- Adequação ao idle: alta, usando mapa clicável e avanço automático dentro de cada área.

### Opção B — Arquipélago de ilhas/fragmentos

O mundo é composto por ilhas ou territórios separados por mar, céu, névoa ou vazio. Cada ilha é um bioma com identidade própria e pode ter regras, monstros e chefe.

- Vantagens: modularidade excelente; cada atualização pode adicionar uma ilha; grande liberdade visual e narrativa.
- Desvantagens: precisa de uma justificativa forte para as ilhas e para a viagem; risco de parecer uma seleção de fases desconectadas.
- Adequação ao idle: muito alta; cada ilha pode ser uma cadeia de estágios.

### Opção C — Árvore/raízes/cosmos de mundos conectados

Uma estrutura fantástica original em que regiões crescem de uma entidade, árvore colossal, rede de raízes, constelação ou sistema de portais. O jogador viaja entre domínios conectados por um eixo comum.

- Vantagens: forte potencial de identidade; permite biomas muito diferentes e progressão em camadas; pode integrar a ideia de party e conexão.
- Desvantagens: precisa de worldbuilding cuidadoso para não virar apenas “portais para fases”; exige linguagem visual própria.
- Adequação ao idle: alta, com regiões selecionáveis e progressão por rotas.

### Opção D — Torre como um dos grandes elementos do mundo

O mundo possui continentes e regiões, mas uma torre monumental é um lugar central, antigo ou misterioso. A campanha principal pode ocorrer em regiões externas; a torre vira conteúdo especial, endgame, desafio de temporada ou dungeon de progressão.

- Vantagens: preserva a ideia inicial sem obrigar o jogo inteiro a ser uma torre; cria um marco visual e uma atividade especial.
- Desvantagens: passa a exigir dois tipos de conteúdo (mundo e torre), aumentando escopo se ambos forem igualmente profundos.
- Adequação ao idle: alta se a torre for um modo reutilizável e não um segundo mundo completo.

### Opção E — Fronteira viva / mundo em expedições

A Party parte de um refúgio e avança por rotas de expedição em territórios mutáveis. Cada rota combina áreas de caça, eventos, acampamentos e um encontro final.

- Vantagens: conecta diretamente a fantasia de cooperação e expedição; permite eventos e rotas alternativas.
- Desvantagens: pode ser mais complexo de explicar; rotas variáveis exigem cuidado com balanceamento e conteúdo.
- Adequação ao idle: média-alta; requer UI clara para escolhas e resultados automáticos.

## Recomendação inicial — híbrido de regiões + hub + dungeons

**Minha recomendação para prototipar é a Opção A com um elemento distintivo da Opção C ou D.** Não aprovaria ainda um mundo aberto nem uma torre como estrutura total.

Estrutura-base proposta:

**Hub central → Região temática → Área de caça/estágios → Dungeon ou covil → Chefe regional → Desbloqueio de nova rota/região.**

- O hub central serve como lugar de encontro, gestão de Party, NPCs, comércio e preparação.
- Cada região possui identidade própria e pode conter várias áreas conectadas.
- Cada área oferece uma sequência curta de estágios de farm automático.
- Dungeons/covis funcionam como encontros especiais e chefes que destravam a próxima parte da jornada.
- A torre pode existir como marco do mundo ou modo especial, sem ser a geografia inteira.
- O mapa pode ser ilustrado e clicável; o combate ocorre em uma cena/arena própria, reduzindo custo de produção e mantendo legibilidade.

Isso preserva o que funciona em Ulala e a progressão vertical de Aincrad como inspiração distante, mas cria uma geografia própria.

## Como tornar a estrutura memorável

Não basta trocar “andar 1” por “região 1”. O mundo precisa de uma ideia central que explique por que esses lugares estão conectados e por que a Party os atravessa.

Direções temáticas possíveis para explorar:

- Um mundo cujas regiões estão ligadas por correntes, raízes, constelações ou rios de energia.
- Um continente dividido por uma antiga ruptura, com territórios que mudam conforme forças mágicas.
- Um conjunto de domínios suspensos em torno de um núcleo celeste.
- Uma fronteira que se expande à medida que as Parties restauram caminhos e refúgios.
- Uma torre/estrutura ancestral visível de diferentes regiões, como símbolo e mistério, sem ser a única rota de progressão.

Essas são sementes criativas, não lore aprovada.

## Escopo visual do MVP

O MVP deve provar o estilo final com conteúdo pequeno:

- 1 região inicial com identidade visual própria.
- 1 área de caça representativa.
- 3 monstros comuns com arte final, silhuetas distintas e animações essenciais.
- 1 chefe regional com arte final, fases e telegraphs.
- 1 hub simples ou ponto de preparação, se a estrutura escolhida exigir.
- Interface final representativa para batalha, Party, personagem e recompensas.

Não produzir dezenas de monstros provisórios. O pipeline visual deve nascer com padrões de qualidade, camadas, exportação, nomenclatura e integração que permitam adicionar conteúdo sem refazer os assets anteriores.

## Decisões ainda abertas

- [ ]  Escolher o modelo macro: regiões/continente, arquipélago, mundos conectados, torre híbrida ou expedições.
- [ ]  Definir a ideia central que conecta geograficamente e narrativamente as regiões.
- [ ]  Decidir o papel da torre: estrutura principal, dungeon especial, endgame ou removida.
- [ ]  Definir se haverá hub central e quais funções ele terá.
- [ ]  Definir hierarquia: mundo → região → área → estágio → encontro/chefe.
- [ ]  Definir biomas iniciais e ordem de progressão.
- [ ]  Definir como mapa, combate e navegação aparecem na interface.
- [ ]  Aprovar o primeiro território do MVP.

## Perguntas para a próxima decisão

A próxima escolha deve ser feita por preferência de fantasia e identidade, não por implementação antecipada. Podemos comparar as opções em termos de originalidade, custo de produção, clareza, escalabilidade e compatibilidade com idle/Party antes de escolher.

## Estado da decisão

**DIREÇÃO MACRO APROVADA — C + A.** A Opção C (mundos/regiões conectados por uma estrutura fantástica) combina-se com a Opção A (continentes e regiões geográficas conectadas). A torre deixa de ser a estrutura principal obrigatória; seu eventual papel como dungeon, marco ou conteúdo especial permanece em aberto. Os detalhes de worldbuilding, geografia, hub, biomas e hierarquia de progressão ainda não são canon.

## Decisão aprovada — estrutura macro C + A

**Status: APROVADO PELO USUÁRIO**

Talune terá um mundo de fantasia composto por continentes e regiões geográficas conectadas, cuja ligação é explicada por uma estrutura fantástica central. A natureza exata dessa estrutura ainda será escolhida: árvore ancestral, raízes mágicas, rede de energia, constelação, eixo cósmico ou outra solução original.

### Como isso funciona no jogo

- **Mundo:** visão ampla dos continentes e grandes domínios.
- **Região:** território com identidade visual, cultural, narrativa e ecológica própria.
- **Área de caça:** local temático dentro da região.
- **Fases/estágios:** sequência de progressão e farm automático dentro de cada área.
- **Encontro especial/dungeon:** conteúdo de desafio que pode culminar em chefe.
- **Chefe regional:** marco de progressão que pode liberar novas áreas, rotas ou regiões.

A Party continuará avançando por fases para farm e progressão. O sistema de fases é uma camada de gameplay, não a geografia inteira do mundo. Assim, o mapa pode transmitir liberdade e descoberta enquanto o combate permanece estruturado, legível e compatível com idle/offline.

### Ainda não decidido

- Qual será a estrutura mística que conecta o mundo.
- Se haverá um hub central único ou vários hubs regionais.
- Quantos continentes/regiões existirão no lançamento.
- O papel futuro de uma torre monumental.
- A ordem dos biomas e a hierarquia exata de mundo/região/área/fase.
- A apresentação visual do mapa e a navegação entre áreas.

### Próxima etapa de design

Definir a identidade da estrutura que conecta o mundo — o elemento que tornará Talune reconhecível e justificará a ligação entre continentes e regiões.

## Direção criativa em desenvolvimento — combinação de conceitos (Opção E)

**Status: DIREÇÃO ESCOLHIDA; CONCEITO AINDA EM DESENVOLVIMENTO.**

O usuário escolheu combinar os conceitos de árvore ancestral, rede de energia mágica, conexão cósmica e eixo monumental. A intenção é criar uma mitologia própria para Talune, evitando que o mundo seja apenas uma árvore gigante, uma torre convencional ou um conjunto de portais sem contexto.

### Conceito de trabalho: O Coração do Mundo

Nome estritamente provisório, não aprovado como nome oficial da lore.

Hipótese criativa: uma estrutura primordial que existe em diferentes dimensões do mundo. Suas raízes atravessam a terra, seus fluxos mágicos percorrem os continentes e sua parte superior se conecta ao firmamento. Pode ser simultaneamente viva, energética e monumental.

Os quatro elementos conceituais cumprem funções diferentes:

- Árvore ancestral: vida, crescimento, renovação e conexão.
- Rede de energia: circulação de magia e ligação entre regiões distantes.
- Cosmos: mistério, planos extraordinários e possibilidade de domínios com leis próprias.
- Eixo monumental: referência visual grandiosa e possibilidade de preservar uma torre como elemento secundário da mitologia.

### Possíveis funções no mundo e no jogo

- Explicar por que continentes e regiões distantes fazem parte de um mesmo mundo.
- Dar identidade visual às rotas, santuários, ruínas e pontos de interesse.
- Justificar a existência de regiões com biomas e fenômenos mágicos muito diferentes.
- Servir como elemento de mistério e progressão narrativa de longo prazo.
- Oferecer oportunidades futuras para dungeons, eventos e conteúdo especial, sem obrigar a campanha inteira a acontecer dentro da estrutura.

### Limites importantes

Este conceito é uma proposta de desenvolvimento, não lore final. Ainda não estão definidos sua origem, aparência definitiva, nome, funcionamento, relação com os habitantes, ameaça central ou explicação cosmológica. Também não está decidido se a estrutura é consciente, divina, natural, artificial ou uma combinação dessas possibilidades.

### Próxima decisão criativa

Definir a natureza da estrutura: ela é primordial e natural, construída por uma civilização antiga, uma entidade viva/consciente ou um fenômeno cósmico que assumiu forma física. Depois disso, desenvolver a silhueta visual e a relação com os continentes.

## Decisão aprovada — natureza do Coração do Mundo

**Status: APROVADO PELO USUÁRIO**

O Coração do Mundo será uma **entidade primordial viva**. Essa escolha define sua natureza como algo que existe por si mesmo, anterior às civilizações conhecidas, e não como uma máquina, artefato ou construção criada por povos antigos.

### Direção de desenvolvimento

A entidade deve ser a presença viva que sustenta ou conecta a realidade de Talune. A combinação criativa já escolhida continua válida:

- **Árvore e raízes:** expressão de vida, crescimento, memória e conexão profunda com a terra.
- **Rede de energia:** manifestação de seus fluxos vitais/mágicos através dos continentes e regiões.
- **Cosmos:** dimensão misteriosa de sua existência, com possíveis relações com o firmamento e planos extraordinários.
- **Eixo monumental:** manifestação grandiosa e reconhecível, sem obrigar que o mundo inteiro seja uma torre.

A entidade não precisa ser literalmente uma árvore humanoide ou uma criatura com corpo convencional. Sua forma pode ser distribuída pelo mundo: raízes subterrâneas, veios luminosos, núcleos, ramos celestes e manifestações locais.

### Princípios narrativos recomendados — ainda sujeitos a aprovação

- Ser antiga em escala incompreensível, sem necessariamente ser onisciente ou onipotente.
- Comunicar-se raramente e de modo indireto, por sonhos, fenômenos naturais, ecos, criaturas ou santuários.
- Não resolver diretamente os conflitos dos habitantes; sua influência pode ser limitada, lenta ou difícil de interpretar.
- Ter regiões saudáveis, adormecidas, feridas, corrompidas ou isoladas como possibilidades narrativas, sem definir ainda uma ameaça central.
- Manter ambiguidade suficiente para que diferentes culturas interpretem a entidade de formas distintas.

### Ainda em aberto

- Se possui consciência individual, instinto primordial ou uma inteligência distribuída.
- Se consegue perceber os habitantes e responder a eles.
- Se sua presença é conhecida por todos ou apenas por culturas/ordens específicas.
- Se está saudável, adormecida, ferida ou em transformação.
- Como sua energia se manifesta visualmente em cada região.
- Qual é sua relação com magia, vida, morte, monstros e fenômenos cósmicos.
- Nome definitivo: “Coração do Mundo” permanece um nome de trabalho, não canon.

### Próxima etapa

Definir como essa entidade manifesta sua consciência e se relaciona com o mundo. Em seguida, desenvolver sua silhueta visual e como raízes/fluxos conectam os continentes.

## Decisão aprovada — consciência distribuída do Coração do Mundo

**Status: APROVADO PELO USUÁRIO**

O Coração do Mundo possui uma **consciência distribuída**: é uma única entidade primordial, mas sua percepção e suas manifestações estão espalhadas pelo mundo. Diferentes regiões podem expressar aspectos ou respostas distintas dessa consciência, sem serem entidades independentes.

### Interpretação de design

- **Unidade essencial:** existe uma única entidade, uma identidade primordial contínua.
- **Percepção distribuída:** ela sente o mundo por meio de raízes, veios, núcleos, fluxos mágicos e manifestações locais.
- **Expressões regionais:** cada território pode demonstrar uma faceta diferente de sua presença, influenciada pelo ambiente e pelas condições locais.
- **Comunicação indireta:** suas respostas podem surgir como mudanças naturais, sonhos, ecos, padrões mágicos, comportamento de criaturas ou fenômenos ambientais. A forma e a frequência ainda não estão definidas.
- **Conhecimento não necessariamente simultâneo:** não assumir onisciência. A entidade pode perceber acontecimentos de modos diferentes, com alcance, intensidade e interpretação ainda a definir.

### Exemplos criativos para explorar — não são lore aprovada

- Uma floresta pode reagir à presença da entidade por crescimento incomum, raízes que se movem ou criaturas protetoras.
- Uma região vulcânica pode expressar tensão por calor, tremores e fluxos de energia instáveis.
- Uma região congelada pode manifestar recolhimento, silêncio ou atividade quase imperceptível.
- Um santuário pode captar sinais mais claros, mas não necessariamente traduzir a vontade da entidade com precisão.

Esses exemplos são possibilidades de linguagem narrativa e visual, não características fixas dos biomas.

### Limites para preservar o mistério

- Não transformar cada manifestação regional em um deus ou espírito separado.
- Não fazer a entidade explicar diretamente toda a história do mundo.
- Não presumir que ela seja onisciente, onipotente ou capaz de controlar livremente todos os seres.
- Manter aberta a possibilidade de que culturas diferentes interpretem seus sinais de maneiras contraditórias.

### Ainda em aberto

- Se as manifestações regionais têm personalidades aparentes ou apenas comportamentos distintos.
- Se a entidade consegue direcionar atenção para um local específico.
- Se existe um núcleo central de consciência ou se a consciência emerge da rede inteira.
- Como ela reconhece indivíduos, Parties ou acontecimentos.
- Como se comunica e se os habitantes conseguem interpretar seus sinais.
- Se está saudável, adormecida, ferida ou passando por alguma transformação.
- Como a rede viva se apresenta visualmente no mapa e nas áreas de jogo.

### Próxima etapa de desenvolvimento

Definir como a entidade se manifesta fisicamente no mundo: raízes subterrâneas, veios visíveis, árvores colossais, núcleos regionais, estruturas celestes ou uma combinação. A linguagem visual deve deixar claro que tudo pertence ao mesmo organismo.

## Decisão aprovada — manifestação visual como organismo cósmico integrado

**Status: DIREÇÃO VISUAL APROVADA PELO USUÁRIO; desenho final ainda em desenvolvimento.**

O Coração do Mundo terá uma manifestação visual integrada: raízes subterrâneas, fluxos mágicos, núcleos regionais e ramificações celestes são partes de um único organismo primordial vivo e consciente de forma distribuída.

### Princípio visual central

O jogador deve perceber que diferentes fenômenos e estruturas pertencem ao mesmo ser, mesmo quando só consegue ver uma pequena parte dele. A entidade não será representada apenas por uma árvore gigante, por uma rede abstrata de energia ou por cristais isolados: esses elementos serão expressões complementares de um organismo contínuo.

### Quatro camadas visuais

1. **Raízes profundas:** estruturas orgânicas que atravessam o solo, cavernas e fundações naturais. São a expressão de conexão, sustentação e memória.
2. **Veios vitais:** correntes luminosas que percorrem a terra, rios, rochas, plantas e estruturas naturais. Comunicam circulação de energia e ligação entre regiões.
3. **Núcleos regionais:** concentrações ou manifestações locais da entidade, com formas influenciadas pelo bioma. São pontos de maior presença, não órgãos independentes nem entidades separadas.
4. **Ramificações celestes:** extensões que se projetam para o céu, atmosfera ou firmamento cósmico, sugerindo que a entidade ultrapassa a escala física de um continente.

### Regras de coerência visual propostas

- Manter uma assinatura visual recorrente em todas as manifestações (padrão de ramificação, ritmo de pulsação, textura, símbolos naturais ou comportamento da luz).
- Adaptar forma, cor secundária e intensidade ao bioma sem perder a identidade comum.
- Evitar que todo lugar tenha uma árvore gigante ou um cristal central; a presença pode ser sutil, subterrânea, ambiental ou monumental.
- Mostrar continuidade entre as camadas: raízes alimentam veios, veios convergem em núcleos, e fluxos podem ascender em ramificações celestes.
- O aspecto cósmico deve ampliar a escala e o mistério, não transformar a entidade em tecnologia ou em uma máquina.

### Aplicação ao jogo

- **Mapa-múndi:** linhas ou sinais discretos podem indicar conexões vivas entre continentes, sem revelar toda a anatomia da entidade.
- **Regiões:** cada bioma revela uma expressão própria da mesma assinatura orgânica.
- **Áreas de caça:** a presença pode aparecer em raízes, pedras, flora, partículas, ruínas tomadas pela vida ou fenômenos ambientais.
- **Santuários e encontros especiais:** núcleos regionais podem oferecer maior intensidade de manifestação e pistas narrativas.
- **Eventos e chefes:** alterações nos fluxos vitais podem antecipar desequilíbrios e acontecimentos, sem explicar automaticamente suas causas.

### Limites e questões ainda abertas

- Silhueta e anatomia global exatas.
- Se existe um tronco/eixo físico visível ou se a estrutura é inteiramente distribuída.
- Forma, material e aparência dos núcleos regionais.
- Paleta principal e comportamento da luz.
- Escala das ramificações celestes e sua relação com estrelas/planos.
- Quanto dessa estrutura é visível aos habitantes e aos jogadores no início.
- Como as manifestações mudam quando a entidade está saudável, ferida, adormecida ou ameaçada.

### Próxima etapa de design

Definir a anatomia macro: o Coração possui um grande eixo ou tronco central reconhecível, ou é uma rede orgânica distribuída sem centro físico aparente? Essa decisão orientará o mapa-múndi, a silhueta icônica e a forma dos núcleos regionais.

## Decisão aprovada — eixo oculto e manifestações distribuídas

**Status: APROVADO PELO USUÁRIO**

A anatomia global do Coração do Mundo seguirá a opção D: existe um eixo central, mas ele permanece oculto ou inacessível. As civilizações e os habitantes de Talune conhecem principalmente suas manifestações regionais.

### Interpretação de mundo

- **Eixo central oculto:** existe uma estrutura ou eixo primordial que organiza a continuidade do organismo, mas sua localização, forma completa e acessibilidade não são conhecidas.
- **Manifestações distribuídas:** raízes, veios vitais, núcleos regionais e ramificações celestes são as expressões perceptíveis dessa entidade.
- **Unidade sem exposição total:** os habitantes podem encontrar sinais em regiões distantes e perceber padrões comuns, sem conseguir observar o organismo inteiro.
- **Mistério de longo prazo:** o eixo oculto pode sustentar descobertas, expedições, mitos e conteúdo futuro, mas não deve ser apresentado automaticamente como destino obrigatório da campanha inicial.

### Diretrizes narrativas e visuais propostas

- O eixo não deve ser revelado cedo nem funcionar como um simples ponto de teletransporte.
- As manifestações regionais precisam ser suficientes para que o jogador entenda a presença e a importância do Coração sem conhecer sua anatomia completa.
- Culturas diferentes podem ter mapas, lendas e hipóteses contraditórias sobre o eixo.
- A conexão entre regiões deve ser percebida por padrões orgânicos e mágicos recorrentes, não por explicações excessivas.
- O mistério deve permitir respostas futuras sem obrigar que exista uma única civilização que conheça toda a verdade.

### Consequências para a estrutura do jogo

- O mapa-múndi pode mostrar conexões e sinais entre regiões, mas não precisa desenhar o eixo oculto.
- Núcleos regionais podem ser objetivos de exploração, investigação ou proteção.
- Dungeons e chefes podem estar associados a manifestações locais, sem exigir que o jogador visite o eixo central.
- Uma expansão futura pode revelar pistas sobre a localização ou natureza do eixo, se isso servir à narrativa.

### Ainda em aberto

- Se o eixo é um lugar físico, uma dimensão, um órgão ou um princípio estrutural do organismo.
- Se possui uma localização única ou existe fora da geografia comum.
- Se alguém já o encontrou ou se todas as histórias sobre ele são especulação.
- Se é possível alcançá-lo, e sob quais condições.
- Se o eixo está intacto, adormecido, ferido ou em transformação.
- Como os núcleos regionais se conectam a ele.
- Se o eixo será conteúdo jogável futuro ou permanecerá um mistério de lore.

### Próxima etapa de design

Definir a relação entre o eixo oculto e os núcleos regionais: são órgãos que recebem e distribuem sua energia, pontos de contato que permitem à entidade perceber o mundo, ou ambos?

## Decisão aprovada — funções dos núcleos regionais

**Status: APROVADO PELO USUÁRIO**

Cada núcleo regional exerce as três funções integradas: circulação vital, percepção regional e manifestação física. Não são três tipos separados de núcleo, mas funções complementares de cada manifestação regional do mesmo organismo primordial.

### 1. Circulação vital

- Recebe, transforma e distribui energia vital através dos veios que conectam regiões.
- A condição de um núcleo pode influenciar a vitalidade de seu território e, dependendo da conexão, afetar regiões relacionadas.
- Não está definido que toda alteração local provoque automaticamente um efeito global.

### 2. Percepção regional

- Atua como ponto sensorial através do qual o Coração percebe mudanças ambientais, perturbações mágicas e acontecimentos relevantes.
- A percepção é distribuída, não equivale a onisciência.
- O alcance, a clareza, a memória e a capacidade de interpretar sinais permanecem em aberto.

### 3. Manifestação física

- Permite que a presença do Coração se expresse de forma mais intensa e tangível.
- Possíveis expressões incluem raízes expostas, flora extraordinária, fenômenos naturais, criaturas especiais e alterações mágicas ambientais.
- A aparência concreta deve variar conforme o bioma, mantendo uma assinatura orgânica comum.

### Princípio de design

Os núcleos não são cristais decorativos, máquinas, entidades independentes ou simples fontes de poder. São órgãos regionais de um único ser primordial. Suas três funções — circulação, percepção e manifestação — coexistem e se influenciam.

### Implicações possíveis para o jogo (ainda não canonizadas)

- Núcleos podem servir como marcos de exploração, investigação, eventos ou dungeons.
- Um núcleo debilitado pode gerar efeitos locais e perturbar conexões vitais.
- A Party pode encontrar manifestações e consequências sem precisar conhecer ou acessar o eixo central.
- A recuperação, corrupção, destruição, ativação ou controle de núcleos ainda não foi decidido.

### Questões em aberto

- Os núcleos são todos equivalentes ou possuem especializações regionais?
- Como o Coração reage quando um núcleo é ferido, isolado ou corrompido?
- Os núcleos são visíveis e conhecidos pelos habitantes ou podem permanecer ocultos?
- Os habitantes conseguem interagir com eles? Com quais limites e riscos?
- Quantos núcleos existem e como se relacionam com continentes e regiões?
- O que diferencia um núcleo regional de uma manifestação menor do Coração?

### Próxima etapa

Definir se os núcleos são equivalentes ou se cada um desenvolve características próprias conforme o continente, bioma e função ecológica/mágica da região.

## Decisão aprovada — identidade regional própria dos núcleos

**Status: APROVADO PELO USUÁRIO**

Os núcleos regionais compartilham a mesma natureza e as mesmas três funções integradas (circulação vital, percepção regional e manifestação física), mas desenvolvem características visuais e padrões de manifestação próprios conforme o continente, bioma e condições locais.

### Princípio central

A região altera a expressão do núcleo, não sua identidade biológica. Todos são partes do mesmo Coração do Mundo; nenhum se torna uma entidade independente ou um tipo de ser separado.

### Assinatura comum obrigatória

Cada núcleo deve preservar sinais reconhecíveis de que pertence ao mesmo organismo:

- Estrutura orgânica, não mecânica ou artificial.
- Conexão com raízes e/ou veios vitais.
- Alguma expressão perceptível de circulação ou pulso energético.
- Capacidade de percepção regional, sem implicar onisciência.
- Capacidade de manifestação física no território.

### Adaptação regional — direções conceituais, não designs finais

- Florestas: raízes expostas, madeira ancestral, flora luminosa e crescimento abundante.
- Regiões vulcânicas: veios incandescentes, minerais orgânicos e pulsos de calor.
- Regiões glaciais: estruturas preservadas no gelo, luz difusa e crescimento cristalino orgânico.
- Desertos: raízes profundas, formações minerais, oásis e sinais de energia sob a areia.

Esses exemplos são possibilidades visuais, não regras fixas. Evitar correspondência rígida entre bioma, cor e elemento. Uma região pode apresentar variações, estados ambientais e manifestações incomuns.

### Diretrizes de consistência

- Repetir motivos orgânicos, padrões de ramificação, texturas e sinais de pulso para manter unidade visual.
- Permitir que materiais, silhueta local, intensidade e paleta secundária variem conforme o território.
- Não transformar todos os núcleos em árvores gigantes ou cristais idênticos.
- Preservar a leitura de um único organismo primordial, mesmo quando a manifestação local for muito diferente.
- Diferenciar a assinatura do Coração de fenômenos mágicos comuns do cenário.

### Implicações para o jogo

- Cada continente pode ter uma expressão visual memorável do Coração.
- Núcleos podem servir como marcos de exploração e identidade territorial.
- O ambiente, criaturas e fenômenos podem refletir o estado local do núcleo.
- A arte pode reutilizar uma linguagem visual compartilhada, com variações regionais, favorecendo consistência e produção escalável.

### Ainda em aberto

- Quantidade e distribuição de núcleos.
- Se todos têm tamanho e importância equivalentes.
- Se existem núcleos principais e manifestações menores.
- Como um núcleo muda quando está saudável, adormecido, ferido ou corrompido.
- Se os habitantes conhecem, veneram, protegem ou exploram esses núcleos.
- Materiais, paletas, silhuetas e anatomia visual finais.

### Próxima etapa de design

Definir como os núcleos se apresentam no mundo: ficam expostos e reconhecíveis, permanecem escondidos sob o ambiente, ou variam conforme a região?

## Decisão aprovada — visibilidade variável dos núcleos regionais

**Status: APROVADO PELO USUÁRIO**

A visibilidade dos núcleos varia conforme a região. Não existe um único padrão obrigatório para todo o mundo. Cada núcleo pode ser monumental e exposto, parcialmente integrado ao ambiente ou oculto, de acordo com geografia, história e condições locais.

### Três formas de presença

1. **Presença monumental:** núcleo exposto, imponente e reconhecível; pode estar associado a cidades antigas, santuários, peregrinações ou marcos geográficos.
2. **Presença integrada ao ambiente:** núcleo parcialmente confundido com a natureza local; pode lembrar uma formação rochosa, árvore ancestral, lago mágico ou estrutura natural extraordinária.
3. **Presença oculta:** núcleo escondido em cavernas, profundezas, ruínas, montanhas ou locais de difícil acesso; sua descoberta pode exigir exploração e investigação de fenômenos regionais.

Essas formas são possibilidades para diferentes regiões, não categorias biológicas fixas. Um núcleo pode mudar de condição ao longo da história.

### Distinção narrativa: visibilidade não é compreensão

- Um núcleo pode ser visível e venerado sem que a civilização compreenda que ele é parte de um organismo primordial.
- Uma comunidade pode conhecer apenas lendas sobre um núcleo oculto.
- Fenômenos do Coração podem ser interpretados como ação de deuses, espíritos ou forças naturais.
- Culturas distintas podem atribuir explicações diferentes a manifestações que, na verdade, pertencem ao mesmo ser.

O jogador poderá gradualmente reconhecer conexões entre fenômenos e núcleos que as próprias culturas locais não relacionam.

### Diretrizes para o mundo e o jogo

- Variar a descoberta e a relação cultural com cada núcleo.
- Não tornar todos os núcleos destinos obrigatórios ou monumentos centrais.
- Permitir que a Party encontre sinais indiretos antes de descobrir um núcleo.
- Usar núcleos monumentais como marcos, os integrados como descobertas ambientais e os ocultos como objetivos de exploração/investigação.
- Preservar a assinatura orgânica comum do Coração, mesmo quando o núcleo estiver parcialmente escondido ou confundido com o ambiente.

### Questões em aberto

- Se os núcleos podem mudar entre estados de visibilidade ao longo do tempo.
- Como civilizações, religiões, estudiosos e exploradores interpretam os núcleos.
- Se existe conhecimento histórico sobre a origem comum de diferentes núcleos.
- Se todos os núcleos podem ser descobertos e visitados pelo jogador.
- Quais são os riscos e limites da interação direta com eles.

### Próxima etapa

Definir como as civilizações de Talune conhecem, interpretam e se relacionam com os núcleos: conhecimento comum, conhecimento restrito ou interpretações culturais fragmentadas.

## Decisão aprovada — conhecimento perdido sobre o Coração do Mundo

**Status: APROVADO PELO USUÁRIO**

O conhecimento sobre o Coração do Mundo existiu em civilizações antigas, mas grande parte foi perdida. As sociedades atuais encontram vestígios, ruínas e registros incompletos, sem necessariamente compreender a verdadeira natureza da entidade ou a conexão entre os núcleos regionais.

### Princípio narrativo

O Coração não foi sempre desconhecido. Houve épocas em que povos de Talune possuíam conhecimentos mais profundos sobre suas manifestações, seus núcleos e talvez suas conexões. A continuidade desse saber foi quebrada; o que resta está disperso, incompleto e sujeito a interpretações.

### Como o conhecimento sobrevive

- Ruínas e estruturas antigas que demonstram familiaridade com manifestações do Coração.
- Inscrições, mapas, símbolos e registros fragmentários.
- Tradições orais e mitos que preservam partes de uma verdade esquecida.
- Artefatos e objetos cujo propósito original já não é compreendido.
- Relatos contraditórios entre culturas e estudiosos.

### Diversidade de conhecimento entre as civilizações atuais

- Algumas culturas podem preservar tradições parcialmente corretas.
- Outras podem venerar um núcleo como santuário ou força sagrada, sem saber que ele é parte de um organismo maior.
- Certas comunidades podem interpretar manifestações como fenômenos naturais, espíritos ou ação divina.
- Outras podem desconhecer completamente a existência dos núcleos.
- Nenhuma cultura atual deve ser presumida como detentora de toda a verdade.

### Distinção importante: visibilidade não é compreensão

Um núcleo monumental pode ser conhecido por todos os habitantes de uma região, mas sua natureza verdadeira permanecer desconhecida. Um núcleo oculto pode sobreviver apenas em lendas ou registros antigos. A aparência e a notoriedade local não garantem conhecimento histórico ou científico.

### Aplicação à narrativa e ao jogo

- A Party pode descobrir conexões entre ruínas, símbolos e fenômenos de continentes diferentes.
- Exploração, dungeons e encontros podem revelar fragmentos de conhecimento, sem explicar toda a lore de uma vez.
- Registros antigos podem discordar entre si; nem toda fonte encontrada precisa ser confiável ou completa.
- O jogador pode reconhecer padrões que as próprias civilizações atuais já não conseguem relacionar.
- O mistério deve ser revelado gradualmente, preservando espaço para descobertas e interpretações futuras.

### Limites para não antecipar decisões

Ainda não foi definido por que o conhecimento se perdeu, quando ocorreu a ruptura, se houve uma catástrofe ou ação deliberada, quem preservou os registros, nem se existe uma civilização ou ordem que conheça mais do que as demais. Não assumir uma causa única antes de desenvolver essa parte da história.

### Próxima etapa

Definir como e por que o conhecimento sobre o Coração do Mundo foi perdido: catástrofe, passagem de eras, ação intencional, transformação das civilizações ou uma combinação ainda a explorar.

## Decisão aprovada — ocultação intencional do conhecimento sobre o Coração

**Status: DIREÇÃO APROVADA PELO USUÁRIO; responsáveis, motivos e método ainda não definidos.**

A perda do conhecimento sobre o Coração do Mundo não ocorreu apenas por esquecimento ou passagem de eras. Em algum momento da história, uma ou mais forças tomaram medidas deliberadas para ocultar, restringir ou apagar parte desse conhecimento.

### Princípio narrativo

O mistério passa a envolver uma história deliberadamente obscurecida. A investigação não busca apenas recuperar informações esquecidas, mas descobrir quem interferiu na transmissão do conhecimento, como isso foi feito e por quê.

### Formas possíveis de ocultação — ainda não canonizadas

- Destruição ou remoção de arquivos, bibliotecas e inscrições.
- Ocultação de mapas, artefatos e locais de estudo.
- Alteração de registros históricos e substituição de interpretações.
- Fragmentação do conhecimento entre povos, ordens ou regiões, impedindo que as partes fossem reunidas.
- Proibição de estudar determinados locais ou símbolos.
- Preservação seletiva de tradições, mantendo práticas sem transmitir sua origem ou significado.

### Limites e cautelas

- Não presumir que os responsáveis sejam necessariamente vilões.
- Não definir ainda se houve uma única organização, várias civilizações, uma autoridade religiosa, um grupo de estudiosos ou outra força.
- Não definir ainda se a motivação foi proteção, medo, controle, conflito ideológico ou interesse próprio.
- Não presumir que toda informação foi destruída; vestígios podem ter sobrevivido intencionalmente ou por acaso.
- A ocultação pode ter variado entre continentes e épocas.

### Consequências para a narrativa e o jogo

- Ruínas e arquivos podem apresentar sinais de remoção, censura, adulteração ou destruição seletiva.
- Fontes diferentes podem contradizer-se porque algumas foram alteradas deliberadamente.
- Certas tradições podem preservar pistas sem conhecer seu significado.
- A Party pode descobrir que a ausência de informação é, em si, uma pista histórica.
- A revelação dos responsáveis e de seus motivos deve acontecer gradualmente, sem exigir que a campanha inicial resolva todo o mistério.

### Questões em aberto

- Quem ordenou ou executou a ocultação?
- Foi uma organização, uma civilização, várias facções ou uma autoridade?
- A ocultação ocorreu em um único período ou em várias ondas?
- Qual era a motivação: proteção, medo, controle, disputa ou outra razão?
- O que exatamente foi escondido: existência do Coração, função dos núcleos, eixo oculto ou conhecimentos mais específicos?
- Houve pessoas que resistiram e preservaram fragmentos?
- Os responsáveis ainda existem ou desapareceram?

### Próxima etapa

Definir a escala e a autoria da ocultação: uma organização dedicada, uma civilização antiga, várias forças em conflito ou uma origem ainda mais ambígua.

## Decisão aprovada — autoria da ocultação: uma ordem ancestral

**Status: DIREÇÃO APROVADA PELO USUÁRIO; identidade, nome, motivação e destino ainda em aberto.**

A ocultação do conhecimento sobre o Coração do Mundo foi conduzida por uma ordem ancestral: uma organização antiga que conhecia aspectos importantes da entidade e, em determinado momento, assumiu a responsabilidade de restringir ou esconder esse saber.

### Conceito de trabalho

A expressão “Ordem Ancestral” é apenas um rótulo provisório de design, não o nome oficial da organização.

A ordem:

- Surgiu quando o conhecimento sobre o Coração ainda era acessível a pelo menos alguns grupos.
- Estudava ou compreendia aspectos das raízes, veios vitais e núcleos regionais.
- Participou deliberadamente da ocultação de registros e informações.
- Pode ter buscado impedir que outras forças acessassem, manipulassem ou explorassem o Coração; essa motivação é uma hipótese a investigar, não um fato aprovado.
- Não deve ser caracterizada automaticamente como maligna.

### Destino possível da ordem — ainda não decidido

- Desapareceu como organização, deixando ruínas, arquivos e vestígios.
- Fragmentou-se em grupos com interpretações divergentes de sua missão.
- Uma parte sobreviveu em segredo, talvez sem compreender plenamente a missão original.

A possibilidade de sobrevivência deve permanecer aberta, sem confirmar que exista uma organização ativa no presente.

### Diretrizes narrativas

- Não revelar imediatamente a ordem como antagonista.
- Permitir que suas ações tenham consequências ambíguas: proteção, censura, controle ou uma combinação.
- Usar marcas, métodos de arquivo, arquitetura, símbolos e protocolos recorrentes como pistas que conectam ruínas distantes.
- Diferenciar fatos históricos comprovados, relatos da própria ordem e interpretações posteriores.
- Não definir ainda nome, hierarquia, vestimentas, símbolo, número de membros, fundadores ou período de atuação.

### Questões em aberto

- Qual era a missão original da ordem antes da ocultação?
- O que a levou a tomar essa decisão?
- A ordem era uma organização mundial ou atuava em regiões específicas?
- Como recrutava e organizava seus integrantes?
- O que aconteceu com ela depois da ocultação?
- Existem descendentes, sucessores ou grupos que herdaram fragmentos de sua missão?
- Como distinguir suas marcas de falsificações e interpretações posteriores?

### Próxima etapa

Definir a estrutura e o alcance da ordem: organização centralizada com presença em vários continentes, rede descentralizada de células regionais ou uma instituição ligada a uma civilização específica.

## Decisão aprovada — estrutura híbrida da Ordem Ancestral

**Status: ESTRUTURA HÍBRIDA APROVADA PELO USUÁRIO.**

A Ordem Ancestral possuía uma liderança superior oculta e células regionais com autonomia. Sua estrutura era parcialmente secreta inclusive para seus próprios integrantes.

### Modelo funcional desenvolvido

Três camadas de trabalho, com nomes provisórios:

1. **Círculo Oculto** — liderança superior; orientava a missão geral e detinha o conhecimento mais abrangente disponível sobre o Coração.
2. **Custódios Regionais** — coordenavam atividades em territórios, protegiam arquivos e transmitiam instruções.
3. **Células de Guardiões** — grupos locais que protegiam ruínas, registros, artefatos, santuários e conhecimentos específicos.

Os títulos são rótulos provisórios, não nomenclatura oficial aprovada.

### Princípio de conhecimento fragmentado

A pertença à ordem não implicava conhecer toda a verdade:

- Uma célula local poderia proteger um santuário sem saber que ele estava ligado a um núcleo regional.
- Um Custódio poderia conhecer vários núcleos e suas funções, mas desconhecer o eixo central oculto.
- A extensão do conhecimento do Círculo Oculto ainda não está definida; não assumir que possuía conhecimento total ou infalível.

### Consequências narrativas possíveis

Vestígios em diferentes regiões podem apresentar símbolos recorrentes, arquivos incompletos, artefatos sem função conhecida e relatos contraditórios. Esses vestígios podem permitir que jogadores conectem histórias regionais sem revelar toda a verdade imediatamente.

### Questões em aberto

- Como o Círculo Oculto era formado e como escolhia seus integrantes?
- Os Custódios e Guardiões sabiam que existiam outras células?
- A ordem recrutava livremente ou por linhagem/tradição?
- Havia comunicação entre células ou cada uma operava isoladamente?
- O que aconteceu com cada camada quando a ordem começou a desaparecer ou se fragmentar?
- A ordem possuía um código moral ou apenas protocolos de sigilo?

### Próxima etapa sugerida

Definir o grau de conhecimento de cada camada sobre o Coração do Mundo: segredo total restrito ao Círculo, conhecimento parcial distribuído ou conhecimento amplo com diferentes interpretações.

## Decisão aprovada — conhecimento fragmentado dentro da Ordem Ancestral

**Status: APROVADO PELO USUÁRIO.**

A distribuição de conhecimento na Ordem Ancestral era variável e fragmentada, não uma hierarquia perfeitamente previsível:

- Algumas células locais podiam preservar conhecimentos específicos que certos Custódios Regionais desconheciam.
- Custódios podiam compreender conexões regionais sem conhecer o eixo central.
- O Círculo Oculto podia possuir a visão mais abrangente, mas não se presume que fosse onisciente ou que tivesse acesso à verdade completa.
- Registros e informações podiam ser divididos deliberadamente, perdidos ou interpretados de formas divergentes.

A ordem podia, portanto, ter lacunas internas sobre o próprio Coração do Mundo.

## Referência de inspiração — Martial Peak (não canônica)

O usuário citou Martial Peak como referência de interesse para estudar escala cosmológica, mundos em camadas, entidades e forças fragmentadas/descentralizadas.

Princípios que podem ser estudados como inspiração abstrata, sem copiar personagens, nomes, facções, eventos ou cosmologia:

- Revelações graduais que recontextualizam a escala do mundo.
- Mundos e níveis de realidade com relações entre si.
- Forças de ameaça que atuam por agentes, fragmentos ou regiões.
- Conflitos que persistem mesmo quando a origem ou liderança não está presente.
- Uma cosmologia que pode ser revelada em camadas, sem explicar tudo no início.

**Nota de precisão sobre a referência:** as fontes consultadas descrevem o “Small Universe” de Martial Peak como um universo formado dentro do corpo de cultivadores do reino Open Heaven. Também descrevem Mo / Black Ink Clan como a grande ameaça de escala cosmológica; “Shadow Demon” aparece como uma linhagem/raça demoníaca, não como o nome dessa força antagonista central. Essa distinção deve ser tratada com cautela, pois parte das referências disponíveis são wikis de fãs e traduções de capítulos.

**Limite criativo:** nada disso passa a fazer parte do cânone de Talune por associação. O Coração do Mundo continua sendo uma entidade primordial integrada ao próprio mundo de Talune, conforme decisões já aprovadas. Qualquer ameaça cósmica, força fragmentada ou relação entre mundos ainda precisa ser criada e aprovada separadamente.

## Direção de inspiração aprovada — combinação de cosmologia, ameaça e revelação gradual

**Status: DIREÇÃO DE INSPIRAÇÃO APROVADA PELO USUÁRIO; conteúdo cosmológico novo abaixo é proposta de design, não cânone fechado.**

O usuário escolheu explorar em conjunto:

1. Cosmologia grandiosa e possíveis níveis de realidade.
2. Uma ameaça misteriosa que poderia atuar de forma fragmentada/descentralizada.
3. História antiga revelada progressivamente, com descobertas que recontextualizam o mundo.

### Pesquisa de referência: Martial Peak

Princípios narrativos observados:

- Small Universe associado ao corpo de cultivadores Open Heaven: demonstra uma mudança de escala em que um mundo aparentemente completo pode estar inserido numa estrutura maior.
- Mo / Black Ink: ameaça primordial com influência corruptiva e uma força organizada associada.
- O selamento de Mo em vez de sua destruição permite que uma ameaça antiga continue relevante por eras.
- Fontes consultadas incluem páginas de lore de fãs e capítulos traduzidos da novel; tratar detalhes como referência secundária e verificar em fontes primárias quando necessário.

Referências consultadas:

- [https://martialpeak.fandom.com/wiki/Open_Heaven_Realm](https://martialpeak.fandom.com/wiki/Open_Heaven_Realm)
- [https://martialpeak.fandom.com/wiki/Ink](https://martialpeak.fandom.com/wiki/Ink)
- [https://www.divinedaolibrary.com/story/martial-peak/martial-peak-chapter-5948/](https://www.divinedaolibrary.com/story/martial-peak/martial-peak-chapter-5948/)
- [https://wuxiaworld.site/novel/martial-peak-spp/chapter-5948/](https://wuxiaworld.site/novel/martial-peak-spp/chapter-5948/)

### Arquitetura narrativa proposta para Talune (não aprovada como cânone definitivo)

Três escalas de descoberta:

1. **Mundo conhecido:** continentes, regiões, civilizações, ruínas, criaturas e núcleos regionais. Ponto de entrada da aventura.
2. **Estrutura oculta:** conexões profundas do Coração, eixo inacessível, vestígios da Ordem Ancestral e fenômenos que mostram que as regiões estão conectadas.
3. **Realidade maior:** origem do Coração, limites do mundo conhecido e possibilidade de outras estruturas ou realidades. Não definir ainda se existem outros mundos.

Princípio de progressão: descoberta regional → conexões entre regiões → recontextualização da compreensão do mundo. A terceira escala pode ficar reservada a revelações tardias ou expansões.

### Guardrails de originalidade

- O Coração do Mundo permanece uma entidade primordial integrada ao mundo físico de Talune; não transformar Talune em um universo dentro do corpo de um cultivador por analogia.
- Não importar Mo, Black Ink, Black Ink Clan, selos, hierarquias, personagens, eventos ou nomenclaturas de Martial Peak.
- Uma ameaça fragmentada/descentralizada ainda é apenas uma possibilidade temática; não está aprovada como elemento do cânone.
- Não decidir que o Coração está corrompido, que existe uma guerra cósmica ou que há múltiplos mundos sem deliberação posterior.
- Usar a referência para estudar escala, ritmo de revelação, persistência histórica de conflitos e consequências de ameaças sistêmicas, criando soluções próprias.

### Próxima etapa sugerida

Definir primeiro a relação cosmológica do Coração com o mundo: se ele é a própria fundação vital de Talune, uma entidade que se vinculou ao mundo, ou uma presença cuja relação com o mundo ainda é desconhecida.

## Decisão aprovada — relação cosmológica entre o Coração e Talune

**Status: DIREÇÃO APROVADA PELO USUÁRIO — opção A com elementos de C.**

O Coração do Mundo é a fundação vital de Talune, mas sua origem verdadeira permanece desconhecida.

### Princípios estabelecidos

1. **Sustentação da vida:** o Coração participa dos processos fundamentais que permitem a vitalidade e o florescimento natural de Talune.
2. **Circulação mágica:** raízes e veios vitais conectam regiões e participam da circulação de energia pelo mundo.
3. **Equilíbrio natural:** os núcleos regionais influenciam as condições de seus territórios, sem controlar todos os acontecimentos nem garantir equilíbrio perfeito.
4. **Origem desconhecida:** não se sabe se o Coração nasceu junto com Talune, existia antes do mundo ou se vinculou a ele em algum momento primordial.

### Limites e distinções

- Ser a fundação vital do mundo não significa necessariamente tê-lo criado.
- O Coração não é onipotente nem onisciente.
- Sua relação com a vida e o equilíbrio não significa controle direto sobre todos os seres ou fenômenos.
- A entidade continua sendo um organismo primordial integrado ao mundo físico, com consciência distribuída e manifestações regionais.
- Não definir ainda se o mundo morreria caso o Coração fosse destruído, se poderia sobreviver à sua ausência ou como reagiria a ferimentos.

### Implicação narrativa

Talune pode apresentar alterações de vitalidade, circulação mágica e fenômenos regionais caso o Coração ou suas conexões sejam afetados. Isso define o que está em jogo sem estabelecer ainda uma causa, antagonista ou evento de corrupção.

### Próxima questão de design

Definir a resiliência do vínculo: como Talune reage quando partes do Coração ou de sua rede vital são enfraquecidas, isoladas ou danificadas.

## Decisão aprovada — resiliência de Talune: dependência gradual + compensação regional (B + C)

**Status: APROVADO PELO USUÁRIO.**

Talune depende profundamente do Coração do Mundo, mas não entra em colapso imediatamente quando uma parte dele enfraquece. O mundo possui resistência natural e os núcleos regionais podem compensar parcialmente uns aos outros através da rede de veios vitais.

### Princípios aprovados

1. **Resistência natural:** o enfraquecimento de um núcleo não provoca morte ou colapso instantâneo da região. A natureza continua funcionando, embora possa apresentar alterações progressivas.
2. **Compensação regional:** núcleos conectados podem redistribuir parte da circulação vital e sustentar parcialmente uma região afetada. Nenhum núcleo substitui integralmente outro.
3. **Consequências acumulativas:** compensações prolongadas podem gerar desequilíbrios e sobrecarga em outros núcleos. Uma crise pode se propagar para além da região inicial, dependendo de sua gravidade, duração, localização e capacidade da rede.

### Exemplo ilustrativo — não é mapa ou regra fixa

Se um núcleo florestal for ferido, núcleos de montanhas e deserto conectados podem compensar parte da circulação. Com o tempo, eles podem apresentar sinais de sobrecarga. A propagação não é automática: depende das condições do evento e da rede.

### Guardrails

- Não transformar toda crise regional em catástrofe mundial automaticamente.
- Não estabelecer ainda uma escala quantitativa de dano, tempo de deterioração ou limite de compensação.
- Não presumir que os núcleos tenham intenção consciente de se sacrificar ou que controlem conscientemente a redistribuição.
- Não definir ainda se a rede possui mecanismos de recuperação espontânea, se exige intervenção externa ou como a recuperação ocorre.
- Preservar a natureza viva, distribuída e não onisciente do Coração.

### Próxima etapa sugerida

Definir o que acontece quando um núcleo regional é danificado: quais sinais aparecem, como a deterioração evolui e se o núcleo pode se recuperar naturalmente ou precisa de intervenção.

## Decisão aprovada — recuperação variável dos núcleos regionais (D)

**Status: APROVADO PELO USUÁRIO.**

A capacidade de recuperação de um núcleo depende da gravidade do dano. A regeneração não funciona de maneira idêntica em todos os casos.

### Modelo conceitual de três níveis

1. **Dano leve — regeneração natural:** o núcleo recupera suas funções espontaneamente, sem intervenção externa. Podem ocorrer alterações ambientais temporárias.
2. **Dano moderado — regeneração condicionada:** o núcleo ainda pode se recuperar, mas precisa de condições favoráveis, como circulação vital suficiente, equilíbrio ambiental, recursos naturais ou auxílio externo.
3. **Dano grave — recuperação extraordinária:** a capacidade natural de regeneração está comprometida. Pode ser necessária intervenção especializada, conhecimento ancestral ou uma condição excepcional.

Os três níveis são uma estrutura conceitual de gravidade, não uma tabela mecânica definitiva nem uma taxonomia fechada de doenças ou corrupção.

### Consequência narrativa proposta

Recuperação não significa necessariamente restauração exata do estado anterior. Uma região pode recuperar a vitalidade e ainda conservar cicatrizes históricas, alterações de paisagem, perda de espécies ou estruturas antigas reveladas pelo evento.

Exemplos ilustrativos:

- Floresta recupera vitalidade, mas árvores ancestrais perdidas não retornam.
- Região vulcânica restabelece circulação, mas mantém mudanças geológicas.
- Núcleo glacial se recupera e revela estruturas antes ocultas pelo gelo.

### Limites ainda não decididos

- Se danos graves podem ser irreversíveis.
- Quem ou o que pode realizar intervenções extraordinárias.
- Se a Ordem Ancestral conhecia métodos de recuperação.
- Se a recuperação pode exigir sacrifícios ou custos para outros núcleos.
- Como a recuperação se relaciona com uma possível ameaça externa.
- Tempos, escalas e efeitos mecânicos dos três níveis.

### Próxima etapa sugerida

Definir se os danos aos núcleos são sempre resultado de causas externas, se podem surgir naturalmente ou se existem ambas as possibilidades.

## Decisão aprovada — causas predominantemente externas dos danos aos núcleos (opção C)

**Status: APROVADO PELO USUÁRIO.**

A maioria dos danos aos núcleos regionais tem causas externas ao próprio Coração do Mundo. Danos naturais também existem, mas não são a origem predominante.

### Quatro categorias de causas para organizar o lore

1. **Fenômenos naturais:** terremotos, mudanças geológicas, eventos mágicos naturais e transformações ambientais extremas. São possíveis, mas menos frequentes como causa de danos aos núcleos.
2. **Interferência das civilizações:** extração de energia, construções sobre veios vitais, exploração de recursos e experimentos mágicos que podem danificar involuntariamente um núcleo.
3. **Ações deliberadas:** indivíduos ou grupos que procuram explorar, enfraquecer, controlar ou utilizar núcleos para objetivos próprios. Intencionalidade não implica necessariamente uma motivação maligna uniforme.
4. **Influências externas desconhecidas:** fenômenos ou agentes cuja origem não é compreendida pelas civilizações atuais. Podem permitir revelações futuras, mas não confirmam uma força específica nem uma ameaça das sombras.

As quatro categorias são uma taxonomia narrativa inicial; não estabelecem percentuais quantitativos nem uma frequência mecânica exata.

### Diretrizes

- A maioria dos danos tem origem externa, mas nem todo dano é causado por antagonistas.
- Não assumir que todos os núcleos danificados estão ligados ao mesmo agente ou causa.
- Uma mesma região pode sofrer causas combinadas ou consequências em cadeia.
- A categoria de influências desconhecidas mantém espaço para mistérios cosmológicos sem definir antecipadamente uma facção.
- Preservar a possibilidade de danos naturais e a resiliência gradual já aprovada.

### Próxima etapa sugerida

Definir se as causas externas são independentes e variadas ou se existe uma ameaça externa maior que responde por uma parcela significativa dos danos, sem necessariamente explicar todos os casos.

## Decisão aprovada — ameaça maior e múltiplas forças em conflito (opção C)

**Status: APROVADO PELO USUÁRIO.**

Existe uma ameaça maior relacionada aos danos dos núcleos regionais do Coração do Mundo, mas ela não explica todos os conflitos nem controla todos os acontecimentos de Talune. Outras forças, organizações, civilizações e indivíduos agem por motivações próprias.

### Estrutura narrativa inicial de forças (proposta de organização, não facções canonizadas)

1. **A ameaça maior:** força externa de origem, natureza, intenção e limites ainda desconhecidos. É capaz de provocar ou favorecer danos em determinados núcleos. Não se presume que seja responsável por todos os danos.
2. **Forças de preservação:** grupos que procuram proteger núcleos, regiões, registros ancestrais ou o equilíbrio natural. Podem discordar sobre métodos e prioridades.
3. **Forças de exploração e poder:** civilizações, organizações ou indivíduos que tentam utilizar energia dos núcleos. Alguns podem conhecer os riscos; outros podem agir por necessidade ou desconhecimento.
4. **Forças independentes:** povos, aventureiros, reinos e organizações com interesses próprios, que podem se envolver nos acontecimentos sem compreender sua dimensão maior.

### Diretrizes narrativas

- Nenhum grupo é automaticamente bom ou mau.
- Protetores podem esconder informações ou tomar decisões moralmente questionáveis.
- Exploradores não são necessariamente malignos; podem agir por sobrevivência, progresso ou necessidade.
- A ameaça maior não controla todas as crises e não deve reduzir a diversidade política e histórica do mundo.
- A Ordem Ancestral pode participar desse cenário, mas não se presume que seja a única força de preservação, que conheça toda a ameaça ou que permaneça unificada.
- Origem, natureza, intenção, limites, agentes, objetivos e relação exata da ameaça com o Coração continuam em aberto.

### Próxima etapa

Definir a relação fundamental entre a ameaça maior e o Coração do Mundo, sem ainda revelar sua identidade ou explicar todos os mistérios.

## Decisão aprovada — relação entre a ameaça maior e o Coração: força invasora (opção B)

**Status: APROVADO PELO USUÁRIO.**

A ameaça maior tem origem fora da estrutura natural conhecida de Talune e procura penetrar no mundo, estabelecer presença e expandir sua influência. Os núcleos regionais do Coração do Mundo são pontos especialmente vulneráveis a essa influência.

### Princípios de desenvolvimento (estrutura conceitual; mecanismos ainda não canonizados)

1. **Origem exterior:** a ameaça não pertence à estrutura natural conhecida de Talune. Não está definido se vem de outra realidade, dimensão ou região desconhecida da existência.
2. **Penetração gradual:** a influência pode começar por pequenas rupturas, fenômenos anormais e manifestações difíceis de interpretar; não precisa assumir a forma de um exército atravessando um portal.
3. **Vulnerabilidade dos núcleos:** os núcleos podem funcionar como pontos de contato entre a ameaça e Talune. A influência pode interferir nas raízes, veios vitais e manifestações regionais do Coração.
4. **Expansão e estabelecimento:** a ameaça procura ampliar sua presença, mas a expansão pode ser lenta, irregular e limitada por fatores ainda desconhecidos.

### Restrições e questões em aberto

- A invasão não significa que o Coração tenha criado ou atraído a ameaça.
- Influência externa não equivale necessariamente a corrupção visual ou transformação maligna; pode produzir alterações na circulação vital, fenômenos físicos, comportamentos incomuns de criaturas e distorções mágicas. Algumas manifestações podem parecer benéficas no início.
- Não definir ainda se a ameaça é consciente, inteligente, coletiva ou compreensível às civilizações.
- Permanecem desconhecidos: natureza da origem exterior, método de entrada, motivo da vulnerabilidade dos núcleos, limites de expansão, possibilidade de resistência e objetivos da ameaça.

## Decisão aprovada — método de entrada da ameaça: rupturas entre realidades (opção A)

**Status: APROVADO PELO USUÁRIO.**

A ameaça maior penetra em Talune por meio de rupturas na própria estrutura da realidade, chamadas provisoriamente de **Fissuras da Realidade**. O nome é descritivo e não definitivo.

### Princípios conceituais

1. **Separação:** Talune possui uma estrutura própria de realidade, distinta daquilo que existe além dela.
2. **Ruptura:** em determinadas circunstâncias, essa separação pode ser rompida ou enfraquecida.
3. **Penetração:** influências exteriores atravessam as fissuras, mesmo quando não existe uma passagem física estável.
4. **Consequências:** regiões afetadas podem apresentar fenômenos mágicos, alterações ambientais, criaturas anormais e danos a núcleos próximos.

### Relação com o Coração do Mundo

- O Coração não é necessariamente a origem das fissuras nem o caminho exclusivo de entrada da ameaça.
- Não está estabelecido que o Coração mantenha toda a realidade fechada ou funcione como barreira cósmica.
- Por estar profundamente conectado ao mundo, pode ser afetado por fissuras próximas: veios vitais alterados, perturbações em núcleos e manifestações regionais.
- Efeitos podem variar conforme intensidade e localização da ruptura.
- As fissuras podem existir independentemente do Coração; a relação causal exata entre ambas permanece em aberto.

### Questões ainda não decididas

- O que provoca as fissuras?
- São permanentes, temporárias ou cíclicas?
- Podem surgir em qualquer lugar ou dependem de condições específicas?
- O que exatamente consegue atravessá-las?
- Podem ser fechadas, estabilizadas ou agravadas?

## Geografia global de Talune — opção B aprovada

**Status: DIREÇÃO GEOGRÁFICA APROVADA; mapa e composição interna ainda em desenvolvimento.**

Talune será organizado em um continente central e dois continentes exteriores. O continente central será o principal território de entrada e desenvolvimento inicial do jogo; os dois exteriores ampliarão a geografia, a variedade de biomas, famílias de monstros, equipamentos, desafios e progressão futura.

### Diretrizes de design

- A geografia global deve parecer um mundo contínuo e coerente, não três seleções desconectadas de fases.
- O continente central concentra o primeiro ciclo de aprendizado e progressão, mas não precisa ser o maior nem o mais poderoso.
- Os continentes exteriores devem ter identidades geográficas e ecológicas próprias, e não funcionar apenas como versões de nível mais alto do continente central.
- O Coração do Mundo conecta os territórios por suas raízes e veios vitais; essa conexão não precisa ser uma rota de viagem literal nem exigir que o jogador percorra toda a rede.
- Rupturas da realidade podem aparecer como fenômenos localizados e pontos de interesse, sem substituir a geografia natural.
- Para o MVP, projetar a visão global, mas produzir apenas um pequeno território inicial com 3 monstros comuns e 1 chefe em qualidade visual final.

### Estrutura de produção proposta

Mundo de Talune → Continentes → Regiões → Áreas de caça → Estágios de farm → Encontros especiais/dungeons → Chefes → Desbloqueios de rotas e regiões.

O mapa global deve funcionar como navegação ilustrada e legível. O combate idle ocorre em cenas/arenas próprias; não é necessário construir mundo aberto navegável em tempo real.

### Ainda em aberto

- Silhueta, tamanho relativo, posição e orientação dos três continentes.
- Oceanos, mares, arquipélagos, estreitos e rotas marítimas/terrestres.
- Número e limites das regiões em cada continente.
- Biomas e ordem de progressão.
- Localização dos hubs, cidades e primeiro território jogável.
- Relação visual entre os continentes e os núcleos regionais do Coração do Mundo.
- Como e quando os continentes exteriores serão desbloqueados.

### Próxima decisão de design

Definir a composição física do mapa: posição relativa dos três continentes e a forma como se distribuem ao redor do mar e das conexões vitais do Coração do Mundo. Comparar alternativas com foco em leitura visual, rotas, variedade de biomas, progressão idle e custo de produção.

## Distribuição geográfica global — composição triangular aprovada

**Status: DISTRIBUIÇÃO RELATIVA APROVADA; contornos, dimensões e geografia interna ainda em aberto.**

A composição global de Talune seguirá uma organização triangular com três grandes massas continentais: um continente central, um continente exterior a noroeste e outro continente exterior a sudeste. O continente central permanece como território de início e principal base da progressão inicial. Os continentes exteriores oferecem expansão geográfica e de conteúdo, sem serem apenas cópias de nível superior.

### Diretrizes de autoria e design

- As três massas continentais devem possuir silhuetas e identidades geográficas distintas; evitar três ilhas de tamanho e formato semelhantes.
- A separação por oceanos deve permitir mares, estreitos, arquipélagos e rotas de conexão com lógica geográfica.
- O continente central deve oferecer variedade de rotas e ambientes para apresentar a progressão inicial, sem precisar ser o maior ou o mais poderoso.
- Os continentes exteriores devem ser expansões com ecossistemas, famílias de monstros, recursos e desafios próprios.
- O Coração do Mundo conecta os territórios por raízes e veios vitais, mas essas conexões não precisam ser rotas físicas de viagem.
- A distribuição triangular não determina ainda ordem obrigatória de desbloqueio, nível dos continentes, biomas, dimensões ou escala.

### Próximo trabalho de mapa

Definir a silhueta e proporções relativas dos três continentes; depois posicionar cordilheiras, rios, planícies, florestas, desertos, costas, mares, estreitos e arquipélagos. Só então delimitar regiões jogáveis, hubs, rotas e áreas de caça. Manter o escopo do MVP pequeno: um território inicial de alta qualidade com três monstros comuns e um chefe.

## Formato e proporções dos continentes — opção A aprovada

**Status: DIREÇÃO APROVADA; contornos cartográficos e dimensões numéricas ainda não definidos.**

A composição triangular mantém três massas terrestres: um continente central dominante, um continente exterior compacto e montanhoso a noroeste, e um continente exterior alongado a sudeste.

### Diretrizes por continente

- **Continente central:** maior massa terrestre, costas irregulares, penínsulas e interior amplo. Deve comportar variedade de ambientes e rotas, sendo o principal território de entrada e progressão inicial/intermediária.
- **Continente noroeste:** menor e compacto, com presença marcante de montanhas e vales. Pode oferecer ambientes elevados, rochosos, cavernas e ecossistemas distintos do central.
- **Continente sudeste:** alongado, permitindo transições ambientais ao longo de sua extensão e grande potencial de expansão regional.

### Princípios

- Biomas ainda não estão fixados por continente; evitar associações automáticas como noroeste = gelo ou sudeste = deserto.
- Cada continente deve ter identidade geográfica/ecológica e famílias de monstros próprias.
- As proporções são conceituais; não definir ainda percentuais de área, escala, coordenadas ou contornos finais.
- Geografia física deve sustentar rotas, regiões, hubs e áreas de caça; o mapa global é uma ferramenta de navegação e progressão, não exige mundo aberto contínuo em tempo real.

### Próxima etapa

Definir a lógica do relevo e da hidrografia global: como as cordilheiras, planaltos, rios e bacias organizam os três continentes e criam fronteiras naturais, corredores de viagem e diferentes ecossistemas.

## Decisão aprovada — relevo e geologia do mundo

**Escolha:** Opção D — Estrutura geológica híbrida (combinação da proposta de grandes cadeias montanhosas e corredores naturais com a diversidade geológica de relevos fragmentados).

- Uma grande cadeia montanhosa atravessa a região central do continente principal.
- O noroeste possui cadeias montanhosas mais densas e elevadas.
- O sudeste apresenta montanhas mais isoladas, grandes vales e bacias.
- Outros territórios poderão apresentar formações geológicas próprias, como planaltos, vulcões, cânions e lagos.

**Justificativa:** estabelecer uma geografia reconhecível e coerente, preservando variedade visual e oportunidades para rotas, fronteiras naturais, áreas de caça, cavernas e progressão territorial. A geologia detalhada de cada região permanece em aberto.

**Convenção de decisões:** quando a recomendação combinar duas ou mais opções originais, a combinação será apresentada como uma alternativa própria, com letra e descrição claras, para aprovação direta do usuário.

## Decisão aprovada — hidrografia de Talune

**Escolha:** Opção D — Hidrografia híbrida.

**Princípio de organização:** a água deve ajudar a estruturar a geografia do mundo, influenciando a formação dos ambientes, a distribuição da vida e a localização de regiões importantes.

- **Nascentes:** as grandes cadeias montanhosas serão as principais fontes de água, com rios alimentados por chuvas, neve e nascentes subterrâneas.
- **Rios e afluentes:** rios principais atravessarão vales, florestas e planícies, recebendo afluentes menores que conectam diferentes áreas.
- **Lagos e bacias:** algumas regiões acumularão água em lagos e bacias naturais, formando ambientes próprios e pontos de referência no mapa.
- **Sistemas independentes:** determinadas regiões terão rios, fontes, pântanos e lagos que não dependem diretamente da grande cadeia central.

**Diretrizes continentais iniciais:**

- **Continente central:** rede hidrográfica mais extensa, alimentada principalmente pela grande cadeia montanhosa, com rios atravessando o interior e formando bacias, lagos e planícies férteis.
- **Continente noroeste:** rios mais curtos e rápidos, vales profundos, nascentes elevadas e lagos entre montanhas.
- **Continente sudeste:** rios mais longos, grandes bacias, lagos e sistemas independentes, acompanhando seu formato alongado.

**Consequências para o mapa e gameplay:** a hidrografia poderá orientar fronteiras naturais, rotas, travessias, localização de assentamentos, áreas de caça e diversidade de ambientes. Estas diretrizes não determinam ainda os biomas nem a localização exata dos rios.

## Decisão aprovada — sistema climático de Talune

**Escolha:** Opção D — Sistema climático integrado.

Latitude, altitude, relevo, ventos e oceanos atuarão em conjunto na definição dos climas. Cada continente terá identidade climática própria, com transições naturais entre biomas.

**Diretriz de processo:** evitar transformar decisões secundárias e reversíveis em votações. A direção de design assume essas decisões, mantendo coerência com o que já foi aprovado. Solicitar aprovação do usuário apenas para escolhas que alterem significativamente identidade, progressão, experiência dos jogadores ou escopo do MVP. Apresentar alternativas combinadas como opções próprias e permitir confirmação direta por seleção.

## MVP — primeira região jogável: Vale de Brumafonte (nome provisório)

**Objetivo:** construir uma primeira região pequena, funcional e visualmente representativa de Talune. O planejamento global dos demais continentes fica pausado até o MVP estar jogável.

### Identidade ambiental

Vale temperado aos pés da cadeia montanhosa central, atravessado por um rio de origem montanhosa. A paisagem combina campos, margens fluviais, floresta e antigas estruturas de pedra. A escolha aproveita as decisões já aprovadas de relevo, hidrografia e clima sem exigir um ambiente extremo ou complexo no primeiro MVP.

### Estrutura de progressão

1. **Acampamento da Travessia:** hub inicial, preparação e acesso à rota.
2. **Campos da Margem:** primeira área de caça; campo aberto e margem do rio; introdução ao combate e farm inicial.
3. **Bosque das Raízes:** segunda área; floresta mais fechada e raízes antigas; maior variedade de inimigos e dificuldade.
4. **Ruínas da Nascente:** terceira área; antigas estruturas junto à nascente; farm avançado e preparação para o chefe.
5. **Guardião da Fenda:** chefe do MVP, em encontro especial; sua derrota desbloqueia a próxima região.

As três áreas são etapas compactas de progressão, não mapas enormes. O mapa regional serve à navegação e seleção de estágio; o combate ocorre em cenas/arenas próprias.

### Escopo de conteúdo do MVP

- Exatamente três tipos de monstros comuns.
- Um chefe regional.
- Um hub inicial e três áreas de caça encadeadas.
- Progressão por estágios, com desbloqueio do chefe após cumprir os requisitos da rota.
- Nomes e detalhes específicos de criaturas, recompensas, níveis e balanceamento permanecem provisórios até a definição do combate e dos dados do MVP.

### Diretriz de produção

Priorizar uma fatia vertical pequena, mas representativa: mapa regional legível, cenas de combate, três monstros comuns, um chefe e ciclo de progressão/farm. Não expandir o mapa global antes de validar essa fatia.

## MVP — especificação inicial de combate (proposta de produção)

**Status: proposta de design para prototipagem; números finais e balanceamento ainda não definidos.**

### Progressão inicial sugerida

- Faixa de níveis inicial: 1–10.
- Campos da Margem: níveis sugeridos 1–3; Lodo-de-Rio e Lobo-de-Várzea.
- Bosque das Raízes: níveis sugeridos 3–6; Lobo-de-Várzea e Broto de Raiz.
- Ruínas da Nascente: níveis sugeridos 6–10; Broto de Raiz e versões escaladas de inimigos anteriores.
- Guardião da Fenda: encontro de chefe sugerido para o nível 10.
- A progressão ocorre por estágios de farm dentro das áreas; não é necessário criar um mapa separado para cada nível.

### Papéis de combate dos monstros

- **Lodo-de-Rio — resistência:** HP relativamente alto, dano baixo e ataques lentos. Serve para medir dano sustentado, ASPD e tempo para derrotar alvos resistentes.
- **Lobo-de-Várzea — agressividade:** HP menor, dano relativamente alto e ataques rápidos. Serve para testar pressão sobre a party, sobrevivência e resposta de cura.
- **Broto de Raiz — controle:** ataque à distância e um efeito simples de controle, inicialmente lentidão. Serve para testar habilidades, prioridades de alvo e controle de inimigos.
- **Guardião da Fenda — chefe:** HP elevado, ataque básico previsível, golpe especial anunciado e segunda fase com maior pressão ofensiva. Não terá imunidade total a dano.

### Critérios de balanceamento a validar

- Medir tempo para derrotar cada monstro com uma party de quatro personagens e também com composições incompletas.
- Comparar dano recebido por segundo, frequência de ataques e contribuição de cura/suporte.
- Verificar se ASPD melhora claramente os ataques básicos sem gerar efeitos secundários descontrolados.
- Verificar se Haste reduz recargas de habilidades sem alterar a frequência dos ataques básicos.
- O chefe deve testar sobrevivência, cura, dano e coordenação das habilidades; dificuldade não deve depender apenas de HP elevado.
- HP, dano, defesa, velocidade, experiência, drops e fórmulas serão definidos depois de estabelecer os atributos e a escala de poder dos personagens.

### Próxima tarefa de produção

Definir um modelo mínimo de dados de combate para personagens e monstros, estabelecer os atributos e fórmulas iniciais e, então, preencher os valores numéricos dos quatro inimigos. Os valores serão tratados como parâmetros de teste e ajustados com resultados do protótipo.

## Protótipo executável — simulador independente de combate

**Status: PRIMEIRA VERSÃO IMPLEMENTADA E EXECUTADA LOCALMENTE PELO AMBIENTE DE DESENVOLVIMENTO.**

Foi criado o primeiro módulo independente `combat-simulator.ts`, sem dependências externas, acompanhado de instruções de execução.

### Funcionalidades implementadas

- Simulação de party configurável de 1 a 4 personagens.
- Fila de prioridade de habilidades: percorre a ordem configurada, ignora habilidades indisponíveis e usa ataque básico como fallback.
- ASPD controla apenas o intervalo dos ataques básicos.
- Haste reduz recargas de habilidades por uma fórmula provisória, sem alterar ataques básicos.
- Habilidade de cura procura o aliado com menor percentual de HP e é ignorada quando ninguém precisa de cura.
- Monstro ataca periodicamente e seleciona um membro vivo da party.
- Chefe possui golpe especial anunciado, janela de reação e transição de fase por percentual de HP.
- Seed determinística para repetir uma simulação.
- Resultado inclui vitória/derrota/timeout, duração, HP restante, membros vivos, dano, cura e registro de eventos.

### Primeiros testes de execução

- Lodo-de-Rio: vitória da party de teste em aproximadamente 6,92 segundos, com os quatro personagens vivos.
- Guardião da Fenda: vitória da party de teste em aproximadamente 25,24 segundos, com os quatro personagens vivos; o teste acionou a transição para a segunda fase e dois golpes especiais anunciados.

Estes resultados apenas confirmam que o fluxo básico executa. Não representam balanceamento aprovado.

### Fórmulas e limitações provisórias

- Dano temporário: `max(1, ataque - defesa * 0.5)`.
- Aceleração temporária de recarga: `recarga / (1 + Haste)`.
- Sem crítico, esquiva, precisão, resistência elemental, buffs/debuffs complexos, múltiplos inimigos simultâneos ou padrões completos de chefe.
- A fase 2 ainda não altera o conjunto de habilidades do chefe.
- Valores de atributos, HP, dano, defesa, ASPD, Haste, recargas e parâmetros do chefe são placeholders de teste.
- O simulador é uma ferramenta local de balanceamento; não é o servidor autoritativo do jogo.

### Arquivos

- `combat-simulator.ts`: implementação executável.
- `README.md`: requisitos, comandos, funcionalidades, limitações e próximos passos.
- Pacote: `talune-combat-simulator.zip`.

### Próxima etapa

Adicionar relatórios de DPS, dano recebido e cura efetiva por personagem; depois criar testes automatizados para confirmar a independência entre ASPD e Haste e comparar parties de 1 a 4 membros. Só então ampliar o modelo de atributos e as fórmulas de combate.

### Incremento 2 — métricas por personagem e testes automatizados

- O resultado agora inclui, por personagem: dano causado, cura efetiva, dano recebido, quantidade de ataques básicos, quantidade de usos de habilidades e HP restante.
- Criado `combat-simulator.test.ts` com verificações automatizadas:
    - ASPD maior gera mais ataques básicos no mesmo intervalo.
    - Haste não altera a frequência de ataques básicos quando o personagem não possui habilidades.
    - Haste maior permite mais usos de habilidades no mesmo intervalo.
- Os três testes passaram no ambiente de execução.
- O README foi atualizado com o comando de execução dos testes.

**Próxima tarefa de produção:** gerar comparativos de várias simulações (lotes de seeds) e relatórios de DPS, dano recebido, cura efetiva e duração média; em seguida testar composições de Party com 1–4 personagens e diferentes classes. Continuar mantendo os parâmetros numéricos como placeholders até calibrar o sistema de atributos.

## Referências adicionais — wikis de jogos de navegador (16/11/2026)

Estas fontes são referências de sistemas e organização de conteúdo. Não substituem as quatro inspirações centrais de Talune: Ragnarok Online, Ulala: Idle Adventure, TapTap Heroes e Lineage II.

### Drakoria Idle — referência idle direta

A wiki descreve party de até quatro heróis, caça automática, configurações individuais de helper por personagem e caça offline. A seleção de hunts apresenta faixas de nível, criaturas, respawn e sete dificuldades. As dificuldades alteram HP, dano, XP, chance de drop, gold e quantidade de criaturas no mapa. Isso é útil para estudar dificuldade selecionável, densidade de spawn e economia de uma hunt sem abandonar a progressão idle.
Fonte: [https://jogo.drakoriaidle.com.br/wiki/](https://jogo.drakoriaidle.com.br/wiki/) e [https://jogo.drakoriaidle.com.br/wiki/sistemas/party-e-caca-offline/](https://jogo.drakoriaidle.com.br/wiki/sistemas/party-e-caca-offline/) e [https://jogo.drakoriaidle.com.br/wiki/hunts/](https://jogo.drakoriaidle.com.br/wiki/hunts/)

### Continent of Legend — referência de estrutura e progressão

A wiki organiza mapas, monstros, chefes, itens, classes e sistemas. O índice de sistemas apresenta “Etapas e chefes”: cada mapa tem dez etapas, nove de horda e uma de chefe; vencer o chefe desbloqueia o próximo mapa. É uma estrutura simples e legível para o ciclo de farm e desbloqueio.
Fonte: [https://continentoflegend.com.br/wiki/](https://continentoflegend.com.br/wiki/) e [https://continentoflegend.com.br/wiki/sistemas/](https://continentoflegend.com.br/wiki/sistemas/)

### Steelwage — inspiração de conteúdo não-idle

O guia organiza regiões por faixas de nível, mapas/áreas, chefes, masmorras, classes com mecânicas próprias, atributos, elementos, grupos e progressão de equipamentos. É útil para diversidade de identidade de classes, ecologia de regiões e conteúdo de grupo, mas qualquer mecânica de ação manual precisa ser reinterpretada para combate automático.
Fonte: [https://steelwage.com/guia/](https://steelwage.com/guia/)

**Princípio de uso:** extrair padrões funcionais (clareza de progressão, leitura de recompensas, variedade de classes e inimigos), nunca copiar nomes, números, tabelas ou conteúdo protegido dos jogos de referência.