/*
   1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

   let names = {
      person1: 'João',
      person2: 'Maria',
      person3: 'Jorge' 
   };

   2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

   let car = {
      model: 'A3 Sedan',
      manufacturer: 'Audi',
      year: 2020
   };

*/

// Questão 1
let names = {
   person1: 'João',
   person2: 'Maria',
   person3: 'Jorge' 
};

for (let index in names) {
   console.log(`Olá ${names[index]} !`)
}

// Questão 1

let car = {
   model: 'A3 Sedan',
   manuFacturer: 'Audi',
   year: 2020
};

console.log("\n");

for (let index in car) {
   console.log(`${index}: ${car[index]}`);
}