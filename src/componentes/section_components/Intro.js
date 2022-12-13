import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1>Um Sonho Antigo</h1>
        <h3>“Todo o semeador semeia contra o presente.”</h3>
        <p>
          A quinta do Cabril existe há mais de 100 anos em Paradela de Guiães,
          junto a S.Martinho de Anta, terra do nosso poeta Miguel Torga. Um
          sonho antigo de António José Garrido que está ligado ao Mundo dos
          vinhos há muitas décadas e que muito tem investido na propriedade, não
          só na área das vinhas, mas também na Adega, na procura permanente de
          melhorar a produção de uvas para produzir os melhores vinhos do Porto
          e DOC Douro.
        </p>

        <div>
          <Link to="/historia"> A NOSSA HISTÓRIA</Link>
          <Link to="/vinho">VINHOS</Link>
        </div>
        {/* <div className="ajustebot"></div> */}
      </div>
    );
  }
}
