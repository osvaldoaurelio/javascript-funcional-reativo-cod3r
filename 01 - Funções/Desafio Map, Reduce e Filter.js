const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
];

// filter, map, reduce

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const ehFragil = item => item.fragil;
const itemsFrageis = carrinho.filter(ehFragil);
console.log(itemsFrageis);

const getTotal = item => item.qtde * item.preco;
const itemsTotais = itemsFrageis.map(getTotal);
console.log(itemsTotais);

// função getMedia = solução do professor 
const getMedia = (acc, el) => {
  const qtde = acc.qtde + 1;
  const total = acc.total + el;
  return { qtde, total, media: total / qtde }
}
const media = itemsTotais.reduce(getMedia, { qtde: 0, total: 0, media:0 }).media;
console.log(media);
