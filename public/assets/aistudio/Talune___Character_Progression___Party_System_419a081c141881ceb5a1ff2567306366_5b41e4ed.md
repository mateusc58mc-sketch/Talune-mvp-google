# Talune — Character Progression & Party System

## Atualização aprovada — marcos iniciais de progressão (15/11/2026)

- **Nível 5:** desbloqueia a escolha de uma das quatro classes-base (Guerreiro, Caçador, Clérigo ou Mago). Substitui a proposta anterior de nível 10.
- **Nível 50:** o personagem deverá ter desbloqueado aproximadamente metade do total de slots ativos de habilidades.
- **Nível 100:** todos os slots ativos de habilidades estarão desbloqueados e o personagem poderá escolher sua especialização. Substitui a proposta histórica de especialização no nível 40.
- A curva exata dos desbloqueios intermediários será definida junto com o desenvolvimento de cada mecânica, evitando antecipar decisões sem contexto. A intenção é usar a progressão como tutorial jogável: introduzir sistemas, opções e aprimoramentos em etapas, conforme o jogador aprende e ganha familiaridade.
- A quantidade total de slots ainda não está definida. “Metade no nível 50” é uma proporção, não uma confirmação de quatro, cinco ou qualquer outro total.

**Estado:** níveis 5, 50 e 100 e os marcos descritos estão aprovados; distribuição exata dos slots e demais desbloqueios permanece em aberto.

# Atualização — inventário, automação de equipamentos e uso do correio

Diretrizes e decisões registradas em 15/11/2026:

## 1. Inventário — DIRETRIZ CONFIRMADA

- O inventário deverá ter espaço generoso, justamente para evitar que o jogador precise entrar constantemente no jogo apenas para liberar espaço durante o farm e o acúmulo de recompensas offline.
- A capacidade exata, organização por categorias, limites por pilha e eventuais expansões ainda precisam ser estudados no sistema de itens.
- Não assumir que o correio será o destino padrão de recompensas offline quando o inventário estiver cheio.

## 2. Automação de equipamentos — RECURSO DESEJADO; REGRAS A PROJETAR

O usuário quer estudar ferramentas de automação configuráveis, incluindo:

- Venda automática de equipamentos abaixo de um tier ou raridade definido pelo jogador.
- Desintegração automática de equipamentos abaixo de um tier ou raridade definido pelo jogador.
- Definição de critérios e prioridades para evitar conflitos entre regras de venda e desintegração.
- Proteções recomendadas a projetar para itens equipados, favoritos, bloqueados ou reservados, além de histórico das ações automáticas.

Esses exemplos representam a direção desejada; interface, condições, limites, prioridades, recompensas e proteções ainda não foram aprovados em detalhe.

## 3. Correio — ESCOPO DIFERENCIADO

- O correio poderá ser utilizado para entregar recompensas de eventos.
- Também poderá atender presentes, compensações e entregas especiais, se esse escopo for aprovado no desenho completo.
- O correio não deve ser tratado automaticamente como solução universal para inventário cheio ou como destino padrão de todo farm offline.

## 4. Próxima etapa de design

Antes de definir capacidade do inventário e automações, estudar e especificar o sistema de itens como um todo: categorias, raridades, tiers, atributos, requisitos de classe/nível, melhorias, venda, desintegração, negociação e fontes de obtenção. As regras de automação devem ser construídas sobre essa estrutura, sem presumir que raridade e tier sejam a mesma coisa.

# Decisão confirmada — entrega automática e relatório de farm offline

Decisão confirmada pelo usuário em 15/11/2026:

## 1. Entrega das recompensas — CONFIRMADO

- As recompensas acumuladas durante o farm offline serão entregues automaticamente quando o jogador retornar ao jogo.
- O jogador não precisará realizar uma coleta manual para receber o que ganhou.
- Mesmo com a entrega automática, o jogo exibirá um relatório de farm offline ao retornar, tornando os resultados da ausência claros e satisfatórios.

## 2. Relatório de retorno — CONFIRMADO

- O relatório deverá apresentar de forma organizada as recompensas obtidas durante a ausência, incluindo XP, ouro, materiais e equipamentos encontrados, conforme as categorias que forem habilitadas para o farm offline.
- A interface deve deixar claro o período contabilizado e o resultado recebido.

## 3. Integridade e segurança — DIRETRIZ CONFIRMADA

- O servidor será a autoridade para calcular o tempo offline elegível, aplicar o limite individual da conta (12 horas padrão ou 24 horas VIP), calcular as recompensas e efetuar a entrega.
- O cliente não poderá declarar tempo offline, escolher recompensas, alterar quantidades nem solicitar repetidamente a mesma entrega.
- O processamento deverá ser idempotente e registrado de forma persistente, impedindo duplicação de XP, ouro, materiais ou equipamentos em reconexões, atualizações da tela ou chamadas repetidas.
- O relatório deve refletir o resultado efetivamente confirmado pelo servidor, e não uma simulação independente no cliente.

## 4. Inventário cheio — PENDENTE

- Ainda é necessário definir o destino dos itens quando o inventário estiver cheio.
- Diretriz recomendada para validação: usar uma caixa de correio/depósito temporário de recompensas no servidor, para que nenhum item seja perdido e a entrega não possa ser explorada para duplicação. Isso é uma proposta, não uma decisão final.

## 5. Fluxo técnico de referência

1. O jogador autentica e retorna ao jogo.
2. O servidor calcula o intervalo offline válido e aplica o limite da conta.
3. O servidor gera ou recupera o resultado persistido do período, sem permitir uma segunda rolagem para o mesmo intervalo.
4. O servidor credita automaticamente as recompensas que couberem no inventário e encaminha eventuais itens excedentes para o mecanismo seguro que vier a ser aprovado.
5. O jogo apresenta o relatório com o resumo do período e das recompensas efetivamente entregues/armazenadas.

O fluxo detalhado de geração, persistência, entrega e tratamento de inventário cheio deverá ser especificado antes da implementação.

# Decisão confirmada — tabela própria de equipamentos offline e limite por conta

Decisão confirmada pelo usuário em 15/11/2026. Esta atualização resolve as alternativas anteriormente abertas sobre a política de equipamentos offline e a unidade de aplicação do limite.

## 1. Tabela de equipamentos offline — CONFIRMADO

- O farm offline pode conceder equipamentos; eles não serão completamente excluídos.
- Equipamentos obtidos offline usarão uma tabela de drop própria, separada da tabela de drop online.
- A tabela offline terá chances reduzidas em relação à tabela online, mas a redução não deve ser extrema: o objetivo é preservar a sensação de recompensa do jogo idle sem inundar o mercado.
- Tanto online quanto offline, as chances serão balanceadas por raridade. As taxas específicas ainda precisam de simulação e aprovação; não há percentuais finais definidos.
- A tabela separada permite calibrar a geração offline de equipamentos por raridade e por conteúdo sem alterar necessariamente a experiência de drop online.

## 2. Limite de farm offline por conta — CONFIRMADO

- Conta padrão: até 12 horas de acumulação offline.
- Conta VIP: até 24 horas de acumulação offline.
- O limite é individual por conta, não compartilhado pela Party.
- Cada conta acumula recompensas offline segundo seu próprio limite e condição de assinatura.
- A Party não possui um único contador coletivo de farm offline.

