# Mercado e Economia

## Objetivo

Documentar o ecossistema de mercado de itens/cosméticos com foco em RMT, distinguindo moedas de progressão e valores ligados às transações.

## Mercado de itens e cosméticos / P2P

- O sistema deve permitir anúncios de itens e cosméticos; moeda, preço, compra/venda e forma de liquidação ligadas ao RMT serão definidas no modelo econômico.
- O sistema cobra uma taxa por transação. **8%** foi dado como exemplo, não como valor final.

## Moedas

- **Gold de farm:** moeda interna obtida jogando.
- **Moedas de RMT:** composição, conversão e regras de liquidação ainda precisam ser definidas, incluindo se haverá cash-in/cash-out.

## Fluxo de uma venda

`Criar anúncio → validar item e preço → aguardar compra → liquidar pagamento → cobrar taxa → entregar item e saldo líquido`

## Direção atual e propostas a reavaliar

- Escrow fica como uma opção de proteção do fluxo, a adaptar ao modelo RMT; liquidação, entrega, cancelamento e reversão ainda precisam de especificação.
- A direção atual é mercado e cosméticos com foco em RMT. Isso substitui a nota antiga do Miro que excluía dinheiro real direto, limitava a loja a Cristais e vedava conversão 1:1; esses pontos não são regras atuais. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)
- UUID do item preserva raridade e sockets; refino e cartas mudam por receitas validadas no servidor. O quadro propõe caps de listagem, histórico de preço e primeira-clear Mítica negociável após 24h.
- Filtros do leilão: slot, raridade, refino mínimo, carta e classe; listagens mostram ícone bake com glow. Sets de andar por família criam metas de coleção.
- Ouro vem do farm e também paga taxas/pedras baratas; Cristais de Talune pagam pergaminhos, recargas e compras no leilão quando aceitos pelo vendedor. Pets e alicates são sinks premium.
- A proposta anterior de aceitar Cristais e negociar a Mítica após 24h ainda precisa ser reavaliada junto ao fluxo de RMT. [[1]](https://miro.com/app/board/uXjVETvFCeg=/?share_link_id=600935212081)

## Regras e salvaguardas a fechar

- Definir nomes, fontes e usos de cada moeda e se existe conversão entre elas.
- Especificar o que “RMT” significa no jogo e quais transações são permitidas.
- Definir taxa final, limites de anúncio, duração, cancelamento e tratamento de transações falhas.
- Decidir se existe preço mínimo/máximo, proteção contra duplicação e trilha de auditoria.
- Verificar as regras da plataforma e os requisitos legais aplicáveis antes de habilitar conversões ou pagamentos com valor real.
- Medir impactos de inflação, bots, abuso e concentração de itens de alto valor.