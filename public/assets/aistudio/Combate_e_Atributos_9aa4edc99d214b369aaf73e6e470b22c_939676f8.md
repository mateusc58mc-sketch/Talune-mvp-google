# Combate e Atributos

## Objetivo

Registrar os atributos do personagem e as regras que determinam dano, velocidade, crítico e sobrevivência.

## Atributos principais

O Miro amplia o rascunho de três atributos para seis: **Força (STR)** para ATK físico, **Agilidade (AGI)** para ASPD/esquiva, **Vitalidade (VIT)** para HP/defesa, **Inteligência (INT)** para MATK/MP, **Destreza (DEX)** para HIT/conjuração/dano à distância e **Sorte (LUK)** para crítico/esquiva perfeita. As fórmulas por ponto e status derivados estão na [Sistemas, Atributos e Progressão](Sistemas,%20Atributos%20e%20Progress%C3%A3o%204889bf388ff14557ae419f9116ed97be.md); continuam como rascunho até unificarmos as regras. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Fórmula anotada

`Dano causado = (Dano da arma + STR) × (1 + Multiplicadores)`

A expressão é uma base de design; ainda é preciso definir os multiplicadores, a ordem de aplicação, arredondamento e possíveis limites.

## Mitigação

Anotação atual: `HP / Defesa do Jogador`.

**Pendente de revisão:** esclarecer se `HP` é do monstro ou do personagem e expressar como a defesa reduz o dano recebido. Não usar como fórmula final até resolver a ambiguidade.

## Regras a fechar

- Como AGI converte em velocidade de ataque e chance de crítico?
- Qual é o dano base dos inimigos e como ele escala por andar?
- Como defesa, HP e demais mitigadores interagem?
- Atributos são distribuídos pelo jogador, obtidos por nível, equipamento ou combinação?
- Qual é a ordem dos multiplicadores e como tratar críticos?