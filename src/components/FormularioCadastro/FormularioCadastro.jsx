import React, { Component } from "react";
import "./Style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event) {
    this.title = event.target.value;
    event.stopPropagation();
  }

  _handleTextChange(event) {
    this.text = event.target.value;
    event.stopPropagation();
  }
  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <input
          type="text"
          placeholder="Title"
          className="form-cadastro_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note..."
          className="form-cadastro_input"
          onChange={this._handleTextChange.bind(this)}
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Create note
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
