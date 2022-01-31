// Aula 15 - OuterHTML, innerHTML e innerTEXT

//Propriedades que retornam uma string contendo o html ou texto

//------------------------------------------------------------------------------

const titulo = document.querySelector(".titulo");

console.log(titulo.outerHTML); // Retorna todo o html porém em formato de texto com tags e tudo.
console.log(titulo.innerHTML); // É renderizado tudo o que estiver dentro da tag inclusive outras tags que serão exibidas em forma de texto.
console.log(titulo.outerHTML); // É ignorado todas as tags e somento os textos dentro delas é retornado

//A tag vai como texto pois tudo será transformado em texto
titulo.innerText = "<h1>Novo Titulo</h1>";

//Somente o conteúdo será exibido pois a tag será ignorada para a redenrização.
titulo.innerHTML = "<h1>Novo Titulo</h1>";
