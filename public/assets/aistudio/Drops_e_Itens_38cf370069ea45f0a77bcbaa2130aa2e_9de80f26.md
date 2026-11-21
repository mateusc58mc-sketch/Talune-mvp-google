# Drops e Itens

# Atualização — faixas de bônus percentuais em equipamentos (15/11/2026)

**Direção aprovada pelo usuário — parâmetros pendentes:** bônus percentuais encontrados em equipamentos poderão possuir um valor mínimo e máximo próprio. Ao obter o item, o valor poderá ser rolado aleatoriamente dentro dessa faixa; também poderá existir uma mecânica de melhoria para elevar o bônus, respeitando limites definidos.

Princípios a projetar:

- Cada tipo de bônus terá uma faixa coerente com seu impacto e com o slot/tier do equipamento.
- A rolagem aleatória deve ser transparente na interface (valor obtido e faixa possível).
- A melhoria deve ter custo, limite e progressão previsíveis; evitar uma camada de RNG excessiva ou custos sem teto.
- Definir se o aprimoramento aumenta o valor dentro da faixa original, amplia a faixa, ou permite rerrolar. Essas são alternativas em aberto, não regras aprovadas.
- Definir se o valor pode chegar ao máximo por melhoria garantida, se há materiais específicos e se há falha/risco. Nenhuma dessas regras está decidida.
- O balanceamento deve considerar combinações de bônus percentuais, Haste, ASPD, críticos, cura, defesa, efeitos de skill e sinergias de conjunto.

Não definir percentuais mínimos/máximos nem probabilidades antes da matriz de skills, atributos derivados e orçamento de poder por slot estarem consolidados.

# Atualização — Transmog e direção de atributos (15/11/2026)

## 1. Aparência independente do equipamento — CONFIRMADO

Talune adotará um sistema de coleção visual inspirado no Transmog de World of Warcraft:

- O jogador poderá desbloquear aparências ao obter equipamentos ou recompensas visuais.
- Aparências desbloqueadas poderão ser aplicadas independentemente do equipamento funcional atualmente equipado.
- Trocar uma peça por outra mais forte não deverá apagar nem limitar a aparência escolhida.
- Poder funcional e expressão visual serão sistemas separados.
- Aparências raras de chefes, regiões, eventos e outros conteúdos poderão ter valor de coleção e prestígio; eventual negociação de cosméticos ainda precisa de regras próprias.

A implementação exata (desbloqueio por conta/personagem, custo de aplicação, itens cosméticos negociáveis e exceções visuais) permanece pendente.

## 2. Direção para atributos e bônus — REVISÃO APROVADA; MECÂNICAS AINDA NÃO DEFINIDAS

O usuário concordou com as conclusões gerais da pesquisa comparativa de Ulala, Ragnarok Online, World of Warcraft e MU Online. A base de atributos usada em projetos anteriores foi inspirada em Ragnarok, mas Talune fará uma revisão própria antes de aprovar fórmulas ou listas finais.

Direção de estudo:

- Ragnarok: clareza dos atributos principais, identidade de armas/equipamentos e efeitos situacionais.
- WoW: atributos secundários, sinergias com habilidades/especializações e bônus de conjuntos.
- MU Online: propriedades especiais e opções raras que diferenciam itens semelhantes.
- Ulala: leitura simples, progressão adequada ao idle e automação de inventário.

A lista antiga STR, AGI, VIT, INT, DEX e LUK deve ser tratada como referência histórica para avaliação, não como lista final aprovada. O mesmo vale para os status derivados e fórmulas registradas em materiais anteriores.

O usuário informa que, em projetos anteriores, utilizou a base de atributos de Ragnarok removendo modificadores de tamanho e elementos. Para Talune, essas mecânicas permanecem em aberto: não estão aprovadas nem definitivamente descartadas. Devem ser avaliadas pelo valor estratégico que agregam, custo de compreensão, impacto no balanceamento e compatibilidade com o combate idle.

Princípio de trabalho: primeiro consolidar classes, especializações, habilidades, papéis de combate e fórmula central de dano/mitigação; depois aprovar atributos primários, status derivados, pools de bônus por slot e efeitos especiais. Não fixar orçamento de atributos de equipamentos antes disso.

