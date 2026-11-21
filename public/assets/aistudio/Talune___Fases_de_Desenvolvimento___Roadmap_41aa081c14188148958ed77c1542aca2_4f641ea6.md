# Talune — Fases de Desenvolvimento & Roadmap

> Roadmap vivo de produção. Atualizar os estados sempre que uma decisão for aprovada, uma especificação for concluída ou uma entrega for validada.
> 

## Legenda de status

- **Feito:** concluído e validado.
- **Em processo:** trabalho iniciado, ainda incompleto.
- **Pendente:** ainda não iniciado.
- **Em avaliação:** opções em discussão, sem decisão oficial.

**Estado geral:** Fase 0 — Em processo. Fases 1–7 — Pendentes.

## Fase 0 — Pré-produção e consolidação do Game Design

**Status: EM PROCESSO**

Objetivo: transformar a visão atual em especificações consistentes, eliminar conflitos e aprovar o escopo do MVP.

### Entregáveis

- [x]  Nome oficial Talune aprovado.
- [x]  Pilares de produto e referências principais registrados.
- [x]  Regras-base de classes, Party, ASPD/Haste, sequência automática e offline aprovadas.
- [x]  Avaliação geral do projeto registrada na página Status.
- [ ]  Auditar todas as páginas do Notion e identificar conflitos com decisões atuais.
- [ ]  Aplicar política de prevalência da decisão mais recente em todos os documentos relevantes.
- [x]  Aprovar direção macro do mundo: híbrido C + A (estrutura fantástica conectando continentes e regiões).
- [ ]  Desenvolver e aprovar a natureza, origem, aparência e funcionamento da estrutura mística que conecta o mundo (direção criativa E escolhida; conceito em processo).
- [ ]  Definir geografia, regiões, biomas, hubs e rotas.
- [ ]  Fechar progressão: nível máximo, curva XP, atributos e pontos por nível.
- [ ]  Fechar combate: fórmulas, limites, escalonamento e critérios de balanceamento.
- [ ]  Fechar skills: slots ativos/passivos, desbloqueios, custos, cooldowns, ultimates e loadouts.
- [ ]  Definir se a torre terá papel secundário (marco, dungeon ou endgame) ou será descartada.
- [ ]  Fechar itens, slots, raridades, drops, cartas, refino e conjuntos para o MVP.
- [ ]  Fechar regras de Party, bots, reconexão e recompensas.
- [ ]  Fechar economia mínima do MVP; manter mercado/RMT fora do primeiro escopo.
- [ ]  Definir telas e fluxos essenciais.
- [ ]  Aprovar GDD do MVP e critérios de aceite.
- [ ]  Validar arquitetura técnica e custo operacional.

**Critério de conclusão:** decisões essenciais documentadas, conflitos resolvidos, MVP aprovado e especificações suficientes para implementação sem decisões estruturais improvisadas.

## Fase 1 — Protótipo visual e prova de combate

**Status: PENDENTE**

Objetivo: validar a sensação de jogo e a direção visual final antes de ampliar o conteúdo.

- [ ]  Cena/área de batalha funcional.
- [ ]  Avatar-base Paperdoll 2D com camadas e âncoras.
- [ ]  Identidade visual final aplicada à interface do protótipo.
- [ ]  3 monstros comuns com arte final e estados/animações necessários.
- [ ]  1 chefe com arte final, fases e telegraphs.
- [ ]  Ataques básicos e habilidades das classes iniciais.
- [ ]  Sequência automática de skills implementada.
- [ ]  ASPD e Haste funcionando separadamente.
- [ ]  Feedback visual de dano, cura, buffs, debuffs e recargas.
- [ ]  Simulação de combate e métricas de DPS/sobrevivência.
- [ ]  Teste de legibilidade e desempenho em dispositivos modestos.

**Critério de conclusão:** um grupo consegue combater os monstros e o chefe em uma experiência visual representativa da qualidade final pretendida; novos conteúdos poderão ser adicionados sem refazer o pipeline.

## Fase 2 — Núcleo multiplayer e Party

**Status: PENDENTE**

- [ ]  Cadastro, autenticação e sessão.
- [ ]  Criação e seleção de personagem.
- [ ]  Party com quatro vagas.
- [ ]  Convites, entrada, saída e expulsão.
- [ ]  Presença online e reconexão.
- [ ]  Sincronização do estado compartilhado.
- [ ]  Bots preenchendo vagas vazias.
- [ ]  Regras de líder e transferência após inatividade.
- [ ]  Configuração tática de habilidades por membro online.
- [ ]  Controle de avanço: ao menos um jogador real online.
- [ ]  Persistência segura do estado da Party.
- [ ]  Testes de desconexão, reconexão e concorrência.

