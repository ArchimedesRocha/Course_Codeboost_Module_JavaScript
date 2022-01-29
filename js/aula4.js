// Aula 4 - Números e Operadores
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

//------------------------------------------------------------------------------
//Operadores Básicos
let soma = 10 + 2;
let subtracao = 10 - 2;
let multiplicacao = 10 * 2;
let divisao = 10 / 2;
let numeroFracionado = 15.7 + 2.13 - (1.16 * 2.14) / 7.3;

//------------------------------------------------------------------------------
//NaN Not a Number
let numero = 10;
let medida = "litros";
let qtdCombustivel = numero + medida;
let resultado = qtdCombustivel / 5;
console.log(resultado);
// Vai retornar NaN(Not a Number) porque você estará somando um numero com uma string

//------------------------------------------------------------------------------
// Uma alternativa seria trabalhar a let resultado da seguinte forma abaixo
let numero = 10;
let medida = "litros";
let qtdCombustivel = numero + medida;
let resultado = `${numero / 2} ${medida}`;
console.log(resultado);
// Assim conseguiriamos exibir o resultado tranquilamente.

//------------------------------------------------------------------------------
//Ordem de prioridade na operação
//Agora vamos explicar a ordem de operação quando trabalhamos com operadores, é igual a matemática
//básica do maior para o menor divisão e multiplicação depois subtração e adição.

let resultado = 10 + 3 * 6; //28 aqui primeiro multiplicou depois somou
let resultado2 = (10 - 3) * 6; //42 aqui primeiro multiplicou 10*6 depois 3*6 de depois subtraiu 60-18
let resultado3 = (10 / 2) * 7; //35 aqui primeiro dividiu e depois multiplicou
let resultado4 = 20 + 20 * 3 + 5 / 2; //82.5 aqui dividiu 5 por 2 depois multiplicou 20*30 e depois executou as somas

//------------------------------------------------------------------------------
//Operadores Unários
//Utilizado para incrementar ou decrementar uma variável alterando o seu valor
let incrementar = 10;
console.log(++incrementar); // Incrementa o valor imediatamente quando a variável for chamada
console.log(--incrementar); // decrementa o valor imediatamente quando a variável for chamada
console.log(incrementar++); // Incrementa o valor apenas quando a variável for chamada pela segunda vez
console.log(incrementar--); // Decrementa o valor apenas quando a variável for chamada pela segunda vez
