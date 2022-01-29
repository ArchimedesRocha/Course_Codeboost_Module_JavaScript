// Aula 3 - Tipo de dados

//String
var carro = "Gol";

// Number
var anoCarro = 2021;

//Boolean
var carroVendido = true;

//Null
var carroAutomatico;

//Symbol
var simbolo = Symbol();

//Objeto
var objetoCarro = {};

//------------------------------------------------------------------------------

//Exemplo de variável de objeto

let informacoesCarro = {
  nome: "Gol",
  anoFabricacao: 2021,
  tipoCambio: "Manual",
};

console.log(infomracoesCarro);

//------------------------------------------------------------------------------

//Acessando um item específico no array do objeto

let informacoesCarro = [
  {
    nome: "Gol",
    anoFabricacao: 2021,
    tipoCambio: "Manual",
  },
  {
    nome: "Punto",
    anoFabricacao: 2015,
    tipoCambio: "Automatico",
  },
];

//Retorna o conteudo da variável tipoCambio no array de posição 0
console.log(informacoesCarro[0].tipoCambio);

//Retorna o conteudo da variável nome no array de posição 1
console.log(informacoesCarro[1].nome);

//Retorna quantos itens tem no seu array
console.log(informacoesCarro.length);

//Retorna o tipo da variável
console.log(typeof informacoesCarro);

//Concatenando da forma antiga
//Retorna uma concatenação
console.log(
  "O " +
    informacoesCarro[1].nome +
    " foi fabricado no ano de " +
    informacoesCarro[1].anoFabricacao
);

//Concatenando da forma atualizada com Template String
//Retorna uma concatenação
console.log(
  `O ${informacoesCarro[1].nome} foi fabricado no ano de ${informacoesCarro[1].anoFabricacao}`
);
