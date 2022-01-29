// Aula 8 - Array E Loop
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code

//------------------------------------------------------------------------------
//Array
//É um grupo de valores geralmente relacionados e servem para guardarmos diferentes valores em uma única variável

//Métodos e propriedades
var carros = ["Fusca", "brasilia", "Monza", "Gol"];
carros.pop(); //Remove o ultimo item do array
carros.push(); // Adiciona o que você passar no final do array
carros.length(); // Mostra quantos itens existem dentro do array

//------------------------------------------------------------------------------
//For
//For Loop faz algo repetidamente até que uma condição seja atingida

//Metódo For possui 3 partes
//Início
//Condição
//Incremento

for (var numero = 0; numero < 10; numero++) {
  console.log("numero"); //Retorna de 0 a 9 no console
}

//Entendendo o For
var numero = 0; //Início
numero < 10; // Condição
numero++; //Incremento

//------------------------------------------------------------------------------
//While
//No while definimos a variável fora e dentro do while chamamos a variável.
var i = 0;

while (i < 10) {
  console.log("i");
  i++;
}
//Retorna de 0 a 9 no console

//------------------------------------------------------------------------------
//Loops com Array
//Enquanto a variável i for menor que o tamanho do array, incremente e vá printando na tela, veja o código abaixo:

var carros = ["Fusca", "Brasilia", "Monza", "Gol"];

for (var i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}
//Lembrando que o For tem 3 parâmetros
//Início - var i = 0
//Condição - i < carros.legth
//Incremento - i++

//------------------------------------------------------------------------------
//Break
var carros = ["Fusca", "Brasilia", "Monza", "Gol"];

for (var i = 0; i < carros.length; i++) {
  console.log(carros[i]);

  if (carros[i] === "Monza") {
    break;
  }
}

//------------------------------------------------------------------------------
//ForEach
//É um método que executa uma função para cada item do Array

//Metódo ForEach possui 3 partes
//Item
//Index
//Array

var carros = ["Fusca", "Brasilia", "Monza", "Gol"];

carros.forEach(function (item) {
  console.log(item);
});

carros.forEach(function (item, index, array) {
  console.log(item + index + array);
});
