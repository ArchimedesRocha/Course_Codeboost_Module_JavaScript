// Aula 11 - Selecionando os elementos do DOM

//------------------------------------------------------------------------------
//getElementById
const cabecalho = document.getElementById("js-cabecalho");
console.log(cabecalho);

//querySelector
const lista = document.querySelector(".lista-01:last-child");
console.log(lista);

//querySelector Buscando item específico
const lista = document.querySelector(".lista-02");
const itemLista02 = lista.querySelector("li");
console.log(itemLista02);
//Sera exibido o primeiro li da lista-02

//querySelectorAll
const AllDropdown = document.querySelectorAll(".dropdown");
console.log(AllDropdown[1]);
//Sera exibido um array

//Pegando esse array de outra forma
allDropdown.forEach(function (item) {
  console.log(item);
});