## 3. Papel da Party — CONFIRMADO

- A Party define o progresso cooperativo: estágio/andar/conteúdo em que o grupo está farmando.
- A Party não define nem compartilha o limite de acumulação offline dos integrantes.
- Cada conta recebe e acumula suas próprias recompensas, sujeitas ao seu limite individual e às regras de elegibilidade.
- Portanto, um membro que atinja seu limite não deve consumir nem bloquear o tempo offline disponível dos demais integrantes.

## 4. Pendências de implementação e balanceamento

- Definir percentuais por raridade nas tabelas online e offline, usando simulações de volume de itens gerados e negociados.
- Definir se as taxas offline variam por monstro, chefe, estágio ou categoria de equipamento.
- Definir o momento de início/reinício do contador offline e o fluxo de resgate das recompensas acumuladas.
- Definir como o servidor contabiliza a elegibilidade e a participação de cada conta nos encontros ocorridos durante sua ausência.
- Definir os limites de armazenamento e tratamento de recompensas quando o jogador retorna.

Não presumir que VIP aumenta a chance de drop: a vantagem confirmada do VIP neste sistema é o limite de acumulação offline de 24 horas, contra 12 horas da conta padrão.

# Atualização — limite de farm offline e proteção da economia

Decisão confirmada pelo usuário em 15/11/2026:

## 1. Limite de acumulação offline — CONFIRMADO

- Conta padrão: até 12 horas de farm offline.
- Conta VIP: até 24 horas de farm offline.
- O limite define o período máximo durante o qual a Party/personagem pode acumular recompensas enquanto o jogador está ausente.
- Ao atingir o limite, a acumulação de novas recompensas offline deve parar até o jogador retornar e iniciar um novo período de acumulação, conforme regra de resgate/reset a detalhar.

## 2. Proteção do mercado de equipamentos — DIRETRIZ CONFIRMADA; MECÂNICA EM ABERTO

O usuário identificou que o limite de 12h/24h, sozinho, não garante controle suficiente sobre a quantidade de equipamentos gerados, especialmente porque o loot é individual e cada jogador elegível possui sua própria rolagem.

A política final para equipamentos offline ainda não foi escolhida. Alternativas em avaliação:

- Excluir equipamentos das recompensas offline, mantendo XP e outros tipos de drops.
- Permitir equipamentos offline com probabilidades reduzidas.
- Criar uma tabela de drop offline separada, com taxas e limites específicos por categoria/raridade.

## 3. Princípios para o balanceamento — PROPOSTA, NÃO DECISÃO FINAL

- O VIP aumenta o limite de tempo offline de 12h para 24h; não deve automaticamente aumentar as chances de drop, especialmente de equipamentos raros.
- A economia deve ser simulada considerando quatro rolagens individuais por encontro e o número de membros reais elegíveis.
- A quantidade total de equipamentos introduzida no mercado deve ser controlada por taxas por raridade, tabelas por monstro/chefe e limites de acumulação/resgate quando apropriado.
- Não definir probabilidades numéricas nem implementar a política final de equipamentos offline antes de simular a oferta total, demanda, progressão e negociação.

## 4. Pendências

- Definir se o limite de farm offline é aplicado por personagem, por Party ou por conta.
- Definir quando o contador reinicia e como as recompensas são resgatadas.
- Definir se a Party continua farmando quando o limite offline de um membro é atingido e como tratar os demais membros.
- Escolher a política de equipamentos offline e balancear probabilidades por raridade.
- Definir quais outros drops podem ser acumulados offline e seus limites.

Esta atualização complementa a regra já confirmada de farm assíncrono: com todos os jogadores reais offline, a Party permanece no estágio atual e continua farmando, sem avançar para o próximo estágio.

# Atualização — avanço da Party, membros offline e autoridade tática

Decisões confirmadas pelo usuário em 15/11/2026. Esta atualização complementa e prevalece sobre qualquer trecho anterior que indique que todos os membros precisam estar online, ou que estabeleça cinco dias como prazo de inatividade do líder.

## 1. Avanço da expedição — CONFIRMADO

- A Party pode combater e farmar automaticamente mesmo quando alguns integrantes estão offline.
- Para a Party avançar para o próximo estágio/andar, é necessário que pelo menos um membro real esteja online.
- Se nenhum membro real estiver online, a Party permanece no estágio atual e continua farmando nele; não avança para o próximo estágio.
- A presença simultânea dos quatro jogadores nunca é requisito para avançar: basta pelo menos um membro real online.

## 2. Configuração tática das skills — CONFIRMADO

- Qualquer membro real que esteja online pode alterar a configuração tática das skills de qualquer integrante da Party, inclusive de membros offline.
- Pode escolher as skills que o personagem já tem disponíveis e alterar a ordem/sequência em que são usadas no combate automático.
- A finalidade é permitir que a equipe continue avançando e seja ajustada por quem estiver presente.
- Essa permissão não transfere a propriedade do personagem nem autoriza gastar recursos, desbloquear skills, evoluir habilidades, alterar atributos ou equipamentos. Essas ações continuam pertencendo ao dono do personagem, salvo futura decisão explícita.

## 3. Inatividade e remoção de membros — CONFIRMADO

- O prazo de sete dias de inatividade aplica-se somente ao líder e existe para impedir que a Party fique prejudicada por um líder ausente.
- Se o líder ficar inativo por mais de sete dias, a liderança deve ser transferida automaticamente para o membro real ativo mais antigo que permanecer na Party.
- O prazo de sete dias não é uma regra de expulsão automática dos demais membros.
- Em outras situações, o líder pode remover manualmente um membro que esteja ausente, conforme sua decisão.
- A ausência de um membro não impede por si só que a Party continue farmando ou avançando, desde que exista pelo menos um membro real online para autorizar/acompanhar o avanço.

## 4. Regras técnicas

- O estado online/offline e a última autenticação/login devem ser determinados pelo servidor, nunca por valores declarados pelo cliente.
- O avanço de estágio deve exigir a presença online de pelo menos um membro real no momento em que a Party satisfaz as condições para avançar.
- Com zero membros reais online, o servidor mantém a Party no estágio atual e pode continuar os ciclos de farm automáticos nesse estágio.
- Bots não contam como membros reais online para satisfazer o requisito de avanço.
- A transferência automática de liderança após sete dias deve ser atômica e selecionar o membro real ativo mais antigo; bots nunca podem assumir liderança.
- Remoção manual de um membro não deve regredir o estágio atual da Party nem apagar o progresso individual de qualquer personagem.

## 5. Pontos ainda em aberto

- Definir se “mais de sete dias” significa 168 horas exatas desde a última autenticação bem-sucedida do líder.
- Definir o comportamento se não houver nenhum outro membro real elegível para receber a liderança.
- Definir se uma edição tática de skills entra em vigor imediatamente ou no próximo ciclo/ação, e como resolver duas edições simultâneas.
- Definir quais recompensas individuais um membro offline recebe durante o farm automático, incluindo limites e critérios de elegibilidade/anti-abuso.

---