## 3. Próxima etapa de design

Construir uma matriz de atributos e efeitos candidatos, classificando cada um como:

- Primário: atributo investido diretamente pelo jogador.
- Derivado: calculado a partir de nível, classe, primários e equipamentos.
- Secundário de equipamento: bônus encontrado em itens.
- Efeito especial: modifica uma habilidade, condição ou regra de combate.

Para cada candidato, documentar: função, classes/especializações que aproveitam, fontes de obtenção, limites/caps, riscos de redundância e legibilidade na interface. A lista final só será aprovada depois de validada contra o sistema de combate.

# Pesquisa aprofundada — Desejabilidade de equipamentos e mercado

Data: 15/11/2026

Objetivo: estudar como fazer os equipamentos de Talune desejáveis por poder, build, coleção, aparência e valor econômico. Este documento separa mecânicas observadas nas referências das propostas ainda não aprovadas.

## 1. Princípio central de design

Um equipamento deve ter pelo menos uma razão clara para ser desejado:

- Poder: melhora dano, cura, defesa, velocidade ou eficiência de farm.
- Sinergia: ativa ou completa bônus de conjunto, carta, elemento ou especialização.
- Personalização: oferece atributos ou efeitos que favorecem uma build.
- Prestígio: aparência, animação, aura, silhueta ou origem reconhecível.
- Colecionismo: completa uma coleção, bestiário, álbum ou conjunto visual.
- Valor econômico: é procurado por outros jogadores, mesmo que não seja útil para quem o encontrou.

Evitar que o mercado dependa exclusivamente da arma com maior ataque. Itens situacionais, cartas, materiais, aparências e peças de conjunto precisam manter procura própria.

## 2. Comparação das referências

### Ulala: Idle Adventure

Mecânicas observadas em guias comunitários:

- Ciclo idle de drops frequentes e substituição simples de equipamento.
- Aprimoramentos ligados aos slots, de modo que parte do investimento persiste quando o item-base é trocado.
- Temper de atributos secundários por slot, com prioridades diferentes por papel/build.
- Auto-smelt para desmontar equipamento de baixo valor e converter em materiais de melhoria.
- Clatter Cards como camada complementar de coleção e sinergia, com combinações e bônus por grupos de cartas.
- Pets e vantagem elemental acrescentam preparação situacional para chefes.

Aplicação recomendada: UX de idle com baixa fricção, melhoria persistente de slot, automação configurável, coleções complementares e preparação para chefes. Evitar que os itens sejam descartáveis tão rapidamente que percam identidade ou valor comercial.

