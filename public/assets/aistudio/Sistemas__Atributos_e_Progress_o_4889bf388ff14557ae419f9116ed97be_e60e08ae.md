# Sistemas, Atributos e Progressão

# Direção de combate — ASPD, Haste e chefes (15/11/2026)

## Preferência de design do usuário

O usuário gosta da base de atributos de Ragnarok Online e quer preservar especialmente a sensação nostálgica de:

- personagem atacando repetidamente e com velocidade crescente;
- ASPD elevada como objetivo legítimo de build;
- números de dano e DPS evoluindo visivelmente contra monstros e chefes;
- chefes com grande reserva de vida, exigindo progressão e esforço coletivo.

Também aprecia a escala e a dificuldade de encontros de chefes de World of Warcraft, nos quais grupos numerosos precisam de preparação e execução. Talune, entretanto, mantém seu formato principal de party de até quatro personagens; a referência a WoW é sobre desafio, fases e sensação épica, não uma decisão de aumentar o tamanho da party.

## Direção aprovada para exploração

Manter STR, AGI, VIT, INT, DEX e LUK como base preferida de partida, sem ainda congelar fórmulas, efeitos por ponto ou distribuição. A lista deve ser testada contra as quatro classes e especializações.

ASPD e Haste são atributos distintos, com identidades aprovadas pelo usuário:

- ASPD: controla exclusivamente a frequência dos ataques básicos e o intervalo entre eles.
- Haste: afeta todas as habilidades, reduzindo seus tempos de recarga. Não aumenta a frequência dos ataques básicos.

### Categorias de habilidades e direção de recarga

A Haste será um atributo universal para todas as categorias de habilidades. O balanceamento será feito por meio de tempos-base de recarga diferentes conforme a função e o impacto da habilidade:

| Categoria | Função | Direção de recarga |
| --- | --- | --- |
| Dano padrão | Habilidades ofensivas usadas na rotação frequente | Baixa a moderada |
| Interrupção / Taunt | Interromper ações inimigas, provocar/agredir alvos e proteger aliados | Moderada |
| Buffs / Debuffs | Fortalecer aliados ou enfraquecer inimigos | Moderada a alta |
| Ultimate | Habilidade especialmente poderosa e característica de cada classe | Alta |

A intenção aprovada é que a Haste afete todas essas categorias, inclusive Ultimates. Não estão definidos valores numéricos, limites máximos de redução ou fórmulas. Como possibilidade de balanceamento a testar, habilidades de maior impacto — especialmente Ultimates e controles decisivos — podem ter recargas-base mais longas e/ou limites específicos de redução, sem ficarem imunes à Haste.

Essa separação permite linhas de build diferentes: personagens especializados em ataques básicos extremamente rápidos e personagens que usam habilidades com maior frequência. A fórmula, os valores e as interações com conjuração/execução ainda serão definidos.

A intenção é permitir builds de velocidade muito elevadas, especialmente em estágios avançados, sem deixar que a velocidade torne o combate trivial ou cause problemas de animação, simulação e desempenho. O teto histórico de 2,5 ataques por segundo registrado no quadro é apenas uma proposta antiga e não deve ser tratado como limite aprovado; precisa ser reavaliado diante desta preferência explícita por ASPD elevada.

## Princípios propostos para balanceamento

1. Não remover a fantasia de velocidade extrema. A progressão de ASPD deve ser perceptível e recompensadora.
2. Controlar poder por orçamento de atributos nos equipamentos, custos de oportunidade e possíveis retornos decrescentes, em vez de simplesmente proibir builds rápidas.
3. Definir limites técnicos e regras de simulação para ataques muito frequentes; a apresentação visual pode agrupar ou suavizar animações sem falsificar o resultado calculado pelo servidor.
4. Evitar que ASPD, Haste, redução de recarga e velocidade de conjuração sejam quatro nomes para o mesmo efeito. Cada atributo deve ter função própria.
5. Balancear chefes pela capacidade esperada de dano e sobrevivência de uma party, incluindo a progressão de equipamento e diferentes composições, não pelo dano de um único personagem isolado.

## Filosofia de chefes

Chefes devem ter reservas de HP substanciais e permitir que os jogadores percebam a evolução do dano ao longo da progressão. Entretanto, HP elevado não deve ser a única fonte de dificuldade.

Explorar uma combinação de:

- fases e mudanças de comportamento;
- ataques anunciados (telegraph) e habilidades especiais;
- janelas de vulnerabilidade e objetivos de combate;
- pressão gradual sobre a party e exigência de cura/mitigação;
- enrage ou limite de tempo suave como proteção contra combates intermináveis, quando adequado.

O HP do chefe deve ser calibrado com base no DPS esperado da party naquela faixa de progressão, e não inflado indefinidamente para neutralizar cada aumento de ASPD. A dificuldade deve vir também de execução, sobrevivência e preparação.

## Em aberto — não implementar ainda

- Fórmula de ASPD e curva de retorno por ponto de AGI/equipamento.
- Se ASPD terá teto global, teto por classe, soft cap ou somente limites técnicos.
- Fórmula, escala e limites de Haste na redução dos tempos de recarga; definir valores-base por categoria (dano padrão, interrupção/taunt, buffs/debuffs e Ultimate) e testar se categorias de maior impacto precisam de limites específicos de redução.
- Esclarecer separadamente se conjuração/execução terá outro atributo ou regra.
- Interação entre ASPD, habilidades que usam ataques básicos, procs e efeitos por acerto.
- Modelo de HP, dano, fases e duração-alvo dos chefes por faixa de nível.
- Métricas de simulação para garantir que builds rápidas não multipliquem indevidamente drops, XP ou eventos por segundo.

As fórmulas históricas de ASPD, DEX, Haste e HP de monstros permanecem como rascunhos, não como especificação final.

# Atualização de status — Revisão dos atributos de Talune (15/11/2026)

Os atributos e fórmulas descritos nesta página são material histórico de referência, não especificação final para implementação.

O usuário confirma que projetos anteriores usaram como base os atributos de Ragnarok Online, removendo efeitos de tamanho e elementais. Para Talune, a estrutura será reavaliada com base nas referências Ragnarok, WoW, MU Online e Ulala.

**Ainda não decidido:** manter ou alterar STR, AGI, VIT, INT, DEX e LUK; quais status derivados existirão; se haverá bônus por raça/tipo de monstro, tamanho ou elemento; quais resistências e modificadores situacionais farão parte do combate.

Não considerar tamanho e elemento como mecânicas aprovadas apenas porque aparecem nas tabelas históricas abaixo. Também não os considerar definitivamente excluídos: a decisão será tomada após comparar profundidade estratégica, complexidade, legibilidade e custo de balanceamento.

Antes de implementar ou balancear equipamentos, consolidar:

1. Classes e especializações, com seus papéis e habilidades.
2. Loop de combate idle e decisões táticas relevantes.
3. Fórmula central de dano, mitigação, cura e controle.
4. Atributos primários e status derivados necessários.
5. Pools de bônus por slot e efeitos especiais de equipamentos.

A lista e as fórmulas antigas devem permanecer como referência de auditoria, sem serem tratadas como valores vigentes.

Fonte: [quadro Project Talune no Miro](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081). Os valores numéricos e regras são transcritos como registrados no quadro; itens ainda sujeitos a balanceamento permanecem identificados como propostas. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Loop e modos de progressão

- Squad de quatro: tanque, healer e dois DPS.
- Farm: waves 1–9 automáticas, sem chefe.
- Avanço: waves 1–10, chefe-portão e subida de andar.
- Progresso offline: limite de 8 horas; calcula XP e Ouro para o grupo ao retornar.
- Chefes: o quadro sugere curva exponencial de HP/ATK, barra de telegraph antes de habilidades e teto de dano AoE de 40% do MaxHP para evitar one-shot injusto; executor de skills inclui stun, cura, summons e DoT. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Prioridade de sistemas e referências

A matriz do quadro classifica combate, atributos, raças, talentos, equipamento, cartas, habilidades/sorteio, equipe, mapa/monstros e recompensas como MVP; cidade/lojas e configurações avançadas ficam pós-MVP. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

