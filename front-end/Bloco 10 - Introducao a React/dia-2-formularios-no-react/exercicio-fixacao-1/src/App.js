import React from "react";
import "./app.css";

export default class App extends React.Component {


  constructor() {
    super();

    this.state = {
      select: '',
      inputName: '',
      inputAge: 0
    }
  }

  handleChangeSelect = (event) => {
    this.setState({
      select: event.target.value
    });
  }

  handleChangeInputName = (event) => {
    
    this.setState({
      inputName: event.target.value
    });
  }

  handleChangeInputAge = (event) => {

    this.setState({
      inputAge: event.target.value
    });
  }


  render() {
    return (
      <section>
        <h1>Formulario</h1>
        <form>
          <select name='' id='' onChange={this.handleChangeSelect}>
            <option defaultValue="."selected disabled >
              Selecione um valor
            </option>
            <option value='Valor-1'>Valor 1</option>
            <option value='Valor-2'>Valor 2</option>
            <option value='Valor-3'>Valor 3</option>
          </select>

          <label htmlFor='name'>Digite seu nome</label>
          <input type='text' id="name" onChange={this.handleChangeInputName} />

          <label htmlFor='age'>Digite sua idade</label>
          <input type='number' id="age" onChange={this.handleChangeInputAge} />

          <button type="reset">Enviar</button>
        </form>
      </section>
    );
  }
}
