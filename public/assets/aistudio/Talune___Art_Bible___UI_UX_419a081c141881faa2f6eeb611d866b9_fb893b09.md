# Talune — Art Bible & UI/UX

## 1. Objetivo artístico

Criar uma identidade 2D de fantasia acolhedora, vibrante e detalhada, com personagens semi-chibi ilustrados/pintados à mão. O jogo deve parecer um produto de idle RPG premium, e não um painel administrativo com elementos de jogo.

Referência de experiência: Ulala Idle Adventure para hierarquia, leitura rápida, apresentação de heróis e organização de telas. Talune deve manter identidade própria.

## 2. Linguagem visual

- Personagens: proporções semi-chibi, rostos expressivos, roupas com camadas, silhuetas reconhecíveis e acabamento ilustrado.
- Cenários: biomas de fantasia pintados, profundidade em camadas, elementos de primeiro plano e fundo, iluminação atmosférica.
- Monstros: silhuetas próprias, escala e linguagem visual coerentes com a região e a família.
- Equipamentos: armas, armaduras e acessórios devem ser reconhecíveis no avatar, não apenas por ícones.
- Interface: painéis de fantasia, molduras ornamentadas com moderação, ícones consistentes e tipografia legível.
- Paleta: vibrante e quente, com cores de raridade padronizadas e contraste suficiente para telas pequenas.

## 3. O que evitar

- Pixel art como estilo principal.
- Círculos, retângulos e bonecos geométricos como substitutos permanentes de personagens.
- Assets genéricos sem coerência de proporção, iluminação ou perspectiva.
- Painéis escuros genéricos que dominam toda a tela.
- Menus permanentes ocupando grande parte da arena.
- Efeitos visuais que escondem personagens, barras de vida ou informações de combate.
- Copiar diretamente personagens, ícones, telas ou assets de Ulala ou de outros jogos.

## 4. Arena principal

A arena é a tela inicial e o contexto persistente do jogo.

Deve mostrar:

- Squad completo com personagens em posições claras.
- Inimigo ou chefe com escala e presença visual.
- Barras de HP e estados essenciais.
- Efeitos de dano, cura, crítico, bloqueio e habilidades.
- Indicador de andar/wave e progresso.
- Cast bar de chefes e telegraph visual de ataques.
- Botão de desafiar chefe quando aplicável.
- Atalhos compactos para Inventário, Equipamentos, Skills, Personagem e outras telas.

A arena não deve conter o inventário completo nem listas longas de habilidades abertas por padrão.

## 5. Navegação por telas dedicadas

Ao tocar em um atalho, abrir uma tela dedicada, overlay amplo ou rota interna com hierarquia própria.

### Inventário

Grade de itens, filtros, ordenação, quantidade, raridade, detalhes e comparação. A seleção de item abre uma ficha completa com ações contextuais.

### Equipamentos / Personagem

Avatar central com Paperdoll, slots visíveis, atributos totais, bônus de conjunto e comparação. Equipar deve atualizar o avatar e os atributos reais.

### Skills

Lista de skills disponíveis, slots ativos, rotação automática, cooldown, custo, alvo, efeitos e descrição completa. A ordem deve ser configurável.

### Classes e talentos

Tela própria para classe, especialização, atributos e, futuramente, árvore de talentos. Na primeira versão, não exibir árvore incompleta como funcionalidade ativa.

### Retorno à batalha

Toda tela secundária precisa de um botão claro de retorno à arena. Abrir/fechar menus não deve reiniciar combate, rotação, timers ou estado do squad.

## 6. Paperdoll 2D

Usar uma base de personagem padronizada e peças 2D em camadas alinhadas por âncoras comuns.

Definir:

- Dimensão-base e escala de renderização.
- Pivôs e âncoras de cabeça, torso, mãos, pés e costas.
- Ordem de renderização e regras de oclusão.
- Slots visuais suportados por classe.
- Compatibilidade entre raças e proporções corporais.
- Estados de idle, ataque, dano, conjuração, vitória e derrota.
- Exportação de sprites com transparência e naming consistente.

