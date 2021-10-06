/*
  Exercício 1:

  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.

  Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>



  Exercício 2:

  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

  Adicione a este botão a ID "btn-holiday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  
  
  Exercício 3:

  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

  Exercício 4:

  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  Adicione a este botão o ID "btn-friday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  Exercício 5:
  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

  Exercício 6:

  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
  
  Dica - Propriedade: event.target .



*/
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheWeek() {

  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu codigo abaixo


// Desafio 1
function createDaysOfTheMounth(mounthDays) {

  let ul = document.querySelector("#days");

  mounthDays.forEach(day => {

    let li = document.createElement("li");
    li = validateHolidayOrFriday(day, li);
    ul.appendChild(li);
  });
}
// Chamada da função
createDaysOfTheMounth(dezDaysList);

// Desafio 1 : Função que adiciona as classes de acordo com os dias 
function validateHolidayOrFriday(day, li) {

  li.className = "day";
  li.innerText = day;

  if (day === 24 || day === 25 || day === 31) {
    li.className += " holiday";
  }

  if (day === 4 || day === 11 || day === 18 || day === 25) {
    li.className += " friday";
  }

  return li;
}


// Desafio 2
function holidayButton(feriados) {

  let buttonContainer = document.querySelector(".buttons-container");

  let buttonHoliday = document.createElement("button");
  buttonHoliday.innerText = feriados;
  buttonHoliday.id = "btn-holiday";

  buttonContainer.appendChild(buttonHoliday);

}

holidayButton("Feriados");

// Desafio 3
let buttonHoliday = document.querySelector("#btn-holiday");

buttonHoliday.addEventListener("click", () => {

  let li = document.querySelectorAll(".day");

  li.forEach(element => {

    if (element.style.color == "red") {
      return element.style.color = "#777";
    }

    if (element.classList.contains("holiday")) {
      return element.style.color = "red";
    }
  });

});


// Desafio 4
function fridayButton(friday) {

  let buttonContainer = document.querySelector(".buttons-container");

  let frydayButton = document.createElement("button");
  frydayButton.innerText = friday;
  frydayButton.id = "btn-friday";

  buttonContainer.appendChild(frydayButton);
}

fridayButton("Sexta-feira");

// Desafio 5
let buttonFriday = document.querySelector("#btn-friday");


buttonFriday.addEventListener("click", () => {

  let li = document.querySelectorAll(".day");

  let fridays = [4, 11, 18, 25];

  li.forEach(day => {

    if (day.innerText === "Sexta-feira") {
      return day.innerText = fridays.shift();
    }

    if (day.classList.contains("friday")) {
      return day.innerText = "Sexta-feira";
    }
  });

});

// Desafio 6

let liTag = document.querySelectorAll(".day");

liTag.forEach(element =>{
  element.addEventListener("mouseover", event => event.target.style.fontSize = "30px");
  element.addEventListener("mouseleave", event => event.target.removeAttribute("style"));
});


//Desafio 7 