const buttonSubmit = document.querySelector("#enviar");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  let people = infoPeople();

  createDiv(people);

});

function isItDate() {

  let date = selectElements("#", "data");
  let arrayDate = 0;

  if (date.includes("/")) {

    arrayDate = date.split("/", 3);
  }

  for (let index = 0; index < arrayDate.length; index++) {

    arrayDate[index] = parseInt(arrayDate[index]);

    if (isNaN(arrayDate[index])) {
      return alert("data invalida");

    }
  }
  return arrayDate;
}

function infoPeople() {

  const people = {
    
    name: selectElements("#", "input-name"),
    email: selectElements("#", "input-email"),
    cpf: selectElements("#", "input-cpf"),
    endereco: selectElements("#", "input-endereco"),
    cidade: selectElements("#", "input-cidade"),
    estado: selectElements("#", "select-estado"),
    tipoCasa: selectElements("#", "input-casa"),
    curriculo: selectElements("#", "resumo-curriculo"),
    empregro: selectElements("#", "input-emprego"),
    descricaoEmprego: selectElements("#", "descricao"),
    arrayDate: isItDate()
  }

  return people
}

function selectElements(id, nameId) {

  return document.querySelector(`${id}${nameId}`).value
}

function createDiv(people) {
  
  const div = document.createElement("div");
  const main = document.querySelector("main");
  const paragraph = document.createElement("p");

  paragraph.innerText = `Nome: ${people.name}\nEmail: ${people.email}\nCPF: ${people.cpf}\nEndereco: ${people.endereco}\nCidade: ${people.cidade}\nEstado: ${people.estado}\nTipo da Casa: ${people.tipoCasa}`

  div.appendChild(paragraph);
  main.appendChild(div);

}