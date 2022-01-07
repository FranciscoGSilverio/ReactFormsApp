import React, { Component } from "react";
import CardNota from "../CardNota";
import "./Style.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.inscribe(this._newNotes);
  }

  componentWillUnmount(){
    this.props.notes.uninscribe(this._newNotes)
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                eraseNote={this.props.eraseNote}
                title={note.title}
                text={note.text}
                category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
