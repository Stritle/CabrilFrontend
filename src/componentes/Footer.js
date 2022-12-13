import React, { Component } from "react";
import logo from "../images/logoCabrilNav.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <h3>Contactos</h3>
          <p>
            Sede - Rua José Maria Pedroto PEDROTO 23 / 9º / 29ª 4200 - 351 Porto
          </p>
          <p>Adega - Paradela de Guiães 5060-161 Sabrosa/Douro</p>
          <p>geral@quintadocabril.pt</p>
          <p>+351 96 405 57 34</p>
        </div>
        <div className="footer-center">
          <img src={logo} alt="Quinta do Cabril"></img>
          <h6>© 2022 Quinta Do Cabril</h6>
        </div>
        <div className="footer-right">
          <h3>Redes Sociais</h3>
          <div className="rotaçao">
            <a href="google.pt">
              <FiInstagram />
            </a>
            <a href="google.pt">
              <FaFacebookF />
            </a>
            <a href="google.pt">
              <FaWhatsapp />
            </a>
            <a href="google.pt">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