**Critério de conclusão:** quatro participantes (reais ou bots) conseguem formar uma Party persistente, combater e manter estado consistente mesmo com desconexões.

## Fase 3 — Núcleo RPG e progressão individual

**Status: PENDENTE**

- [ ]  Quatro classes-base.
- [ ]  Atributos e fórmulas aprovados.
- [ ]  XP, níveis e recompensas de level-up.
- [ ]  Escolha de classe no nível 5.
- [ ]  Desbloqueio progressivo de slots.
- [ ]  Especialização no nível 100 (ou regra revisada aprovada).
- [ ]  Habilidades ativas e passivas.
- [ ]  Equipamentos e requisitos de uso.
- [ ]  Inventário, equipar, desequipar e comparar.
- [ ]  Loot individual e validação server-side.
- [ ]  Salvamento e carregamento do progresso.
- [ ]  Testes de integridade e anti-duplicação.

**Critério de conclusão:** um jogador evolui um personagem, escolhe classe, usa habilidades, obtém e equipa itens, e mantém tudo após sair e retornar.

## Fase 4 — Mundo, progressão de conteúdo e Idle

**Status: PENDENTE — direção macro C + A aprovada; detalhes de mundo e conteúdo ainda precisam ser especificados**

- [x]  Direção macro C + A aprovada e documentada.
- [ ]  Estrutura mística central, geografia e mapa detalhados.
- [ ]  Hub inicial e navegação entre regiões.
- [ ]  Primeiro bioma/área com identidade final.
- [ ]  Progressão de estágios e desbloqueios.
- [ ]  Chefes e condições de avanço.
- [ ]  Checkpoints e derrota.
- [ ]  Progresso compartilhado da Party.
- [ ]  Cálculo offline padrão de 12h e VIP de 24h.
- [ ]  Tabelas offline de XP, ouro, materiais e equipamentos.
- [ ]  Relatório de retorno.
- [ ]  Idempotência e proteção contra duplicação.
- [ ]  Comportamento quando inventário está cheio.
- [ ]  Testes de farm online/offline e limites.

**Critério de conclusão:** a Party percorre conteúdo, desbloqueia novas áreas e recebe progresso online/offline consistente e seguro.

## Fase 5 — Conteúdo e profundidade de sistemas

**Status: PENDENTE**

- [ ]  Especializações completas.
- [ ]  Catálogo expandido de skills.
- [ ]  Novos biomas e regiões.
- [ ]  Novos monstros e chefes.
- [ ]  Equipamentos por Tier e raridade.
- [ ]  Cartas, sockets e efeitos.
- [ ]  Refino e aprimoramento.
- [ ]  Conjuntos e sinergias.
- [ ]  Bestiário/coleções.
- [ ]  Transmog e coleção de aparências.
- [ ]  Automação de inventário com proteções.
- [ ]  Eventos e objetivos de longo prazo.

**Critério de conclusão:** o jogo possui variedade e metas de progressão suficientes para sustentar retenção e expansão de conteúdo.

## Fase 6 — Economia e mercado

**Status: PENDENTE — fora do MVP inicial**

- [ ]  Definir moedas e fontes/sinks.
- [ ]  Simular geração e consumo de ouro.
- [ ]  Definir regras de vinculação e negociabilidade.
- [ ]  Mercado P2P ou leilão.
- [ ]  Busca, filtros, anúncios e histórico.
- [ ]  Compra, liquidação e entrega atômica.
- [ ]  Taxas e limites.
- [ ]  Escrow e tratamento de falhas.
- [ ]  Auditoria, antifraude e proteção contra duplicação.
- [ ]  Monitoramento de inflação e concentração.
- [ ]  Análise jurídica e de regras de plataforma antes de qualquer RMT/cash-in/cash-out.

**Critério de conclusão:** economia testada em simulação, transações seguras e regras legais/plataforma verificadas antes de habilitar dinheiro real.

## Fase 7 — Beta, otimização e lançamento

**Status: PENDENTE**

