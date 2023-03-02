/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fazParteSequenciaFibonacci(n) {
  //Criação de duas variáveis que irão se somar em loop
  /*A variável "fib" irá sempre ser um valor que pertence à 
  sequência de Fibonacci*/
  let fibAnterior = 0
  let fibAtual = 1

  /*A criação da variável temporária (fibTemp) serve para que 
  o número atual da sequência de Fibonacci seja armazenado 
  para o próximo loop em que ele terá o valor de fibAnterior*/
  while (fibAtual < n) {
    let fibTemp = fibAtual
    fibAtual = fibAnterior + fibAtual
    fibAnterior = fibTemp
  }

  //Retornar se o valor informado faz parte da sequência de Fibonnaci
  return fibAtual === n
}

console.log(fazParteSequenciaFibonacci(8))