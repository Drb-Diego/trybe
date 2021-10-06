/*
   Aqui você vai modificar os elementos já existentes utilizando apenas as funções:

   - document.getElementById()
   - document.getElementsByClassName()
   - document.getElementsByTagName()

   1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

   2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

   3. Crie uma função que mude a cor do quadrado vermelho para branco.

   4. Crie uma função que corrija o texto da tag <h1>.

   5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
   
   6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// Desafio 1
function changeParagraph() {
   let objective = document.getElementsByTagName('p');
   objective[1].innerText = "Daqui a 2 anos eu serei um dev full stack !!!";
}
changeParagraph();

// Desafio 2
function changeBackgroundMainContent() {
   let mainContentBackground = document.getElementsByClassName("main-content");
   mainContentBackground[0].style.background = "rgb(76,164,109)";
}
changeBackgroundMainContent();

// Desafio 3
function changeBackgroundCenterContent() {
   let centerContentBackground = document.getElementsByClassName("center-content");
   centerContentBackground[0].style.background = "white";
}
changeBackgroundCenterContent();

//Desafio 4
function correctTitle() {
   let mainTitle = document.getElementsByClassName("title");
   mainTitle[0].innerText = "Exercício 5.1 - JavaScript";
}
correctTitle();

//Desafio 5
function paragraphLowerCase() {
   let paragraphs = document.getElementsByTagName("p");

   for (let index = 0; index < paragraphs.length; index++) {

      let stringLowerCase = paragraphs[index].innerText;
      stringLowerCase = stringLowerCase.toLowerCase();
      paragraphs[index].innerText = stringLowerCase;
   }

}
paragraphLowerCase();

// Desafio 6
function showParagraphs (){
   let paragraphs = document.getElementsByTagName("p");

   for (let index = 0; index < paragraphs.length; index ++){

      console.log(paragraphs[index].innerText);
   }
}
showParagraphs();
