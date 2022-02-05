// Aula 25 - LocalStorage e SessionStorage
//https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
//https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
//------------------------------------------------------------------------------
//LocalStorage - Mantem a informação até limpar o cache do navegador
localStorage.setItem("Categoria", "Carreta");

if (localStorage.getItem("Categoria") === "Caminhoes") {
  console.log("É um Caminhão");
} else {
  console.log("É outro meio de locomoção");
}
//------------------------------------------------------------------------------
//SessionStorage - Mantem a informação até a aba ser fechada
sessionStorage.setItem("Categoria", "Motos");
console.log(sessionStorage.getItem("Categoria"));
console.log(sessionStorage.removeItem("Categoria"));
