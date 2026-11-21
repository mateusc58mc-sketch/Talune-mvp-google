# Progressão da Torre

## Objetivo

Organizar a progressão contínua por andares e definir como o jogo trata avanço, derrota e reinício.

## Fluxo

`Andar normal → combater mobs → avançar → ao atingir um andar de boss, vencer o boss para continuar`

## Tipos de andar

- **Andar normal:** batalha contínua contra mobs comuns.
- **Andar de chefão (Boss Floor):** aparece a cada `X` andares e bloqueia o progresso até o boss ser derrotado.
- **Checkpoint:** maior andar alcançado, conforme regra final de salvamento. Após morrer, o personagem retorna ao último checkpoint salvo.

## Reset / prestígio (opcional)

O jogador pode descer a torre ou reiniciar do início em troca de bônus permanentes. A proposta inicial menciona moeda especial de RMT/Cash; custo, recompensa e relação com a economia ainda precisam ser definidos.

## Modos e estrutura do squad (Miro)

- Squad de quatro: tanque, healer e dois DPS.
- Farm: waves 1–9 automáticas, sem chefe. Avanço: waves 1–10, chefe-portão e subida de andar.
- Progresso offline registrado no quadro: até 8 horas, com XP e Ouro para o grupo.
- O mapa também propõe escalonamento exponencial de HP/ATK de chefes, barra de telegraph e limite de dano AoE de 40% do HP máximo; validar como regras e balanceamento antes de implementar. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Regras a fechar

- Qual é o intervalo `X` entre bosses?
- O checkpoint é salvo ao alcançar um andar, ao vencer o boss ou em outro momento?
- Ao morrer, o que é mantido e o que é perdido?
- Prestígio reinicia quais elementos: andar, nível, itens ou outros?
- Como calcular e limitar os bônus permanentes?