A implementação deve ser validada com um personagem, uma arma, uma armadura e um acessório antes de produzir dezenas de combinações.

## 7. Raridade visual

Manter a mesma linguagem visual em inventário, Paperdoll, loot e mercado.

- Comum: cinza, sem brilho excessivo.
- Incomum: verde.
- Rara: azul.
- Épica: roxo.
- Lendária: dourado/laranja.
- Mítica: tratamento especial, sem prejudicar a leitura.

Raridade não pode ser comunicada apenas por cor: usar também moldura, símbolo, textura ou efeito.

## 8. Qualidade e desempenho

- Priorizar sprites otimizados, atlas e carregamento sob demanda.
- Evitar animações pesadas em elementos de interface.
- Manter legibilidade em viewport móvel estreita.
- Definir limites de partículas e efeitos simultâneos.
- Oferecer fallback quando um asset falhar; nunca substituir silenciosamente arte final por formas geométricas.
- Validar em celular de baixo/médio desempenho e desktop modesto.

## 9. Critérios de aprovação visual

Uma tela só pode ser aprovada quando:

1. Tem hierarquia clara e foco visual.
2. Personagens e monstros têm acabamento coerente.
3. Os elementos interativos parecem clicáveis e respondem corretamente.
4. Textos, ícones e números são legíveis em 9:16.
5. A tela não desperdiça espaço nem esconde a arena sem necessidade.
6. Equipamentos e raridades são reconhecíveis.
7. Não há clipping, sobreposição ou desalinhamento de camadas.

## 10. Referência visual complementar — HUD de combate (20/11/2026)

Uma análise visual focalizada dos quatro clipes de Ulala reporta: party posicionada em duas linhas; retratos compactos; barras de estado sobre unidades durante engajamento; inimigos com HP individual; cabeçalho de chefe com HP e conjuração; feedback de dano/cura por números e efeitos; e estatísticas aprofundadas fora da arena.

**Direção candidata para Talune (proposta de UX, não regra de gameplay):**

- Preservar a arena como foco principal e manter quatro integrantes, inimigos e estados essenciais legíveis.
- Exibir informações contextuais de HP/estado próximas das unidades sem sobrecarregar travessias ou a área de combate.
- Reservar espaço consistente para nome/HP do chefe e telegraph/cast quando aplicável.
- Diferenciar apenas eventos que existam no sistema de Talune (dano, cura, escudo, bloqueio etc.).
- Manter chat recolhido por padrão durante combate e evitar menus permanentes sobre a arena.
- Não importar formação rígida do Ulala; composição de Party em Talune continua livre.

Os vídeos são verticais 9:16; adaptação para desktop/tablet não foi comprovada. O layout final deverá ser validado em protótipo responsivo e em dispositivos modestos. Referência detalhada: [investigação visual no GitHub](https://github.com/mateusc58mc-sketch/Talune/blob/feat/marco-a-completion-planning/docs/ULALA_VISUAL_INVESTIGATION_2026-11-20.md).

## Implementação inicial da HUD browser — 20/11/2026

Foi criada uma primeira estrutura funcional de HUD na branch [feat/mvp-browser-client](https://github.com/mateusc58mc-sketch/Talune/tree/feat/mvp-browser-client): cabeçalho, roster de quatro slots, status de presença, arena central, HP do monstro, duração, eventos de combate e painel de personagem/habilidade. A composição adapta-se a viewport mobile e desktop.

A arte da arena e o inimigo são representações técnicas temporárias; não são assets finais nem alteram a direção aprovada de arte 2D ilustrada/pintada à mão, semi-chibi. O próximo trabalho visual deve substituir as representações temporárias por assets originais e preservar legibilidade do HUD.