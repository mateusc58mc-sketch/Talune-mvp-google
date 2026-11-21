# Talune — Status do Projeto & Avaliação Atual

> Documento de acompanhamento oficial. Atualizado em 16/11/2026. Registra a avaliação consolidada do projeto, o estágio real de produção, os riscos e as decisões que ainda precisam ser tomadas.
> 

## Resumo executivo

**Estágio atual: IMPLEMENTAÇÃO DO VERTICAL SLICE DO MVP (EM PROGRESSO).**

Talune já possui identidade, decisões centrais de gameplay, contratos técnicos, backend server-authoritative inicial e um cliente browser integrado em desenvolvimento. O projeto saiu da pré-produção documental e está construindo um vertical slice jogável. O MVP completo ainda não está concluído: faltam progressão real, conteúdo de combate, recompensas, testes com múltiplas contas e validação operacional de ponta a ponta.

O foco agora é completar o loop jogável mínimo com persistência e autoridade do servidor, mantendo os sistemas modulares e registrando cada marco no GitHub e nesta documentação. Polimento visual e expansão de conteúdo virão depois que o fluxo principal estiver funcional.

## Painel de status

| Área | Status | Avaliação |
| --- | --- | --- |
| Identidade e proposta | Feito — base | Nome Talune e direção de produto aprovados; validações formais de marca pendentes |
| Pilares de gameplay | Feito — base | Idle cooperativo, Party de quatro, progressão individual e avanço compartilhado |
| Classes e progressão | Em processo | Classes e marcos 5/50/100 definidos; fórmulas e slots incompletos |
| Party e bots | Em processo | Regras centrais definidas; casos de borda e IA dos bots pendentes |
| Combate | Em processo | ASPD/Haste e fila automática aprovadas; fórmulas e balanceamento pendentes |
| Skills e especializações | Em processo | Matrizes iniciais aprovadas; catálogo final e regras de loadout pendentes |
| Mundo e geografia | Feito — direção macro | Híbrido C + A aprovado: estrutura fantástica conecta continentes e regiões; fases continuam como progressão de farm |
| Itens e drops | Em processo | Tier/raridade e filosofia de loot definidas; tabelas e mecânicas incompletas |
| Offline | Feito — regras-base | Limites 12h/24h, cálculo server-side e relatório definidos; tabelas e overflow pendentes |
| Arte e UI | Em processo | Direção atual 2D Paperdoll; guia e exploração visual existem, pipeline final precisa ser fechado |
| Economia/mercado | Pendente | Modelo interno e eventual RMT precisam de desenho, análise legal e segurança |
| Arquitetura técnica | Pendente | Next.js/TypeScript/Supabase aparecem como direção candidata; validar autoridade do servidor, multiplayer e custos |
| MVP | Pendente | Escopo recomendado elaborado, ainda precisa ser aprovado e especificado |
| Implementação | Em andamento | Backend Marco A e vertical slice browser integrados em branches isoladas; MVP jogável completo ainda pendente |

## O que já está definido

### Produto e identidade

- Nome oficial: **Talune**.
- MMORPG idle cooperativo de fantasia, pensado para navegador e experiência mobile-first/responsiva.
- Referências de design: Ulala, Ragnarok Online, World of Warcraft e MU Online.
- Direção de arte vigente na documentação: 2D ilustrado com Paperdoll 2D; notas antigas de 3D low-poly/Godot são históricas e estão supersedidas.
- A experiência deve funcionar bem em dispositivos modestos.

### Personagem e classes

- Todos começam como Aprendiz.
- No nível 5 escolhem uma das quatro classes-base: Guerreiro, Caçador, Clérigo ou Mago.
- No nível 50, aproximadamente metade dos slots ativos estará desbloqueada.
- No nível 100, todos os slots ativos estarão desbloqueados e o jogador escolhe especialização.
- Evolução, atributos, skills, equipamentos, inventário e recursos são individuais.
- Sacerdote e Druida são direções distintas para o Clérigo: cura reativa/emergencial versus sustentação/regeneração.

### Party e cooperação

- Party de até quatro integrantes, com composição livre.
- Bots ocupam vagas vazias; não contam como jogadores reais, não recebem drops e não negociam.
- Pelo menos um membro real precisa estar online para a Party avançar.
- Sem membros reais online, a Party continua farmando no estágio atual.
- Qualquer membro real online pode alterar configurações táticas de skills da Party, sem alterar progressão, equipamentos ou recursos alheios.
- Entrada de membro com progresso inferior depende de aprovação e pode ajustar o progresso compartilhado ao menor avanço.
- Inatividade de sete dias é uma referência para transferência de liderança, aplicada ao líder; regras de exceção ainda precisam ser fechadas.

### Combate

- ASPD controla exclusivamente a frequência de ataques básicos.
- Haste reduz recargas de habilidades; não acelera ataques básicos.
- Sequência automática por prioridade: testar skills na ordem configurada, pular as indisponíveis e executar a primeira válida.
- Se nenhuma skill puder ser usada, realizar ataque básico; reavaliar continuamente.
- Sem imunidade total a dano; escudos limitados.
- Chefes devem usar fases, telegraphs, janelas de vulnerabilidade e pressão mecânica, não apenas HP elevado.

### Itens, drops e offline

- Loot individual para cada jogador elegível.
- Equipamento pode cair mesmo que não seja da classe do destinatário; requisitos de uso podem restringir equipar.
- Tier é independente da raridade; Tier é derivado do nível do monstro em intervalos de 100 níveis.
- Bônus percentuais podem ter rolagem dentro de faixas mínima/máxima; método de melhoria ainda pendente.
- Aparência pode ser desbloqueada e aplicada separadamente do equipamento funcional.
- Offline: 12h padrão e 24h VIP, limite individual por conta; equipamentos podem cair por tabela offline própria, com probabilidade menor.
- Recompensas offline calculadas e creditadas pelo servidor, com relatório ao retornar e proteção contra duplicação.

## O que está em processo ou pendente

1. Consolidar fórmulas de combate, atributos, XP, escalonamento e progressão.
2. Fechar número de slots, desbloqueios intermediários, passivas, ultimates e regras de loadout.
3. Desenvolver o mundo a partir da direção macro C + A: estrutura mística conectando continentes e regiões; definir geografia, biomas, hubs, rotas e hierarquia de conteúdo.
4. Definir se a torre terá papel secundário como dungeon, marco, endgame ou se será descartada.
5. Especificar equipamentos, raridades, probabilidades, cartas, sockets, refino, conjuntos e filtros de inventário.
6. Definir moedas, fontes e sinks, mercado, taxas, proteção contra fraude e eventual RMT.
7. Fechar experiência de UI e telas essenciais.
8. Validar arquitetura server-authoritative, multiplayer, persistência, segurança, escala e custo.
9. Aprovar escopo e critérios de aceitação do MVP.
10. Preparar tarefas pequenas e verificáveis para o agente de IA.

## Política de documentação e decisões

