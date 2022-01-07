import React, { Component } from "react";
import "./Style.css";

class ListaDeCategorias extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.inscribe(this._newCategories);
  }

  componentWillUnmount(){
    this.props.catefories.uninscribe(this._newCategories)
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInputEvent(e) {
    if (e.key != "Enter") return;

    let categoryValue = e.target.value;
    this.props.addCategory(categoryValue);
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categories.map((categories, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categories}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Add category"
          onKeyUp={this._handleInputEvent.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaDeCategorias;