# Atualização — Party idle assíncrona e configuração de skills dos membros

Decisão confirmada pelo usuário em 15/11/2026:

## 1. Party não exige quatro jogadores conectados simultaneamente — CONFIRMADO

- A Party pode continuar participando do combate automático mesmo que nem todos os quatro jogadores estejam online ao mesmo tempo.
- A experiência é idle: o combate acontece automaticamente; a atividade principal de cada jogador é desenvolver e aprimorar seu próprio personagem.
- Portanto, a presença simultânea dos quatro membros não é requisito para a Party funcionar ou avançar.
- Não aplicar penalidade ou bloqueio simplesmente porque um ou mais membros estão offline.

## 2. Configuração das skills dos companheiros — CONFIRMADO

- Seguindo a referência de Ulala: Idle Adventure, um jogador que esteja online pode configurar as skills dos demais membros da Party.
- Essa configuração inclui escolher quais skills disponíveis no personagem serão usadas e definir/reordenar a sequência em que serão executadas durante o combate automático.
- A configuração pode ser feita mesmo quando o dono daquele personagem não está online, para que a Party continue otimizada durante a ausência dele.
- A configuração de skills é uma ferramenta tática da Party; não transfere a propriedade do personagem nem sua progressão individual para quem está editando.

## 3. Limites e detalhes técnicos ainda a definir

- Confirmar se qualquer membro online pode editar as skills de qualquer companheiro ou se haverá uma permissão/configuração de confiança.
- Definir como resolver edições simultâneas/conflitantes feitas por dois jogadores.
- Definir se o editor pode apenas escolher e ordenar skills já desbloqueadas/equipáveis pelo personagem, ou também alterar melhorias, níveis, talentos e outros aspectos da build. Até nova decisão, considerar confirmado somente escolher skills e ordenar sua sequência; não presumir permissão para gastar recursos, desbloquear ou evoluir skills.
- Definir se haverá conjuntos separados de skills para combate comum/AFK e chefes, como referência opcional inspirada em Ulala.

## 4. Implicação para desconexões

- Como a Party e o combate são assíncronos, desconectar não deve ser tratado automaticamente como saída da Party.
- A política de desconexão temporária, reconexão, substituição por bot e elegibilidade de recompensas continua pendente; não adotar uma janela de reserva ou expulsão automática sem decisão explícita.

---

# Atualização — saída de membros e sucessão de liderança da Party

Decisões confirmadas pelo usuário em 15/11/2026:

## 1. Saída ou remoção de membro — CONFIRMADO

- Quando um membro sai voluntariamente ou é removido da Party, os integrantes restantes continuam no estágio/andar atual da expedição.
- A saída ou remoção de um integrante não provoca regressão automática do progresso compartilhado dos que permanecem.
- O progresso individual de todos os personagens permanece intacto e independente do estado da Party.

## 2. Saída do líder — CONFIRMADO

- Quando o líder sai da Party, a liderança é transferida automaticamente para o membro ativo mais antigo que permanece no grupo.

## 3. Inatividade do líder por mais de cinco dias — CONFIRMADO

- Se o líder ficar sem entrar no jogo por mais de cinco dias, a liderança é transferida automaticamente para o membro ativo mais antigo da Party.
- O critério é a antiguidade como membro da Party entre os membros ativos restantes, não nível, poder, classe ou progresso.
- A transferência deve ser automática, sem exigir votação.

## 4. Regras de implementação e pontos a detalhar

- O servidor deve registrar a data/hora de entrada de cada membro na Party e a última atividade/login do líder.
- A checagem de inatividade deve usar relógio do servidor, não o relógio do cliente.
- A sucessão deve ser atômica: apenas um novo líder pode ser definido, mesmo se saída e expiração de inatividade ocorrerem quase simultaneamente.
- A transferência não deve alterar o estágio da expedição nem o progresso individual dos membros.
- Definir em especificação técnica se “mais de cinco dias” significa 120 horas exatas desde o último login autenticado do líder, e como tratar indisponibilidade prolongada do serviço.
- Definir o fallback se não houver outro membro real ativo (por exemplo, Party composta somente pelo líder e bots). Não presumir dissolução ou nomeação de bot como líder.

# Atualização de decisões — admissão segura, sincronização de progresso e economia de loot

Esta atualização registra decisões confirmadas pelo usuário em 15/11/2026 e prevalece sobre trechos anteriores que deixavam esses pontos em aberto ou os descreviam de outra forma.

## 1. Bots e economia — CONFIRMADO

- Bots não geram drops.
- Bots não negociam.
- Bots não devem gerar itens, moedas ou ativos persistentes negociáveis.
- Bots existem para preencher vagas e sustentar a experiência cooperativa, não para multiplicar a produção econômica.

## 2. Loot individual e independente da classe — CONFIRMADO COMO DIREÇÃO

- O loot continua sendo individual: cada jogador elegível recebe sua própria rolagem.
- A rolagem de equipamento não deve ser limitada à classe atual do personagem. Um Guerreiro pode encontrar um arco, um Mago pode encontrar uma armadura de Guerreiro etc.
- Equipamentos de outras classes podem incentivar negociação entre jogadores.
- A possibilidade de uso do item continua sujeita a requisitos próprios, como classe, nível ou especialização; encontrar um item não significa necessariamente poder equipá-lo.
- A raridade deve controlar fortemente a frequência: itens de raridade alta e superior devem ter chances drasticamente menores do que itens comuns/incomuns.

**Ainda a balancear:** nomes e quantidade de tiers de raridade, taxas exatas por monstro/chefe, categorias de item elegíveis, limites de drop, elegibilidade por participação, proteção contra farming abusivo, itens vinculados/não negociáveis, sinks e volume total de itens gerados. Não implementar probabilidades numéricas sem simulação econômica e aprovação.

## 3. Entrada de membro com progresso inferior — CONFIRMADO

A admissão não interrompe o combate em andamento e a Party reavalia o progresso compartilhado no início do próximo ciclo de combate.

Fluxo:

1. A Party está no mapa/estágio 10 e recebe uma solicitação de um jogador cujo progresso individual está no mapa/estágio 5.
2. O líder aceita a entrada.
3. O novo membro fica em estado de entrada pendente até o combate atual terminar.
4. Após o combate, antes de iniciar o próximo ciclo, o servidor recalcula o progresso comum.
5. O progresso compartilhado da Party passa a ser o menor progresso individual entre os membros reais elegíveis; neste exemplo, mapa/estágio 5.
6. Todos os membros passam a jogar juntos nesse ponto comum.

**Proteção do progresso individual:**

- A regressão do estágio da expedição é somente da Party/sessão cooperativa.
- Não reduz, apaga ou sobrescreve o progresso individual já conquistado pelos demais personagens.
- Se os jogadores que estavam no estágio 10 saírem da Party, continuam com seu progresso individual no estágio 10 e podem procurar outra Party compatível.

## 4. Regras técnicas e de integridade decorrentes

