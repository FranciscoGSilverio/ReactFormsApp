import React, { Component } from "react";
import "./Style.css";
import { ReactComponent as DeleteSVG } from "../../assets/Images/delete.svg";

class CardNota extends Component {

  erase(){
    const index = this.props.index;
    this.props.eraseNote(index)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota-titulo">{this.props.title}</h3>
          <DeleteSVG onClick={this.erase.bind(this)}/>
          <h4>{this.props.category}</h4>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