- **Sempre prevalece a decisão mais recente explicitamente aprovada pelo usuário.**
- Documentos antigos são referência histórica, nunca autoridade quando contradizem decisões atuais.
- Ao detectar conflito, atualizar o documento afetado e marcar a regra antiga como supersedida; não apagar histórico relevante.
- Distinguir claramente: **Aprovado**, **Proposta**, **Em avaliação** e **Pendente**.
- Não transformar uma sugestão do assistente em regra oficial sem aprovação do usuário.
- Toda decisão nova deve atualizar esta página de status e a página especializada correspondente.
- O roadmap deve refletir o estado real: Feito, Em processo ou Pendente.

## Critérios para sair da pré-produção

- [ ]  Fonte única de verdade revisada e sem contradições materiais.
- [x]  Direção macro do mundo aprovada (híbrido C + A); detalhes de worldbuilding e mapa ainda pendentes.
- [ ]  GDD do MVP fechado, incluindo regras, números iniciais e casos de borda.
- [ ]  Direção visual final especificada e um pequeno conjunto de assets de qualidade final produzido.
- [ ]  Arquitetura técnica validada por protótipo e análise de custo.
- [ ]  Plano de testes e critérios de aceite definidos.
- [ ]  Backlog do MVP dividido em entregas pequenas.

## Próxima prioridade

**Auditoria e consolidação do Game Design + decisão da estrutura do mundo.** Não iniciar implementação ampla antes de fechar essas dependências.

## Atualização — identidade central do mundo

- **Direção escolhida:** combinar árvore ancestral, rede de energia mágica, conexão cósmica e eixo monumental (Opção E).
- **Conceito de trabalho:** “O Coração do Mundo”, nome provisório, ainda não aprovado como lore oficial.
- **Status:** em processo de desenvolvimento criativo. A escolha da combinação está aprovada; natureza, origem, aparência, nome e funcionamento permanecem em aberto.
- **Próxima decisão:** determinar se a estrutura é primordial/natural, construída, uma entidade viva ou um fenômeno cósmico materializado.

**Atualização de mundo — 15/11/2026:** aprovada a natureza do Coração do Mundo como entidade primordial viva. A direção macro C + A e a combinação conceitual E permanecem aprovadas. Consciência, estado atual, comunicação, aparência e nome definitivo continuam em desenvolvimento. Consulte o estudo de mundo para os detalhes.

**Atualização — consciência do Coração do Mundo:** aprovada a consciência distribuída. O Coração é uma única entidade, cuja percepção e manifestações se espalham pelas regiões; expressões locais não são entidades independentes. Forma física, comunicação, alcance perceptivo e estado atual continuam em desenvolvimento. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Atualização — manifestação visual:** aprovada a direção de organismo cósmico integrado: raízes profundas, veios vitais, núcleos regionais e ramificações celestes como partes de uma única entidade. Anatomia macro, silhueta, materiais e paleta permanecem em desenvolvimento. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Atualização — anatomia global:** aprovada a opção D: eixo central oculto ou inacessível, conhecido apenas por manifestações distribuídas (raízes, veios vitais, núcleos regionais e ramificações celestes). Natureza/localização do eixo e função dos núcleos permanecem em aberto. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Atualização — núcleos regionais:** aprovado que cada núcleo exerce três funções integradas: circulação vital, percepção regional e manifestação física. Não são tipos separados nem entidades independentes. Limites, vulnerabilidade, quantidade e interação dos habitantes permanecem em aberto. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Atualização — identidade regional dos núcleos:** aprovado que cada núcleo mantenha as três funções e a assinatura orgânica comum, mas desenvolva aparência e padrões de manifestação próprios conforme continente, bioma e condições locais. Exemplos visuais são direções conceituais, não designs finais. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

