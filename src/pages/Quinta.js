import React from "react";
import SmallFooter from "../componentes/SmallFooter";
import exQ from "../images/exQ.jpg";
import { Helmet } from "react-helmet-async";

const Quinta = () => {
  return (
    <div className="quinta">
      <Helmet>
        <title>Quinta - Quinta do Cabril</title>
      </Helmet>

      <h1> A Quinta do Cabril</h1>
      <p>
        Uma casa senhorial reconstruída aquando da Adega em 2014, mantendo a
        traça original e com condições extraordinárias para passar alguns
        momentos de grande prazer e em boa companhia, desfrutando toda a beleza
        da Região do Douro. Os seus vinhos, a sua gastronomia, as suas gentes e
        as belas paisagens e tradições, transmitem-nos uma tranquilidade, uma
        paz de espirito que nos faz viver em duplicado os momentos de prazer.
      </p>
      <img src={exQ} alt=""></img>
      <p>
        Estamos na na Região Demarcada do Douro no Cima Corgo, em Paradela de
        Guiãe, uma freguesia do concelho de Sabrosa, junto a S. Martinho de
        Anta, terra do nossos grande poeta Miguel Torga. Gerações e gerações de
        homens artistas, que desde 1761 data em que a Região foi demarcada pelo
        Marquês de Pombal, tornearam este Douro profundo de vales que o rio
        cavou na terra e no xisto ao longo de muitos anos.
      </p>
      <img src={exQ} alt=""></img>
      <SmallFooter />
    </div>
  );
};

export default Quinta;
