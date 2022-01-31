// Aula 14 - eventos

//------------------------------------------------------------------------------
//addEventListener
//Adiciona uma função a um elemento
//Esta chamada será ativada assim que o evento definido ocorrer no elemento,

//------------------------------------------------------------------------------
//Função de callback junto do evento
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("clicou");
});

//------------------------------------------------------------------------------
//Função de callback separado do evento (Boa prática)
const button = document.querySelector("button");

function clicar() {
  console.log("clicou");
}
button.addEventListener("click", clicar);

//------------------------------------------------------------------------------
//Propriedades do Event para funções de Callback
const button = document.querySelector("button");

function clicar(event) {
  console.log(event.currentTarget); // Elemento que foi clicado
  console.log(event.target); // Aonde foi clicado
  console.log(event.type); // Tipo do evento
  console.log(event.path); // Caminho do elemento
}
button.addEventListener("click", clicar);

//------------------------------------------------------------------------------
//event.preventDefault()
//Previne o comportamento padrão do evento no browser, no caso de um link externo, ele irá previnir que o link seja ativado.

const button = document.querySelector("button");

function clicar(event) {
  console.log(event.currentTarget); // Elemento que foi clicado
  console.log(event.target); // Aonde foi clicado
  console.log(event.type); // Tipo do evento
  console.log(event.path); // Caminho do elemento
}
button.addEventListener("click", clicar);

//------------------------------------------------------------------------------
//Outros Eventos

const button = document.querySelector("button");

function callBack(event) {
  console.log(event.type);
}

button.addEventListener("click", callBack);
button.addEventListener("mouseenter", callBack);
button.addEventListener("mouseleave", callBack);
button.addEventListener("mouseenter", callBack);
button.addEventListener("keydown", callBack);

window.addEventListener("scroll", callBack);
window.addEventListener("resize", callBack);

//------------------------------------------------------------------------------
//Adicionando uma classe a um unico botão dentro de um grupo de botões utilizando o this
const botoes = document.querySelectorAll("button");
function clickBotao() {
  this, classList.add("ativo"); //Com o this ao clicar em um botão apenas ele receberá a classse ativo
}
botoes.forEach((item) => {
  item.addEventListener("click", clickBotao);
});
