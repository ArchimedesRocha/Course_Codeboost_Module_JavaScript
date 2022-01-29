// Aula 9 - Escopo de função

//------------------------------------------------------------------------------
//Var
//Têm um escopo global, ou seja se ela for declarada dentro de uma condição, ela será acessivel de fora dela.

//Acessamos de fora
if (true) {
  var numero = 30;
  console.log("numero");
}
console.log("numero"); // O numero será exibido mesmo o console sendo fora do escopo da declaração

//Não acessamos de fora
function calcular() {
  var numero = 30;
  console.log("numero");
}
console.log("numero"); // Será exibido um erro informando que a variável numero não está definida

//------------------------------------------------------------------------------
//Let
//Utilizando Let nas duas situações acima, de nenhuma das duas formas conseguiriamos exibir a variável fora do escopo.

//------------------------------------------------------------------------------
//Const
//Ela não permite alteração de valor atribuido, definiu um valor para uma variável declarada com const, você não consegue alterar o valor dela e ela tambem não vaza do escopo.
