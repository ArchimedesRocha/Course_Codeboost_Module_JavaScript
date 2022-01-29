// Aula 7 - Objetos
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

//------------------------------------------------------------------------------
//Objetos
//É uma coleção de informações dentro de uma variável

//Exemplo 1
var carro = {}; // A variável carro recebe um objeto

//------------------------------------------------------------------------------
//Exemplo 2
var carro = {
  nome: "Gol",
  ano: 1996,
  cor: "Vermelho",
  automatico: false,
  vendido: true,
};

console.log(carro.nome); //Retorna Gol
console.log(carro.ano); //Retorna 1996
console.log(carro.cor); //Retorna Vermelho
console.log(carro.automatico); //Retorna false
console.log(carro.vendido); //Retorna true

console.log(typeof carro.nome); //Retorna string
console.log(typeof carro.ano); //Retorna number
console.log(typeof carro.cor); //Retorna string
console.log(typeof carro.automatico); //Retorna Boolean
console.log(typeof carro.vendido); //Retorna Boolean

//------------------------------------------------------------------------------
//Exemplo 3
var carro = {};
var pessoa = {};
console.log(typeof carro); //Retornara object

//------------------------------------------------------------------------------
//alterando informação de um objeto
var section = {
  bg: "#543268",
  width: "100%",
  height: 80,
};
console.log(section.bg); //Será exibido #543268

section.bg = "#d1b522"; //Acesso e altero diretamente de fora
console.log(section.bg);
//Será exibido #d1b522 pois agora o console.log está sendo dado após a mudança de valor, o console.log de cima ainda desconhece esta alteraçao.
