import React, { Component } from "react";
import v1 from "../../images/v1.webp";
import v2 from "../../images/v2.webp";
import v3 from "../../images/v3.webp";
import v4 from "../../images/v4.webp";

import { Link } from "react-router-dom";

export default class Vinhos extends Component {
  render() {
    return (
      <div className="vinhos">
        <h1>Aromas Elegantes</h1>
        <h3>“...vindima de cada sonho...”</h3>
        <div className="flex-conf">
          <div className="garrafa">
            <img src={v1} alt="vinho"></img>
            <p>Branco Viosinho | 2018</p>
          </div>
          <div className="garrafa">
            <img src={v4} alt="vinho"></img>
            <p>Rosé Wine | 2018</p>
          </div>
          <div className="garrafa">
            <img src={v3} alt="vinho"></img>
            <p>Reserva Tinto | 2012</p>
          </div>
          <div className="garrafa">
            <img src={v2} alt="vinho"></img>
            <p>Porto Vintage | 2017</p>
          </div>
        </div>
        <div className="button">
          <Link to="/vinho">VISITAR A LOJA</Link>
        </div>
        {/* <div className="ajustebot"></div> */}
      </div>
    );
  }
}
