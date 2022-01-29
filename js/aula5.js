// Aula 5 - Boolean e Condicionais
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

//------------------------------------------------------------------------------
//Operadores Boolean ele armazena dois tipos de valores TRUE ou FALSE e com isso conseguimos formar condições e utilizamos as Condicionais para executarmos uma operação dependendo do resultado retornado.

//Boolean
let carroVendido = true;
let carroAutomatico = false;

//Condicional If e Else
if (carroVendido) {
  console.log("O carro foi vendido!");
} else {
  console.log("O carro não foi vendido");
}

if (carroAutomatico) {
  console.log("O carro não é automático");
} else {
  console.log("O carro é automático");
}

//------------------------------------------------------------------------------

//Condicional Else If
let possuiCarro = true;
let possuiMotor = false;

if (possuiMoto) {
  console.log("Ele tem uma moto");
} else if (possuiCarro) {
  console.log("Ele tem um carro");
} else {
  console.log("Ele não tem nenhum veículo");
}
//Retorna "Ele tem um carro"

//------------------------------------------------------------------------------
//Valores que sempre vão retornar false se forem passados dentro de um If
if (false); // Se o valor recebido dentro do If for igual a false
if (0); // Se o valor recebido dentro do If for igual a zero
if (NaN); // Se o valor recebido dentro do If for igual a NaN
if (null); // Se o valor recebido dentro do If for igual a null
if (undefined); // Se o valor recebido dentro do If for igual a undefined
if (""); // Se o valor recebido dentro do If for igual a vazio

//------------------------------------------------------------------------------
//Valores que sempre vão retornar false se forem passados dentro de um If
if (true); // Se o valor recebido dentro do If for igual a true
if (1); // Se o valor recebido dentro do If for igual a um numero que não seja zero
if (" "); // Se o valor recebido dentro do If for igual a uma string, há um espaço ali dentro.
if ("Archmedes"); // Se o valor recebido dentro do If for igual a uma string como já dito
if (-20); // Se o valor recebido dentro do If for igual a um número
if ({}); // Se o valor recebido dentro do If for igual a um array vazio

//------------------------------------------------------------------------------
//Valores lógicos de negação representado pelo sinal de exclamação ele inverte o valor apresentado negando-o
if (!true); // Exibe false
if (!1); // Exibe false negando o conteúdo verdadeiro do if
if (!undefined); // Exibe True pois como undefined no if é falso a exclamação inverte esse valor
if (!""); // exibe true, uma string vazia é false mais está tenso seu valor invertido
if (!!" "); // Exibe true pois uma string preenchida ja é verdadeira com o primeiro sinal de exclamação se torna false e com o segunda volta a ser verdadeira novamente
if (!!""); // O mesmo que acontece acima, porém ao contrário, uma string vazia é falsa se torna verdadeira com o primeiro sinal de negação e com o segundo sinal de negação volta a ser falsa.

//------------------------------------------------------------------------------
//operadores de comparação
if (20 > 5); // 20 é maior que 5 então true
if (5 > 20); // 5 não é maior que 20 então false
if (20 < 10); // 20 não é menor que 10 então false
if (20 <= 20); // 20 é menor ou igual a 20? Os números só são iguais então como satisfaz a igualdade é true
if (20 >= 21); // 20 não é maior e nem igual a 21 então não satisfaz nenhuma das duas comparações e retorna false

//------------------------------------------------------------------------------
// Operadores e comparação com tipos de variáveis
if (20 == "20"); // 20 numero é igual a 20 string sim, porque aqui com o sinal == a gente só compara o resulta e não o tipo da variável por isso retorna true
if (20 == 20); // 20 numero é igual a 20 numero sim isso retorna true
if (20 === "20"); // 20 numero é exatamente igual a 20 string, aqui retorna false porque com o sinal === que tambem e representado tres sinais = a gente realmente compara o dado e tambem o tipo desse dado, como uma é numero e outra é string retorna false
if (20 >= 21); // Já vimos acima que isso retona false
if (20 != 25) if (20 != "20"); // Lembre que quando temos o sinal de igual duas vezes == ele compara o dado e não o tipo desse dado, então 20 numero e 20 string é igual sim, porém a nossa expressão está perguntando se é diferente e isso é falso.
if (20 !== "20"); // Agora sim isso vai retornar verdadeiro pois estamos utilizando o sinal !== que tambem e representado por ! seguido de dois sinais = que compara o dado e o tipo desse dado entao como o numero 20 realmente é diferente da strig 20 isso retorna true.

//------------------------------------------------------------------------------
// Operador lógico && (and)
//Retorna verdadeiro apenas se ambos os valores forem verdadeiros
true && true; //Isso retorna true
true && false; //Isso retorna false
false && true; //Isso retorna false

//Exemplo 1
if (true && false) {
  console.log("Verdadeiro");
} else {
  console.log("falso");
}
//Retorna False

//Exemplo 2
if (25 <= 32 && 20 === "20") {
  console.log("Verdadeiro");
} else {
  console.log("falso");
}
//Retorna False

//Exemplo 3
let resultado1 = 25 <= 32;
let resultado2 = 20 === "20";
if (resultado1 && resultado2) {
  console.log("Verdadeiro");
} else {
  console.log("falso");
}
//Retorna False

//Exemplo 4
let informacoesCarro = [
  {
    nome: "Gol",
    anoFabricacao: 2021,
    tipoCambio: "Manual",
  },
  {
    nome: "Punto",
    anoFabricacao: 2015,
    tipoCambio: "Automatico",
  },
];

if (informacoesCarro[0].tipoCambio) {
  console.log(
    `O ${informacoesCarro[0].nome} tem câmbio ${informacoesCarro[0].tipoCambio}`
  );
} else {
  console.log(
    `O ${informacoesCarro[0].nome} não têm câmbio ${informacoesCarro[1].tipoCambio}`
  );
}
//Retorna "O gol tem cambio Manual"

//Exemplo 5
let informacoesCarro = [
  {
    nome: "Gol",
    anoFabricacao: 2021,
    tipoCambio: "Manual",
  },
  {
    nome: "Punto",
    anoFabricacao: 2015,
    tipoCambio: "Automatico",
  },
];

if (!informacoesCarro[0].tipoCambio) {
  console.log(
    `O ${informacoesCarro[0].nome} tem câmbio ${informacoesCarro[0].tipoCambio}`
  );
} else {
  console.log(
    `O ${informacoesCarro[0].nome} não têm câmbio ${informacoesCarro[1].tipoCambio}`
  );
}
//Retorna "O gol tem cambio Automático"

//------------------------------------------------------------------------------
// Operador lógico || (Or)
//Se um valor for verdadeiro na comparação já retorna verdadeiro
true || true; // true
true || false; // true
false || true; // true
false || false; // false
