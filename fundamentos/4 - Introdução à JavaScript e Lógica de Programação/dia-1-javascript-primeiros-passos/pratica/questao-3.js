/*
   Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

*/

let number1 = 1;
let number2 = 2;
let number3 = 3;

if (number1 > number2 && number1 > number3) {
   console.log("number one is biggest number");
} else if (number2 > number1 && number2 > number3) {
   console.log("number two is biggest number");
}else if (number3 > number1 && number3 > number2) {
   console.log("number three is biggest number");
}