Referências: [https://www.aayyy.com/ulala-idle-adventure/ulala-beginner-team-progression-guide](https://www.aayyy.com/ulala-idle-adventure/ulala-beginner-team-progression-guide) ; [https://www.aayyy.com/ulala-idle-adventure/ulala-hunter-build-guide/](https://www.aayyy.com/ulala-idle-adventure/ulala-hunter-build-guide/) ; [https://ulala.fandom.com/wiki/Clatter_Cards](https://ulala.fandom.com/wiki/Clatter_Cards)

### Ragnarok Online

Mecânicas observadas:

- Equipamentos identificados por família, slot, requisitos, atributos, cartas e compatibilidade.
- Cartas associadas a monstros com efeitos próprios, instaladas em slots específicos.
- Cartas podem ter utilidade por raça, tamanho, elemento, alvo, habilidade ou condição; criam procura de jogadores com builds diferentes.
- Bônus de conjunto podem envolver equipamentos e cartas combinados.
- Refinamento aumenta propriedades e consome materiais; as regras e riscos variam por versão/servidor.
- Equipamentos e cartas são negociados, criando mercado secundário para drops que não servem ao personagem que os encontrou.

Aplicação recomendada: transformar o bestiário em fonte de itens econômicos; cada família de monstros pode fornecer uma carta ou material com uso identificável. Criar cartas situacionais e conjuntos de cartas, mas manter descrições e comparações legíveis.

Referências: [https://irowiki.org/wiki/Card_System](https://irowiki.org/wiki/Card_System) ; [https://irowiki.org/wiki/Equipment_Sets](https://irowiki.org/wiki/Equipment_Sets) ; [https://irowiki.org/wiki/Refinement](https://irowiki.org/wiki/Refinement) ; [https://ftp.irowiki.org/wiki/Refinement_System](https://ftp.irowiki.org/wiki/Refinement_System)

### World of Warcraft

Mecânicas observadas:

- Raridade/qualidade visual e item level são dimensões diferentes.
- Orçamento de atributos varia conforme item, slot e efeitos; duas peças de nível semelhante podem favorecer builds distintas.
- Conjuntos de classe oferecem bônus por quantidade de peças, criando metas de coleção e pontos de progressão.
- Transmog separa a aparência da função do item. A Blizzard documentou a evolução para aparência vinculada ao slot e outfits, de modo que a troca de equipamento não apague o visual escolhido.
- A qualidade de fabricação pode graduar o resultado sem substituir a raridade do item.

Aplicação recomendada: aparência como progressão paralela; conjuntos funcionais; transparência de atributos; orçamento por slot; possibilidade de guardar aparências desbloqueadas e continuar trocando equipamento funcional.

Referências: [https://worldofwarcraft.blizzard.com/en-us/news/24244455/](https://worldofwarcraft.blizzard.com/en-us/news/24244455/) ; [https://worldofwarcraft.blizzard.com/en-gb/news/24223776](https://worldofwarcraft.blizzard.com/en-gb/news/24223776) ; [https://worldofwarcraft.blizzard.com/en-us/news/23876529](https://worldofwarcraft.blizzard.com/en-us/news/23876529) ; [https://warcraft.wiki.gg/wiki/Stat_budget](https://warcraft.wiki.gg/wiki/Stat_budget) ; [https://warcraft.wiki.gg/wiki/Equipment](https://warcraft.wiki.gg/wiki/Equipment)

### MU Online

Mecânicas observadas em guias de versões e servidores:

- Excellent: opções adicionais variáveis podem tornar duas peças da mesma base muito diferentes em valor.
- Ancient: conjuntos com bônus acumulados conforme mais peças compatíveis são equipadas.
- Socket/Seed Sphere: propriedades podem ser inseridas em slots, com sinergias por elemento e sequência.
- Asas e equipamentos de progressão têm identidade visual forte e funcionam como símbolos de status.
- O valor de mercado depende tanto da base quanto da combinação de opções, refino e conjunto.

Aplicação recomendada: propriedades especiais com pools conhecidos, conjuntos com bônus progressivos, sockets com decisões planejadas e itens visuais de prestígio. Evitar empilhar muitas camadas de RNG em uma mesma peça.

Referências: [https://mooclassic.com/wiki/guide-item-options](https://mooclassic.com/wiki/guide-item-options) ; [https://www.muonline.net/guides/mu-online-excellent-options/](https://www.muonline.net/guides/mu-online-excellent-options/) ; [https://mu.lv/guides/read/socket-items/1012/](https://mu.lv/guides/read/socket-items/1012/) ; [https://www.avadonmu.com/guides/game/dpmc/y1m8](https://www.avadonmu.com/guides/game/dpmc/y1m8) ; [https://mmorpg.net/mu-online-servers/guides/mu-online-wings-and-sets-explained](https://mmorpg.net/mu-online-servers/guides/mu-online-wings-and-sets-explained)

## 3. Matriz comparativa e decisão para Talune

| Sistema | Ulala | Ragnarok | WoW | MU Online | Direção recomendada |
| --- | --- | --- | --- | --- | --- |
| Progressão idle e troca de gear | Forte | Média | Média | Média | Adotar UX simples e comparação rápida |
| Aprimoramento persistente por slot | Forte | Não é o foco | Parcial por sistemas de upgrade | Não é o foco | Estudar como sistema separado do item |
| Atributos secundários por build | Temper | Cartas/encantos | Orçamento e secundários | Opções Excellent | Adotar pools controlados por slot/build |
| Cartas e drops de monstros | Clatter como coleção | Muito forte | Menor centralidade | Sementes/sockets | Adotar cartas de monstros com função e mercado |
| Bônus de conjuntos | Cartas | Equipamento/cartas | Forte | Ancient | Adotar marcos 2/3/4 peças a testar |
| Sockets | Menos central | Forte | Presente em algumas expansões | Forte | Adotar em número limitado e com escolhas claras |
| Refino | Aprimoramento de slots | Forte | Trilhas de upgrade | Forte | Adotar com risco controlado e materiais |
| Aparência como progressão | Secundária | Visual de itens | Muito forte | Muito forte | Adotar coleção visual independente |
| Automação de inventário | Auto-smelt | Menos central | Filtros/coleções | Menos central | Adotar regras configuráveis e seguras |

## 4. Arquitetura recomendada de item — PROPOSTA

Separar atributos do item em dimensões independentes:

1. Identidade/base: nome, família, tipo, slot, arte, lore e origem.
2. Tier: faixa de poder definida pelo nível do monstro que originou o drop. T0 = monstros 1–99; T1 = 100–199; e assim sucessivamente.
3. Raridade: frequência de obtenção e orçamento/potencial de propriedades especiais.
4. Atributos-base: valores previsíveis por tier e slot.
5. Atributos secundários: propriedades de build, com pools limitados por tipo de item.
6. Efeito especial: habilidade passiva, proc, modificador de skill ou efeito condicional, reservado a itens específicos.
7. Conjunto: identidade de coleção e bônus por quantidade de peças.
8. Socket/carta: personalização que pode ser trocada, extraída ou vinculada segundo regras futuras.
9. Aprimoramento: refino ou evolução, com custos, materiais e regras de falha.
10. Aparência: modelo visual, efeitos, cores, animação e aparência desbloqueável.
11. Proveniência: monstro, chefe, andar, evento, crafting ou outra fonte.
12. Regras econômicas: negociável, vinculado, equipado, bloqueado, histórico de propriedade e restrições.

Tier não é raridade. Um item Mítico T0 pode ter efeito muito singular, mas não deve superar automaticamente o orçamento-base de um item comum T2.

## 5. Como criar desejo de compra e procura no mercado — PROPOSTA

### 5.1 Famílias de conjuntos com identidade

Criar conjuntos temáticos associados a regiões, chefes, culturas, facções ou classes. Cada peça deve ser útil sozinha, e o conjunto deve recompensar a coleção sem obrigar o jogador a usar quatro peças inferiores.

Marcos candidatos para teste: 2 peças (bônus menor), 3 peças (sinergia relevante), 4 peças (efeito de identidade). Não aprovar ainda quantidades nem números.

### 5.2 Bônus que mudam a build

Priorizar efeitos que criam decisões, não apenas +X% universal:

- Guerreiro: bloquear dano e converter defesa em proteção da party.
- Caçador: ataques encadeados, crítico, marcação de alvos ou bônus contra chefes.
- Clérigo: cura que gera escudo, cura ao longo do tempo ou suporte reativo.
- Mago: efeitos elementais, explosões em área, congelamento ou dano contínuo.
Esses exemplos são ideias de design; não são habilidades finais.

Efeitos precisam ser balanceados para não criar um item obrigatório para toda build. Cada efeito forte deve ter alternativa competitiva ou custo de oportunidade.

### 5.3 Cartas e relíquias de monstros

Cada família de monstros pode ter identidade de loot:

- Carta comum: bônus útil e específico.
- Carta de elite: efeito mais especializado.
- Carta de chefe: efeito raro e reconhecível, com fonte clara.
- Coleções: combinações de cartas concedem sinergias.

Cartas devem ter usos variados: dano contra raça/elemento/tamanho, resistência, eficiência de farm, cura, economia ou utilidade. Não concentrar todo o valor em cartas de dano.

### 5.4 Aparência e prestígio

- Cada família de equipamentos deve ter linguagem visual própria.
- Chefes importantes podem conceder aparências exclusivas, armas, armaduras, capas, asas, auras ou efeitos.
- Aparências desbloqueadas devem, preferencialmente, ficar disponíveis em uma coleção visual independente do item equipado.
- Itens visualmente especiais devem ser reconhecíveis no avatar e na tela de inspeção.
- Efeitos visuais precisam ser otimizados para mobile e não esconder a arena.

### 5.5 Mercado com procura entre classes

Como drops individuais não são restritos à classe atual do destinatário, uma arma de Caçador pode ser vendida a outro jogador mesmo que o personagem que a encontrou seja Guerreiro. Requisitos de uso podem continuar existindo, mas não devem impedir a obtenção e negociação quando a política de vínculo permitir.

### 5.6 Itens que permanecem relevantes

- Peças de conjunto antigas podem continuar úteis por bônus ou aparência.
- Cartas antigas podem manter valor em builds situacionais.
- Materiais de refino e crafting devem ter sinks recorrentes.
- Cosméticos e colecionáveis podem continuar desejados sem competir diretamente com poder.
- Itens de tier baixo podem ter variantes raras com efeitos especiais, mas não podem trivializar tiers superiores.

## 6. Economia: oferta, demanda e proteção contra inflação

Talune já possui drops individuais e recompensas offline com tabela de equipamento separada e probabilidade menor. Isso exige simulação de oferta antes de fixar chances.

Pontos de atenção:

- Quatro jogadores reais podem gerar até quatro rolagens individuais por encontro elegível.
- Offline farming também pode introduzir itens no mercado; o limite por conta é 12h padrão e 24h VIP, sem aumento automático da chance de drop VIP.
- Cada conta acumula recompensas offline individualmente.
- O mercado precisa distinguir itens negociáveis, vinculados ao personagem e vinculados à conta.
- Vender e desintegrar devem competir como decisões: moeda imediata versus materiais de melhoria.
- Taxas de mercado, crafting, refino e outros sinks precisam retirar moeda/itens de forma previsível.
- Monitorar volume de drops, preço mediano, tempo até a venda, concentração de oferta, itens sem procura e inflação por tier/raridade.
- Nunca criar escassez artificial ou taxas de drop secretas para manipular jogadores; probabilidades relevantes devem ser claras.

A taxa de 8% anotada na página Mercado e Economia é apenas exemplo histórico, não valor aprovado.

## 7. Automação de inventário — PROPOSTA

Filtros configuráveis por:

- Tier mínimo/máximo.
- Raridade.
- Slot e tipo de item.
- Atributos mínimos ou combinação de atributos.
- Pertencimento a conjunto.
- Quantidade de sockets e cartas.
- Valor estimado de venda ou materiais de desintegração.

Proteções recomendadas:

- Nunca vender/desintegrar item equipado, favorito, bloqueado, reservado ou listado no mercado.
- Prévia de itens afetados antes de ativar uma regra.
- Histórico de ações automáticas.
- Regras de maior prioridade e exceções explícitas.
- Opção de enviar itens raros para revisão manual.
- Limite de segurança para evitar que regra ampla destrua peças valiosas.

## 8. Pendências e riscos a resolver

- Fórmulas de STR, AGI, VIT, INT, DEX e LUK ainda são rascunhos; não definir orçamento de atributos antes de consolidar combate.
- Refinamento aparece como +1 a +10 em um material e +1 a +15 em outro. A página de Drops registra +1 a +15 e falha consumindo pedra sem quebrar item, mas requer aprovação final.
- Quantidade de sockets 0–4 é uma referência histórica, não decisão final.
- Raridades históricas Comum, Incomum, Rara, Épica, Lendária e Mítica ainda precisam de tabela de efeitos/probabilidades.
- Regras de vínculo/negociação após equipar, refinar ou inserir carta ainda não foram definidas.
- Aparência independente do item, desbloqueio de skins e comércio de cosméticos precisam de especificação.
- Inventário generoso está confirmado como direção; capacidade numérica e comportamento quando cheio permanecem pendentes.
- Drops offline de equipamento são permitidos, com tabela separada e probabilidades menores; os valores ainda precisam de simulação.
- Evitar pay-to-win, bots econômicos, duplicação, manipulação de mercado e inflação.

## 9. Próximas decisões de design

Ordem recomendada:

1. Definir slots de equipamento e categorias de armas/armaduras por classe.
2. Definir atributos primários/secundários e pools possíveis por slot.
3. Definir raridades e o que cada raridade pode adicionar.
4. Definir arquitetura de conjuntos e bônus.
5. Definir cartas, relíquias e sockets.
6. Definir refino, crafting, venda e desintegração.
7. Definir vínculo, negociação e mercado.
8. Criar simulação de oferta/demanda para drops online e offline.
9. Criar protótipo visual de inventário, paperdoll, comparação, coleção e mercado.

A decisão de tier por faixa de 100 níveis e a separação entre tier e raridade permanecem confirmadas. Todo o restante acima está classificado como proposta ou pendência até aprovação explícita.

# Atualização — Tier de equipamento e pesquisa comparativa inicial

Decisão de design confirmada em 15/11/2026:

## 1. Tier por faixa de nível do monstro — CONFIRMADO

O Tier representa a faixa de progressão/poder-base do equipamento e será determinado pelo nível do monstro que o dropou, em intervalos de 100 níveis:

| Nível do monstro | Tier do equipamento |
| --- | --- |
| 1–99 | T0 |
| 100–199 | T1 |
| 200–299 | T2 |
| 300–399 | T3 |
| 400–499 | T4 |
| 500–599 | T5 |

A regra continua em intervalos de 100 níveis. O tier do item é definido pela faixa de nível do monstro de origem, não pela raridade nem pelo nível atual do personagem que recebeu o drop.

## 2. Raridade — CONCEITO CONFIRMADO

Raridade é uma dimensão independente do Tier. Ela representa principalmente:

- Dificuldade/frequência de obtenção.
- Potencial de atributos adicionais, bônus e efeitos especiais.
- Valor de coleção e potencial de negociação.

Um item de raridade alta em T0 pode ser especial e raro, mas não deve automaticamente superar em poder-base um item comum de T2. O Tier orienta a faixa de poder/progressão; a raridade diferencia a qualidade e a singularidade do item dentro dessa faixa.

A lista histórica de raridades encontrada nos materiais é: Comum, Incomum, Rara, Épica, Lendária e Mítica. A lista é uma referência existente, mas sua adoção final e os efeitos mecânicos de cada categoria ainda precisam ser aprovados.

## 3. Auditoria dos materiais internos — achados

Fontes internas consultadas:

- [Sistemas, Atributos e Progressão](Sistemas,%20Atributos%20e%20Progress%C3%A3o%204889bf388ff14557ae419f9116ed97be.md)
- [Combate e Atributos](Combate%20e%20Atributos%209aa4edc99d214b369aaf73e6e470b22c.md)
- [Talune — RPG Systems, Classes, Skills & Talents](Talune%20%E2%80%94%20RPG%20Systems,%20Classes,%20Skills%20&%20Talents%20419a081c14188153a630d3229caf26c7.md)
- [Mercado e Economia](Mercado%20e%20Economia%20d9658d408b7e4dceae70bbba9e50c421.md)
- [Talune — Wiki do Jogo | MMORPG Idle Cooperativo](Talune%20%E2%80%94%20Wiki%20do%20Jogo%20MMORPG%20Idle%20Cooperativo%2072399fef8812476795f6cb67b3a27fe9.md)
- Quadro Project Talune no Miro: [https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

O material existente já registra:

- Seis raridades históricas: Comum, Incomum, Rara, Épica, Lendária e Mítica.
- Equipamentos com ID, nome, slot, classe compatível, nível requerido, raridade, atributos, bônus, efeitos especiais, sockets, refino e descrição.
- Seis atributos principais no rascunho atual: STR, AGI, VIT, INT, DEX e LUK.
- Slots fixos, comparação lado a lado do equipamento e filtro por classe.
- Cartas inseridas em sockets, com efeitos individuais e possibilidade de bônus por coleção.
- Refinamento registrado historicamente como +1 a +15, com falha consumindo a pedra sem quebrar o item. Há uma nota anterior conflitante de +1 a +10; deve prevalecer apenas uma regra depois de estudo.
- Mercado entre jogadores, taxas, venda a NPC e desintegração/sumidouros ainda precisam ser especificados.
- Os materiais contêm fórmulas de atributos e combate ainda provisórias; não transformar esses valores em atributos finais de itens sem consolidar o sistema de combate.

## 4. Pesquisa comparativa — primeira síntese

### Ulala: Idle Adventure

Padrões observados em guias comunitários:

- Progressão de equipamento simples e frequente, encaixada no ciclo idle de derrotar monstros, coletar equipamento e substituir peças.
- Aprimoramentos ligados aos slots, permitindo que o investimento no slot sobreviva à troca do item-base.
- Temperamento/rolagem de atributos secundários com escolhas por função (dano, cura, tanque).
- Auto-smelt para desmontar automaticamente equipamentos de baixo valor e converter o descarte em materiais.
- Clatter Cards: coleção/equipamento separado com sinergias por região/tipo e bônus por combinações de peças.

Lições para Talune: reduzir microgerenciamento do inventário; separar parte da progressão do slot do item específico; oferecer automação configurável; manter sistemas de coleção/sinergia como camada complementar, sem sobrecarregar cada drop.

Referências: [https://www.aayyy.com/ulala-idle-adventure/ulala-beginner-team-progression-guide](https://www.aayyy.com/ulala-idle-adventure/ulala-beginner-team-progression-guide) ; [https://www.aayyy.com/ulala-idle-adventure/ulala-hunter-build-guide/](https://www.aayyy.com/ulala-idle-adventure/ulala-hunter-build-guide/) ; [https://ulala.fandom.com/wiki/Clatter_Cards](https://ulala.fandom.com/wiki/Clatter_Cards)

### Ragnarok Online

Padrões observados:

- Identidade forte dos equipamentos por tipo, slot, requisitos, atributos e compatibilidade com builds.
- Cartas obtidas de monstros e encaixadas em equipamentos, com efeitos específicos contra raças, tamanhos, elementos ou condições.
- Refinamento que aumenta propriedades-base e pode envolver risco/custo conforme o nível e as regras do servidor.
- Encantamentos, grades e bônus de conjunto podem coexistir com cartas e refinamento, formando várias camadas de personalização.
- A combinação de arma, cartas, elemento e alvo cria preparação específica para monstros e chefes.

Lições para Talune: cartas com identidade de monstro e utilidade situacional podem transformar drops de criaturas em itens desejados; porém, limitar quantidade de camadas aleatórias por item para que o sistema continue legível.

Referências: [https://iro.ragnarokonline.com/news/updatedetail.aspx?id=420](https://iro.ragnarokonline.com/news/updatedetail.aspx?id=420) ; [https://iro.ragnarokonline.com/news/updatedetail.aspx?id=421](https://iro.ragnarokonline.com/news/updatedetail.aspx?id=421) ; [https://unlockxp.com/guides/ragnarok-online-equipment-and-card-guide](https://unlockxp.com/guides/ragnarok-online-equipment-and-card-guide)

### World of Warcraft

Padrões observados:

- Raridade/qualidade visual e nível de item são conceitos distintos; item level é uma medida aproximada de orçamento de atributos e poder.
- Itens distribuem orçamento entre atributos primários, secundários e efeitos; duas peças com mesmo nível de item podem ter utilidade diferente conforme classe/especialização.
- Trilhas de melhoria permitem elevar o nível de item com materiais e atividades de dificuldade progressiva.
- Conjuntos de classe ativam bônus por quantidade de peças equipadas, frequentemente em marcos como 2 e 4 peças.

Lições para Talune: mostrar poder-base e atributos com clareza; evitar que um número único de nível do item esconda a utilidade real; conjuntos devem oferecer decisões de build, não apenas bônus genéricos. A progressão T0/T1 de Talune será própria e não deve copiar o item level do WoW.

Referências: [https://warcraft.wiki.gg/wiki/Quality](https://warcraft.wiki.gg/wiki/Quality) ; [https://warcraft.wiki.gg/wiki/Item_level](https://warcraft.wiki.gg/wiki/Item_level) ; [https://www.wowhead.com/guide/the-war-within/gear-item-level-upgrade-system](https://www.wowhead.com/guide/the-war-within/gear-item-level-upgrade-system) ; [https://www.wowhead.com/guide/catalyst-the-war-within-crafting-tier-set](https://www.wowhead.com/guide/catalyst-the-war-within-crafting-tier-set)

### MU Online (referência adicional)

Padrões observados em guias de versões/servidores:

- Qualidade do item pode combinar base, nível de upgrade e opções especiais.
- Excellent: item com opções adicionais sorteadas, cuja combinação e quantidade afetam bastante seu valor.
- Ancient: itens pertencentes a conjuntos com bônus ativados ao equipar múltiplas peças.
- Socket: slots preenchidos com sementes/esferas que concedem atributos elementais e podem gerar bônus por sequência/combinação.
- As opções, refino e bônus de conjunto podem tornar itens de mesma base muito diferentes em valor e uso.

Lições para Talune: diferenciar itens com opções aleatórias de itens de conjunto; permitir combinações de sockets com efeitos planejados, mas evitar muitas camadas de RNG sobre o mesmo item.

Referências: [https://www.muonline.net/guides/mu-online-excellent-options/](https://www.muonline.net/guides/mu-online-excellent-options/) ; [https://mooclassic.com/wiki/guide-item-options](https://mooclassic.com/wiki/guide-item-options) ; [https://idle.mu/en/tutorials/socket-and-380-items](https://idle.mu/en/tutorials/socket-and-380-items)

## 5. Direção de design recomendada — PROPOSTA, NÃO APROVADA

Para Talune, estudar um modelo modular com dimensões separadas:

1. Base do item: família, tipo, slot, identidade visual, classe/requisitos e atributos-base.
2. Tier: faixa de poder determinada pelo nível do monstro de origem.
3. Raridade: frequência de obtenção e orçamento/quantidade de propriedades especiais.
4. Atributos: primários e secundários, com limites e pesos por slot.
5. Propriedades especiais: efeitos únicos, procs ou bônus condicionais, reservados a itens de maior raridade.
6. Conjuntos: bônus ao equipar combinações específicas, com metas de 2/3/4 peças a estudar.
7. Cartas/sockets: camada de personalização separada, com efeitos ligados a monstros, elementos, raças ou estilos de combate.
8. Aprimoramento: refino/upgrade com custos, materiais, limites e risco claramente definidos.
9. Automação: filtros para vender ou desintegrar itens por Tier, raridade, slot e atributos, com proteção para itens equipados/favoritos/bloqueados.
10. Economia: itens negociáveis, materiais de melhoria, venda a NPC e sumidouros para controlar inflação e oferta.

Não aprovar ainda número de slots, raridades finais, chance de drop, quantidade de atributos, valores, bônus de conjuntos, sockets, taxas de refino ou regras de negociação. Precisam de comparação mais profunda e simulação.

## 6. Próxima etapa de pesquisa

Aprofundar cada referência separadamente e transformar os achados em uma matriz de decisão para Talune: o que adotar, adaptar ou evitar em raridades, atributos, equipamentos por slot, armas por classe, conjuntos, cartas/sockets, melhorias, automação, drops online/offline e negociação.

## Objetivo

Definir a geração, o valor e os sumidouros de itens para manter a progressão e a economia sustentáveis.

## Raridades iniciais

O Miro lista seis raridades: **Comum, Incomum, Rara, Épica, Lendária e Mítica**. Comuns podem ser vendidas a NPC; raridades maiores destacam-se visualmente e sustentam metas de coleção e mercado. Probabilidades e atributos por raridade ainda são parâmetros de balanceamento, não regras finais. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Ciclo do item

`Drop → identificar raridade e atributos → equipar, vender a NPC, refinar ou listar no mercado`

## Refinamento e sockets

O Miro registra refinamento de +1 a +15: falha consome a pedra, mas não quebra o item. Peitoral e arma podem ter 0–4 sockets de carta; extração usa alicate com taxa. Isso substitui a hipótese anterior de quebra do item; custos, taxas, chances e receitas continuam a validar. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Regras a fechar

- Probabilidade de cada raridade por andar e por tipo de inimigo.
- Faixas e combinações possíveis de atributos aleatórios.
- Regras de vínculo: itens negociáveis, equipados ou refinados podem ser vendidos?
- Custos, níveis de refinamento, chance de sucesso e consequência da falha.
- Valor base de venda a NPC e relação entre raridade, utilidade e preço no mercado.