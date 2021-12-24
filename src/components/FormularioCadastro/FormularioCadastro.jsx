import React, { Component } from "react";
import "./Style.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.title = "";
  }

  handleTitleChange(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Title"
          className="form-cadastro_input"
          onChange={this.handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note..."
          className="form-cadastro_input"
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Create note
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
