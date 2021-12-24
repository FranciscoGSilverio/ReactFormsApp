import React, { Component } from "react";
import CardNota from "../CardNota";
import "./Style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map(
          (categories, index) => {
            return (
              <li className="lista-notas_item" key={index}>
                <div>{categories}</div>
                <CardNota />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}
export default ListaDeNotas;
