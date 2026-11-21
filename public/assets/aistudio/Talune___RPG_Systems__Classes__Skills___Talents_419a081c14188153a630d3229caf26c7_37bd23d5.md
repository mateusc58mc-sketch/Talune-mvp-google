# Talune — RPG Systems, Classes, Skills & Talents

## Marca oficial — Talune (16/11/2026)

**Talune** foi aprovado pelo usuário como nome oficial do projeto em 16/11/2026. A documentação de produto e design passa a usar essa marca. A aprovação do nome não equivale a uma liberação jurídica: buscas formais de marca, domínio e disponibilidade em lojas permanecem pendentes. Repositórios, pacotes, domínios e identificadores técnicos serão migrados em etapa técnica separada, com plano e testes.

## Atualização aprovada — marcos iniciais de progressão (15/11/2026)

- **Nível 5:** desbloqueia a escolha de uma das quatro classes-base (Guerreiro, Caçador, Clérigo ou Mago). Substitui a proposta anterior de nível 10.
- **Nível 50:** o personagem deverá ter desbloqueado aproximadamente metade do total de slots ativos de habilidades.
- **Nível 100:** todos os slots ativos de habilidades estarão desbloqueados e o personagem poderá escolher sua especialização. Substitui a proposta histórica de especialização no nível 40.
- A curva exata dos desbloqueios intermediários será definida junto com o desenvolvimento de cada mecânica, evitando antecipar decisões sem contexto. A intenção é usar a progressão como tutorial jogável: introduzir sistemas, opções e aprimoramentos em etapas, conforme o jogador aprende e ganha familiaridade.
- A quantidade total de slots ainda não está definida. “Metade no nível 50” é uma proporção, não uma confirmação de quatro, cinco ou qualquer outro total.

**Estado:** níveis 5, 50 e 100 e os marcos descritos estão aprovados; distribuição exata dos slots e demais desbloqueios permanece em aberto.

## 1. Escopo

Esta wiki organiza classes, atributos, skills, equipamentos e talentos. Os dados históricos são referências de design; fórmulas e valores que não passaram por validação devem permanecer marcados como Proposta.

## 2. Progressão de classe e personagem

**Direção confirmada:** cada jogador controla um único personagem. Todos começam como **Aprendiz**, sem classe-base escolhida. Ao atingir o **nível 5**, o jogador desbloqueia a escolha de uma das quatro classes-base: Guerreiro, Caçador, Clérigo ou Mago. A partir daí, evolui sua própria classe, skills, atributos e equipamentos. A especialização é uma escolha posterior, não uma segunda classe controlada pelo jogador. Esta regra supersede a referência histórica ao nível 10.

O marco de nível 10 está alinhado com a documentação histórica. Os marcos de especialização, slots adicionais e talentos ainda precisam ser revisados antes de serem tratados como regras finais.

## 3. Classes-base documentadas

| Classe | Papel principal | Atributos prioritários | Identidade |
| --- | --- | --- | --- |
| Guerreiro | Tank | STR, VIT | Proteção, provocação e mitigação |
| Caçador | DPS físico | DEX, AGI | Dano à distância, precisão e crítico |
| Clérigo | Healer | INT, VIT | Cura, proteção e remoção de efeitos |
| Mago | DPS mágico | INT | Dano mágico, área e controle |

## 4. Especializações registradas

- Guerreiro: Paladino (tanque com suporte sagrado) e Berserker (sustentação por roubo de vida).
- Caçador: Atirador de Elite (crítico à distância) e Assassino (corpo a corpo, esquiva e veneno).
- Clérigo: Sacerdote Divino (cura e proteção) e Inquisidor (híbrido de dano sagrado e suporte).
- Mago: Arquimago (explosão em área) e Bruxo (dano contínuo e debuffs).

A especialização não deve ser implementada como simples troca de nome. Cada uma precisa ter identidade de combate, passivas, skills exclusivas e sinergia própria.

## 5. Atributos primários

- STR — Força: ataque físico.
- AGI — Agilidade: velocidade de ataque e esquiva.
- VIT — Vitalidade: HP, defesa e resistência.
- INT — Inteligência: ataque mágico, MP e defesa mágica.
- DEX — Destreza: precisão, conjuração e dano à distância.
- LUK — Sorte: crítico, esquiva perfeita e possíveis efeitos de loot.

As fórmulas existentes em Sistemas, Atributos e Progressão são rascunhos. Antes da implementação, criar uma única especificação de cálculo com ordem de aplicação, arredondamento, limites e testes.

## 6. Modelo de dados de uma skill

Toda skill deve ter:

