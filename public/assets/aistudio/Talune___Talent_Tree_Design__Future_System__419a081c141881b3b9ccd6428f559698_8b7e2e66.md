# Talune — Talent Tree Design (Future System)

## 1. Status

**Planejado para depois do MVP.** A árvore de talentos deve ser desenhada e balanceada em documentação antes da implementação. Não criar botões, árvores vazias ou pontos de talento sem função no primeiro lançamento.

## 2. Objetivo de design

Talentos devem permitir que dois heróis da mesma classe/especialização desenvolvam estilos de jogo diferentes. Um talento precisa alterar uma decisão, uma habilidade, um atributo derivado, uma regra de sobrevivência ou uma sinergia de squad.

Evitar árvores compostas apenas por bônus percentuais pequenos e invisíveis.

## 3. Estrutura histórica de referência

O Miro registra três trilhas conceituais:

- **Burst:** dano explosivo, janelas de poder, críticos e execução.
- **Utility:** controle, interrupção, buffs, debuffs e recursos.
- **Sustain:** sobrevivência, cura, mitigação, escudos e regeneração.

A documentação histórica propõe pontos de talento após a especialização, mas a quantidade por nível, marcos de desbloqueio e custo de reset precisam de aprovação.

## 4. Organização proposta

- Árvore específica por especialização.
- Nós organizados em tiers.
- Pré-requisitos claros.
- Pontos concedidos por marcos de progressão definidos.
- Limites de pontos por nó e por trilha.
- Efeitos mutuamente exclusivos quando necessário.
- Reset e troca de build com regras transparentes.
- Interface de preview antes de confirmar investimento.

## 5. Tipos de talento possíveis

- Modificador de skill: altera dano, cura, alvo, duração ou cooldown.
- Modificador de recurso: altera MP, geração, custo ou regeneração.
- Modificador de papel: melhora ameaça, proteção, cura ou prioridade de alvo.
- Sinergia: ativa bônus quando outro herói usa uma skill ou quando uma condição ocorre.
- Escolha de estilo: duas opções fortes e diferentes, sem uma escolha universalmente superior.

## 6. Esquema de dados de cada nó

Cada talento deve possuir:

- talent_id
- specialization_id
- nome e descrição
- trilha e tier
- custo em pontos
- pré-requisitos
- efeito mecânico tipado
- parâmetros e limites
- regras de acumulação
- incompatibilidades
- dependências com skills e atributos
- ícone e feedback visual
- testes automatizados

## 7. Regras de balanceamento

1. Talentos devem complementar a identidade da especialização.
2. Evitar multiplicadores que se acumulam sem limite.
3. Definir ordem de aplicação dos efeitos.
4. Avaliar impacto em PvE, chefes e multiplayer.
5. Evitar que um talento obrigatório elimine diversidade de builds.
6. Testar combinações e interações com equipamentos, cartas e buffs.
7. Registrar valores provisórios separadamente dos valores aprovados.

## 8. Processo de criação

1. Aprovar papel e identidade de cada especialização.
2. Auditar suas skills ativas, passivas e suprema.
3. Identificar lacunas de gameplay.
4. Propor três trilhas com objetivos distintos.
5. Criar nós e pré-requisitos.
6. Simular builds iniciais, intermediárias e finais.
7. Testar sinergias e possíveis exploits.
8. Aprovar balanceamento.
9. Implementar dados e executor.
10. Criar UI e testes de regressão.

## 9. Questões em aberto

- Quantos pontos são concedidos e em quais marcos?
- Quantos tiers por árvore?
- O jogador pode maximizar uma trilha ou deve dividir pontos?
- Reset é gratuito, pago em Ouro ou limitado?
- Especializações podem trocar livremente?
- Talentos são individuais por herói ou compartilhados pela conta?
- Como os talentos funcionam no squad controlado por IA?

## 10. Regra de escopo

Nenhum talento será tratado como funcionalidade do MVP até existir especificação completa, aprovação do usuário, implementação no motor e testes de comportamento.