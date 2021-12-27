import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super();
    this.notes=[];
  }

  createNote(title, text) {
    const newNote = {title, text};
    this.notes.push(newNote);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas notes ={this.notes}/>
      </section>
    );
  }
}

export default App;
