import React from 'react'

import './Content.css';

export default class Content extends React.Component {
  render() { 

    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <section className="flex-container">
        {
          conteudos.map((conteudo, index) => (
            <section key={index}>
              <p>O conteúdo é: {conteudo.conteudo}</p>
              <p>Status: {conteudo.status}</p>
              <p>Bloco: {conteudo.bloco}</p>
            </section>
          ))
        }
      </section>
    );
  }
}
 
