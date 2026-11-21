# Talune — Master Vision & Game Design Bible

## Marca oficial — Talune (16/11/2026)

**Talune** foi aprovado pelo usuário como nome oficial do projeto em 16/11/2026. A documentação de produto e design passa a usar essa marca. A aprovação do nome não equivale a uma liberação jurídica: buscas formais de marca, domínio e disponibilidade em lojas permanecem pendentes. Repositórios, pacotes, domínios e identificadores técnicos serão migrados em etapa técnica separada, com plano e testes.

## Atualização aprovada — marcos iniciais de progressão (15/11/2026)

- **Nível 5:** desbloqueia a escolha de uma das quatro classes-base (Guerreiro, Caçador, Clérigo ou Mago). Substitui a proposta anterior de nível 10.
- **Nível 50:** o personagem deverá ter desbloqueado aproximadamente metade do total de slots ativos de habilidades.
- **Nível 100:** todos os slots ativos de habilidades estarão desbloqueados e o personagem poderá escolher sua especialização. Substitui a proposta histórica de especialização no nível 40.
- A curva exata dos desbloqueios intermediários será definida junto com o desenvolvimento de cada mecânica, evitando antecipar decisões sem contexto. A intenção é usar a progressão como tutorial jogável: introduzir sistemas, opções e aprimoramentos em etapas, conforme o jogador aprende e ganha familiaridade.
- A quantidade total de slots ainda não está definida. “Metade no nível 50” é uma proporção, não uma confirmação de quatro, cinco ou qualquer outro total.

**Estado:** níveis 5, 50 e 100 e os marcos descritos estão aprovados; distribuição exata dos slots e demais desbloqueios permanece em aberto.

## Atualização aprovada — economia de Party e entrada de membros (15/11/2026)

- **XP — CONFIRMADO:** XP individual por personagem, com bônus por jogar em Party com jogadores reais. Valor e fórmula ainda pendentes. Bots não devem contar automaticamente como jogadores reais para o bônus.
- **Loot — CONFIRMADO:** loot individual. Cada personagem recebe sua própria rolagem/recompensa conforme as regras do encontro; não há divisão de um conjunto único de itens da Party. Tabelas, elegibilidade e frequência ainda pendentes.
- **Entrada com progresso inferior — CONFIRMADO:** a admissão depende da aprovação do líder. Se aprovada, o novo membro entra em estado pendente até o combate atual terminar; no início do próximo ciclo, o servidor recalcula o progresso compartilhado da Party pelo menor progresso individual entre os membros reais elegíveis. Assim, a Party pode retornar ao estágio do novo integrante. A regressão afeta somente a expedição compartilhada: não reduz nem apaga o progresso individual já conquistado pelos demais personagens. Não há estágios paralelos dentro da mesma Party.
- **Progresso — CONFIRMADO:** estágio/andar/mapa/dungeon é compartilhado pela Party; XP, classe, inventário, equipamentos e build permanecem individuais.

Implicações a considerar: o bônus de XP deve incentivar cooperação real sem tornar bots uma experiência punitiva; loot individual evita disputa, mas multiplica a geração potencial de itens e exige balanceamento econômico; entrada autorizada pelo líder facilita jogar com amigos de progresso diferente, mas requer regras claras de checkpoint, elegibilidade e recompensa. Não inventar valores de bônus ou drop antes de testes.

## Atualização de visão — Party com bots e progresso sincronizado

**Decisões confirmadas mais recentes:**

- A Party de até quatro integrantes deve estar formada desde o início da experiência. Quando não houver jogadores reais suficientes, bots controlados por IA completam as vagas.
- Bots escalam conforme o nível do personagem principal usado como referência, mas têm poder de combate significativamente inferior ao de um jogador real equivalente. O objetivo é permitir jogar imediatamente sem eliminar o incentivo à cooperação real.
- O avanço do conteúdo cooperativo é compartilhado: todos os membros da Party devem estar no mesmo andar/estágio/mapa/dungeon durante a sessão. Nível, XP, classe, build, inventário e equipamentos continuam individuais.
- O jogador poderá redefinir/trocar a especialização mediante um custo in-game. O custo e as regras ainda serão projetados.

