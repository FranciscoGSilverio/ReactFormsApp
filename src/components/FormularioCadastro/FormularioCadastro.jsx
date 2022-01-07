import React, { Component } from "react";
import "./Style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "No category";
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.inscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.uninscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleTitleChange(event) {
    this.title = event.target.value;
    event.stopPropagation();
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _handleCategoryChange(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={this._handleCategoryChange.bind(this)}
        >
          <option>No Category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
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