- O servidor é a autoridade para aceitar a entrada, concluir o encontro, definir o limite do ciclo e recalcular o estágio compartilhado.
- A admissão deve ser aplicada uma única vez, de forma transacional/idempotente, para evitar duplicação de membros ou recompensas.
- Nenhum novo membro entra retroativamente no combate que já começou.
- O servidor não deve conceder novamente XP, drops ou conclusão do encontro anterior ao membro que acabou de entrar.
- O novo estágio comum deve ser calculado a partir do progresso individual persistido dos membros reais, não de valores enviados livremente pelo cliente.
- Bots não devem reduzir artificialmente o menor progresso individual nem participar da regra de menor progresso; sua referência de estágio deve acompanhar a expedição ativa.
- O estado individual de progresso deve permanecer separado do estado de expedição da Party.

## 5. Pendências que continuam abertas

- Definir o que conta como progresso individual: estágio desbloqueado, estágio concluído, checkpoint alcançado ou outro marcador.
- Definir como a Party escolhe o progresso inicial quando é criada e quando um membro sai.
- Definir o tratamento de desconexão durante combate e durante a janela de transição.
- Definir se o líder pode cancelar uma admissão pendente antes do fim do combate.
- Definir elegibilidade de XP e loot para quem entrou após o combate, sem recompensa retroativa.
- Definir a tabela de raridades, probabilidades, itens vinculados e regras de negociação.
- Definir se o líder recebe aviso/confirmacão explícita de que aceitar o jogador fará a Party retornar a um estágio anterior.

## 6. Princípio de design

A Party é o estado cooperativo do grupo, não a proprietária do progresso individual dos personagens. Ela pode avançar, pausar ou voltar a um ponto comum para manter todos juntos; nenhuma dessas mudanças deve apagar o histórico pessoal já conquistado por cada jogador.

# Decisões aprovadas — XP, loot e admissão na Party

Estas decisões foram fornecidas pelo usuário em 15/11/2026 e prevalecem sobre descrições anteriores que ainda marcavam esses pontos como totalmente pendentes.

## 1. XP individual com bônus por cooperação real — CONFIRMADO

- A experiência base continua sendo atribuída individualmente a cada personagem.
- Jogar em Party com jogadores reais concede um bônus de XP.
- O bônus é um incentivo à cooperação entre pessoas e deve diferenciar uma Party com jogadores reais de uma Party preenchida apenas por bots.
- Bots não devem ser tratados automaticamente como jogadores reais para conceder esse bônus.

**Ainda não definido:** valor do bônus, fórmula, se cresce por quantidade de jogadores reais, elegibilidade por participação/tempo, regras para diferenças de nível, limite por sessão e proteção contra abuso/AFK. Não implementar números presumidos.

### Consequências e cuidados

- Preserva a progressão individual sem dividir uma única reserva de XP entre membros.
- Recompensa socialmente a formação de grupos reais sem tornar bots inúteis.
- O bônus precisa ser suficientemente atrativo, mas não tão alto que torne jogar com bots ou sozinho economicamente inviável.
- O cálculo deve ocorrer no servidor e ser registrado de forma auditável para impedir manipulação pelo cliente.

## 2. Loot individual — CONFIRMADO

- Cada personagem recebe sua própria rolagem/recompensa de loot ao cumprir as condições do encontro.
- Itens obtidos por um membro não são retirados de um conjunto compartilhado nem distribuídos por disputa entre os quatro membros.
- Inventário e propriedade dos itens permanecem individuais.
- A Party compartilha o progresso do encontro, não a propriedade dos drops.

**Ainda não definido:** se todos recebem uma rolagem em todo chefe ou se há elegibilidade por participação; quantidade de rolagens, tabelas por monstro/chefe, pity/garantia, limites diários e tratamento de bots. Bots não devem receber itens negociáveis ou recompensas persistentes sem uma decisão explícita.

### Consequências e cuidados

- Evita disputa e frustração por roubo/azar na distribuição de um item único.
- Simplifica a experiência cooperativa e mantém o foco no desenvolvimento do próprio personagem.
- Exige balanceamento cuidadoso da economia: quatro rolagens independentes por encontro podem aumentar a geração total de itens no mundo. O servidor deve controlar taxas e sinks econômicos.
- O loot individual não significa necessariamente que todos recebem o mesmo item; cada personagem faz sua própria rolagem conforme regras de drop.

## 3. Entrada de jogador com progresso inferior — decisão CONFIRMADA

- O líder da Party decide se aceita ou recusa a entrada de um jogador cujo progresso individual esteja abaixo do estágio atual da Party.
- Se aceito, o jogador passa a acompanhar o estágio cooperativo atual da Party; não cria um estágio paralelo dentro do mesmo grupo.
- A sincronização do conteúdo compartilhado permanece obrigatória.

**Ainda não definido:** se a aceitação concede apenas acesso temporário ao estágio atual ou também atualiza checkpoint/histórico pessoal; regras de elegibilidade por nível/poder; aviso ao líder sobre diferença de progresso; tratamento de recompensas e XP do jogador recém-admitido.

### Consequências e cuidados

- Dá autonomia social ao líder e permite grupos de amigos com progresso desigual.
- Pode permitir que jogadores avancem com ajuda de membros mais fortes; isso precisa ser considerado no balanceamento e nas recompensas.
- A interface deve informar claramente ao líder a diferença de progresso antes de aceitar.
- A entrada deve ocorrer em um ponto seguro do encontro (regra técnica a definir), sem duplicar recompensas ou interromper uma batalha em andamento.

## 4. Estado das regras econômicas

| Sistema | Decisão | Parâmetros pendentes |
| --- | --- | --- |
| XP | Individual + bônus por Party com jogadores reais | Fórmula, valor e elegibilidade |
| Loot | Individual por personagem | Elegibilidade, tabelas e frequência |
| Entrada com progresso inferior | Decisão do líder | Efeito no checkpoint e regras de acesso |
| Progresso da expedição | Compartilhado pela Party | Persistência e troca de Party |

# Atualização de decisões — bots, progresso cooperativo e reset de especialização

Esta seção registra as respostas mais recentes do usuário e prevalece sobre qualquer trecho anterior que as contradiga.

## Decisões confirmadas

### Party sempre formada — jogadores reais e bots

- A experiência principal não deve parecer um jogo solo vazio.
- Desde o início, o jogador entra na aventura com uma Party de até quatro integrantes.
- Quando não houver jogadores reais suficientes, vagas são preenchidas por bots/personagens controlados por IA.
- Os bots acompanham o nível do personagem principal usado como referência para a Party, mas têm força de combate deliberadamente inferior à de um jogador real de nível equivalente.
- A finalidade dos bots é manter a experiência cooperativa e permitir começar/progredir sem esperar por outros jogadores, preservando o incentivo para formar grupos com pessoas reais.
- O jogador continua controlando e desenvolvendo somente o próprio personagem. Bots não são personagens adicionais que o usuário equipa ou evolui individualmente.

**Parâmetros ainda a projetar:** percentual de poder dos bots em relação a jogadores reais, composição e papéis dos bots, comportamento de combate, progressão de equipamento/skills simulada, substituição de bot por jogador real e comportamento quando um jogador desconecta. Não inventar valores finais sem testes.

### Progresso cooperativo sincronizado