- [ ]  Testes funcionais e regressão.
- [ ]  Testes de carga e performance.
- [ ]  Auditoria de segurança.
- [ ]  Testes de economia e abuso.
- [ ]  Testes em navegadores e dispositivos-alvo.
- [ ]  Telemetria, logs e alertas.
- [ ]  Backups e recuperação.
- [ ]  Política de suporte e moderação.
- [ ]  Onboarding e tutorial.
- [ ]  Balanceamento com jogadores reais.
- [ ]  Correções prioritárias.
- [ ]  Preparação de lançamento e operação contínua.

**Critério de conclusão:** versão estável, segura, observável e sustentável para abertura ao público.

## Regras para manter o roadmap atualizado

1. Ao aprovar uma decisão de design, atualizar o documento especializado e marcar o item correspondente da Fase 0.
2. Ao iniciar uma tarefa concreta, mudar o item para **Em processo**; não marcar como feito só porque foi discutido.
3. Marcar **Feito** apenas após especificação concluída ou funcionalidade implementada e validada, conforme o tipo de tarefa.
4. Se uma decisão for revertida, reabrir o item e registrar o motivo.
5. Não antecipar fases dependentes de decisões ainda abertas.
6. Manter o MVP enxuto: 3 monstros comuns e 1 chefe, com direção visual final desde o primeiro protótipo.
7. Conteúdo adicional deve ser escalável pelo pipeline, sem refazer os sistemas-base.

## Próxima ação

Concluir Fase 0, começando por: (1) definir a estrutura mística que conecta continentes e regiões; (2) detalhar o primeiro território e suas fases; (3) auditoria de documentação; (4) especificação do MVP.

**Marco concluído — natureza do Coração do Mundo:** o usuário aprovou a entidade primordial viva como natureza da estrutura central. Próximo trabalho: definir consciência/manifestações, relação com habitantes e linguagem visual. Esses detalhes ainda não estão aprovados. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Marco concluído — consciência distribuída:** aprovada a consciência distribuída do Coração do Mundo. Próxima etapa: definir sua manifestação física e linguagem visual, mantendo a unidade da entidade através de diferentes regiões. Detalhes ainda não aprovados. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Marco concluído — direção visual do Coração do Mundo:** aprovada a manifestação como organismo cósmico integrado. Próxima etapa: definir se possui eixo/tronco central reconhecível ou se é uma rede orgânica distribuída sem centro físico aparente. Detalhes ainda não aprovados. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Marco concluído — anatomia global do Coração do Mundo:** aprovado o conceito de eixo oculto com manifestações distribuídas. Próxima decisão: definir a função dos núcleos regionais e sua relação com o eixo. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Marco concluído — funções dos núcleos regionais:** aprovado o modelo integrado de circulação vital, percepção regional e manifestação física. Próxima decisão: determinar se os núcleos são equivalentes ou possuem características próprias conforme cada região. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Marco concluído — identidade regional dos núcleos:** aprovada a adaptação visual e de manifestação conforme o território, preservando a unidade do organismo. Próxima decisão: definir se os núcleos são expostos, ocultos ou variáveis conforme a região. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Marco concluído — visibilidade dos núcleos regionais:** aprovada a apresentação variável conforme geografia, história e condições locais, com distinção entre ser visível e ser compreendido. Próxima decisão: definir como as civilizações conhecem e interpretam os núcleos. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

## Mundo de Talune — decisão de lore registrada

- Aprovado: conhecimento antigo sobre o Coração do Mundo foi em grande parte perdido; civilizações atuais dependem de vestígios, ruínas e registros incompletos.
- Implicação de design: distribuir pistas por regiões, ruínas, tradições e encontros; manter interpretações culturais diversas e evitar uma fonte atual que explique toda a verdade.
- Próxima decisão de worldbuilding: definir como e por que esse conhecimento foi perdido. Causa, época e responsáveis ainda não definidos.

## Mundo de Talune — decisão de lore registrada

- Aprovada a direção de que o conhecimento sobre o Coração do Mundo foi deliberadamente ocultado por uma ou mais forças.
- A autoria, escala, período, motivação e métodos ainda não foram definidos.
- Diretriz: não presumir antagonismo simples; a ocultação pode ter sido motivada por proteção, medo, controle ou interesses conflitantes.
- Próxima decisão de worldbuilding: definir a escala e a autoria da ocultação.

## Mundo de Talune — autoria da ocultação registrada

- Direção aprovada: uma ordem ancestral participou da ocultação do conhecimento sobre o Coração do Mundo.
- Nome, motivação, hierarquia, alcance, período e destino da ordem permanecem em aberto.
- Manter ambiguidade moral e não confirmar que a organização ainda existe no presente.
- Próxima etapa de worldbuilding: definir sua estrutura e alcance.

