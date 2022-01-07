import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/Categories";
import NotesCollection from "./data/Notes";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesCollection();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <ListaDeNotas
            eraseNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