- Todos os integrantes de uma Party devem estar no mesmo ponto de avanço do conteúdo cooperativo: andar/andar da torre, mapa, estágio ou dungeon em andamento.
- A Party compartilha o estado de avanço do conteúdo. Não deve haver membros da mesma Party lutando em andares ou estágios diferentes durante a mesma sessão cooperativa.
- Isso não significa que todos compartilham a mesma progressão individual: nível, XP, inventário, equipamentos, classe e build continuam pertencendo a cada personagem.
- O modelo exato de XP, Ouro, loot, elegibilidade, diferenças de nível, checkpoints persistentes e regras para entrada/saída ainda precisa ser especificado. A referência de experiência desejada é a fluidez do compartilhamento de progresso de Ulala, sem copiar sua implementação.

### Reset de especialização

- A escolha de especialização não precisa ser irreversível.
- O jogador poderá redefinir/trocar sua especialização mediante um custo dentro do jogo.
- Tipo de custo, valor, frequência, requisitos e eventual período de espera ainda serão definidos.
- Não assumir que a troca de classe-base também será permitida; a decisão confirmada aqui é sobre especialização.

## Modelo de funcionamento proposto para validação

1. Um jogador cria ou entra em uma Party.
2. O sistema completa vagas vazias com bots até quatro integrantes, respeitando regras de matchmaking e preferências que ainda serão definidas.
3. Jogadores reais podem convidar/receber convites e substituir bots sem reiniciar automaticamente o avanço da Party, sujeito às regras de sincronização.
4. A Party seleciona ou continua um único estágio/andar/dungeon compartilhado.
5. O servidor mantém o estado cooperativo da Party e sincroniza o encontro para todos.
6. Cada personagem recebe XP e recompensas de acordo com regras individuais ainda a definir.
7. Ao sair, entrar ou desconectar, o sistema aplica regras explícitas de elegibilidade, substituição e recuperação de estado.

## Princípios de design para bots

- Bots devem ser úteis, mas não equivalentes a jogadores reais.
- Bots não devem superar o personagem principal em poder nem tornar irrelevante procurar jogadores.
- A diferença de poder deve ser percebida por desempenho, não por comportamento artificialmente sabotado.
- Bots precisam executar funções básicas de combate coerentes com sua classe/arquétipo.
- Bots devem ser estáveis e previsíveis para conteúdo idle; evitar decisões erráticas ou consumo excessivo de recursos.
- A composição com bots deve permitir iniciar a aventura e superar conteúdo inicial; conteúdo avançado pode exigir melhor build, coordenação ou jogadores reais, mas isso depende de balanceamento.

## Pendências de especificação

- O personagem principal que define o nível de referência dos bots: líder, maior nível, menor nível ou nível médio da Party.
- Escala de bots quando jogadores reais de níveis diferentes se juntam.
- Como os bots são escolhidos (classes fixas, composição inteligente, preferência do líder ou configuração).
- Se o líder pode remover/substituir bots manualmente.
- Regras para entrar no meio de um estágio e para substituir bots por jogadores reais.
- Política para desconexão temporária e reconexão.
- Distribuição de XP, Ouro e loot, inclusive em Party com bots.
- Se progresso de torre fica salvo por Party, líder ou checkpoint individual sincronizado.
- Custos e limites do reset de especialização.

## 1. Visão e status

**Decisões confirmadas pelo usuário:**

- Talune é um MMORPG Idle cooperativo.
- Cada jogador controla e evolui somente um personagem principal.
- O jogador pode criar uma Party ou entrar em uma Party existente.
- Uma Party comporta até quatro jogadores/personagens.
- A composição é livre. Quatro personagens Tank são permitidos; o jogo não exige uma composição fixa.
- Todos começam como Aprendiz, sem classe-base.
- Ao atingir o nível 10, o jogador escolhe uma das quatro classes-base: Guerreiro, Caçador, Clérigo ou Mago.
- Cada personagem faz suas próprias escolhas de classe, skills, equipamentos, atributos e progressão.

## 2. Princípio de propriedade do personagem

O personagem pertence ao jogador/conta. O jogador não administra os personagens dos outros membros da Party.

Cada personagem tem progressão própria:

- Nível e experiência.
- Classe e especialização.
- Atributos e build.
- Skills equipadas e ordem/condições de uso.
- Equipamentos e aparência Paperdoll.
- Inventário e recompensas individuais.
- Histórico e progresso pessoal.

A Party compartilha a atividade cooperativa e o encontro atual, mas não transforma os personagens dos membros em unidades controladas por um líder.

## 3. Progressão inicial: Aprendiz

### Níveis 1–9

- Todos começam como Aprendiz.
- O personagem ainda não escolheu uma classe-base.
- O jogador aprende o loop de combate automático, skills, equipamentos, loot e Party.
- A documentação histórica registra duas skills ativas iniciais e um kit de referência: Ataque Básico, Primeiros Socorros e Golpe Duplo. Revisar a diferença entre skills equipadas e ações básicas antes de finalizar o kit.
- A progressão deve ensinar o papel do jogador sem forçar uma composição específica.

### Nível 10 — escolha da classe-base

O jogador escolhe uma das quatro classes:

- Guerreiro — identidade defensiva, proteção e ameaça.
- Caçador — dano físico, precisão, mobilidade e crítico.
- Clérigo — cura, proteção e suporte; pode ter uma vertente ofensiva.
- Mago — dano mágico, área, controle e utilidade.

A escolha deve ser clara e significativa. Exibir papel típico, estilo de jogo, atributos prioritários, exemplos de skills e possíveis especializações futuras antes da confirmação.

A escolha não deve obrigar o jogador a ocupar uma vaga específica da Party. Uma Party com quatro Magos ou quatro Guerreiros deve continuar permitida.

## 4. Especializações

A documentação histórica registra duas especializações por classe, com referência de desbloqueio no nível 40:

- Guerreiro: Paladino / Berserker.
- Caçador: Atirador de Elite / Assassino.
- Clérigo: Sacerdote Divino / Inquisidor.
- Mago: Arquimago / Bruxo.

Esses nomes e identidades são referências de design existentes. O nível 40 é um marco histórico proposto e precisa ser confirmado após revisão da curva de progressão.

## 5. Party de até quatro jogadores

### Capacidades fundamentais

- Criar Party.
- Entrar em Party existente por convite ou mecanismo de descoberta a definir.
- Convidar outro jogador.
- Aceitar/recusar convite.
- Sair da Party.
- Expulsar membro, com permissões e proteção contra abuso a definir.
- Definir líder e transferir liderança.
- Visualizar os quatro slots, estado online e progresso do encontro.
- Reconectar sem duplicar personagem ou recompensas.

### Composição livre

Não há vagas obrigatórias de Tank, Healer ou DPS. Esses termos descrevem funções que classes, especializações, skills e builds podem desempenhar.

Exemplos:

- 1 Tank + 1 Healer + 2 DPS: composição equilibrada clássica.
- 2 Tanks + 2 DPS: mais resistência, potencialmente menos cura dedicada.
- 4 DPS: dano alto, maior risco de sobrevivência.
- 4 Healers/Suportes: sustentação elevada, potencialmente baixo dano.
- 4 personagens da mesma classe: permitido.