## Ordem Ancestral — estrutura híbrida aprovada

- Modelo aprovado: liderança superior oculta, Custódios Regionais e células locais de Guardiões, com nomes ainda provisórios.
- Princípio: conhecimento fragmentado; integrantes não conheciam necessariamente o propósito completo da ordem ou a natureza integral do Coração.
- Próxima decisão de worldbuilding: grau de conhecimento de cada camada.

## Ordem Ancestral — conhecimento fragmentado aprovado

- Conhecimento variável e incompleto entre células, Custódios e Círculo Oculto; nenhuma camada é presumida onisciente.
- Registrar Martial Peak como referência de inspiração abstrata para estudo de cosmologia em camadas e forças descentralizadas, sem importar elementos diretamente para o cânone.
- Próxima etapa: aprofundar a análise de referências e definir quais princípios originais podem enriquecer Talune.

## Inspiração narrativa — direção combinada aprovada

- Explorar cosmologia grandiosa, ameaça misteriosa potencialmente fragmentada e revelações históricas graduais, com Martial Peak como referência abstrata.
- Três escalas propostas para organizar revelações: mundo conhecido, estrutura oculta e realidade maior; não são cânone definitivo.
- Preservar originalidade: o Coração segue como entidade primordial integrada ao mundo físico; nenhuma ameaça cósmica, corrupção ou existência de outros mundos foi aprovada.

## Coração do Mundo — relação cosmológica aprovada

- Fundação vital de Talune, com origem desconhecida: pode ter surgido com o mundo, existido antes dele ou se vinculado a ele em era primordial.
- Participa da vitalidade, circulação mágica e equilíbrio natural; não é necessariamente o criador, nem onipotente ou onisciente.
- Próxima etapa: definir a resiliência de Talune quando partes do Coração ou de sua rede vital forem enfraquecidas ou danificadas.

## Resiliência de Talune — B + C aprovada

- O mundo possui resistência natural e dependência gradual do Coração; núcleos conectados compensam parcialmente, nunca substituem por completo.
- Compensações prolongadas podem sobrecarregar outros núcleos e propagar desequilíbrios, sem tornar toda crise local automaticamente global.
- Próxima etapa: definir sinais, evolução e recuperação de um núcleo danificado.

## Recuperação dos núcleos regionais — opção D aprovada

- Recuperação variável por gravidade: dano leve regenera naturalmente; dano moderado exige condições favoráveis; dano grave pode exigir intervenção extraordinária.
- A recuperação pode deixar cicatrizes permanentes no ambiente e na história regional.
- Próxima decisão: causas dos danos aos núcleos — naturais, externas ou ambas.

## Causas dos danos aos núcleos — opção C aprovada

- Predominantemente externas, mas danos naturais também existem.
- Categorias: fenômenos naturais, interferência de civilizações, ações deliberadas e influências externas desconhecidas.
- Não assumir antagonista único nem confirmar uma força das sombras; manter a diversidade de causas.

## Ameaça maior e forças em conflito — opção C aprovada

- Há uma ameaça maior relacionada aos danos dos núcleos, mas não é a origem de todos os conflitos.
- Outras forças atuam por motivações próprias: preservação, exploração/poder e interesses independentes.
- Nenhum grupo é automaticamente bom ou mau; a Ordem Ancestral pode participar, sem ser presumida como única força ou detentora da verdade.
- Natureza e objetivos da ameaça continuam em aberto.

## Relação da ameaça com o Coração — opção B aprovada

- A ameaça é exterior à estrutura natural conhecida de Talune e busca penetrar, estabelecer presença e expandir influência.
- Núcleos regionais são pontos vulneráveis e possíveis pontos de contato com Talune.
- Invasão pode ocorrer gradualmente; influência não é necessariamente corrupção maligna.
- Natureza da origem, mecanismo, limites e objetivos permanecem indefinidos.

## Método de entrada da ameaça — opção A aprovada

- A ameaça entra em Talune por rupturas na estrutura da realidade, chamadas provisoriamente de Fissuras da Realidade.
- As fissuras permitem a passagem de influências exteriores e podem causar fenômenos mágicos, alterações ambientais, criaturas anormais e danos a núcleos próximos.
- O Coração não é presumido como origem, caminho exclusivo ou barreira cósmica; pode ser afetado por sua conexão vital com Talune.
- Causas, duração, distribuição e possibilidade de fechamento permanecem em aberto.

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

