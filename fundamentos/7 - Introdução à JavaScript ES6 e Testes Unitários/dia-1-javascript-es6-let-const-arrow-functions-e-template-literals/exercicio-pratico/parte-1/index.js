/*
  1 - Agora você vai fazer alguns exercícios de fixação.
  
  Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

  Modifique a estrutura da função para que ela seja uma arrow function .
  Modifique as concatenações para template literals .



  2- Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

  Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

  Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

// Questão 1
let testingScope = escopo => {

  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }

}

testingScope(true);

// Questão 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) =>{
  return a -b
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 



/*
//Se funcaoDeComparacao(a, b) for menor que 0, ordena "A" para um índice anterior a "B".E "A" vem primeiro.

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

[2,4,5,1,3]

[2,4,1,5,3]

[2,4,1,3,5]

[2,1,4,3,5]

[1,2,4,3,5]

[1,2,3,4,5]


*/
