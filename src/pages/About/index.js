import React from "react";

import { Container } from "./styled";

function About() {
  return (
    <>
      <Container>
        <div className="container">
          <div>
            <h1>Locar Ferramentas</h1>
          </div>
          <div>
            <h2>Descrição do Programa:</h2>
            <p>
              Programa capaz de listar ferramentas dos usuários que estão
              disponíveis para locação.
              <br />
              <br />
              Tecnologias em uso:
              <br />
              -Javascript
              <br />
              -Reactjs
              <br />
              -Styled Components (Css)
              <br />
              -Sqlite
            </p>
          </div>
          <div>
            <h2>Autor:</h2>
            <p>Wallace Santos Vieira (ADS3)</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
