// Aula 6 - Funções

//------------------------------------------------------------------------------
//Funções
//Ao criar função você passa parâmetros
//Ao executar uma função você passa argumentos

//Escopo
function nomeDaFuncao(parametro) {
  //Lógica envolvendo o parâmetro
  return nomeDaFuncao;
}

//------------------------------------------------------------------------------
//Exemplo 1
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
console.log(imc(80, 1.8));

//Dividindo para entender a função
imc(peso, altura); //Parâmetros
const imc = peso / altura ** 2; //Parâmetros e Lógica
console.log(imc(80, 1.8)); //Exibição e Argumentos

//------------------------------------------------------------------------------
//Exemplo 2
function carroFavorito(carro) {
  if (carro === "Fusca") {
    console.log("Você gosta de fusca");
  } else if (carro === "Gol") {
    console.log("Você gosta de gol");
  } else {
    console.log("Você não gosta de carro");
  }
}
console.log(carroFavorito()); // Retorna "Você não gosta de carro"
console.log(carroFavorito("Fusca")); // Você gosta de fusca"
console.log(carroFavorito("Gol")); // Você gosta de gol"