## Atualização do plano técnico — 16/11/2026

A inspeção do repositório revelou que já existe um motor de combate significativamente mais completo em `src/lib/game/combat.ts`. A prioridade da prova de combate passa a ser criar um harness de benchmarks que importe o motor existente diretamente, em vez de ampliar um segundo motor independente.

- [x]  Preservar simulador independente e testes em branch GitHub de checkpoint.
- [x]  Registrar documento de continuidade do Talune no repositório.
- [x]  Auditar inicialmente combat.ts, balance.ts, formulas.ts, skills.ts, rng.ts e tipos de jogo.
- [ ]  Ler integralmente a suíte de testes do motor e executar os testes do repositório.
- [ ]  Construir fixtures de party/classes e monstros do Vale de Brumafonte.
- [ ]  Executar centenas/milhares de seeds e produzir métricas de DPS, duração, cura efetiva, dano recebido, críticos, misses e mortes.
- [ ]  Testar divergências ASPD, Haste e prioridade de skills antes de alterar fórmulas.
- [ ]  Ajustar balanceamento somente após análise dos resultados e manter regressões automatizadas.

**Atenção:** o motor atual apresenta um teto de ASPD de 2,5 ataques/s, ainda não foi localizada a integração de Haste na recarga das skills e a rotina de cast pode usar múltiplas skills prontas no mesmo tick. Esses pontos são divergências a resolver, não decisões novas aprovadas.

## Atualização — auditoria do Aetheria Arena 3D (19/11/2026)

- [x]  Receber código-fonte do repositório Arena e verificar árvore de arquivos.
- [x]  Localizar lógica distribuída: ArenaClient.tsx, Hero.tsx, Enemy.tsx, stats.ts, arenaData.ts, skills.ts, bossSkills.ts, floorScaling.ts, monsters.ts e Edge Function opcional.
- [x]  Identificar que o loop 3D é local/acoplado à UI e não constitui motor server-authoritative de Talune.
- [x]  Identificar candidatos úteis (ASPD Ragnarok, rollDamage puro, derived stats, catálogo de skills e padrões de boss).
- [x]  Registrar lacunas: skill aleatória em vez de prioridade, cura desperdiçada, dano de skills físico no trecho auditado, duplicidade de ASPD, limite de 700ms em inimigos, RNG não-seeded, testes insuficientes e Edge Function experimental com idempotência não atômica.
- [ ]  Mapear dependências de classes, raças, party, drops, inventário e tipos.
- [ ]  Definir contrato headless do motor Talune (state, tick, events, RNG seed).
- [ ]  Implementar testes de propriedade e regressão antes de ampliar o motor.
- [ ]  Construir motor puro determinístico próprio; reaproveitar apenas módulos validados.
- [ ]  Executar benchmarks de parties 1–4, classes e criaturas do Vale de Brumafonte.

**Decisão:** Arena é referência técnica/conteúdo, não motor aprovado para produção. Não copiar ArenaClient.tsx. O motor Talune deve ser headless, server-authoritative e testável.

## Motor headless Talune v0.1 — 19/11/2026

- [x]  Criar tipos e contrato inicial de combate.
- [x]  Criar RNG determinístico por seed.
- [x]  Implementar ASPD para cadência de ataques básicos.
- [x]  Implementar Haste somente em cooldown de habilidades.
- [x]  Implementar fila de prioridade de skills com fallback para ataque básico.
- [x]  Implementar skill de cura com verificação de necessidade.
- [x]  Implementar ataques, dano físico/mágico, precisão, esquiva, crítico e métricas.
- [x]  Executar testes automatizados: 7/7 passaram no Node 22.16.0.
- [ ]  Integrar ZIP ao repositório em branch de desenvolvimento e validar no TypeScript/Next do projeto.
- [ ]  Construir fixtures do Vale de Brumafonte.
- [ ]  Rodar benchmarks em lote e comparar party 1–4 e classes.
- [ ]  Adicionar bosses, telegraphs, fases e efeitos de status.
- [ ]  Projetar adapter autoritativo server-side e cálculo offline idempotente.

**Estado:** protótipo headless v0.1 criado e testado isoladamente; não integrar em produção ainda. Regras numéricas são provisórias.

## Atualização de continuidade — 19/11/2026

### Auditoria e organização dos protótipos