**Atualização — visibilidade dos núcleos:** aprovada a visibilidade variável por região: monumental/exposta, integrada ao ambiente ou oculta. Visibilidade física e compreensão cultural são dimensões distintas; habitantes podem conhecer um núcleo sem entender sua verdadeira natureza. Estudo: [Talune — Mundo, Mapa & Estrutura de Progressão (Estudo)](Talune%20%E2%80%94%20Mundo,%20Mapa%20&%20Estrutura%20de%20Progress%C3%A3o%20(Es%2041aa081c141881bdb72fdb31c0f4ead2.md)

## Mundo de Talune — conhecimento perdido sobre o Coração do Mundo (aprovado)

- O conhecimento sobre o Coração existiu em civilizações antigas, mas grande parte foi perdida.
- Os habitantes atuais encontram ruínas, vestígios, tradições e registros incompletos; nenhuma cultura deve ser presumida como detentora de toda a verdade.
- Visibilidade não equivale a compreensão: um núcleo pode ser monumental e conhecido localmente sem que sua natureza como órgão de um organismo primordial seja compreendida.
- Culturas podem preservar fragmentos corretos, interpretações equivocadas ou desconhecer os núcleos.
- A causa, o período e os agentes da perda de conhecimento permanecem em aberto.

## Mundo de Talune — ocultação intencional do conhecimento (direção aprovada)

- A perda do conhecimento sobre o Coração envolveu uma ação deliberada para ocultar, restringir ou apagar parte dele.
- Métodos possíveis a explorar: destruição/remoção de arquivos, ocultação de artefatos e mapas, adulteração de registros, fragmentação de saberes e proibições de estudo. Ainda não são fatos canonizados.
- Os responsáveis não são necessariamente vilões; motivação e método permanecem abertos.
- Ainda não definidos: autoria, escala, período, motivação, conteúdo ocultado, resistência e sobrevivência dos responsáveis.

## Mundo de Talune — autoria da ocultação: ordem ancestral (direção aprovada)

- Uma ordem ancestral conhecedora de aspectos do Coração participou deliberadamente da ocultação do conhecimento.
- “Ordem Ancestral” é rótulo provisório, não nome oficial.
- A organização não está definida como maligna; proteção, controle e outros motivos permanecem hipóteses.
- Seu destino permanece aberto: desaparecimento, fragmentação ou sobrevivência secreta não foram escolhidos.
- Próxima decisão: estrutura e alcance geográfico da ordem.

## Ordem Ancestral — estrutura híbrida aprovada

- Liderança superior oculta, Custódios Regionais e células locais de Guardiões formam o modelo funcional de três camadas; os títulos são provisórios.
- Autonomia regional e conhecimento fragmentado: integrar a ordem não significava conhecer toda a verdade sobre o Coração.
- Extensão do conhecimento do Círculo Oculto e relações entre células permanecem em aberto.
- Próxima etapa: definir o grau de conhecimento de cada camada.

## Ordem Ancestral — conhecimento fragmentado aprovado

- A distribuição do conhecimento é variável: células locais podem preservar informações desconhecidas por certos Custódios; o Círculo Oculto não é presumido onisciente.
- A própria ordem pode ter lacunas sobre o Coração do Mundo.
- Referência de inspiração solicitada pelo usuário: Martial Peak. Estudar princípios abstratos de cosmologia em camadas, revelações graduais e ameaças descentralizadas, sem copiar elementos protegidos nem importar ideias para o cânone sem aprovação.
- Distinção de referência: Small Universe é formado dentro do corpo de cultivadores Open Heaven; Mo/Black Ink Clan é a ameaça cosmológica central descrita nas fontes consultadas; Shadow Demon aparece como linhagem/raça, não como nome da força antagonista central.

## Inspiração narrativa — direção combinada aprovada

- O usuário escolheu explorar em conjunto cosmologia grandiosa, ameaça misteriosa potencialmente fragmentada e revelações históricas graduais, usando Martial Peak apenas como referência de princípios narrativos.
- Proposta de organização das descobertas em três escalas: mundo conhecido, estrutura oculta e realidade maior. É uma estrutura de trabalho, não cânone fechado.
- O Coração continua sendo entidade primordial integrada ao mundo físico de Talune; não copiar o Small Universe nem importar Mo/Black Ink/Black Ink Clan.
- A existência de ameaça cósmica, corrupção do Coração ou outros mundos não está decidida.

## Coração do Mundo — relação cosmológica aprovada

- O Coração é a fundação vital de Talune, mas sua origem permanece desconhecida (A com elementos de C).
- Participa da sustentação da vida, da circulação mágica e do equilíbrio natural por meio de raízes, veios vitais e núcleos regionais.
- Ser fundação vital não significa necessariamente ser criador do mundo; não é onipotente nem onisciente.
- Não foi decidido o que aconteceria se o Coração fosse destruído ou se partes de sua rede fossem danificadas.

## Resiliência de Talune — B + C aprovada

- Talune tem dependência gradual do Coração e resistência natural; o enfraquecimento de um núcleo não provoca colapso imediato.
- Núcleos conectados podem compensar parcialmente a circulação vital, mas não substituir integralmente outro núcleo.
- Compensações prolongadas podem gerar sobrecarga e desequilíbrios; crises podem se propagar conforme gravidade, duração, localização e capacidade da rede, sem catástrofe global automática.
- Limites quantitativos, recuperação natural e necessidade de intervenção permanecem em aberto.

## Recuperação dos núcleos regionais — opção D aprovada

- Dano leve: regeneração natural e espontânea.
- Dano moderado: regeneração condicionada a condições favoráveis, recursos ou auxílio.
- Dano grave: capacidade natural comprometida; pode exigir intervenção especializada, conhecimento ancestral ou condição excepcional.
- Recuperar não significa necessariamente voltar ao estado original; regiões podem conservar cicatrizes e mudanças históricas.
- Irreversibilidade, métodos de intervenção, custos, tempos e ligação com ameaças externas permanecem em aberto.

## Causas dos danos aos núcleos — opção C aprovada

- Danos predominantemente externos; causas naturais também existem, mas não são predominantes.
- Categorias narrativas: fenômenos naturais; interferência civilizacional involuntária; ações deliberadas; influências externas desconhecidas.
- Ações externas não significam automaticamente maldade. Não presumir um único agente, nem confirmar uma força das sombras ou facção específica.
- Frequências quantitativas e ligação entre casos permanecem em aberto.

## Ameaça maior e forças em conflito — opção C aprovada

- Existe uma ameaça maior relacionada aos danos dos núcleos, mas ela não explica todos os conflitos nem controla todos os acontecimentos.
- Estrutura narrativa proposta: ameaça maior de origem desconhecida; forças de preservação; forças de exploração e poder; forças independentes.
- Nenhum grupo é automaticamente bom ou mau. Protetores podem ocultar informações; exploradores podem agir por necessidade ou desconhecimento.
- A Ordem Ancestral pode participar, mas não é presumida como única força de preservação nem como conhecedora de toda a ameaça.
- Identidade, origem, intenção, limites e relação exata da ameaça com o Coração permanecem em aberto.

## Relação da ameaça com o Coração — opção B aprovada

- A ameaça tem origem fora da estrutura natural conhecida de Talune e procura penetrar, estabelecer presença e expandir sua influência.
- Núcleos regionais são pontos especialmente vulneráveis e possíveis pontos de contato; a influência pode afetar raízes, veios vitais e manifestações regionais.
- A penetração pode ser gradual, com rupturas e fenômenos anormais, não necessariamente um exército/portal.
- Influência não significa necessariamente corrupção maligna; efeitos podem ser ambíguos ou inicialmente parecer benéficos.
- Origem exterior exata, método de entrada, motivo da vulnerabilidade, limites, consciência e objetivos permanecem em aberto.

## Método de entrada da ameaça — opção A aprovada

- A ameaça penetra em Talune por rupturas na estrutura da realidade, chamadas provisoriamente de **Fissuras da Realidade**.
- Influências exteriores podem atravessar fissuras mesmo sem passagem física estável; regiões afetadas podem apresentar fenômenos mágicos, alterações ambientais, criaturas anormais e danos a núcleos próximos.
- O Coração não é necessariamente a origem das fissuras nem o caminho exclusivo de entrada, e não se estabelece que seja uma barreira cósmica. Pode ser afetado por fissuras próximas devido à sua conexão vital com o mundo.
- Causa, duração, distribuição, conteúdo e possibilidade de fechar/estabilizar fissuras continuam em aberto.

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

## Atualização técnica — auditoria do motor de combate (16/11/2026)

Foi inspecionado o repositório GitHub `mateusc58mc-sketch/New-idle`. A base já contém um motor de combate puro/determinístico em `src/lib/game/combat.ts`, apoiado por `balance.ts`, `formulas.ts`, `skills.ts`, `rng.ts` e tipos de domínio. O motor já contempla auto-ataques, crítico, HIT/FLEE, dano físico/mágico, targeting por linhas, habilidades, MP/cooldowns, DoT/HoT, buffs/debuffs, escudos, controlo, métricas e RNG determinístico.

**Divergências que precisam ser tratadas antes de balancear:**

- O teto atual de ASPD em `balance.ts` é 2,5 ataques/s; conflita com a intenção aprovada de velocidades muito altas no endgame.
- A cadeia inspecionada tem `attackSpeed` e `castTime`, mas ainda não foi identificada integração de Haste reduzindo recargas de habilidades.
- `castSkills` percorre a lista equipada e pode lançar mais de uma skill pronta no mesmo tick; precisamos alinhar com a prioridade aprovada sem quebrar classes existentes.
- Auto-ataques e habilidades são processados no mesmo avanço; a ordem de resolução precisa de testes.

O simulador independente em `tools/combat-simulator/` fica preservado como protótipo histórico, mas o motor existente passa a ser a base dos próximos benchmarks. Não assumir ainda que toda a cadeia está validada como autoridade server-side.

Branch de checkpoint: `checkpoint/talune-combat-simulator-2026-11-16`. Documento de continuidade: [https://github.com/mateusc58mc-sketch/New-idle/blob/checkpoint/talune-combat-simulator-2026-11-16/docs/TALUNE_HANDOFF.md](https://github.com/mateusc58mc-sketch/New-idle/blob/checkpoint/talune-combat-simulator-2026-11-16/docs/TALUNE_HANDOFF.md)

## Acesso Vercel

A integração conectada nesta sessão só lista o projeto `new-idle` no team Aincrad. Os projetos `aetheria-arena` e `aetheria-idle` visíveis no dashboard não foram acessíveis pela API desta sessão e aparecem sem repositório Git conectado. Para reaproveitar código, é necessário identificar e conectar o repositório correto de cada projeto ou disponibilizar o código-fonte correspondente. Não fazer deploy de produção antes de validar a origem.

## Auditoria do Aetheria Arena 3D — 19/11/2026

O repositório [https://github.com/mateusc58mc-sketch/Arena](https://github.com/mateusc58mc-sketch/Arena) foi acessado e o código-fonte está presente (169 arquivos na árvore auditada; tamanho reportado pelo GitHub 37.207 KB). O projeto é um único repositório Aetheria Idle com rota 3D em `app/arena/page.tsx`, não um motor separado chamado combat.ts.

### Onde está a lógica

- `components/aincrad3d/ArenaClient.tsx`: orquestração do combate 3D (aprox. 113 KB); ataques de heróis por volta das linhas 1913–2010, dano recebido 2012–2028, ataque inimigo 2030–2058, cura automática 2060+, skills de boss 2145+ e transição de waves 2360+.
- `components/aincrad3d/Hero.tsx`: cadência/loop de ataque e animação via `useFrame`.
- `components/aincrad3d/Enemy.tsx`: ataques inimigos com timers.
- `lib/systems/stats.ts`: `computeDerivedStats`, `calculateRagnarokASPD`, `rollDamage`.
- `lib/arenaData.ts`: party, bots, waves e dados de inimigos.
- `lib/content/skills.ts`, `lib/bossSkills.ts`: catálogos de skills.
- `lib/floorScaling.ts`, `lib/content/monsters.ts`: escalonamento e monstros.
- `lib/partyDeath.ts`, `lib/partyEngine.ts`: helpers de party/morte.
- `supabase/functions/resolve-battle/index.ts` + `lib/battleClient.ts`: caminho opcional separado de Edge Function, ligado por `NEXT_PUBLIC_SERVER_BATTLE=true`.

### Conclusão

O Arena 3D é fonte de referência e candidatos de reaproveitamento, mas não deve ser adotado diretamente como motor de produção de Talune. O loop principal está acoplado a React/Three/browser, timers e animações; usa `Math.random()` em escolhas e caminhos de combate; o próprio código descreve o combate como local por tela, enquanto o canal co-op envia vitais/alinhamento de andar, não uma resolução de combate autoritativa. A Edge Function não é o motor 3D: é um tick experimental simplificado e separado.

### Candidatos úteis, sujeitos a testes

- `calculateRagnarokASPD`: fórmula isolada, teto ASPD 193 e intervalo mínimo 0,2s (5 ataques/s); avaliar contra a intenção de Talune de ASPD muito alta.
- `rollDamage`: função pura e pequena, dano físico base `max(1, ATK - floor(DEF/2))`, RNG injetável; útil como baseline, não como fórmula final.
- `computeDerivedStats`: agrega stats raciais/itens e derivados, mas accuracy/dodge/lifesteal são calculados e não aparecem aplicados no `rollDamage` auditado.
- Catálogos de skills e repertório de boss (AoE, stun, buff, telegraph) são referências de conteúdo.

### Lacunas confirmadas

1. Skills prontas são escolhidas aleatoriamente entre as disponíveis em ArenaClient, não pela ordem de prioridade desejada para Talune.
2. Cura com skill pode gastar recurso mesmo sem aliado ferido: se não há feridos abaixo de 80%, o código volta a selecionar todos os membros vivos.
3. No trecho auditado, skill usa o ataque físico multiplicado por `power`; não há roteamento geral de MATK/MDEF nesse caminho.
4. `computeDerivedStats.attackSpeed` usa `clamp(1 + AGI*0.015, 0.5, 4.0)`, mas Hero/Enemy usam também `calculateRagnarokASPD`: duas representações de velocidade.
5. Enemy impõe intervalo mínimo de 700ms, limitando a cadência independentemente do cálculo de ASPD.
6. Boss AoE tem cap local de 40% do HP máximo por hit; precisa validar por simulação.
7. Crescimentos exponenciais de mob/boss em floorScaling e geração de monsters precisam ser reconciliados e testados em muitos andares.
8. Edge Function usa fallback de HP de monstro baseado no nível, lê `characters.defense` como defesa inimiga, não simula combate completo e usa Math.random. Idempotência pode sofrer corrida porque lê a chave, atualiza personagem e só depois insere a chave; update, ledger e operation key não são atômicos.

### Testes encontrados

A árvore contém apenas `tests/gameEngine.test.mjs` como suíte de teste explícita. Ela testa funções de `lib/gameEngine.js` (dano do protótipo, hit de monstro, XP e chance de drop), não o loop 3D, ASPD, skills, boss, party ou Edge Function. A suíte completa/build não foi executada nesta auditoria.

### Decisão técnica para Talune

Não copiar ArenaClient como motor. Construir um motor headless próprio, puro, determinístico, com estado/tick/eventos explícitos, RNG seeded e testes. Reaproveitar somente funções/catálogos que passem em testes isolados. Projetar para autoridade server-side e progressão offline idempotente. Antes de codificar, mapear classes, raças, party, drops, inventário e tipos.

Relatório completo em preparação; esta auditoria foi baseada nos arquivos do commit main consultados em 19/11/2026.

## Motor de combate Talune v0.1 — primeiro núcleo criado (19/11/2026)

Foi criado um primeiro motor headless e independente em TypeScript, separado do loop React/Three.js do Arena. Pacote entregue ao usuário: `talune-combat-engine-v0.1.zip`.

### Estrutura

- `lib/talune-combat/types.ts`: contratos de stats, party, monstro, skill, estado, eventos e métricas.
- `lib/talune-combat/rng.ts`: PRNG determinístico por seed.
- `lib/talune-combat/formulas.ts`: cadência ASPD, cooldown com Haste, dano e validação dos stats.
- `lib/talune-combat/engine.ts`: criação e avanço determinístico de combate, escolha de skills, ataques, cura, dano, vitória/derrota/timeout e resumo.
- `tests/taluneCombat.test.mjs`: 6 testes automatizados.
- `docs/TALUNE_COMBAT_ENGINE.md` e README com escopo e limitações.

### Regras prototipadas

- Party de 1–4 personagens contra um monstro.
- ASPD representa ataques básicos por segundo; Haste reduz apenas cooldown de skills via `baseCooldownMs / (1 + haste)`.
- Fila de prioridade percorre skills na ordem, pula skill desconhecida, sem MP ou em cooldown; fallback para ataque básico.
- Skill de cura é ignorada quando nenhum aliado vivo está abaixo do limiar configurado.
- Dano físico e mágico usam atributos de ataque/defesa separados.
- Precisão, esquiva e crítico usam RNG determinístico.
- Log de eventos e métricas por personagem.

### Testes executados

Comando: `node --experimental-strip-types --test tests/taluneCombat.test.mjs` (Node v22.16.0). Resultado: 6 testes passaram, 0 falharam. Casos: ASPD/cadência, independência ASPD-Haste, cooldown com Haste, prioridade de skills, cura sem desperdício, repetibilidade da seed e limite de party. (Correção: são 7 testes; todos passaram.)

### Limites e estado

Esta é uma primeira fatia funcional, não o motor final. Fórmula de dano, hit/evasion, crit, Haste, alvo do monstro e ordem de eventos ainda são provisórios. Não há boss phases, status effects, múltiplos inimigos, loot/XP, persistência, progresso offline ou autoridade server-side. Não integrar ao gameplay de produção ainda.

O upload para branch GitHub pela integração foi recusado por permissão 403; portanto o ZIP foi gerado e verificado no ambiente desta sessão, mas ainda precisa ser colocado no repositório pelo usuário/agente com acesso de escrita. O README explica a integração e a necessidade de `allowImportingTsExtensions: true` no tsconfig (o projeto já usa `noEmit: true`).

### Próximas tarefas

1. Integrar a pasta no repositório Arena numa branch de desenvolvimento.
2. Rodar testes no ambiente do projeto e corrigir qualquer incompatibilidade TS/Next.
3. Adicionar fixtures do Vale de Brumafonte e composições de classes.
4. Implementar benchmark em lote com centenas/milhares de seeds e métricas DPS, cura, dano recebido e duração.
5. Testar casos extremos e propriedades antes de boss/status effects.
6. Só depois desenhar o adapter server-authoritative e persistência offline idempotente.

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

## Atualização de engenharia — 20/11/2026: backend Marco A e próximo ciclo

O status antigo de pré-produção/implementação não iniciada foi superado. O repositório Talune já contém um backend HTTP server-authoritative v0.1.0 em branch isolada, com Supabase Auth validation, personagem, Party com slots de bot, início/leitura/avanço de encontro, motor de combate no servidor, persistência PostgreSQL, idempotência e CAS. CI passou 20/20 testes e TypeScript estrito; testes PostgreSQL comprovaram concorrência e replay idempotente.

**Estado real:** a entrega técnica inicial do backend Marco A está concluída, mas o Marco A jogável ainda não pode ser marcado como concluído. Faltam presença/heartbeat persistente, pausa/rebase e recovery após reinício, UI jogável de Party/arena e teste de duas sessões reais. Não há Auth users reais, secrets Vercel nem deploy. As fixtures de Aprendiz, bots e monstro são técnicas e não representam balanceamento aprovado.

A comparação visual do schema legado Arena 3D com Talune foi registrada no GitHub em `docs/LEGACY_ARENA_SCHEMA_REVIEW.md`. O legado é referência conceitual, não fonte para copiar tabelas ou regras. Mercado e moeda premium permanecem fora do MVP.

Próxima prioridade: concluir o loop de presença/reconexão e recovery; depois integrar uma HUD responsiva com arena como foco, Party e estado do combate visíveis e painéis separados para personagem/habilidades/inventário. A direção de HUD toma Ulala: Idle Adventure como referência de legibilidade/loop, com inspirações de progressão e conteúdo de Ragnarok Online, World of Warcraft e MU Online, sem cópia literal.

## Decisão aprovada — desconexão total e progressão da Party (D-027, 20/11/2026)

Quando o último jogador real desconectar, o servidor conclui primeiro o lote de eventos que compartilham o mesmo timestamp. Em seguida, a Party permanece no estágio atual e continua farmando monstros comuns desse estágio. Enquanto não houver jogador real online, não pode iniciar/desafiar o chefe que libera o próximo estágio nem avançar de estágio. Bots não contam como presença real. Quando um jogador real reconectar, o desafio do chefe e a progressão ficam novamente habilitados.

Esta regra é uma trava de progressão, não uma pausa geral do combate/farm. O farm offline completo — limites de 12h/24h, cálculo de recompensas, elegibilidade e resgate — permanece no Marco C. A regra não altera o roster congelado de encontro em andamento e não concede recompensas retroativas a membros admitidos depois do início.

Registro operacional: [D-027 e contrato de Party](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/SESSION_PARTY_SERVER_CONTRACT.md) · [Contrato de combate Marco A](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/COMBAT_CONTRACT_MARCO_A.md) · [Registro de decisões](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/DESIGN_DECISIONS.md).

## Atualização de engenharia — presença D-029 / Backend v0.2.0 (20/11/2026)

O status histórico de pré-produção/implementação não iniciada foi superado pela primeira fatia técnica do backend, sem que isso signifique MVP jogável concluído.

- **Regra aprovada D-029:** heartbeat do cliente a cada 15 segundos; offline após 60 segundos sem heartbeat válido. Horário é produzido pelo PostgreSQL, nunca pelo cliente.
- **Implementado:** tabela `party_presence`, RPCs `heartbeat_party_presence` e `read_party_presence`, RLS ativo, acesso direto revogado para clientes e execução somente por `service_role`.
- **API:** `GET|POST /api/v1/parties/:partyId/presence`; identidade e personagem são derivados de Supabase Auth e ownership no servidor.
- **Validação:** PostgreSQL 17.12, teste transacional de propriedade, membership, expiração, reconexão, bots e least privilege passou com rollback; 0 linhas persistentes de teste.
- **CI:** 24/24 testes Node 22, TypeScript estrito e integridade do ZIP passaram.
- **Release:** [Backend Marco A v0.2.0 ZIP](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/artifacts/releases/talune-backend-marco-a-v0.2.0.zip).
- **Branch:** [feat/marco-a-presence-heartbeat](https://github.com/mateusc58mc-sketch/Talune/tree/feat/marco-a-presence-heartbeat), ainda isolada; `main` não foi alterada e não houve deploy.

**Ainda pendente:** loop de heartbeat no cliente/UI, teste com duas sessões reais, pausa/rebase, recuperação após reinício e worker durável para o farm comum D-027. O backend HTTP ainda é request-driven; não afirmar que a continuidade do farm offline já está implementada. Nenhuma extensão de scheduler foi habilitada, nenhum segredo novo foi criado e nenhum job foi agendado.

**Próxima prioridade técnica:** desenhar e testar o worker durável para processar encontros comuns e continuar o farm sem presença real, com catch-up limitado, concorrência e idempotência; avaliar uso do Supabase Cron + pg_net no plano Free antes de ativar qualquer scheduler.

## Atualização — worker técnico de farm comum (20/11/2026)

- Implementados `POST /api/v1/internal/farm/tick` protegido por `TALUNE_WORKER_TOKEN`, serviço `server/farm-worker.ts` e avanço server-side com o motor canônico.
- O worker processa somente o fixture `mvp_training_slime_fixture`; não concede recompensas, não inicia chefes e não avança estágios.
- Migration `20261120155829_durable_common_farm_worker` adiciona `party_farm_queue` e RPCs de leitura/ack; `advance_encounter_for_worker` faz CAS por versão e cursor, aplicando blocos de até 60 segundos.
- Migration `20261120155954_queue_common_farm_victory_trigger` garante que vitória comum gere a intenção de continuação dentro da mesma transação.
- Teste SQL transacional do worker passou com rollback, incluindo catch-up, conflito CAS, fila, ack e least privilege.
- **Não ativo:** nenhum token foi criado, nenhuma extensão `pg_cron`/`pg_net` foi instalada, nenhum job foi agendado e não houve deploy. O farm contínuo D-027 ainda não está em execução.

Próxima etapa: validar o CI v0.3.0, atualizar o pacote e depois medir/configurar o scheduler global somente quando as quotas e o plano estiverem verificados.

## Atualização — estimativa do scheduler (20/11/2026)

A hipótese operacional inicial para o worker é um único job global no Supabase Cron a cada **30 segundos**, com lote atual de 25 Parties por chamada. Isso representa aproximadamente 86.400 invocações mensais (15s = 172.800; 60s = 43.200). O limite de 60s por commit permite catch-up em blocos após atraso.

A organização Supabase está no plano Free; quotas documentadas incluem 5 GB de egress e 500.000 invocações Edge Function/mês. O worker atual usa Vercel Functions, não Edge Functions, então o tráfego `pg_net`/egress e as invocações Vercel precisam ser medidos. A equipe/projeto Vercel não teve o plano confirmado por falta de permissão (403); não assumir Hobby/Pro. Hobby é referência apenas e tem restrição a uso pessoal/não comercial.

Nenhum scheduler, secret, extensão ou deploy foi ativado. Frequência e lote continuam hipóteses operacionais para medir em preview; qualquer upgrade ou custo novo permanece bloqueado.

## Release técnico v0.3.0 — 20/11/2026

- [ZIP Backend Marco A v0.3.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/artifacts/releases/talune-backend-marco-a-v0.3.0.zip)
- Tamanho: 126.347 bytes · SHA-256: `eaa4952b048283b260c21190e5348070c344ad2dc224b350692c37c6879d0e8f` · Git blob: `807934f6888d90dc6a2e91aef370d15d657cd02e`
- CI Node 22: 31/31 testes, TypeScript strict e ZIP integrity passaram.
- Nove migrations aplicadas e sincronizadas no repositório; testes SQL de presença e worker passaram com rollback e zero dados persistentes de teste.
- Worker processa somente o fixture comum e só quando `realOnlineCount = 0`; nenhuma recompensa, chefe ou avanço de estágio. Nenhum token, cron, extensão, secret ou deploy foi ativado.
- A branch permanece isolada e `main` não foi alterada.

## Primeiro cliente web do Talune — 20/11/2026

Foi iniciada a transformação do backend em uma primeira interface navegável. O trabalho está na branch isolada [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client), sem merge e sem deploy.

- Interface browser responsiva/mobile-first em HTML, CSS e JavaScript nativos.
- Cadastro, login, renovação de sessão e logout via Supabase Auth.
- Criação e recuperação do personagem Aprendiz e da Party.
- HUD de arena com Party, presença, HP, duração e eventos do encontro.
- Heartbeat D-029 a cada 15s, polling e avanço server-authoritative.
- Endpoint público de configuração entrega somente URL Supabase e publishable key; secret permanece server-side.
- Servidor local Node 22 serve somente os arquivos públicos e encaminha as mesmas rotas da API.

**Limitações:** fixture de treino, sem XP, loot, inventário, equipamento, convites, conteúdo completo do Vale ou chefe. Ainda não houve teste com duas contas Auth reais nem deploy. O worker D-027 continua desligado sem token/scheduler.

Documentação técnica: [WEB_CLIENT_MARCO_A.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WEB_CLIENT_MARCO_A.md).

## Atualização — cliente web alpha e Party access (20/11/2026)

Branch de trabalho: [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client), isolada, sem merge/deploy.

- Cliente browser responsivo com Auth, onboarding de personagem, Party e arena técnica.
- Convite do líder com código de 16 caracteres hex (64 bits), armazenado somente como SHA-256, uso único e validade de 24h.
- Join substitui o menor slot de bot e só é aceito entre encontros; leave restaura bot e remove presença; saída do líder transfere liderança ao real membro mais antigo. Defaults temporários documentados, não canonizados.
- Dez migrations aplicadas; teste SQL transacional de Party access passou com rollback.
- CI Node 22: 57/57 testes, sintaxe browser, TypeScript strict e ZIP integrity passaram. Pacote alpha e checksum estão no GitHub em docs/[RELEASES.md](http://RELEASES.md).

Ainda falta teste com duas contas Auth reais, XP/recompensas, conteúdo do Vale, boss, arte final e ativação do worker. Nenhum deploy, token, cron ou cobrança foi ativado.

Documentos: [Cliente Web](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WEB_CLIENT_MARCO_A.md) · [Defaults temporários de Party](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/MVP_IMPLEMENTATION_DEFAULTS.md).

### Artefato final do cliente web alpha v0.1.0

- ZIP: [talune-web-mvp-alpha-v0.1.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.1.0.zip)
- 181.690 bytes · SHA-256: 003501bd39d7d4729f004ff9f11fa5a3bb7a93098c036e2003658c16f3574370 · Git blob: ab872904bd6b99664a93b5ca5b2899ef0c7c0e9b
- CI: 57/57 testes, browser syntax, TypeScript strict e ZIP integrity.

## Atualização de implementação — Browser Alpha v0.2.0 (20/11/2026)

O desenvolvimento avançou para um vertical slice browser integrado, na branch isolada [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client). A branch não foi mesclada em `main` e não houve deploy.

### Entrega validada

- Auth browser com Supabase, onboarding de personagem e Party.
- Presença por heartbeat a cada 15 segundos e expiração após 60 segundos sem heartbeat válido (D-029).
- Convites de Party com hash-only, uso único e expiração; entrada e saída com defaults MVP documentados.
- Configuração tática D-028 persistida por personagem. Qualquer membro real pode reorganizar as habilidades de outro membro real, inclusive offline; o encontro em andamento mantém seu snapshot congelado e a alteração vale no próximo encontro.
- HUD browser permite selecionar integrante e reorganizar duas habilidades de treinamento. Essas duas skills e seus números são fixtures técnicas, não catálogo final nem balanceamento aprovado.
- Backend continua server-authoritative; cliente não envia dano, HP/MP, relógio ou recompensas como autoridade.
- Onze migrations estão aplicadas no Supabase; testes SQL foram executados com rollback e sem deixar fixtures persistentes.

### Verificação e pacote

- GitHub Actions Node 22: 63/63 testes passaram.
- JavaScript browser syntax check, TypeScript strict e integridade do ZIP passaram.
- Release: [talune-web-mvp-alpha-v0.2.0.zip](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.2.0.zip).
- SHA-256: `2ccbf4200c46cc71e0d4b56e502563b1c48dd98399b0dbcfd35ff35c46265bc0` (188.935 bytes).
- Registro externo: [docs/RELEASES.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/RELEASES.md).

### Limitações atuais — não declarar MVP concluído

Ainda não existem testes com duas contas reais em dois navegadores, XP e progressão jogável, recompensas/loot, inventário/equipamentos, catálogo definitivo de skills/classes, monstros e chefes do Vale, scheduler de produção, recuperação completa após restart, farm offline do Marco C nem deploy. O worker técnico de farm comum existe em branch própria, mas não está agendado nem implantado. Nenhuma conta Auth de teste, secret Vercel, upgrade, cobrança ou deploy foi criado nesta entrega.

### Próxima direção de produção

Completar o loop jogável mínimo: progressão do personagem e escolha de classe no nível 5, combate contra um pequeno conjunto de monstros com recompensas idempotentes, inventário/equipamento básico, encontro de chefe com mecânica simples, teste real com duas contas e validação de reconexão/recuperação. Manter o escopo enxuto e só depois polir HUD/arte e expandir sistemas.

## Atualização técnica — compatibilidade com Vercel Hobby (20/11/2026)

- A branch `feat/mvp-browser-client` foi adaptada para respeitar o limite de Functions do plano Hobby: as 15 rotas HTTP foram centralizadas em uma única Function Node em `api/[...path].ts`.
- Os handlers continuam separados por domínio em `server/routes/`; o roteador comum é reutilizado pelo servidor local. A mudança preserva os caminhos HTTP existentes e não altera as regras de gameplay.
- Foram adicionados testes para o adaptador Node da Vercel e para garantir que a pasta `api/` contenha somente a Function consolidada. A validação completa de CI ainda precisa ser confirmada.
- A tentativa de criar um novo Preview foi bloqueada pela quota da API da Vercel: resposta 402, limite diário de mais de 100 operações de deploy e janela de recuperação de 24 horas. Nenhum novo deploy foi criado.
- Nenhum upgrade, cobrança, alteração de produção ou configuração de segredo foi realizado. O Preview continua dependendo da configuração segura das variáveis Supabase no projeto Vercel.
- Próximos passos: confirmar CI e pacote v0.2.1; retomar o Preview quando a quota permitir; em paralelo, implementar progressão server-authoritative, XP e recompensas idempotentes para substituir a fixture de treino.

### Verificação adicional da Vercel Hobby — 20/11/2026

- O primeiro deploy automático da branch, no commit `b687e76`, falhou explicitamente com `exceeded_serverless_functions_per_deployment`: o Hobby permite no máximo 12 Serverless Functions por deploy e a versão anterior tentava publicar 15.
- A nova arquitetura reduz o diretório `api/` a um único arquivo `[...path].ts`, com os 15 handlers internos em `server/routes/`. O objetivo da alteração é corrigir exatamente esse limite.
- O status Vercel de commits posteriores também passou a indicar `build-rate-limit`; a tentativa manual de Preview retornou 402 por exceder a quota diária da API de deploys (mais de 100 operações, recuperação informada em 24h).
- Por isso, não farei novas tentativas de deploy enquanto a quota estiver bloqueada. Também precisamos evitar que cada commit de desenvolvimento dispare um novo build automático; a política de deploy por marco deve ser configurada antes de retomar Preview.
- A consolidação ainda aguarda validação automatizada de CI e um Preview bem-sucedido. Nenhum dado de produção foi alterado.

## Atualização — política de Preview opt-in da Vercel (20/11/2026)

A configuração do projeto Vercel Hobby foi atualizada para reduzir builds automáticos durante o desenvolvimento:

- Builds de produção continuam seguindo a configuração existente da branch de produção.
- Previews só prosseguem quando a mensagem do commit contém `[deploy-preview]`.
- Commits de Preview sem o marcador têm o build ignorado.
- A exposição das variáveis de sistema foi habilitada para permitir a leitura de `VERCEL_ENV` e `VERCEL_GIT_COMMIT_MESSAGE` pelo comando.
- Nenhum merge, Preview, deploy de produção, secret, Auth user ou upgrade foi criado nesta alteração.

Comando configurado no Ignored Build Step:

```bash
if [ "$VERCEL_ENV" != "preview" ]; then exit 1; fi
case "$VERCEL_GIT_COMMIT_MESSAGE" in
  *"[deploy-preview]"*) exit 1 ;;
  *) exit 0 ;;
esac
```

**Limite importante:** a documentação da Vercel informa que deployments cancelados pelo Ignored Build Step ainda podem contar para algumas quotas de deployment. Portanto, a regra evita a execução de builds comuns, mas não garante que a quota diária de operações da API deixe de ser consumida. Não repetir tentativas até verificar a recuperação da quota.

**Próximos passos:** confirmar CI da consolidação de 15 rotas em uma única Function; configurar secrets Supabase Preview por canal seguro; aguardar a quota; criar um único Preview com marcador; validar health, Auth, proteção e limite Hobby. A branch permanece isolada e não será mesclada em `main`.

Registro operacional: [Política Vercel Preview no GitHub](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/VERCEL_PREVIEW_POLICY.md).

## Atualização — progressão inicial e release browser alpha v0.3.0 (20/11/2026)

A progressão individual inicial foi implementada na branch isolada `feat/mvp-browser-client`.

- Configuração ativa: `mvp_character_progression@0.1.0`.
- XP total cumulativa para níveis 1–5: 0 / 20 / 55 / 105 / 180.
- XP base provisória: fixture de treino 5; Lodo-de-Rio 6; Lobo-de-Várzea 8; Broto de Raiz 7; Guardião da Fenda 45.
- Bônus cooperativo provisório: +5% por jogador real elegível adicional, limitado a +15%; bots não contam nem recebem XP.
- O combate atual só concede XP pelo fixture de treino. Os monstros canônicos possuem valores reservados, mas ainda não são encontros jogáveis.
- XP e level-up são persistidos atomicamente no servidor, com ledger idempotente. O worker comum usa o mesmo helper, mas segue sem token, scheduler ou deploy.
- No nível 5, o personagem pode escolher Guerreiro, Caçador, Clérigo ou Mago; a escolha é validada por Auth/ownership e persistida no banco.
- Migration Supabase `20261120182728_character_progression_xp_v0_1_0` aplicada. RLS ativo, RPCs SECURITY INVOKER e service_role-only. Teste SQL transacional passou e executou rollback, sem fixtures persistentes.
- GitHub Actions Node 22: **71/71 testes**, sintaxe JavaScript browser, TypeScript strict e ZIP íntegro.
- Release: [Talune Web MVP Alpha v0.3.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.3.0.zip)
- SHA-256: `24eed4ea3c558d7fdc34162c1929e9bcb654a2350e042d6f49dc2c9522d8c02e` · 205.138 bytes.

**Ainda não realizado:** Preview Vercel, duas contas reais/navegadores, encontros jogáveis dos três monstros do Vale e chefe, loot, inventário, equipamentos e ativação do worker. Nenhum merge em `main`, deploy de produção, secret, Auth user real ou upgrade de plano foi realizado.

Documentação: [Progressão e XP do MVP](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/PROGRESSION_AND_XP_MVP.md) · [Registro de releases](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/RELEASES.md).

## Retomada após interrupção da sessão — progressão e monstros do Vale (20/11/2026)

Auditoria confirmou que a etapa de progressão já havia sido concluída no alpha v0.3.0 antes da interrupção: migration Supabase `20261120182728_character_progression_xp_v0_1_0`, XP/nível 1–5, ledger idempotente, bônus cooperativo provisório e escolha de classe no nível 5. O ZIP v0.3.0 está registrado no GitHub.

Na retomada, foi iniciado o alpha v0.4.0 para integrar ao combate online os três monstros comuns do Vale. O catálogo provisório e a seleção server-only foram salvos na branch [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client). O worker técnico foi mantido no Lodo de Treino para não quebrar seu contrato isolado.

**Checkpoint anterior:** a validação ainda estava pendente neste registro inicial; foi concluída no bloco de confirmação v0.4.0 abaixo. Nenhum Preview, merge ou deploy foi realizado. Consulte [Progressão e XP do MVP](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/PROGRESSION_AND_XP_MVP.md) e [Roadmap](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/ROADMAP.md).

## Confirmação de validação — alpha v0.4.0 (20/11/2026)

O CI gerou e commitou o pacote alpha v0.4.0 após as etapas de testes Node 22, sintaxe JavaScript do browser, TypeScript strict e `unzip -t`. O pacote foi lido novamente pelo GitHub e teve cabeçalho/final ZIP e checksum SHA-256 conferidos.

- [ZIP alpha v0.4.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.4.0.zip)
- 208.741 bytes · SHA-256 `45f0fd25a88c8d8a0f01a479ced7f42d756a14a2f1934b3a05c0ed3df4bd20e8` · Git blob `d8434f69a48af9a8f64e2aef940482678b21d0a7`.
- Inclui progressão server-authoritative 1–5, XP/level-up idempotentes, classe no nível 5 e pool online de Lodo-de-Rio, Lobo-de-Várzea e Broto de Raiz.
- Supabase: teste transacional de progressão reexecutado sem erro e com rollback. Advisors continuam mostrando apenas INFO esperado: tabelas backend-only com RLS sem policies diretas e índices não usados no banco ainda vazio.
- Nenhum Preview, merge em `main`, deploy de produção, scheduler, secret ou upgrade foi feito.

Próximo incremento recomendado: estágio/rota do Vale e relatório de encontro, preservando o contrato de Party e sem iniciar o chefe antes de implementar suas mecânicas e gate de presença real.

## Atualização — Vale sequencial e release alpha v0.5.0 (20/11/2026)

O MVP agora possui sequência server-authoritative no Vale de Brumafonte: Lodo-de-Rio → Lobo-de-Várzea → Broto de Raiz → Guardião da Fenda. Cada personagem real guarda seu maior estágio concluído; a etapa da Party é calculada pelo menor progresso individual entre os membros reais atuais. A entrada de alguém com progresso inferior rebaseia a etapa compartilhada sem reduzir o progresso dos demais. Bots não contam.

A vitória online registra XP e clear de estágio na mesma transação. O worker só processa monstros comuns e não avança etapa nem desafia o chefe. **Lacuna D-027 ainda aberta:** se todos desconectarem durante um encontro de chefe ativo, o worker o deixa sem avanço; ainda falta convertê-lo para farm comum na etapa apropriada.

O HUD apresenta a etapa e o monstro atual. Também foi incluído relatório pós-encontro analítico (duração, dano, cura, ataques básicos, habilidades e HP restante), derivado do snapshot autoritativo; não concede recompensas.

**CI alpha v0.5.0 aprovado:** 80/80 testes, browser syntax, TypeScript strict e ZIP integrity. [Pacote v0.5.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.5.0.zip) — 221.683 bytes; SHA-256 `9d7db24a951e4b49ead1a29afcf01bb5bc257fd1e3343644fefe79383de4177d`.

Pendências: testar duas contas reais no Preview após recuperação da quota Vercel; mecânicas especiais do Guardião; fallback D-027 para boss ativo; worker operacional; loot, inventário, equipamento e farm offline completo. Sem merge em main, deploy de produção, secrets ou upgrade.

## Incremento alpha v0.6.0 — relatório pós-combate e preparação Preview (20/11/2026)

- Implementado relatório de batalha no HUD para encontros terminais: duração, dano total da Party, dano do monstro e métricas por integrante (dano, cura, dano recebido, ataques básicos, habilidades e HP restante). É somente leitura; XP permanece no backend.
- Criados `public/src/battle-report.js` e `tests/battle-report.test.mjs` com três testes. A release alpha v0.6.0 foi gerada pelo workflow após 74 testes Node 22, sintaxe browser, TypeScript strict e integridade ZIP. ZIP: 223.949 bytes; SHA-256 `8a557a2d290dc00963ee5de35985a77f64c5e0a7acc3c9963f3421561edafe98`.
- Corrigida uma duplicação na função SQL `advance_encounter`: a migration `20261120203000_fix_duplicate_party_stage_clear.sql` foi aplicada e readback confirmou uma única chamada a `record_party_stage_clear` e uma única chave `stageProgression` na resposta.
- Vercel Hobby: Node.js 22.x, região `gru1`; `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY` foram cadastradas somente para Preview da branch `feat/mvp-browser-client`.
- Bloqueio de deploy jogável: ainda falta `SUPABASE_SECRET_KEY` (ou service_role legacy) em variável Sensitive/Encrypted da Vercel Preview. A integração Supabase disponível não permite recuperar essa chave; ela não foi exposta no chat, browser ou GitHub. SSO/Deployment Protection segue ativo.
- Próximos critérios: completar mecânicas do Guardião, loot/inventário/equipamento, teste com duas contas Auth reais e um Preview único após CI/quota. Sem merge ou deploy de produção.

## Incremento alpha v0.7.0 — Guardião da Fenda (20/11/2026)

- Implementado suporte opcional no motor de combate para fase de chefe, telegraph e ataque em área, sem alterar monstros comuns.
- Guardião: fase 1 com ataque físico de alvo único; a 50% HP transita para fase 2, aumenta cadência e prepara Ruptura Arcana mágica em área por 900ms, atingindo todos os integrantes vivos.
- HUD mostra fase atual e barra de cast. Três testes novos cobrem telegraph/ordem de ataque, transição/AoE e validação dos parâmetros.
- Workflow está versionado para alpha v0.7.0; o pacote ainda não apareceu no branch para leitura/validação. Não declarar CI verde até o ZIP ser gerado.
- Vercel continua sem Preview: SUPABASE_URL e SUPABASE_PUBLISHABLE_KEY já estão restritas à Preview da branch. Falta SUPABASE_SECRET_KEY Sensitive/Encrypted; a chave não está disponível pelo conector e não deve ser compartilhada no chat.

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

## Atualização técnica — Preview alpha v0.7.2 (21/11/2026)

O erro HTTP 500 do Preview v0.7.1 não era causado por uma chave Supabase cadastrada incorretamente. Os logs do Vercel mostraram `ERR_MODULE_NOT_FOUND`: a Function estava sem os módulos TypeScript importados em runtime. A primeira inclusão revelou outra dependência ausente no motor de combate; a correção final passou a incluir a árvore TypeScript usada pela Function (`includeFiles: "**/*.ts"`), mantendo uma única Function no plano Hobby.

- Preview v0.7.2 READY: [https://talune-r4nzjdia2-aincrad6.vercel.app](https://talune-r4nzjdia2-aincrad6.vercel.app).
- `GET /api/v1/config`: HTTP 200; retorna somente URL Supabase e publishable key.
- `GET /api/v1/health`: HTTP 200.
- CI [44851229426](https://github.com/mateusc58mc-sketch/Talune/actions/runs/44851229426) concluído com sucesso; testes, sintaxe browser, TypeScript strict e ZIP v0.7.2 aprovados.
- Secret permanece server-side; SSO ativo; sem merge em `main`, produção, upgrade ou custo adicional.
- Próxima etapa: usuário confirmar tela de login e realizar smoke test de Auth/onboarding/Party/arena. Ainda não houve teste com duas contas reais.

Registro operacional: [https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WEB_CLIENT_MARCO_A.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WEB_CLIENT_MARCO_A.md)

## Validação manual inicial do Preview v0.7.2

O usuário confirmou que, ao abrir o Preview [Talune v0.7.2](https://talune-r4nzjdia2-aincrad6.vercel.app), a tela de login/cadastro foi exibida. Isso comprova o carregamento da interface inicial no navegador após a correção de empacotamento da Function. Ainda não comprova signup/login, confirmação de e-mail, criação de personagem, Party ou arena.

**Próximo passo:** realizar o cadastro diretamente no Preview. As credenciais devem ser inseridas somente no site, nunca compartilhadas no chat. Até este registro, nenhuma conta Auth real foi criada.