//3) Descubra a lógica e complete o próximo elemento:

/*a) 1, 3, 5, 7, ___
É aprensentada uma sequência de número em que o próximo número é o número anterior somando-se 2.

Algoritmo de representação da sequência:
numeroAtual = numeroAnterior + 2

Próximo elemento = 9
*/

/*b) 2, 4, 8, 16, 32, 64, ____
É aprensentada uma sequência de número em que o próximo número é o dobro do anterior.

Algoritmo de representação da sequência:
numeroAtual = numeroAnterior * 2

Próximo elemento = 128
*/

/*c) 0, 1, 4, 9, 16, 25, 36, ____
É apresentado uma sequência de quadrados dos números inteiros em sequência, iniciando-se do 0.

Algoritmo de representação da sequência:
numeroAtual = numeroAtual[index]^2

Próximo elemento = 49
*/

/*d) 4, 16, 36, 64, ____
É apresentado, na prática, uma sequência de quadrados dos números pares iniciando-se do 2.

Algoritmo de representação da sequência: 
numeroAtual = numero[0] * (numeroAtual[index] + 1)^2
numero[0] * (numeroAtual[index] + 1)^2 ==> múltiplica 4 pela segunda potência da posição do numero (ou posição do índice + 1)

Próximo elemento = 100
*/

/*e) 1, 1, 2, 3, 5, 8, ____
A sequencia apresentada é, portanto, uma parte da sequência de Fibonacci

Algoritmo de representação da sequência:
numeroAtual = numeroAnterior + numeroAnteiorDoAnterior

Próximo elemento = 13
*/

/*f) 2,10, 12, 16, 17, 18, 19, ____
Não consegui encontrar a lógica da sequência
*/