O sistema deve permitir experimentar. A dificuldade e os encontros devem oferecer trade-offs reais sem tornar composições alternativas impossíveis.

## 6. Combate cooperativo

- O combate acontece automaticamente enquanto a Party está em um encontro.
- Cada personagem usa sua própria build e skills.
- Skills de suporte podem beneficiar outros membros conforme alvo e alcance definidos.
- Ameaça, provocação, mitigação, cura, controle e dano são resolvidos pelo motor de combate.
- Não assumir que todo grupo possui Tank ou Healer.
- Chefes podem exigir interrupções, movimentação/posicionamento ou resposta a mecânicas que diferentes classes resolvem de formas distintas.
- O cliente exibe estado e animações; regras autoritativas de combate e recompensas ficam no servidor.

## 7. Recompensas e progressão em grupo — decisão parcial

**Confirmado:** o progresso do conteúdo cooperativo é compartilhado. Todos os integrantes devem estar no mesmo ponto de avanço da Party — andar da torre, estágio, mapa ou dungeon — durante a sessão cooperativa.

**Permanece individual:** nível, XP, classe, especialização, skills, atributos, equipamentos e inventário pertencem a cada personagem.

**Ainda pendente:**

- Como XP é distribuída e se há bônus por jogar com pessoas reais.
- Se Ouro é individual, compartilhado ou misto.
- Como o loot é atribuído: pessoal, rolagem, distribuição ou outra regra.
- Como funcionam diferenças de nível dentro da Party.
- Como o progresso compartilhado é persistido: Party, líder ou outro identificador estável.
- O que ocorre se um membro entra no meio de uma batalha/estágio.
- O que ocorre quando um membro desconecta ou fica offline.
- Como evitar abuso de carregamento por personagens de nível alto.

Não interpretar progresso compartilhado como inventário, XP ou nível compartilhados.

## 8. Party inicial com bots — decisão confirmada

A experiência deve começar com a Party formada, mesmo quando o jogador ainda não encontrou outros jogadores reais.

- A Party comporta até quatro integrantes.
- Vagas não ocupadas por jogadores reais são preenchidas por bots controlados por IA.
- Bots acompanham o nível do personagem principal usado como referência, mas têm poder de combate deliberadamente inferior ao de um jogador real equivalente.
- Bots permitem começar e continuar jogando sem espera, mas jogadores reais devem oferecer uma vantagem perceptível.
- O usuário controla e evolui apenas o próprio personagem; bots são companheiros automatizados do sistema.

**Pendente de especificação:** percentual de poder dos bots, seleção de classe/arquétipo, equipamentos e skills simulados, referência de nível em grupos mistos, entrada de jogadores reais para substituir bots, remoção manual e tratamento de desconexões.

A composição da Party permanece livre. Bots não devem forçar uma composição obrigatória.

## 9. Requisitos de UX

### Tela do personagem

O foco visual é o personagem do próprio jogador: avatar, classe, nível, equipamentos, atributos, skills e progressão.

### Tela da Party

Exibir até quatro membros com:

- Retrato/avatar e nome.
- Classe e especialização.
- Nível.
- HP/estado de combate.
- Skills ou indicadores relevantes de suporte.
- Estado de conexão.
- Indicador de líder.
- Ações contextuais conforme permissões.

### Arena

Apresentar os membros da Party lutando juntos. A identidade visual deve deixar claro que são personagens de jogadores diferentes, sem sugerir que o usuário controla quatro heróis.

## 10. Critérios de aceite do MVP

- Um usuário consegue criar e persistir seu personagem.
- Um personagem novo começa como Aprendiz.
- Ao alcançar nível 10, a escolha de uma das quatro classes fica disponível.
- A classe escolhida persiste e altera o kit/atributos conforme regras aprovadas.
- Um usuário consegue criar uma Party.
- Outros usuários conseguem entrar por convite ou fluxo aprovado.
- A Party nunca ultrapassa quatro membros.
- Cada membro mantém personagem, inventário, skills e progressão próprios.
- Uma Party com quatro personagens da mesma classe é aceita.
- O combate funciona com composições diferentes sem pressupor Tank/Healer/DPS fixos.
- Desconexão e reconexão não duplicam personagens, itens, XP ou recompensas.
- Interface é legível em mobile 9:16 e desktop.

## 11. Questões que ainda precisam de decisão

1. Party será pública, privada ou ambas?
2. Como jogadores encontram grupos: lista, matchmaking, convite, busca por andar?
3. O que acontece se o líder sair?
4. Qual será a regra exata de XP, Ouro e loot individual?
5. Como o avanço compartilhado da Party será persistido e como lidar com diferenças de checkpoint?
6. Qual personagem define o nível de referência dos bots em grupos mistos?
7. Qual será a diferença de poder entre bot e jogador real, e como será medida?
8. Como jogadores reais entram para substituir bots durante a progressão?
9. O nível 40 será realmente o marco da especialização?
10. Qual será o custo, limite e cooldown para resetar especialização?
11. Troca de classe-base será proibida, permitida ou tratada separadamente?

## 12. Referências internas

- Master Vision & Game Design Bible.
- RPG Systems, Classes, Skills & Talents.
- Combat & Squad Design.
- Production Roadmap & AI Agent Playbook.
- Documento histórico Classes, Skills e Templo das Artes Mágicas.

## Rascunho técnico — contrato de sessão, Party e presença (20/11/2026)

