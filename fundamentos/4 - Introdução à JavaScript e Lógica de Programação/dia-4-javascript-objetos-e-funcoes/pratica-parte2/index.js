/*

   1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
   
   Exemplo de palíndromo: arara .

   verificaPalindrome('arara') ;
   Retorno esperado: true

   verificaPalindrome('desenvolvimento') ;
   Retorno esperado: false

   2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
   
   Array de teste: [2, 3, 6, 7, 10, 1]; .
   Valor esperado no retorno da função: 4 .


   3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
   
   Array de teste:  [2, 4, 6, 7, 10, 0, -3];.
   Valor esperado no retorno da função: 6 .

   4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
   
   Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
   Valor esperado no retorno da função: Fernanda .

   5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
   Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
   Valor esperado no retorno da função: 2 .


*/

//Questão 1
function validatePalindrome(word) {

   let palindromeIsTrue = false;
   let reversePalindrome = '';

   for (let index = word.length - 1; index >= 0; index--) {
      reversePalindrome += word[index];
   }

   if (reversePalindrome == word) {
      palindromeIsTrue = true;
   }

   return palindromeIsTrue;

}

console.log(validatePalindrome('arara'));

console.log('\n');

//Questão 2

function arrayInt(numbers) {

   let biggestNumber = 0;
   let indexBiggestNumber = 0;

   for (let index = 0; index < numbers.length; index++) {

      if (numbers[index] > biggestNumber) {
         BiggestNumber = numbers[index];
         indexBiggestNumber = index;
      }
   }

   return indexBiggestNumber - 1;
}

console.log(arrayInt([2, 3, 6, 7, 10, 1]));
console.log('\n');

//Questão 3
function smallInt(numbers) {

   let smallNumber = 0;
   let indexSmallsNumber = 0;

   for (let index = 0; index < numbers.length; index++) {

      if (numbers[index] < smallNumber) {

         smallNumber = numbers[index];
         indexSmallsNumber = index;
      }
   }

   return indexSmallsNumber;
}

console.log(smallInt([2, 4, 6, 7, 10, 0, -3]));
console.log('\n');

//Questão 4
function smallName(names) {

   let indexBiggestName = names[0];
   let biggestName = '';

   for (let index = 0; index < names.length; index++) {
      
      if (indexBiggestName.length < names[index].length) {
         
         indexBiggestName = names[index];
         biggestName = names[index];
      }
   }

   return biggestName;
}


console.log(smallName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('\n');

//Questão 5
function numbersRepeated(numbers){

   let mostRepeatedNumber = numbers[0];
   let count = 0;

   for (let index1 = 0; index1 < numbers.length; index1++){
      mostRepeatedNumber = numbers[index1];


      for (let index2 = 1; index2 < numbers.length; index2++){
         if (mostRepeatedNumber == numbers[index2]){
            console.log(mostRepeatedNumber);
            count++;
         }
      }
   } 
   return count;
}
console.log(numbersRepeated([2, 3, 2, 5, 8, 2, 3]));
//[2, 3, 2, 5, 8, 2, 3]