- ID único e nome localizado.
- Classe e especialização compatíveis.
- Tipo: ativa, passiva ou suprema.
- Categoria: dano, cura, escudo, buff, debuff, controle, invocação ou utilidade.
- Alvo: inimigo único, múltiplos inimigos, aliado, squad ou usuário.
- Fórmula e atributo-base.
- Valor base e escalonamento por nível/raridade.
- Duração, cooldown e custo de MP.
- Efeitos secundários e regras de acumulação.
- Condições de ativação e interrupção.
- Ícone, animação, efeitos e descrição legível.
- Testes de comportamento.

## 7. Padrão de descrição

A descrição exibida ao jogador deve informar o efeito real em linguagem simples e quantificada.

Exemplo de formato:
**Nome da skill** — causa X% do ATK/MATK como dano ao alvo; aplica o efeito Y por Z segundos; cooldown de N segundos; custo de M MP.

O texto deve ser gerado ou validado a partir dos dados mecânicos. Nunca descrever um stun, cura, escudo ou interrupção que não exista no executor da skill.

## 8. Progressão de slots registrada

Proposta histórica supersedida:

- A escolha de classe-base no nível 10 foi substituída pela decisão aprovada de nível 5.
- Os marcos de terceiro/quarto slot nos níveis 20/40 e os slots adicionais ligados à Torre não foram aprovados.

Direção vigente: Aprendiz até o nível 5; classe-base escolhida no nível 5; aproximadamente metade dos slots ativos desbloqueados até o nível 50; todos os slots ativos e especialização no nível 100. Quantidade total de slots e curva intermediária continuam em aberto.

## 9. Talentos — projeto futuro, não MVP

A árvore de talentos não deve aparecer como sistema ativo na primeira versão. Entretanto, deve ser projetada em documento separado antes de ser implementada.

Direção de design a explorar:

- Árvores por especialização, não uma árvore genérica compartilhada.
- Trilhas conceituais Burst, Utility e Sustain, registradas no Miro como referência.
- Nós com efeitos mensuráveis sobre skills, atributos, cooldowns, recursos, sobrevivência e sinergia do squad.
- Pré-requisitos, custo em pontos, limites de investimento e possibilidade de reset.
- Cada talento deve alterar uma regra real e possuir descrição verificável.
- Evitar bônus pequenos e invisíveis que não mudem decisões de build.

Cada nó futuro deve conter: ID, nome, especialização, tier, custo, pré-requisitos, efeito mecânico, fórmula, limite, sinergias, texto de UI e testes.

## 10. Catálogo histórico de skills

A página Classes, Skills e Templo das Artes Mágicas contém um catálogo histórico de 120 skills para oito especializações, com raridade, valores, cooldowns e custos de MP. O catálogo é uma fonte de ideias e dados de referência, não um balanceamento final aprovado.

Antes de migrar o catálogo:

1. Auditar duplicatas e lacunas.
2. Padronizar unidades e fórmulas.
3. Verificar se cada efeito tem suporte no motor.
4. Definir níveis e raridades de skill sem pay-to-win descontrolado.
5. Criar testes para cada tipo de efeito.
6. Atualizar descrições a partir das regras finais.

## 11. Equipamentos e itens

Cada item precisa ter ID, nome, slot, classe compatível, nível requerido, raridade, atributos, bônus, efeitos especiais, sockets, refino e descrição.

O sistema de inventário deve permitir selecionar item, abrir detalhes, comparar com o equipado, equipar/desequipar e mostrar impacto nos atributos finais.

A raridade histórica possui seis níveis: Comum, Incomum, Rara, Épica, Lendária e Mítica.

O refinamento +1 a +15 e sockets de 0 a 4 aparecem nas notas históricas; custos, chances e efeitos ainda precisam de balanceamento.

## 12. Aprovações pendentes

- Definir regras de criação, convite, entrada, saída e liderança da Party.
- Definir progressão e recompensas individuais/cooperativas.
- Definir se haverá jogo solo e preenchimento de vagas por IA.
- Validar marcos de especialização e desbloqueio de slots.
- Confirmar o papel mecânico de cada classe sem impor composição fixa.
- Consolidar fórmulas de atributos e dano.
- Aprovar a progressão de níveis e slots.
- Definir se skills colecionáveis e sorteio do Templo entram no MVP ou em fase posterior.
- Projetar a árvore de talentos antes de implementá-la.

[Matriz de Habilidades — Classes Base e Especializações](Matriz%20de%20Habilidades%20%E2%80%94%20Classes%20Base%20e%20Especializa%20419a081c141881c48c8bcf27a30aead1.md)