- Os protótipos Motor de Combate v0.1 e Simulador foram auditados; os resultados e falhas reproduzidas estão registrados no repositório GitHub.
- Os arquivos foram reorganizados em `prototypes/combat-engine/` e `prototypes/combat-simulator/`, preservando o conteúdo e mantendo ambos isolados.
- A reorganização é estrutural: não representa integração ao jogo nem aprovação das fórmulas como balanceamento oficial.

### Próximo passo de produção

A prioridade recomendada é transformar as decisões já aprovadas em uma especificação executável do MVP (vertical slice), sem ampliar a lore ou reabrir decisões estáveis. A especificação deve fechar:

1. Escopo mínimo do primeiro ciclo jogável e o que fica explicitamente fora.
2. Fluxos de jogador, personagem Aprendiz, Party/bots, combate, recompensas e retorno à sessão.
3. Regras e parâmetros iniciais necessários, distinguindo valores aprovados de parâmetros experimentais.
4. Modelo de estado, persistência, autoridade do servidor, reconexão e idempotência.
5. Telas essenciais, estados visuais e critérios de aceite/testes.

Depois da especificação, validar a arquitetura server-authoritative em uma prova técnica pequena e só então iniciar o scaffold da aplicação. O mundo e o primeiro território devem ser detalhados apenas até o nível necessário para sustentar esse primeiro slice; conteúdo amplo, economia/mercado e talentos completos permanecem fora do primeiro MVP.

## Atualização — MVP Scope & Acceptance Specification (19/11/2026)

- [x]  Primeira versão do escopo do MVP criada (v0.1), com três marcos progressivos: A — primeira fatia jogável; B — MVP fechado do Vale de Brumafonte; C — extensão offline.
- [ ]  Revisar e aprovar o escopo e os critérios de aceite antes de iniciar implementação.
- [ ]  Fechar contratos mínimos de combate, progressão inicial, Party/bots e arquitetura para o Marco A.

Documento: [Talune — MVP Scope & Acceptance Specification](Talune%20%E2%80%94%20MVP%20Scope%20&%20Acceptance%20Specification%2041da081c141881e993d1d4b83bdfe11b.md). Cópia operacional: [docs/MVP_SCOPE_AND_ACCEPTANCE.md no GitHub](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/MVP_SCOPE_AND_ACCEPTANCE.md).

## Atualização — contrato de combate do Marco A (19/11/2026)

- [x]  Primeira proposta v0.1 criada e registrada no GitHub: [COMBAT_CONTRACT_MARCO_A.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/COMBAT_CONTRACT_MARCO_A.md).
- [ ]  Revisar e aprovar as regras operacionais propostas antes de implementação.
- [ ]  Após aprovação, transformar o contrato em testes de conformidade e corrigir o motor candidato isoladamente, sem integração ao runtime.

A proposta separa invariantes já aprovados de regras temporárias do Marco A e parâmetros de balanceamento ainda experimentais.

## Atualização — 19/11/2026: contrato de combate do Marco A aprovado

- [x]  Contrato mínimo de combate do Marco A v0.1 aprovado pelo usuário.
- [ ]  Implementar e executar testes de conformidade.
- [ ]  Corrigir o motor de combate isoladamente, sem integrar ao runtime antes da validação.

Documento canônico: [Talune — Contrato de Combate do Marco A](Talune%20%E2%80%94%20Contrato%20de%20Combate%20do%20Marco%20A%2041ea081c1418819989f4fc4249cb3f1d.md). A aprovação cobre somente o Marco A; fórmula de dano e parâmetros são experimentais, não balanceamento final.

## 20/11/2026 — motor de combate v0.2.0 corrigido isoladamente

- [x]  Branch de correção criada: `fix/combat-engine-marco-a-v0.2`.
- [x]  Contrato mínimo do Marco A aplicado ao motor isolado.
- [x]  18/18 testes automatizados passaram.
- [x]  TypeScript estrito passou.
- [x]  250 cenários determinísticos adicionais passaram por invariantes.
- [ ]  Empacotar e verificar ZIP de release.
- [ ]  Abrir PR e revisar antes de integrar à `main`.

O motor continua fora do runtime; multiplayer real, persistência, bots, reconexão e recompensas continuam como etapa de integração. Detalhes técnicos foram registrados em Combat & Squad Design e no GitHub, branch `fix/combat-engine-marco-a-v0.2`.

### Revisão do motor v0.2.0 — PR em draft (20/11/2026)

