/*
   1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
   
   2-Adicione a tag main com a classe main-content como filho da tag body ;
   
   3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
   
   4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
   
   5-Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
   
   6-Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
   
   7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
   
   8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

   9-Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

   10-Adicione a classe title na tag h1 criada;

   11-Adicione a classe description nas 3 tags h3 criadas;

   12-Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

   13-Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

   14-Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

   15-Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

*/

//Desafio 1
let body = document.querySelector("body");

let h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";

body.appendChild(h1);

//Desafio 2
let main = document.createElement("main");
main.className = "main-content";

body.appendChild(main);

//Desafio 3

let centerSection = document.createElement("section");
centerSection.className = "center-content";
main.appendChild(centerSection);

//Desafio 4
let paragraph = document.createElement("p");
paragraph.innerText = "Olá mundo !";
centerSection.appendChild(paragraph);

//Desafio 5
let leftSection = document.createElement("section");
leftSection.className = "left-content";
main.appendChild(leftSection);

//Desafio 6
let rightSection = document.createElement("section");
rightSection.className = "right-content";
main.appendChild(rightSection);

//Desafio 7
let image = document.createElement("img");
image.src = "https://picsum.photos/200";
leftSection.appendChild(image);

//Desafio 8
let ul = document.createElement("ul");

rightSection.appendChild(ul);

for (let index = 0; index < 10; index++) {

   let li = document.createElement("li");
   li.innerText = numberName(index);
   ul.appendChild(li);
}

function numberName(number) {

   switch (number) {
      case 0:
         return "Um"
         break;
      case 1:
         return "Dois";
         break;
      case 2:
         return "Três"
         break;
      case 3:
         return "Quatro";
         break;
      case 4:
         return "Cinco";
         break;
      case 5:
         return "Seis";
         break
      case 6:
         return "Sete";
         break;
      case 7:
         return "Oito";
         break;
      case 8:
         return "Nove";
         break;
      case 9:
         return "Dez";
         break;
   }
}

// Desafio 9
for (let index = 0; index< 3; index++){
   let h3 = document.createElement("h3");
   main.appendChild(h3);
}

//Desafio 10

h1.className = "title";

//Desafio 11
let h3 = document.querySelectorAll("h3");

for (let index = 0; index< 3; index++){
   h3[index].className = "description";
}

//Desafio 12
main.removeChild(leftSection);


//Desafio 13
rightSection.style = "margin-right: auto";

//Desafio 14
centerSection.style.background = "green";

//Desafio 15 
let ulTag = document.querySelector("ul");

for (let index = 0; index < 2; index++){
   ulTag.lastChild.remove();
}