Foi criado um rascunho técnico no GitHub: [SESSION_PARTY_SERVER_CONTRACT.md](https://github.com/mateusc58mc-sketch/Talune/blob/main/docs/SESSION_PARTY_SERVER_CONTRACT.md).

O documento organiza as regras aprovadas de Party até quatro membros, ownership individual, bots, roster congelado por encontro, admissão tardia, regressão apenas do progresso compartilhado, desconexão/reconexão, presença real e idempotência. Não escolhe transporte, runtime, banco ou infraestrutura e não autoriza criação de recursos Supabase.

O texto está marcado como RASCUNHO — NÃO APROVADO. Questões como o instante exato de pausa quando todos desconectam, aplicação de alterações táticas, saída durante combate, heartbeat e recuperação após queda do servidor permanecem abertas. A divergência C-001 sobre transferência de liderança (cinco vs. sete dias) não foi alterada nem resolvida.

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

## Atualização técnica — backend e presença (20/11/2026)

A implementação atual de Talune possui identidade/ownership, Party com slots fixos, estado de encontro persistido, comandos idempotentes e motor server-side. Ainda não há presença/heartbeat durável, pausa/rebase ou recovery após restart; esses pontos são requisitos para encerrar o Marco A jogável.

A transferência automática de liderança continua bloqueada pela divergência C-001 (cinco vs. sete dias). Ela não será implementada nesta etapa. O schema legado Arena 3D serve apenas como referência conceitual; o modelo atual de Party/Encounter é mantido e evoluído, sem migração direta.

## Decisão aprovada — desconexão total e progressão da Party (D-027, 20/11/2026)

Quando o último jogador real desconectar, o servidor conclui primeiro o lote de eventos que compartilham o mesmo timestamp. Em seguida, a Party permanece no estágio atual e continua farmando monstros comuns desse estágio. Enquanto não houver jogador real online, não pode iniciar/desafiar o chefe que libera o próximo estágio nem avançar de estágio. Bots não contam como presença real. Quando um jogador real reconectar, o desafio do chefe e a progressão ficam novamente habilitados.

Esta regra é uma trava de progressão, não uma pausa geral do combate/farm. O farm offline completo — limites de 12h/24h, cálculo de recompensas, elegibilidade e resgate — permanece no Marco C. A regra não altera o roster congelado de encontro em andamento e não concede recompensas retroativas a membros admitidos depois do início.

Registro operacional: [D-027 e contrato de Party](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/SESSION_PARTY_SERVER_CONTRACT.md) · [Contrato de combate Marco A](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/COMBAT_CONTRACT_MARCO_A.md) · [Registro de decisões](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/DESIGN_DECISIONS.md).

## Decisão aprovada — alterações táticas durante encontro (D-028, 20/11/2026)

Alterações na prioridade/ordem de habilidades feitas durante um encontro entram em vigor **somente no próximo encontro**. O encontro em andamento mantém congelada a configuração tática efetiva no seu início; mudanças realizadas durante a luta são salvas para o próximo encontro e não alteram ações, cooldowns, eventos ou resultados já em processamento.

A regra também se aplica quando um membro real online altera a configuração tática de um integrante que está offline. Permanece válida a permissão já aprovada de edição tática cooperativa; esta decisão define apenas o momento de aplicação. Não autoriza alterar atributos, equipamento, XP, recursos ou progressão de outro personagem.

**Racional:** previsibilidade, consistência do snapshot de encontro e ausência de mudanças retroativas durante a simulação server-authoritative.

**Contrato:** SESSION_PARTY_SERVER_[CONTRACT.md](http://CONTRACT.md), P-SESSION-02 resolvida. Critério de aceite: qualquer edição tática feita durante encontro deve persistir para o próximo encontro, enquanto o encontro corrente termina com a configuração congelada no início.

Registro GitHub: [D-028 — Design Decisions](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/DESIGN_DECISIONS.md) · [Contrato de Party e presença](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/SESSION_PARTY_SERVER_CONTRACT.md).

## Decisão aprovada — heartbeat e expiração de presença (D-029, 20/11/2026)

- O cliente envia heartbeat a cada **15 segundos** enquanto a sessão do personagem estiver ativa.
- O servidor considera o personagem **offline após 60 segundos** sem heartbeat válido.
- O timestamp é produzido pelo PostgreSQL; o cliente não envia horário, elapsed time ou status online/offline como autoridade.
- Cada heartbeat exige autenticação Supabase válida, personagem pertencente à conta autenticada e membership atual na Party.
- A presença é por personagem: qualquer sessão autenticada ativa do mesmo dono pode renovar o heartbeat. Fechar uma aba não derruba a presença se outra sessão continuar ativa.
- Presença expirada é calculada pelo limite de 60 segundos, sem depender de limpeza periódica. Bots não contam como presença real.
- Reconexão é reconhecida no primeiro heartbeat válido; o servidor continua fornecendo snapshot autoritativo e não altera retroativamente roster, recompensas ou progresso individual.
- O heartbeat não avança combate nem concede recompensas. A continuidade do farm D-027 exige um worker durável separado.

**Implementação:** em desenvolvimento na branch `feat/marco-a-presence-heartbeat`. A regra foi registrada em [D-029 no GitHub](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/docs/DESIGN_DECISIONS.md) e no [contrato de Party e presença](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/docs/SESSION_PARTY_SERVER_CONTRACT.md).

## Implementação técnica D-029 — 20/11/2026

- Migration `20261120155242_party_presence_heartbeat_d029.sql` aplicada ao projeto Supabase `talune`.
- `party_presence` guarda uma lease por personagem; timestamp via `clock_timestamp()`; offline calculado após 60s.
- RPCs `heartbeat_party_presence` e `read_party_presence` são `SECURITY INVOKER`, com `EXECUTE` somente para `service_role`; tabela com RLS e sem grants diretos de leitura/escrita para clientes.
- API `GET|POST /api/v1/parties/:partyId/presence` já está na branch isolada.
- SQL transacional e CI 24/24 passaram; nenhuma fixture persistente foi mantida.
- [Contrato no GitHub](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/docs/SESSION_PARTY_SERVER_CONTRACT.md) · [Backend v0.2.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/docs/BACKEND_MARCO_A.md) · [Release ZIP](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/artifacts/releases/talune-backend-marco-a-v0.2.0.zip).

**Limite:** o endpoint e a persistência não implementam o scheduler/farm contínuo D-027 nem o heartbeat no cliente; essas etapas permanecem em desenvolvimento.

## Atualização — worker técnico de farm comum (20/11/2026)

- Implementados `POST /api/v1/internal/farm/tick` protegido por `TALUNE_WORKER_TOKEN`, serviço `server/farm-worker.ts` e avanço server-side com o motor canônico.
- O worker processa somente o fixture `mvp_training_slime_fixture`; não concede recompensas, não inicia chefes e não avança estágios.
- Migration `20261120155829_durable_common_farm_worker` adiciona `party_farm_queue` e RPCs de leitura/ack; `advance_encounter_for_worker` faz CAS por versão e cursor, aplicando blocos de até 60 segundos.
- Migration `20261120155954_queue_common_farm_victory_trigger` garante que vitória comum gere a intenção de continuação dentro da mesma transação.
- Teste SQL transacional do worker passou com rollback, incluindo catch-up, conflito CAS, fila, ack e least privilege.
- **Não ativo:** nenhum token foi criado, nenhuma extensão `pg_cron`/`pg_net` foi instalada, nenhum job foi agendado e não houve deploy. O farm contínuo D-027 ainda não está em execução.

Próxima etapa: validar o CI v0.3.0, atualizar o pacote e depois medir/configurar o scheduler global somente quando as quotas e o plano estiverem verificados.

## Refinamento do worker — gate por presença real (20/11/2026)

O worker agora consulta `read_party_presence` antes de avançar um encontro comum ou consumir uma intenção da fila. Ele só processa a Party quando `realOnlineCount = 0`; com qualquer jogador real online, não avança em background e mantém a fila pendente para as ações do jogador. Bots nunca satisfazem presença real. O heartbeat continua 15s e expiração 60s.

- Teste automatizado confirma que a fila permanece pendente enquanto existe jogador real online.
- CI Node 22: 31/31 testes, TypeScript estrito e ZIP integrity passaram na execução validada; o pacote final inclui os contratos de Party/combate e nove migrations.
- Ainda não há heartbeat no cliente, duas sessões reais, token do worker, scheduler ou deploy; o farm contínuo permanece preparado, não ativo.

## Release técnico v0.3.0 — 20/11/2026

[ZIP Backend Marco A v0.3.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-presence-heartbeat/artifacts/releases/talune-backend-marco-a-v0.3.0.zip) · 31/31 testes · nove migrations · SHA-256 `eaa4952b048283b260c21190e5348070c344ad2dc224b350692c37c6879d0e8f`.

O worker consulta presença real e só processa farm comum quando todos os jogadores reais estão offline. Com presença real online, não avança em background e mantém a fila pendente. O worker segue desligado (sem token, scheduler ou deploy); fixture de treino sem recompensas, sem boss e sem avanço de estágio.

## Party access — defaults temporários do MVP (20/11/2026)

Para avançar sem bloquear o MVP, foram implementados defaults reversíveis (não canonizados):

- Somente líder cria convite; código aleatório de 16 hex/64 bits, somente hash SHA-256 persistido, validade de 24h, uso único e um código ativo por Party.
- Entrada substitui o menor slot de bot; não ocorre durante encontro e não gera recompensa retroativa.
- Saída apenas entre encontros; slot retorna a bot e a presença é removida.
- Se o líder sai, liderança vai ao membro real com menor joined_at e slot como desempate. Líder solo não pode sair até convidar outro jogador.
- Sem diretório público, matchmaking, kick/ban ou convites de não-líder.

Migration 10 aplicada e teste transacional aprovado. Ainda falta validar com duas contas Auth reais e reconciliar C-001/contrato canônico de liderança. Referência técnica: [MVP_IMPLEMENTATION_DEFAULTS.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/MVP_IMPLEMENTATION_DEFAULTS.md).

# Implementação provisória de XP do MVP — 20/11/2026

Autorizada pelo usuário para viabilizar o MVP e playtests. **Não representa balanceamento final.**

## Configuração ativa

- Versão: `mvp_character_progression@0.1.0`
- Thresholds cumulativos: nível 1 = 0 XP; nível 2 = 20; nível 3 = 55; nível 4 = 105; nível 5 = 180.
- Limite inicial do MVP: nível 5. A progressão acima disso, desbloqueios intermediários e especializações ficam para etapas futuras.

## Recompensas provisórias

- Lodo de Treino (fixture técnica): 5 XP.
- Lodo-de-Rio: 6 XP.
- Lobo-de-Várzea: 8 XP.
- Broto de Raiz: 7 XP.
- Guardião da Fenda: 45 XP.

Apenas o fixture de treino está conectado a um encontro jogável. Os demais valores estão reservados na configuração até a implementação dos encontros canônicos.

## Bônus cooperativo provisório

+5% por jogador real elegível adicional, limitado a +15% para quatro jogadores reais. Bots não contam e nunca recebem XP. O roster elegível é congelado no início do encontro e não há recompensa retroativa para membros admitidos depois.

## Implementação e integridade

- XP representa total acumulado.
- Crédito de XP e atualização de nível são atômicos com a vitória do encontro.
- Ledger idempotente por encontro/personagem/tipo impede duplicação.
- O worker comum utiliza o mesmo helper, mas ainda não está ativo por ausência de token/scheduler/deploy.
- A escolha de classe-base é desbloqueada no nível 5: Guerreiro, Caçador, Clérigo ou Mago. É única nesta versão e validada pelo servidor.
- Migration `20261120182728_character_progression_xp_v0_1_0` aplicada; RLS ativo, RPCs SECURITY INVOKER restritas a service_role.
- Teste SQL transacional passou: XP 5 inicial, replay idempotente, evolução a 180 XP/nível 5, seleção/replay de classe; rollback sem dados de teste persistentes.
- CI browser alpha v0.3.0: 71/71 testes, sintaxe browser, TypeScript strict e ZIP íntegro.

Revisar esses números depois de playtests de ritmo, duração de progressão e composição da Party. Referência técnica: [PROGRESSION_AND_XP_MVP.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/PROGRESSION_AND_XP_MVP.md).

## Implementação inicial de XP e integração dos monstros do Vale — 20/11/2026

- A implementação técnica da progressão 1–5 está registrada em [Progressão e XP do MVP no GitHub](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/PROGRESSION_AND_XP_MVP.md).
- Configuração provisória ativa: thresholds cumulativos 0/20/55/105/180; XP individual server-authoritative; bônus cooperativo +5% por jogador real adicional até +15%; bots excluídos.
- XP é concedida atomicamente com a vitória, usando ledger idempotente por encontro/personagem/tipo. Escolha de classe-base no nível 5 já está implementada e validada em teste SQL transacional.
- No alpha v0.4.0 validado, Lodo-de-Rio, Lobo-de-Várzea e Broto de Raiz integram o pool de encontros online; o servidor escolhe por seed interna e o cliente não determina monstro nem recompensa.
- Stats e valores de XP continuam provisórios para playtest. O motor atual ainda não implementa controle de status; Broto de Raiz não aplica stun/root. Guardião da Fenda e seus encontros continuam pendentes.
- O worker de farm continua isolado no Lodo de Treino técnico e não está agendado/implantado.

## Validação do alpha v0.4.0 — 20/11/2026

- O catálogo dos três monstros comuns do Vale foi integrado aos encontros online com seleção determinística por seed interna do servidor.
- A vitória usa o ID do monstro persistido no snapshot para conceder XP individual pela função transacional e ledger idempotente já existente.
- O pacote [Talune Web MVP Alpha v0.4.0](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/artifacts/releases/talune-web-mvp-alpha-v0.4.0.zip) foi gerado pelo workflow após testes Node 22, sintaxe browser, TypeScript strict e verificação ZIP.
- SHA-256: `45f0fd25a88c8d8a0f01a479ced7f42d756a14a2f1934b3a05c0ed3df4bd20e8`; tamanho 208.741 bytes.
- Valores de combate e XP continuam provisórios. Broto de Raiz não aplica stun/root; o motor ainda não tem efeitos de controle. Chefe, loot, inventário, equipamentos e testes com duas contas reais seguem pendentes.

# Sequência do Vale e progresso compartilhado — 20/11/2026

A primeira sequência de conteúdo está conectada ao loop de encontro:

1. Margens do Rio — Lodo-de-Rio (comum, 6 XP)
2. Trilha Alagada — Lobo-de-Várzea (comum, 8 XP)
3. Raízes Antigas — Broto de Raiz (comum, 7 XP)
4. Fenda Corrompida — Guardião da Fenda (chefe, 45 XP)

Stats de combate são fixtures provisórias para playtest. O Guardião ainda não tem fases, cast bar, telegráficos ou adds; o motor atual não tem status de controle, então Broto de Raiz não aplica root/stun.

Cada personagem real mantém `highest_cleared_stage`. A etapa compartilhada da Party é calculada pelo menor progresso entre seus membros reais atuais + 1. Entrada de membro com progresso inferior rebaseia a Party para o estágio dele, sem regredir o progresso individual dos demais. Bots não contam e não recebem progresso. Saída do membro de menor progresso pode permitir que a Party avance.

Vitória iniciada por jogador real grava XP e clear individual na mesma transação. O worker pode continuar farmando monstros comuns no estágio atual, mas não grava clear nem processa o chefe. D-027 ainda tem uma lacuna: boss ativo no momento do último disconnect fica sem avanço; o fallback para farm comum precisa ser implementado.

CI alpha v0.5.0: 80/80 testes, browser syntax, TypeScript strict e ZIP íntegro. Documentação técnica: [WORLD_PROGRESSION_MVP.md](https://github.com/mateusc58mc-sketch/Talune/blob/feat/mvp-browser-client/docs/WORLD_PROGRESSION_MVP.md).