Não confundir progresso compartilhado de conteúdo com inventário ou evolução compartilhados. A referência de experiência para a fluidez da Party é Ulala, mas Talune deve ter regras e identidade próprias.

> Documento mestre da visão de produto. Esta página consolida a direção atual do projeto e separa decisões confirmadas, propostas e pontos que ainda precisam de aprovação.
> 

## 1. Visão do produto

Talune é um MMORPG Idle cooperativo de navegador, mobile-first, com apresentação 2D ilustrada, personagens semi-chibi, Paperdoll modular, combate automático em Party e progressão por uma torre de andares.

Cada jogador controla e desenvolve **um único personagem principal**. O jogador não administra uma equipe de heróis: ele personaliza seu próprio personagem, escolhe sua classe e especialização, configura skills, atributos e equipamentos, e interage com outros jogadores para criar uma Party ou entrar em uma existente.

A Party comporta até quatro personagens controlados por jogadores. A composição é livre: grupos com quatro Tanks são permitidos, mas podem progredir mais lentamente por falta de dano, cura ou outras ferramentas. Papéis são incentivos e sinergias de gameplay, não classes obrigatórias nem restrições para entrar no grupo.

A experiência deve ser simples de entender, mas oferecer profundidade progressiva em builds individuais, sinergias entre jogadores, itens, especializações e conteúdo cooperativo.

## 2. Pilares do jogo

1. **Idle com decisões relevantes:** o combate é automático, mas configuração, progressão e preparação mudam resultados reais.
2. **Party cooperativa:** até quatro jogadores reais, cada um controlando seu próprio personagem; composição livre, com sinergias e trade-offs entre classes e funções.
3. **Loot significativo:** todo item comunica seu tipo, raridade, atributos, bônus e valor de uso.
4. **Progressão legível:** o jogador entende por que ficou mais forte e qual é o próximo objetivo.
5. **Identidade visual consistente:** personagens, monstros, equipamentos, cenários e interface pertencem ao mesmo universo artístico.
6. **Arquitetura confiável:** estado econômico e de combate não pode depender de valores enviados pelo cliente.

## 3. Loop principal

Entrar ou criar uma Party → reunir até quatro jogadores → avançar na torre com combate automático → derrotar monstros → receber XP, Ouro e possíveis itens → avaliar loot individual → equipar ou aprimorar o próprio personagem → ajustar skills e build → coordenar a composição da Party → desafiar chefe → desbloquear o próximo avanço.

O progresso offline deve ser calculado a partir de regras validadas pelo servidor, com limite de duração e resumo claro das recompensas ao retornar.

## 4. Direção de plataforma e apresentação

- Web first, com layout mobile-first e suporte responsivo a desktop.
- Composição principal pensada para proporção vertical 9:16.
- Arena de batalha permanece como contexto principal.
- Inventário, equipamentos, classes e skills abrem como telas dedicadas ou painéis de tela cheia; não devem ocupar permanentemente metade da tela de batalha.
- Cada tela secundária deve oferecer retorno claro à batalha sem reiniciar ou perder o estado da sessão.

## 5. Direção visual vigente

**Direção atual aprovada pelo pedido mais recente do usuário:** 2D ilustrado/pintado à mão, fantasia colorida, personagens semi-chibi detalhados e leitura visual próxima da experiência de um idle RPG premium.

Ulala é referência de linguagem de interface, clareza de informação, composição de personagens e ritmo de progressão — não para copiar personagens, assets ou identidade visual.

Não usar pixel art como direção principal. Não usar formas geométricas simples, círculos coloridos ou bonecos temporários como arte final. Não retornar à direção low-poly 3D/Godot do quadro antigo do Miro.

## 6. Estrutura de conteúdo RPG

A documentação existente registra quatro classes-base: Guerreiro, Caçador, Clérigo e Mago, com duas especializações por classe. Registra também seis atributos primários: STR, AGI, VIT, INT, DEX e LUK.

A progressão de classe, slots de skills e talentos está descrita na página de Classes e Skills. Esses valores e fórmulas ainda precisam de uma etapa formal de balanceamento antes de se tornarem regras de produção.

## 7. Decisões de escopo

### Primeira versão jogável

