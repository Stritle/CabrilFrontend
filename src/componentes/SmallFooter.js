import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../images/logoCabrilSmallFooter.png";

const SmallFooter = () => {
  return (
    <div className="smallFooter">
      <div>
        <p>Adega - Paradela de Guiães 5060-161 Sabrosa/Douro</p>
        <p>geral@quintadocabril.pt</p>
        <p>+351 96 405 57 34</p>
      </div>
      <div>
        <img src={logo} alt="Quinta do Cabril"></img>
      </div>
      <div className="socialMedia">
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
  );
};

export default SmallFooter;
