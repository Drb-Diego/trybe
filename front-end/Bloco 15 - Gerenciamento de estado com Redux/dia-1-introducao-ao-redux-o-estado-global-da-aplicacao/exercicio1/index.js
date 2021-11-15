const INITIAL_STATE = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

// Criando o reducer, para fazer as validaçãoes das actions
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        colors: ["white", "black", "red", "green", "blue", "yellow"],
        index: state.index < state.colors.length - 1 
          ? state.index + 1 : state.index = 0,
      };
      
    case "PREVIOUS":
      return {
        colors: ["white", "black", "red", "green", "blue", "yellow"],
        index: state.index > 0 && state.index - 1
      };

    default:
      return state;
  }
};

//Criando a stora ou estado global
const store = Redux.createStore(reducer);

//Criando a action para a proxima cor
const nextColor = () => {
  return {type: 'NEXT' }
}

//Criando a action para a cor anterior
const previousColor = () => {
  return {type: 'PREVIOUS' }
}

const span = document.getElementById('value');
const container = document.getElementById('container');

document.getElementById("next").addEventListener("click", () => {
  store.dispatch(nextColor());

  const state = store.getState();

  span.textContent = state.colors[state.index];

  container.style.background = state.colors[state.index];
});

document.getElementById("previous").addEventListener("click", () => {
  store.dispatch(previousColor());
  
  const state = store.getState();

  if(state.index !== false) {
    span.textContent = state.colors[state.index],
    container.style.background = state.colors[state.index]
  } 
  
  else {
    span.textContent = state.colors[0],
    container.style.background = state.colors[0]
  }
});



