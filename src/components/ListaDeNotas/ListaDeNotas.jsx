import React, { Component } from "react";
import CardNota from "../CardNota";
import "./Style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                eraseNote={this.props.eraseNote}
                title={note.title}
                text={note.text}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
