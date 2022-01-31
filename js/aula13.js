// Aula 13 - classes e Atributos

//------------------------------------------------------------------------------
//Retorna uma lista com as classes que existe no elemento
//É possível adicionar, remover classes e verificar se existe uma classe no elemento
//classList - Retorna a lista de classes que o elemento possui
//classList.add('ativo') - Adiciona a classe ativo ao elemento
//classList.remove('ativo') - Remove a classe ativo ao elemento
//classList.toggle('ativo') - Adiciona e Remove a classe ativo ao elemento baseado em algum evento capturado do DOM
//classList.contains('ativo') - retorna True ou False sazendo uma checagem se a classe ativo existe no elemento
//classList.replace('ativo', 'inativo') - sobrescreve a classe ativo para inativo

//------------------------------------------------------------------------------
//classList
const titulo = document.querySelector("h1");
console.log(titulo.classList);
//Vai retornar todas as classes que o elemento h1 possuir

//------------------------------------------------------------------------------
//classList.add
const titulo = document.querySelector("h1");
titulo.classList.add("ativo");
//Vai adicionar a classe ativo ao elemento h1

//------------------------------------------------------------------------------
//classList.remove
const titulo = document.querySelector("h1");
titulo.classList.remove("ativo");
//Vai remover a classe ativo ao elemento h1

//------------------------------------------------------------------------------
//classList.toggle
const titulo = document.querySelector("h1");

titulo.addEventListener("click", () => {
  titulo.classList.toggle("ativo");
});
//Toda vez que houver um click sobre o h1, o toggle vai adicionar/remover a classe ativo ao elemento h1, no primeiro click adiciona no proximo click remove e assim suscessivamente.

//------------------------------------------------------------------------------
//classList.contains
const titulo = document.querySelector("h1");
titulo.classList.contains("ativo");
//Vai verificar se a classe ativo está atribuida ao elemento h1 se estiver retorna True se não False.

//------------------------------------------------------------------------------
//classList.replice
const titulo = document.querySelector("h1");
titulo.classList.replice("ativo", "habilitado");
//Vai substituir a classe ativo por habilitado, sobrescrever.

//------------------------------------------------------------------------------
//Mostrando o password de um campo input type password
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
//Toda vez que for clicado no botão o type será mudado de password para text.
