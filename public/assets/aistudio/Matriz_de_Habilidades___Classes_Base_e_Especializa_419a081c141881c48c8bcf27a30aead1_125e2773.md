# Matriz de Habilidades — Classes Base e Especializações

## Atualização aprovada — marcos iniciais de progressão (15/11/2026)

- **Nível 5:** escolha de uma das quatro classes-base: Guerreiro, Caçador, Clérigo ou Mago. Substitui o nível 10 histórico.
- **Nível 50:** aproximadamente metade dos slots ativos de habilidades estará desbloqueada.
- **Nível 100:** todos os slots ativos estarão desbloqueados e será liberada a escolha de especialização. Substitui o nível 40 histórico.
- A curva intermediária será construída junto com cada mecânica. O desbloqueio gradual funciona como tutorial jogável e evita apresentar uma avalanche de sistemas no início.
- Quantidade total de slots e distribuição exata dos marcos intermediários continuam em aberto.

**Estado:** marcos 5/50/100 aprovados; curva detalhada em desenvolvimento.

## Decisão aprovada — desbloqueio progressivo e ordem das habilidades (15/11/2026)

O usuário aprovou o desbloqueio progressivo dos slots de habilidades ativas como parte da progressão e do tutorial jogável de Talune.

### Decisões confirmadas

- Os slots ativos serão desbloqueados gradualmente ao longo da progressão do personagem. O jogador não receberá todas as opções e sistemas de uma só vez.
- O desbloqueio gradual deve acompanhar o aprendizado: conforme sobe de nível e se familiariza com o combate automático, o jogador recebe novas possibilidades de configuração e aprimoramento.
- A progressão deve introduzir conteúdo em etapas, reduzindo a sobrecarga inicial e mantendo objetivos e novidades ao longo do jogo.
- A ordem/posição das habilidades no loadout influencia a sequência de execução no combate automático. O jogador organiza a sequência para definir sua estratégia.

### Ainda não definido

- Quantidade total de slots ativos e em quais níveis/marcos cada slot será desbloqueado. Quatro slots do Ulala continuam sendo apenas referência, não um número aprovado para Talune.
- Como o executor percorre a sequência quando uma habilidade está em recarga, sem alvo válido, sem recurso ou com condição de uso não atendida.
- Se a sequência funciona como prioridade cíclica, fila estrita ou prioridade com condições/fallbacks.
- Regras de desbloqueio e ativação de passivas permanecem em estudo separado.

### Diretriz de experiência e combate automático

A ordem deve ser uma ferramenta tática compreensível, não uma trava que paralise o personagem. Como princípio para avaliação, uma habilidade indisponível não deveria impedir automaticamente o uso de outras habilidades prontas; a regra exata de avanço/fallback na sequência será especificada antes da implementação.

**Estado:** desbloqueio progressivo e influência da ordem de execução aprovados. Quantidade de slots, marcos de desbloqueio e algoritmo de execução permanecem em aberto.

---

## Confirmação — especializações do Clérigo e estudo de slots (15/11/2026)

### Estrutura do Clérigo aprovada

O usuário aprovou a reorganização das especializações do Clérigo:

- **Sacerdote:** cura direta e de alto impacto, cura em grupo, escudos, purificação e recuperação emergencial.
- **Druida:** cura gradual/ao longo do tempo, regeneração, efeitos persistentes, controle natural e sustentação prolongada.
- O antigo Inquisidor deixa de ser uma especialização independente. Habilidades sagradas compatíveis poderão ser fundidas ou retrabalhadas no Sacerdote; ideias que não se encaixem podem ser descartadas ou reaproveitadas futuramente.
- Ressurreição, caso exista, será somente Ultimate. Não será habilidade comum.
- A diferença essencial entre as especializações é o ritmo de suporte: Sacerdote responde a dano e perigo imediato; Druida prepara e sustenta o grupo ao longo do tempo.

### Slots de habilidades — decisão adiada para pesquisa

O usuário decidiu que a quantidade de slots ativos e o funcionamento das passivas serão estudados separadamente. Não fixar cinco slots nem assumir que todas as passivas ficam automaticamente ativas.

Referência inicial: Ulala: Idle Adventure usa quatro slots de habilidades ativas por personagem, desbloqueados progressivamente, e permite organizar a ordem de execução. Isso é uma referência de gênero, não um número obrigatório para Talune.

Fontes consultadas:

- [WriterParty — Ulala skill use and upgrade](https://writerparty.com/party/ulala-idle-adventure-walkthrough-tips-cheats-and-strategy-guide-page-2/): descreve desbloqueio progressivo até quatro slots de habilidades.
- [AAYYY — Ulala beginner team and progression guide](https://www.aayyy.com/ulala-idle-adventure/ulala-beginner-team-progression-guide): discute configuração dos quatro slots e ordem de execução para encontros.
- [Gamezebo — Ulala beginner guide](https://www.gamezebo.com/walkthroughs/ulala-idle-adventure-beginners-guide-tips-cheats-and-strategies/): também registra quatro habilidades equipáveis.

A pesquisa futura deve comparar:

1. Quantidade ideal de slots ativos para combate automático de Talune, considerando variedade de builds, clareza visual/mobile e balanceamento.
2. Se slots são desbloqueados progressivamente ou todos ficam disponíveis em determinado marco.
3. Se passivas aprendidas ficam sempre ativas, se exigem seleção/equipamento ou se usam slots próprios.
4. Se o loadout pode mudar por chefe/expedição e quando alterações são permitidas.
5. Como a ordem de execução, prioridade, cooldown, Haste e condições automáticas interagem com o número de slots.
6. Se faz sentido ter loadouts distintos para farm comum e chefes, como referência de jogos idle.
7. Impacto de quatro personagens na Party e de builds homogêneas, sem exigir composição fixa.

**Estado:** pesquisa futura necessária. Quatro slots é referência documentada do Ulala; número final e regras de passivas permanecem em aberto.

## Atualização de decisões — revisão de classes e slots de habilidades (15/11/2026)

### Diretrizes aprovadas pelo usuário

- As matrizes propostas das quatro classes-base estão aprovadas como ponto de partida para o catálogo. Isso não significa que todos os números, efeitos ou a lista final estejam fechados.
- Cura por ataque (lifesteal, cura por hit ou efeitos equivalentes) fica em aberto para balanceamento posterior, quando ASPD, frequência de ataques e sobrevivência da Party estiverem mais definidos.
- Remover qualquer imunidade total a dano. Nenhuma habilidade deve tornar o personagem completamente imune a dano.
- Proteções contra efeitos de controle podem existir de forma temporária e específica (por exemplo, proteção contra atordoamento), sem conceder imunidade a dano.
- Escudos podem absorver uma quantidade limitada de dano, com duração/capacidade e regras de renovação a definir.
- Ressurreição só pode existir como Ultimate; remover ressurreição de habilidades comuns.
- A seleção de habilidades ativas equipadas será limitada, inspirada no modelo de configuração tática de Ulala. O número exato de slots ainda será definido; cinco slots ativos é uma hipótese de trabalho citada na discussão, não uma decisão final.
- O catálogo total de habilidades desbloqueadas deve ser maior que o conjunto equipado simultaneamente. A escolha de skills deve criar builds e estratégias diferentes, não uma barra lotada de habilidades redundantes.

### Princípio de arquitetura: catálogo amplo, loadout limitado

O personagem poderá desbloquear e manter diversas habilidades disponíveis, mas equipará apenas um número limitado de habilidades ativas para cada combate/expedição. A configuração define quais habilidades a IA de combate automático poderá usar e em qual ordem/prioridade, respeitando condições de uso e regras do servidor.

Passivas devem ser avaliadas separadamente das habilidades ativas. Não assumir que ocupam os mesmos slots; quantidade e regras de passivas equipadas/desbloqueadas continuam em aberto.

### Regra para habilidades-base após a especialização

Não decidir que todas as habilidades-base permanecem nem que todas são substituídas. Auditar cada habilidade individualmente, comparando sua função com o catálogo da especialização:

1. **Manter disponível:** a habilidade-base oferece uma função distinta e ainda útil, sem duplicar a especialização.
2. **Evoluir:** a especialização oferece uma versão avançada da mesma família, com identidade e efeito melhorados. A versão antiga pode continuar disponível apenas se houver razão estratégica para escolher a versão mais simples/barata/rápida; caso contrário, a versão especializada a substitui no catálogo equipado.
3. **Substituir/fundir:** duas habilidades fazem praticamente a mesma coisa e a versão especializada é uma evolução direta. Evitar ocupar espaço no catálogo com cópias quase idênticas.
4. **Manter como alternativa de build:** habilidades parecidas podem coexistir quando há uma troca real de estratégia (ex.: dano imediato versus DoT, cura direta versus cura gradual, dano individual versus área, escudo próprio versus proteção de grupo).

Critério central: cada habilidade que disputa um slot ativo precisa justificar a escolha por uma função, condição de uso, cadência, alvo ou sinergia realmente diferente. O jogador deve escolher cinco habilidades (se esse número for aprovado) por estratégia, não por obrigação de equipar a versão mais forte de tudo.

### Revisão das especializações do Clérigo — proposta para discussão

A divisão histórica Sacerdote Divino / Inquisidor ficou sobreposta: ambos usam magia sagrada e compartilham cura, proteção, dano sagrado e utilidade. Proposta: fundir os conceitos em uma especialização sagrada mais coesa e criar Druida como segunda especialização, com identidade mecânica própria.

**Especialização 1 — Sacerdote (nome provisório; fusão de Sacerdote Divino + elementos compatíveis do Inquisidor)**

- Identidade: suporte sagrado focado em cura direta, cura em grupo, escudos, purificação e proteção.
- Pode manter dano sagrado moderado e ferramentas de interrupção/penitência como opções situacionais, mas não deve competir com uma classe DPS dedicada.
- Ressurreição, se aprovada após balanceamento, será exclusivamente a Ultimate.
- Conceitos legados a revisar/fundir: Cura Maior, Cura em Grupo, Renovar, Santuário, Palavra de Poder: Escudo, Prece de Cura, Purificação Sagrada, Hino da Esperança, Luz Guardiã, Círculo de Cura, Chama Sagrada, Julgamento, Penitência, Expiação e Tribunal Divino (Ultimate). Não tratar esta lista como kit final.

**Especialização 2 — Druida (nova proposta)**

- Identidade: suporte natural flexível, com cura gradual, regeneração, controle de inimigos comuns, proteção natural e dano ao longo do tempo.
- Diferenciar do Sacerdote por preparação e efeitos persistentes: HoTs, sementes/marcas naturais, raízes/retardamento, espinhos/retaliação e possíveis invocações naturais.
- Não deve ser apenas “outro curandeiro”: seu diferencial deve estar na combinação de sustentação gradual, controle e efeitos persistentes, com decisões de timing diferentes das curas diretas do Sacerdote.
- Ressurreição não é parte do kit comum do Druida. Invocações, transformações e formas animais ficam como possibilidades a avaliar, não decisões aprovadas.

**Destino do antigo Inquisidor:** deixar de existir como especialização independente nesta proposta. Suas habilidades sagradas compatíveis são redistribuídas/retrabalhadas no Sacerdote; conceitos que não contribuam para a identidade do Sacerdote podem ser descartados ou reaproveitados futuramente em outro conteúdo. Esta reorganização ainda precisa da aprovação do usuário antes de substituir oficialmente a matriz final.

### Auditoria necessária nas quatro classes

Revisar todas as classes e especializações em uma matriz comparativa com estas colunas: habilidade; classe-base/especialização; função; alvo; cooldown/impacto; interação com ASPD/Haste; habilidade-base semelhante; decisão (manter, evoluir, fundir, substituir ou alternativa); motivo para ocupar um slot ativo.

A auditoria deve identificar:

- duplicatas literais e duplicatas funcionais;
- habilidades que parecem diferentes no nome, mas fazem a mesma coisa;
- habilidades que só justificam coexistência por terem trade-offs reais;
- skills que são passivas e não devem competir por slots ativos;
- skills situacionais que podem ser fortes contra certos chefes sem serem obrigatórias em toda build.

### Pontos ainda em aberto

- Quantidade final de slots ativos (cinco é apenas hipótese de trabalho).
- Quantidade e regras de slots/passivas.
- Se loadouts podem ser alterados livremente fora de combate e quais restrições existem durante um encontro.
- Nome final e catálogo definitivo das especializações do Clérigo.
- Se a Ultimate do Sacerdote terá ressurreição ou outra forma de recuperação extrema; balanceamento e regras de uso ainda precisam ser definidos.
- Regras numéricas de escudos e proteção contra controle.
- Cura por ataque e sua relação com ASPD.

Este documento consolida a pesquisa interna e externa para estruturar as matrizes de habilidades de Talune. Ele serve como base de design para revisão conjunta; não é uma autorização para implementar números, cooldowns, custos ou efeitos sem aprovação.

**Estados usados**

- **Direção confirmada:** decisão já aprovada pelo usuário.
- **Proposta de matriz:** arquitetura e nomes sugeridos para discussão.
- **Legado a auditar:** habilidade existente no catálogo histórico de 120 skills; preservar como referência, não assumir como balanceada ou final.

## 1. Decisões que condicionam o sistema

- Quatro classes-base: Guerreiro, Caçador, Clérigo e Mago, escolhidas no nível 10.
- Cada jogador desenvolve somente seu próprio personagem. A composição da Party é livre; nenhuma classe ou função é obrigatória.
- As oito especializações históricas são: Paladino e Berserker (Guerreiro); Atirador de Elite e Assassino (Caçador); Sacerdote Divino e Inquisidor (Clérigo); Arquimago e Bruxo (Mago).
- ASPD controla exclusivamente a frequência dos ataques básicos.
- Haste afeta todas as habilidades, reduzindo recargas. A porcentagem de Haste e os limites ainda serão definidos.
- Categorias gerais de habilidade: dano padrão; interrupção/taunt; buffs/debuffs; Ultimate. Cura, escudo, controle e invocação são funções/efeitos que podem aparecer nessas categorias.
- Equipamentos poderão ter bônus percentuais com faixa mínima e máxima. O valor pode ser obtido aleatoriamente dentro da faixa e, em princípio, melhorado por um sistema de aprimoramento. Faixas por atributo, método de melhoria, custos, limites e risco ainda precisam ser projetados.
- A documentação antiga sugere especialização no nível 40 e slots ativos nos níveis 1–9 (2), nível 20 (3) e nível 40 (4). São marcos históricos, ainda sujeitos à aprovação final.

## 2. Pesquisa interna: o que já existe

Foram localizados três documentos relevantes:

1. **Classes, Skills e Templo das Artes Mágicas** — contém progressão histórica, oito especializações e um catálogo de 120 habilidades.
2. **Talune — Skill Catalogue (120 Legacy Skills)** — transcreve 15 habilidades por especialização: 11 ativas, 3 passivas e 1 suprema em cada uma.
3. **Talune — RPG Systems, Classes, Skills & Talents** — define o esquema de dados esperado para uma skill e reforça que números antigos não são balanceamento final.

O catálogo legado tem boas ideias e cobertura ampla: dano direto, AoE, DoT, cura, escudo, buff, debuff, controle, interrupção, provocação, invocação e habilidades de emergência. Porém, ele mistura efeitos com unidades diferentes e alguns efeitos potencialmente problemáticos em chefes. Exemplos que exigem revisão: imunidade total a dano, ressurreição, stun longo, medo/fuga, execução com reset de cooldown, procs que repetem 100% do dano e Ultimate que anula o próximo AoE do chefe.

**Conclusão interna:** não precisamos começar do zero. Devemos preservar o catálogo de 120 como banco de conceitos, mas primeiro criar kits-base coerentes e depois auditar as oito especializações para remover redundâncias e clarificar os papéis.

## 3. Pesquisa das quatro referências

### Ragnarok Online — identidade por classe, atributos e utilidade

O Swordsman combina ataques de arma, resistência e ferramentas de proteção/controle. O conjunto de referência inclui Bash, Magnum Break, Provoke, Endure e passivas de maestria/recuperação. Isso mostra como a classe pode ter dano direto, AoE, provocação e sobrevivência sem depender de uma habilidade única. A estrutura de classes evolutivas também demonstra como uma classe-base pode estabelecer uma linguagem que depois se especializa.

**Aplicação a Talune:** manter a fantasia do Guerreiro resistente e da progressão de classe; não copiar fórmulas, tempos ou a quantidade de skills do Ragnarok. Preservar ASPD como identidade de ataques básicos, separada de Haste.

### Ulala: Idle Adventure — kits compactos para combate automático

As classes possuem conjuntos de habilidades que combinam dano, cura, proteção, buff e controle. O Gladiator, por exemplo, mistura provocação, mitigação, cura própria, proteção de aliados, interrupção e dano; o Hunter oferece dano, marcação, disparos e armadilhas; o Druid combina cura contínua e cura direcionada. A seleção de quatro habilidades por personagem em combate cria uma decisão importante de configuração para cada chefe.

**Aplicação a Talune:** habilidades devem ter prioridade e condições de uso compreensíveis para a IA/combate automático. Cada skill precisa ter um propósito claro na rotação. A quantidade total desbloqueada pode ser maior que a quantidade equipada simultaneamente.

### World of Warcraft — rotação, identidade de especialização e utilidade de grupo

WoW diferencia ataques de rotação, cooldowns importantes, defensivos, interrupções, buffs de grupo e debuffs. A documentação de design da Blizzard observa que cerca de quatro habilidades rotacionais costuma ser um bom núcleo de leitura, sem significar que cada classe deva ter apenas quatro. As especializações reforçam uma identidade de gameplay distinta e a utilidade deve complementar, não apagar, o papel principal.

**Aplicação a Talune:** cada especialização deve ter um núcleo de 3–5 habilidades que definem sua rotação, além de utilidades situacionais e uma Ultimate. Interrupção precisa respeitar janela e imunidade do chefe. Não permitir controle permanente por empilhamento de stun/silêncio.

### MU Online — habilidades emblemáticas, evolução e builds

MU reforça a identidade através de habilidades reconhecíveis, progressão de classe e caminhos de build: Dark Knight com ataques corpo a corpo/AoE e buffs de sobrevivência; Dark Wizard com feitiços de área; Fairy Elf com disparos, cura e buffs de grupo. O aprendizado por livros/orbes e a expansão do conjunto após evolução também são referências úteis.

**Aplicação a Talune:** habilidades icônicas e reconhecíveis ajudam a criar identidade e objetivos de progressão. Evitar importar a complexidade acumulada de temporadas e árvores extensas de MU para o primeiro MVP.

## 4. Arquitetura recomendada para as habilidades

Separar quatro dimensões que não devem ser confundidas:

1. **Tipo de aquisição:** habilidade-base, habilidade de especialização, passiva, Ultimate ou talento futuro.
2. **Categoria de recarga:** dano padrão; interrupção/taunt; buff/debuff; Ultimate. Haste afeta todas.
3. **Função mecânica:** dano, cura, escudo, controle, ameaça, suporte, invocação, mobilidade/utilidade.
4. **Comportamento de seleção:** alvo único, inimigos múltiplos, área, aliado com menor HP, squad, usuário, alvo em conjuração, alvo marcado.

A categoria de recarga descreve o impacto e a cadência, não a função. Exemplo: uma cura comum pode ter recarga padrão; uma grande proteção de grupo pode ser uma habilidade de suporte de recarga alta; uma interrupção pode ser de recarga moderada; uma Ultimate pode causar dano, curar ou proteger.

### Regras de comportamento automático

Cada habilidade precisa de:

- condição de uso (ex.: aliado abaixo de determinado percentual de HP, chefe conjurando, alvo com marca/DoT);
- prioridade em relação às demais skills;
- regra de alvo e fallback se não houver alvo válido;
- regra de uso contra chefes e inimigos imunes;
- política de sobreposição (não desperdiçar buff/DoT idêntico já ativo, salvo regra explícita);
- política de recurso/cooldown;
- comportamento se o personagem estiver morto, controlado ou sem recurso.

O jogador deve poder alterar taticamente a ordem/prioridade de habilidades já desbloqueadas. O servidor valida a configuração e executa o combate; a UI apenas apresenta os resultados.

## 5. Matrizes propostas das quatro classes-base

As habilidades abaixo são propostas de kit-base para a fase entre a escolha de classe no nível 10 e a especialização posterior. Não são números finais e não substituem as habilidades exclusivas das especializações.

### Guerreiro — combate físico, resistência e controle de ameaça

**Fantasia:** combatente de linha de frente que combina ataques básicos fortes, defesa, proteção e controle de inimigos. Não deve ser automaticamente obrigado a tankar; a especialização e a build definem quanto investe em proteção ou dano.

| Habilidade proposta | Tipo/categoria | Função e comportamento |
| --- | --- | --- |
| Golpe de Combate | Ativa — dano padrão | Ataque físico de alvo único; skill simples da rotação e boa sinergia com builds de ASPD. |
| Impacto de Escudo | Ativa — dano/controle | Dano moderado e chance/efeito curto de interromper inimigo comum; contra chefe, só interrompe cast elegível dentro da janela. |
| Provocação | Ativa — taunt | Eleva ameaça e direciona ataques elegíveis ao Guerreiro por uma duração; chefes podem ter regras próprias de ameaça. |
| Postura Defensiva | Ativa — buff defensivo | Reduz dano recebido por janela curta; pode priorizar o próprio Guerreiro. |
| Golpe em Arco | Ativa — dano em área | Ataque físico em área para farm/waves, com dano por alvo controlado. |
| Grito de Batalha | Ativa — buff | Aumenta temporariamente o poder ofensivo do grupo; evitar acumular com outro buff idêntico. |
| Vontade de Ferro | Passiva | Melhora resistência a controle ou mitigação; definir um efeito principal, não vários bônus pequenos. |
| Contra-ataque | Passiva ou ativa condicional | Reage a bloqueio/ataque recebido com dano; limitar frequência para não escalar sem controle com ASPD inimiga. |

**Diferenciação futura:** Paladino transforma defesa/ameaça em proteção sagrada e suporte; Berserker transforma sobrevivência e perda de HP em agressão, roubo de vida e dano contínuo.

### Caçador — precisão, ataques à distância e preparação do alvo

**Fantasia:** especialista físico de alcance, precisão e dano consistente. A classe-base começa à distância; a especialização Assassino pode romper deliberadamente essa regra e se tornar uma build de curta distância.

| Habilidade proposta | Tipo/categoria | Função e comportamento |
| --- | --- | --- |
| Disparo Rápido | Ativa — dano padrão | Disparo de baixo custo/recarga, núcleo da rotação e sinergia com precisão. |
| Tiro Preciso | Ativa — dano padrão | Disparo mais forte, prioriza alvo marcado ou alvo de maior ameaça/dificuldade. |
| Marcar Alvo | Ativa — debuff | Marca um inimigo para aumentar o dano recebido ou a prioridade de foco da Party. |
| Disparo Perfurante | Ativa — dano em linha | Atinge múltiplos inimigos alinhados; útil para waves e alvos agrupados. |
| Armadilha de Contenção | Ativa — controle | Reduz movimento/ação de inimigo comum; contra chefe pode aplicar apenas efeito reduzido ou nenhum controle. |
| Recuo Tático | Ativa — utilidade defensiva | Reduz a chance de ser atingido ou mitiga o próximo ataque; não depende de movimentação manual. |
| Mira Firme | Passiva | Recompensa sequência de ataques básicos ou tempo sem trocar de alvo; não deve punir excessivamente o combate automático. |
| Olho de Águia | Passiva | Melhora precisão e/ou chance crítica, escolhendo um foco principal para evitar excesso de atributos. |

**Diferenciação futura:** Atirador de Elite amplifica precisão, crítico, marcação e ataques de longo alcance; Assassino troca alcance por mobilidade simulada, venenos, execução e esquiva.

### Clérigo — cura, proteção e sustentação do grupo

**Fantasia:** suporte sagrado que mantém aliados vivos, remove efeitos negativos e pode escolher uma rota de dano sagrado na especialização. Cura não deve ser automática e indiscriminada: precisa de seleção por HP, gravidade e ameaça.

| Habilidade proposta | Tipo/categoria | Função e comportamento |
| --- | --- | --- |
| Luz Restauradora | Ativa — cura padrão | Cura um aliado prioritário, normalmente o personagem com menor HP percentual ou em risco iminente. |
| Renovação | Ativa — cura ao longo do tempo | Cura gradual em um aliado; evita desperdiçar cura instantânea quando há dano previsível. |
| Escudo de Fé | Ativa — escudo | Absorve parte do próximo dano ou uma quantidade por duração; não acumula infinitamente. |
| Prece Coletiva | Ativa — cura de grupo | Cura moderada em todos os aliados; IA usa quando múltiplos membros precisam. |
| Purificação | Ativa — utilidade | Remove um debuff removível de um aliado ou do grupo; cada efeito deve declarar se é purificável. |
| Bênção | Ativa — buff | Aumenta temporariamente sobrevivência ou poder do grupo; escolher um efeito claro para o kit-base. |
| Graça Divina | Passiva | Melhora eficiência de cura ou gera pequena cura condicional; evitar cura infinita baseada em procs. |
| Fé Inabalável | Passiva | Melhora resistência do Clérigo a interrupção/controle durante cura ou suporte. |

**Diferenciação futura:** Sacerdote Divino aprofunda cura, escudos, purificação e ressurreição; Inquisidor converte fé em dano sagrado, debuffs, interrupções e cura por contribuição ofensiva.

### Mago — dano mágico, área e controle arcano

**Fantasia:** conjurador de dano mágico com domínio de área, elementos/efeitos arcanos e controle. Deve ter janelas de dano mais explosivo, equilibradas por recarga, custo e possíveis tempos de conjuração.

| Habilidade proposta | Tipo/categoria | Função e comportamento |
| --- | --- | --- |
| Míssil Arcano | Ativa — dano padrão | Projétil de alvo único; núcleo confiável da rotação. |
| Explosão Arcana | Ativa — dano em área | Dano mágico em múltiplos inimigos, especialmente útil em waves. |
| Lança Elemental | Ativa — dano padrão | Golpe mágico de maior impacto contra um alvo; pode receber identidade visual elemental sem criar tabela elemental obrigatória. |
| Nova Congelante | Ativa — controle | Reduz/retarda inimigos comuns; contra chefe, controle limitado e sem stun permanente. |
| Queimadura Arcana | Ativa — debuff/DoT | Aplica dano ao longo do tempo; definir regra de atualização/renovação para não multiplicar DoTs sem limite. |
| Barreira de Mana | Ativa — escudo | Converte parte do poder mágico em proteção para o Mago ou um aliado. |
| Foco Arcano | Passiva | Melhora dano mágico ou eficiência de recurso, com um efeito principal. |
| Eco de Mana | Passiva | Interação condicional com skills mágicas; limitar repetição/procs para não multiplicar dano e eventos sem controle. |

**Diferenciação futura:** Arquimago especializa dano explosivo, área, barreiras e manipulação de tempo; Bruxo aprofunda DoTs, maldições, drenagem de vida e invocações.

## 6. Matrizes das oito especializações — catálogo legado localizado

O catálogo histórico tem 15 habilidades por especialização. A lista abaixo mantém os nomes encontrados e organiza a identidade pretendida. Todos os efeitos, números, recargas, custos e bônus de raridade continuam pendentes de auditoria.

| Especialização | Identidade de build | Habilidades do catálogo legado |
| --- | --- | --- |
| Paladino | Tank sagrado, proteção, ameaça e suporte | Martelo da Justiça; Golpe Sagrado; Escudo do Vingador; Provocação Sagrada; Escudo Divino; Imposição de Mãos; Aura de Devoção; Consagração; Bênção de Proteção; Julgamento da Luz; Sacrifício; Muralha de Fé (passiva); Bloqueio Aprimorado (passiva); Luz Persistente (passiva); Bastião Celestial (Ultimate). |
| Berserker | Guerreiro agressivo, risco/recompensa, roubo de vida | Fúria Sangrenta; Redemoinho; Rugido Desafiador; Último Suspiro; Golpe Sanguinário; Machadada Brutal; Investida; Ferida Aberta; Pele de Pedra; Grito de Guerra; Banquete de Sangue; Contra-ataque Selvagem; Sede de Sangue (passiva); Couro Grosso (passiva); Avatar da Carnificina (Ultimate). |
| Atirador de Elite | DPS à distância, crítico, precisão e marcação | Tiro Mortal; Marcar Alvo; Disparo Perfurante; Rajada Tripla; Chuva de Flechas; Tiro Concussivo; Flecha Explosiva; Armadilha de Gelo; Foco do Caçador; Recuo Tático; Tiro na Cabeça; Mira Firme (passiva); Olho de Águia (passiva); Munição Rúnica (passiva); Saraivada Celestial (Ultimate). |
| Assassino | DPS de curta distância, veneno, esquiva e execução | Golpe Furtivo; Lâmina Envenenada; Passo das Sombras; Execução; Lâminas Gêmeas; Nuvem Tóxica; Golpe na Garganta; Bomba de Fumaça; Dança das Lâminas; Marca da Morte; Adrenalina; Venenos Letais (passiva); Reflexos Felinos (passiva); Instinto Assassino (passiva); Mil Cortes (Ultimate). |
| Sacerdote Divino | Cura, escudo, purificação e recuperação de aliados | Cura Maior; Cura em Grupo; Renovar; Ressurreição; Santuário; Palavra de Poder: Escudo; Prece de Cura; Purificação Sagrada; Hino da Esperança; Luz Guardiã; Círculo de Cura; Graça Divina (passiva); Fonte de Mana (passiva); Misericórdia (passiva); Milagre (Ultimate). |
| Inquisidor | Dano sagrado híbrido, interrupção e debuffs | Chama Sagrada; Julgamento; Silenciar; Penitência; Marca da Heresia; Expiação; Fogo Purificador; Correntes da Fé; Lança de Luz; Fervor; Confissão; Dogma (passiva); Zelo (passiva); Vigília Inabalável (passiva); Tribunal Divino (Ultimate). |
| Arquimago | Burst mágico, AoE, controle e escudos arcanos | Explosão do Piromante; Explosão Arcana; Meteoro; Barreira de Mana; Distorção Temporal; Nova de Gelo; Corrente de Raios; Míssil Arcano; Tempestade de Fogo; Pilar de Chamas; Teleporte Arcano; Sobrecarga Arcana (passiva); Mente Ágil (passiva); Eco Arcano (passiva); Cataclismo (Ultimate). |
| Bruxo | DoT, maldições, drenagem e invocação | Seta Sombria; Corrupção; Drenar Vida; Maldição de Fraqueza; Invocar Diabrete; Agonia; Medo; Pacto de Sangue; Chuva Infernal; Maldição de Lentidão; Explosão de Almas; Invocar Guardião Abissal; Mestre das Maldições (passiva); Sifão de Almas (passiva); Apocalipse Sombrio (Ultimate). |

## 7. Auditoria de design: riscos e ajustes necessários

1. **Redundância entre classe-base e especialização:** habilidades como Míssil Arcano, Explosão Arcana, Barreira de Mana, Marcar Alvo e Recuo Tático aparecem no kit-base proposto e no catálogo legado. A versão de especialização deve evoluir, modificar ou substituir a versão-base; não entregar duas cópias idênticas.
2. **Interrupção versus stun:** interrupção de cast de chefe é uma função tática própria. Stun, medo, silêncio e congelamento não devem ser equivalentes. Chefes precisam de janelas e imunidades explícitas.
3. **Taunt e composição livre:** taunt deve controlar ameaça de alvos elegíveis, mas não pode tornar uma composição com Guerreiro obrigatória nem invalidar mecânicas especiais de chefe.
4. **ASPD e procs:** efeitos por ataque, contra-ataques, venenos e cura por hit precisam de limites internos ou escalonamento. ASPD alta não pode multiplicar cura, dano extra, recursos ou eventos de servidor sem orçamento.
5. **Haste e cooldowns:** Haste reduz recargas de todas as habilidades, inclusive Ultimates. O balanceamento virá de recarga-base, potência e possíveis limites por skill/categoria; percentual ainda não definido.
6. **Curas e escudos:** definir prioridade de alvo, overheal, acumulação, conversão em escudo e comportamento em alvo morto. Ressurreição deve ser rara e explícita, não implícita em cura normal.
7. **DoTs e invocações:** definir limite de instâncias, duração, atualização, propriedade do dano e cálculo offline. Invocações não podem gerar drops nem recompensas independentes.
8. **Buffs e debuffs:** definir se efeitos iguais renovam, substituem, acumulam ou usam o maior valor. Evitar multiplicadores multiplicativos descontrolados.
9. **Raridade da skill:** o catálogo legado escala os números por raridade Comum–Mítica. Isso precisa ser confrontado com a economia, coleção e progressão; raridade não deve tornar uma habilidade obrigatória por sorteio nem converter o combate em pay-to-win.
10. **Ultimate:** deve ser uma habilidade de grande impacto e identidade de classe, com recarga alta. Haste pode reduzi-la, mas o seu impacto deve continuar especial.

## 8. Estrutura de dados recomendada por habilidade

- skill_id estável e nome localizado;
- classe_base e specialization_id (quando aplicável);
- estágio de progressão e requisitos;
- tipo (ativa, passiva, Ultimate);
- categoria de recarga;
- função mecânica e tags;
- alvo, alcance lógico e regra de seleção;
- fórmula, atributo-base, unidade e limites;
- duração, cooldown-base, custo e recurso;
- efeitos e prioridade de resolução;
- stacking_policy e regras de renovação;
- boss_rules (imunidade, redução, janela de interrupção);
- ai_conditions, ai_priority e fallback;
- limites de proc e interações com ASPD/Haste;
- regras offline e determinismo;
- ícone, animação, VFX, texto de UI;
- versão, telemetria e testes automatizados.

## 9. Proposta de escopo inicial para protótipo

Não implementar as 120 habilidades de uma vez. Recomenda-se um protótipo vertical com:

- 4 classes-base, cada uma com 4 habilidades ativas essenciais e 1 passiva;
- 2 especializações de cada classe, com 3 habilidades representativas por especialização;
- 1 Ultimate por especialização em fase posterior de teste;
- um chefe com uma habilidade interrompível, uma área anunciada e uma fase de pressão;
- testes com composições homogêneas e mistas, incluindo quatro personagens da mesma classe;
- simulação de ASPD alta, Haste alta, DoTs, cura, escudos, taunt e procs.

Depois do protótipo, revisar o catálogo inteiro, escolher quais habilidades permanecem, quais se fundem, quais são reescritas e quais ficam para conteúdo futuro.

## 10. Fontes

### Documentação interna

- [Classes, Skills e Templo das Artes Mágicas](Classes,%20Skills%20e%20Templo%20das%20Artes%20M%C3%A1gicas%207b9fc40ffc664e658267b579de583a2e.md)
- [Talune — Skill Catalogue (120 Legacy Skills)](Talune%20%E2%80%94%20Skill%20Catalogue%20(120%20Legacy%20Skills)%20419a081c141881d1b6d8fe58e5640cd6.md)
- [Talune — RPG Systems, Classes, Skills & Talents](Talune%20%E2%80%94%20RPG%20Systems,%20Classes,%20Skills%20&%20Talents%20419a081c14188153a630d3229caf26c7.md)
- [Talune — Combat & Squad Design](Talune%20%E2%80%94%20Combat%20&%20Squad%20Design%20419a081c14188141bf35cabe35f664d3.md)
- [Talune — Talent Tree Design (Future System)](Talune%20%E2%80%94%20Talent%20Tree%20Design%20(Future%20System)%20419a081c141881b3b9ccd6428f559698.md)

### Referências externas

- Ragnarok Online — [iRO Wiki: Swordsman](https://irowiki.org/wiki/Swordsman) e [Classes](https://irowiki.org/wiki/Class).
- Ulala: Idle Adventure — [Ulala Guide: Gladiator](https://ulalaguide.ca/class-guide/gladiator-guide/), [Hunter](https://ulala.fandom.com/wiki/Hunter), [Druid](https://ulala.fandom.com/wiki/Druid), [Mage](https://ulala.fandom.com/wiki/Mage) e [visão geral de builds/classes](https://www.mrguider.org/articles/ulala-idle-adventure-class-build-best-attribute-points-allocations/).
- World of Warcraft — [Blizzard: quantidade de habilidades rotacionais](https://worldofwarcraft.blizzard.com/en-gb/news/9999048), [Wowhead: utilidade de classes](https://www.wowhead.com/guide/class-utility-overview-battle-for-azeroth) e [Warcraft Wiki: interrupções](https://warcraft.wiki.gg/wiki/Interrupt).
- MU Online — [Moo Classic Wiki: Skills](https://mooclassic.com/wiki/guide-skills) e [ViciadosMU: habilidades por classe](https://viciadosmu.com.br/sobre-mu/habilidades-e-skills-por-classe).

**Nota sobre as fontes:** versões, temporadas e servidores podem alterar nomes, efeitos e números. As referências foram usadas para identificar padrões de design, não para importar valores ou copiar habilidades literalmente.