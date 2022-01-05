import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes: [],
      categories: [],
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newNotesArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesArray,
    };
    this.setState(newState);
  }

  addCategory(categoryValue){
    const newCategoriesArray = [...this.state.categories, categoryValue]
    const newState = {...this.state, categories:newCategoriesArray};
    this.setState(newState);
  }

  deleteNote(index) {
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({ notes: notesArray });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}
          />
          <ListaDeNotas
            notes={this.state.notes}
            eraseNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