- Criação e evolução de personagem.
- Arena 2D ilustrada e combate automático.
- Party cooperativa de até quatro jogadores, com personagens individuais e composição livre.
- Classes, atributos e skills funcionais.
- Equipamentos com dados, bônus e comparação.
- Inventário funcional.
- Monstros, waves, chefes e progressão de torre.
- Recompensas, XP, Ouro e progresso offline controlado.
- Persistência e testes de integridade.

### Planejado, mas não deve bloquear o primeiro MVP

- Árvore de talentos completa e especializações profundas.
- Mercado entre jogadores e funcionalidades RMT.
- Sistemas avançados de guilda, PvP e eventos.
- Expansão ampla de catálogo de cosméticos e coleções.

A árvore de talentos deve ser projetada e documentada, mas não implementada no primeiro MVP sem uma aprovação específica.

## 8. Decisões pendentes que precisam de aprovação

- **Party — CONFIRMADO:** até quatro jogadores/personagens por grupo. Cada jogador controla e evolui somente o próprio personagem. A composição é livre; 1 Tank + 1 Healer + 2 DPS é apenas um exemplo equilibrado, não uma regra obrigatória.
- **Formação e targeting:** definir se Front/Back é uma posição tática real ou apenas apresentação visual, e como ataques selecionam personagens em composições variadas.
- **Aprendiz — CONFIRMADO como direção:** todo personagem começa sem classe como Aprendiz; no nível 10 escolhe uma das quatro classes-base. Especializações são desbloqueadas posteriormente, conforme progressão a validar.
- **Party inicial com bots — CONFIRMADO:** o jogador começa com uma Party de até quatro integrantes; bots controlados por IA preenchem vagas sem jogadores reais. Eles acompanham o nível de referência do personagem principal, mas têm poder inferior ao de jogadores reais equivalentes. Escala exata e substituição por jogadores reais ainda pendentes.
- **Progresso cooperativo — CONFIRMADO:** todos os membros da Party compartilham o mesmo ponto de avanço no conteúdo (andar/estágio/mapa/dungeon); evolução individual, XP, classe, inventário e equipamentos continuam separados. Regras de recompensas ainda pendentes.
- **Reset de especialização — CONFIRMADO:** permitido mediante custo in-game; valor e restrições pendentes.
- **Progressão de classes:** confirmar marcos de nível e desbloqueio de slots de skill.
- **Progresso offline:** confirmar duração máxima e quais recompensas serão calculadas.
- **Morte e checkpoints:** definir o que acontece ao perder para um chefe.
- **Fórmulas:** consolidar dano, mitigação, crítico, esquiva, velocidade e escalonamento.
- **Economia:** definir moedas e escopo permitido antes de implementar qualquer fluxo RMT.

## 9. Fontes de projeto

- Wiki histórica e decisões: [Talune — Wiki do Jogo | MMORPG Idle Cooperativo](Talune%20%E2%80%94%20Wiki%20do%20Jogo%20MMORPG%20Idle%20Cooperativo%2072399fef8812476795f6cb67b3a27fe9.md)
- Classes e catálogo de skills: [Classes, Skills e Templo das Artes Mágicas](Classes,%20Skills%20e%20Templo%20das%20Artes%20M%C3%A1gicas%207b9fc40ffc664e658267b579de583a2e.md)
- Sistemas e atributos: [Sistemas, Atributos e Progressão](Sistemas,%20Atributos%20e%20Progress%C3%A3o%204889bf388ff14557ae419f9116ed97be.md)
- Direção visual e tecnologia: [Direção de Arte, Tecnologia e Produção](Dire%C3%A7%C3%A3o%20de%20Arte,%20Tecnologia%20e%20Produ%C3%A7%C3%A3o%2033526f74366b4f179aa08a19c48549ea.md)
- Quadro histórico: [Project Talune no Miro](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)
- Experimentos publicados: [Ascent Gate Idle — referência Vercel](https://new-idle-by8ytwsvl-aincrad6.vercel.app/)

## 10. Regra de governança

Esta página é a referência central. Mudanças de escopo, fórmulas, classes, arte ou arquitetura devem ser registradas com estado: Confirmado, Proposta, Experimental ou Pendente. Um agente de IA não deve converter automaticamente uma proposta em regra aprovada.