| Sistema | Telas de referência | Inspiração | O que manter | O que polir ou adaptar | Prioridade |
| --- | --- | --- | --- | --- | --- |
| Combate idle (HUD de batalha) | [Batalha Rex Rochoso](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307033) [Batalha T-Rex](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307058) [Campo tropical](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307069) | Ulala, Ragnarok | Auto-batalha contínua, squad de 4 sempre visível, barra de HP do chefe, chat na base da tela, botão de desafiar chefe | Fórmula de dano do Ragnarok (ATK/MATK contra DEF/MDEF), elementos e tamanho do monstro (pequeno, médio, grande), números de dano com crítico e Miss bem legíveis | MVP |
| Atributos e status | [Tela de personagem](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307037) | Ragnarok | STR, AGI, VIT, INT, DEX e LUK com pontos por nível; status derivados ASPD, HIT, FLEE, CRIT | Presets de build e reset de atributos barato, já que no idle o jogador experimenta mais; botão de distribuir automático por classe | MVP |
| Raças |  | WoW | Escolha de raça na criação com passiva racial e visual próprio | Bônus pequenos para não travar builds (ex.: anão +VIT, elfo +FLEE, orc +ATK com HP baixo, humano +EXP); raça não restringe classe | MVP |
| Talentos e especializações |  | WoW | Árvore com especializações por classe e pontos a cada marco de nível | Ligar os desbloqueios à Linha do tempo do herói que já está no board; permitir trocar de spec sem custo alto | MVP |
| Equipamento | [Inventário](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307028) [Troca de varinhas](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307027) [Tela de personagem](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307037) | Ulala, WoW, Ragnarok | Slots fixos, comparação lado a lado com setas de ganho e perda, filtro por classe | Cores de raridade do WoW (comum a lendário), slots de carta de 0 a 4 do Ragnarok, refino +1 a +10 com risco controlado na tabela de referência; a direção posterior de economia propõe +1 a +15 e falha sem quebrar item — reconciliar | MVP |
| Sistema de cartas |  | Ragnarok | Carta rara dropada pelo monstro e inserida no slot do equipamento, cada uma com efeito único | Álbum de coleção com bônus por set completo; taxa de drop ajustada ao ritmo idle; destaque visual quando uma carta cai | MVP |
| Habilidades e sorteio | [Chances de sorteio](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905306977) [Regras e pacotes](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307011) | Ulala | Tela de regras com chances por raridade transparentes, ligada às tabelas de skills e do Templo já no board | Sistema de pity, separar pacotes pagos das regras, mostrar a skill ideal para a spec atual | MVP |
| Equipe e pareamento | [Membros da equipe](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307012) [Partida em grupo](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307010) [Regras e chat](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307013) [Configuração da equipe](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307014) [Pareamento por classe](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307019) [Tutorial de equipe](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307020) | Ulala, WoW | Squad de 4 com papéis tanque, cura e DPS, convite rápido, pareamento por classe | Buscador de grupo estilo WoW (procurando tanque), bônus de composição equilibrada, tutorial mais curto | MVP |
| Mapa, zonas e monstros | [Mapa de missões](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307059) [Campo tropical](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307069) | WoW, Ragnarok | Zonas por faixa de nível com missões e chefes | Bestiário com raça e elemento do monstro (base para as cartas), chefes de mundo com horário de spawn no estilo MVP do Ragnarok | MVP |
| Recompensas e fim de fase | [Conclusão de nível](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307001) | Ulala | Tela de vitória com EXP, loot e personagens | Resumo de ganhos offline ao voltar ao jogo, destaque para carta ou item épico dropado | MVP |
| Cidade e lojas | [Cidade com lojas](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307003) | Ulala, Ragnarok | Hub com NPCs e lojas acessíveis por ícone | Ferreiro de refino, armazém compartilhado entre personagens, mercado entre jogadores | Pós-MVP |
| Configurações | [Configurações](https://miro.com/app/board/uXjVETvFCeg=/?moveToWidget=3458764688905307000) | Ulala | Áudio, gráficos e mensagens | Modo economia de bateria para sessões idle longas, filtros de chat | Pós-MVP |

## Atributos primários

O Miro expande o modelo anterior de STR/AGI/VIT para seis atributos. As fórmulas abaixo são rascunhos de design e precisam ser unificadas antes de implementação. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

| Atributo | Efeitos principais | Fórmula por ponto | Classes que priorizam | Adaptação idle |
| --- | --- | --- | --- | --- |
| STR (Força) | ATK físico corpo a corpo | +1 ATK, bônus de floor(STR/10)² | Guerreiro | Bônus quadrático premia investir pesado, gera picos claros de poder |
| AGI (Agilidade) | Velocidade de ataque e esquiva | +1 FLEE, +1% de ataques por segundo | Ladino, Caçador | ASPD com teto de 2,5 ataques/s para não quebrar o ritmo da animação |
| VIT (Vitalidade) | HP, defesa macia e resistência | +1% MaxHP, +1 DEF macia, +1% resistência a atordoar e veneno | Guerreiro, Sacerdote | Principal atributo do tanque; também aumenta a cura recebida em 1% a cada 5 pontos |
| INT (Inteligência) | Dano e defesa mágica, MP | +1 MATK, bônus de floor(INT/7)², +1% MaxMP, +1 MDEF macia | Mago, Sacerdote | Também acelera a regeneração de MP entre ondas de monstros |
| DEX (Destreza) | Precisão, conjuração, dano à distância | +1 HIT, -1% tempo de conjuração, +1 ATK à distância | Caçador, Mago | Reduz conjuração até 0 em 150 de DEX, alvo clássico de build |
| LUK (Sorte) | Crítico e esquiva perfeita | +0,3 CRIT, +0,1 esquiva perfeita | Ladino | Pequeno bônus de drop de cartas (+0,5% relativo por ponto) para dar valor à sorte no idle |

## Status derivados

| Status | Fórmula | Teto ou limite | Observação |
| --- | --- | --- | --- |
| ATK (físico) | ATK da arma × (1 + refino × 5%) + STR + floor(STR/10)² + floor(DEX/5) + floor(LUK/5) | Sem teto | Classes à distância trocam STR por DEX como atributo principal |
| MATK (mágico) | INT + floor(INT/7)² + MATK da arma × (1 + refino × 5%) | Sem teto | Variação de ±10% por golpe para manter os números vivos |
| HIT | Nível + DEX + bônus de equipamento | Sem teto | Comparado ao FLEE do alvo |
| FLEE | Nível + AGI + bônus de equipamento | Esquiva máxima de 95% | Perde 10% a cada monstro extra atacando o mesmo alvo após o segundo (regra clássica que pune o tanque mal equipado) |
| Chance de acerto | 80% + HIT do atacante - FLEE do alvo | Entre 5% e 100% | Monstros de zona alta exigem DEX mínima, cria meta de progressão |
| CRIT | 1 + LUK × 0,3 + bônus de carta | Até 100% | Crítico ignora FLEE e DEF macia, causa 140% de dano |
| Ataques por segundo | Base da classe × (1 + AGI × 1% + DEX × 0,2%) | 2,5 ataques/s | Teto evita animações aceleradas demais na tela idle |
| MaxHP | HP base da classe por nível × (1 + VIT × 1%) | Sem teto | Tanques ganham multiplicador extra pela especialização |
| Tempo de conjuração | Base da skill × (1 - DEX/150) | Mínimo de 0 | Talentos e cartas podem reduzir a meta de 150 |

## Modificadores por monstro, arma e equipamento

| Categoria | Valores | Como afeta o dano | Exemplo de carta |
| --- | --- | --- | --- |
| Tamanho do monstro | Pequeno, Médio, Grande | Cada tipo de arma tem % por tamanho (ex.: adaga 100/75/50, lança 75/75/100) | +15% de dano contra Grande, para caçar chefes |
| Raça do monstro | Bestial, Morto-vivo, Demônio, Dragão, Humanoide, Elemental, Planta | Bônus somados por raça, multiplica com tamanho e elemento | +20% de dano contra Dragão (ideal para a zona dos T-Rex) |
| Elemento | Neutro, Água, Terra, Fogo, Vento, Sagrado, Sombrio, Veneno | Tabela de afinidade: Fogo causa 150% em Terra e 50% em Água | Arma recebe elemento Fogo |
| Elemento da armadura | Mesmos elementos | Muda o elemento do personagem para reduzir dano recebido | Armadura vira Água: -50% de dano de Fogo |
| Chefe ou normal | Normal, Chefe | Categoria própria, multiplica com as outras | +25% de dano contra Chefe, drop raro do chefe de mundo |

## Pontos de reconciliação

- Consolidar uma única fórmula de dano, mitigação, HP/DEF e ordem de multiplicadores entre este rascunho e a página Combate e Atributos.
- Confirmar teto/escala de crítico, acerto, evasão e ASPD; testar o limite de AoE de 40% do MaxHP.
- Confirmar distribuição de atributos por nível, fórmulas de inimigos/chefes e recompensas offline.
- Separar decisões aprovadas de exemplos e parâmetros ainda provisórios. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)