/*
   Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

   Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
   Um ângulo será considerado inválido se não tiver um valor positivo.


*/

let lado1 = 60;
let lado2 = 60;
let lado3 = 59;

if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
   console.log("Erro: angulo invalido");
} else if ((lado1 + lado2 + lado3) == 180) {
   console.log("É um triangulo");
} else {
   console.log("Não é um triangulo");
}