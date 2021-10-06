/*
  1- Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  3 - Crie uma função para mostrar o tamanho de um objeto.

  4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

  5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign .Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:


  6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

  7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:  
    console.log(getValueByNumber(lesson1, 0)); // Output: 'Matématica'

  8 -Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
  Exemplo:
    console.log(verifyPair(lesson3, 'turno', 'noite'));
      // Output: true,

    console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
    // Output: false


*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Questão 1
function addNewKey(object, key, value) {
  object[key] = value;
  return console.log(object);
}
addNewKey(lesson2, "turno", "manhã");

//Questão 2
function listKeysInObject(object) {
  return console.log(Object.keys(object));
}

listKeysInObject(lesson1);

//Questão 3

function lengthObject(object) {
  const lengthObject = Object.keys(object).length
  return console.log(lengthObject);
}

lengthObject(lesson3);

//Questão 4

function objectValues(object) {
  for (let index in object) {
    console.log(object[index])
  }
}

objectValues(lesson1);

//Questão 5

const allLessons = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
});
console.log(allLessons);

//Questão 6

function numberOfStudants(object) {
  let countStudant = 0;

  for (let student in object) {
    countStudant += object[student].numeroEstudantes;
  }
  return console.log(countStudant);
}
numberOfStudants(allLessons);

//Questão 7

function getValueByNumber(object, key) {

  switch (key) {
    case 0:
      return console.log(object.materia);
    case 1:
      return console.log(object.numeroEstudantes);
    case 2:
      return console.log(object.professor);
    case 3:
      return console.log(object.turno);
  }
}

getValueByNumber(lesson1, 0);

//Questão 8
function verifyPair(object, key, value) {
  
  if (object[key] === value) {
    return console.log(true);
  }
  return console.log(false)
}
verifyPair(lesson3, 'turno', 'noite');
