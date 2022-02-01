// Aula 16 - Transversing

//------------------------------------------------------------------------------
//Transversing
//Usado para navegar pelo nosso DOM através de propriedades e métodos

const titulo = document.querySelector(".titulo");

titulo.parentElement; //Retorna o elemento pai do elemento que recebe a classe .titulo
titulo.parentElement.parentElement; //Retorna o elemento pai do elemento pai do elemento que recebe a classe .titulo
titulo.previousElementSibling; //Retorna o elemento acima do elemento que recebe a classe .titulo
titulo.nextElementSibling; // Retorna o elemento abaixo do elemento que recebe a classe .titulo

//------------------------------------------------------------------------------
//Manipulando os elementos
//É possível mover ou remover elementos no DOM com estes métodos
const item01 = document.querySelector(".item-01");
const item02 = document.querySelector(".item-02");

const titulo = document.querySelector(".titulo");

item01.appendChild(item02); //Move o elemento para o final do item 01
item01.removeChild(titulo); //Remove o titulo do item01

//------------------------------------------------------------------------------
//Criando os elementos
//Podemos criar novos elementos com o metodo createelement();
const areaTitulos = document.querySelector(".area-titulos");
const novoTitulo = document.createElement("h1");

novoTitulo.innerText = "Novo titulo";
novoTitulo.classList.add("titulo-novo");

areaTitulos.appendChild(novoTitulo);
