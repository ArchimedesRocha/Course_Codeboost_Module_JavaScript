// Aula 12 - forEach e Arrow Functions
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//------------------------------------------------------------------------------
//forEach com Funções
const allDropdown = document.querySelectorAll(".dropdown");

allDropdown.forEach(function (itemAtual, index, array) {
  itemAtual.addEventListener("click", function () {
    console.log("Estou clicando no item" + index);
  });
});

//
//Arrow Functions
//Sintaxe curta em relação a function expression
//Basta remover a palavra function e adicionar a fat arrow => após os argumentos

//Forma não usual
const allDropdown = document.querySelectorAll(".js-dropdown");

allDropdown.forEach(function (itemAtual, index, array) {
  console.log(item);
});

//Forma com arrow functions
const allDropdown = document.querySelectorAll(".js-dropdown");

allDropdown.forEach((item) => {
  console.log(item);
});

//Forma com um único argumento
const allDropdown = document.querySelectorAll(".js-dropdown");

allDropdown.forEach((item) => {
  console.log(item);
});

//Forma com vários argumento
const allDropdown = document.querySelectorAll(".js-dropdown");

allDropdown.forEach((item, index, array) => {
  console.log(item);
});

//Forma sem argumentos
const allDropdown = document.querySelectorAll(".js-dropdown");

allDropdown.forEach(() => {});