A correção do motor foi salva na branch `fix/combat-engine-marco-a-v0.2` e está em revisão no [PR #1 do GitHub](https://github.com/mateusc58mc-sketch/Talune/pull/1). O PR permanece em draft: o ZIP v0.2.0 foi gerado e validado localmente, mas ainda precisa ser adicionado ao repositório em `artifacts/releases/combat-engine-v0.2.0.zip` e conferido por readback antes de liberar o PR para merge.

## Atualização técnica — motor de combate Marco A v0.2.0 (20/11/2026)

- [x]  Contrato mínimo de combate Marco A v0.1 aprovado (D-025).
- [x]  Motor isolado corrigido para corresponder ao contrato; 18/18 testes automatizados passaram novamente a partir do ZIP, TypeScript estrito passou e ZIP íntegro verificado.
- [x]  PR #1 mesclado na `main` por squash. Commit: `b84efd2cb20fdffdf12c1e840e767ce845ab077c`.
- [x]  Fonte preservada em `prototypes/combat-engine/` e pacote em `artifacts/releases/combat-engine-v0.2.0.zip`.

**Limite importante:** isso conclui a correção do motor isolado, não a primeira fatia jogável. Rede multiplayer, autenticação, autoridade de transporte, Party persistente, bots, sincronização de dois clientes, reconexão, XP persistente e idempotência de recompensa ainda precisam ser implementados e testados antes da integração ao runtime.

**Próxima tarefa recomendada:** especificar o contrato de sessão/Party/presença/reconexão e validar uma arquitetura server-authoritative de baixo custo, sem criar recursos Supabase ou assumir custos antes de aprovação.

## Próxima especificação técnica — sessão, Party e presença (20/11/2026)

O contrato mínimo de combate D-025 foi implementado e validado no motor isolado v0.2.0. A próxima dependência do Marco A é o contrato de sessão/Party/presença/reconexão.

Rascunho de trabalho: [SESSION_PARTY_SERVER_CONTRACT.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/SESSION_PARTY_SERVER_CONTRACT.md). Status: não aprovado. Ele consolida regras já decididas e separa as questões de borda ainda abertas; não escolhe stack nem cria infraestrutura.

A arquitetura server-authoritative e seu custo devem ser comparados antes de provisionar serviços. A divergência C-001 de liderança continua pendente.

## Prova técnica de coordenação — 20/11/2026

O POC `event-driven-adapter` foi criado e passou 6/6 testes locais. O pacote está em [artifacts/releases/event-driven-adapter-v0.1.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/main/artifacts/releases/event-driven-adapter-v0.1.0.zip).

O resultado demonstra apenas a coordenação local com relógio injetado, CAS de referência, idempotência e pausa/retomada por presença fornecida pelo servidor. Não prova persistência real, transporte, autenticação, presença durável ou relógio monotônico compartilhado entre instâncias. A arquitetura segue pendente.

## Replanejamento técnico — 20/11/2026

**Backend Marco A v0.1.0:** primeira fatia HTTP server-authoritative entregue em branch isolada e validada. Não está mesclada em `main` nem implantada.

**Marco A jogável: ainda aberto.** A saída depende de presença/heartbeat persistente, pausa/rebase, recuperação após restart, UI de Party/arena e validação com duas sessões reais. Não declarar o marco fechado antes dessas provas. Não existem Auth users reais, secrets Vercel ou deploy.

**Próxima sequência:**

1. Fechar contrato mínimo de presença/reconexão e implementar heartbeat, pause/rebase e recovery transacional.
2. Construir HUD responsiva com arena como foco, Party e estado de combate claramente visíveis, controles táticos de habilidades e painéis de personagem/inventário.
3. Validar sincronização e reconexão com duas contas/sessões reais em preview, após autorização e configuração segura de secrets.
4. Só então marcar Marco A como concluído e avançar para o conteúdo de Marco B: Vale de Brumafonte, classes nível 5, XP, loot e inventário.

A comparação do schema legado Arena 3D foi documentada em `docs/LEGACY_ARENA_SCHEMA_REVIEW.md`. O schema antigo não será copiado integralmente: inventário/equipamento serão projetados no Marco B; mercado e premium permanecem fora do MVP.

## Atualização de execução — 20/11/2026 — D-029

- [x]  Heartbeat server-side persistente e leitura de presença (15s/60s) implementados em branch isolada.
- [x]  Migration aplicada, RLS/least privilege e teste SQL transacional com rollback.
- [x]  CI 24/24, TypeScript strict e ZIP v0.2.0 verificados.
- [ ]  Heartbeat client/UI, duas sessões reais, pausa/rebase e recovery.
- [ ]  Worker durável D-027 para farm comum contínuo sem jogadores online; scheduler ainda não ativado.

A branch `feat/marco-a-presence-heartbeat` não foi mesclada em `main` nem implantada. O backend não é ainda um MVP jogável.

## Atualização — worker técnico de farm comum (20/11/2026)

- Implementados `POST /api/v1/internal/farm/tick` protegido por `TALUNE_WORKER_TOKEN`, serviço `server/farm-worker.ts` e avanço server-side com o motor canônico.
- O worker processa somente o fixture `mvp_training_slime_fixture`; não concede recompensas, não inicia chefes e não avança estágios.
- Migration `20261120155829_durable_common_farm_worker` adiciona `party_farm_queue` e RPCs de leitura/ack; `advance_encounter_for_worker` faz CAS por versão e cursor, aplicando blocos de até 60 segundos.
- Migration `20261120155954_queue_common_farm_victory_trigger` garante que vitória comum gere a intenção de continuação dentro da mesma transação.
- Teste SQL transacional do worker passou com rollback, incluindo catch-up, conflito CAS, fila, ack e least privilege.
- **Não ativo:** nenhum token foi criado, nenhuma extensão `pg_cron`/`pg_net` foi instalada, nenhum job foi agendado e não houve deploy. O farm contínuo D-027 ainda não está em execução.

Próxima etapa: validar o CI v0.3.0, atualizar o pacote e depois medir/configurar o scheduler global somente quando as quotas e o plano estiverem verificados.

## Checkpoint v0.3.0 — 20/11/2026

- [x]  D-029 presença server-side 15s/60s, Auth/ownership/membership e SQL testado.
- [x]  Worker técnico D-027: endpoint protegido, presença real como gate, CAS catch-up <=60s, fila durável e trigger de vitória comum.
- [x]  CI 31/31, TypeScript strict, ZIP v0.3.0 integrity e nove migrations aplicadas/verificadas.
- [ ]  Loop de heartbeat no cliente e teste com duas sessões reais.
- [ ]  Configurar token e scheduler global após validar plano/quotas e deploy controlado; provar farm comum com todos offline.
- [ ]  Pausa/rebase, recovery de falha e regras de liderança/saída.

O farm offline contínuo ainda não está ativo; o worker é código e persistência preparados, sem cron ou deploy.

## Checkpoint — primeira interface web (20/11/2026)

A branch [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client) contém a primeira fatia navegável do cliente:

- [x]  Base HTML/CSS/JS responsiva, sem framework ou dependências runtime.
- [x]  Auth browser e onboarding de personagem/Party.
- [x]  Heartbeat D-029, snapshot da Party e arena de combate de treino integrada à API.
- [x]  Servidor local e isolamento de arquivos estáticos em `public/`.
- [ ]  Teste real de duas contas/sessões simultâneas.
- [ ]  Convites, entrada/saída e liderança de Party.
- [ ]  XP, recompensas, inventário/equipamento e conteúdo do Vale de Brumafonte.
- [ ]  Chefe com fases e progressão de estágios.
- [ ]  Worker D-027 ativo após revisão de custo e deploy controlado.
- [ ]  Farm offline completo do Marco C.

O alpha não fecha o Marco A nem o MVP: ainda utiliza fixture técnica e não concede XP/itens.

## Atualização do roadmap — Party access MVP (20/11/2026)

A branch [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client) agora contém convites, entrada, saída e transferência explícita de liderança, além do primeiro cliente browser. Regras de Party são defaults temporários e reversíveis, descritos em [MVP_IMPLEMENTATION_DEFAULTS.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/MVP_IMPLEMENTATION_DEFAULTS.md), não decisões canônicas finais.

Validação: migration 10 aplicada, teste SQL de Party access passou com rollback, zero fixtures persistentes; CI Node 22 57/57, TypeScript strict e ZIP integrity aprovados.

Próximo foco: teste fechado com duas contas reais, resolver C-001 e integrar configuração tática D-028. Depois progressão/XP/loot e conteúdo de combate do Vale de Brumafonte.

### Artefato final do cliente web alpha v0.1.0

- ZIP: [talune-web-mvp-alpha-v0.1.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.1.0.zip)
- 181.690 bytes · SHA-256: 003501bd39d7d4729f004ff9f11fa5a3bb7a93098c036e2003658c16f3574370 · Git blob: ab872904bd6b99664a93b5ca5b2899ef0c7c0e9b
- CI: 57/57 testes, browser syntax, TypeScript strict e ZIP integrity.