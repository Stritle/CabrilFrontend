import React from "react";
import SmallFooter from "../componentes/SmallFooter";
import exQ from "../images/exQ.jpg";
import { Helmet } from "react-helmet-async";

const Historia = (props) => {
  return (
    <div className="historia">
      <Helmet>
        <title>História - Quinta do Cabril</title>
      </Helmet>
      <h1>A nossa historia</h1>

      <p>
        Among the valleys of the Douro River, near the left bank, in the village
        of Cambres, Lamego county, in the heart of the first Pombaline
        demarcation of the Region, is Quinta da Pacheca, one of the most
        prestigious and recognized properties in the Douro Demarcated Region.
        The history of the vineyard in this property dates back to the XVI
        century when it was a collection of vines that belonged to the
        Monasteries of Salzedas and St. João de Tarouca, as referred to in a
        document dating 1551. The estate is mentioned for the first time in a
        document dat- ed from April 1738 where it is referred to as “Pacheca”, a
        feminine form of the family name Pacheco for being owned for a lady, Da.
        Mariana Pacheco Pereira, an im- posing woman who took care of the
        property by herself.
      </p>
      <img src={exQ} alt=""></img>
      <p>
        {" "}
        One of the Pombaline landmarks remaining that were first used in 1758 to
        outline this first ever Demarcated Wine Region in the world by the
        Marquês de Pombal, is still preserved inside Quinta da Pacheca, right at
        the main entrance to the traditional stone tanks. These granitic stone
        marks were declared property of national interest in the 1940s. It was
        in 1903 that D. José Freire de Serpa Pimentel bought the property and
        began to work on the modernization of the vineyard and structures among
        which are eight granite stone tanks where red wines from Pacheca are
        still vinified, resulting in limited annual productions of special
        categories Douro DOC wines and Port wines.
      </p>
      <img src={exQ} alt=""></img>
      <p>
        With around 75 hectares of own vineyards planted in the Humanity World
        Heritage, classified by UNESCO in 2001, Quinta da Pacheca has always
        been focused in the pro- duction of quality Douro DOC and Port wines and
        was one of the first in the region to bottle DOC wines under its own
        brand. It was in 1977 that the commercialization of DOC wines with the
        brands of Quinta da Pacheca and Quinta de Vale Abraão started, which
        vineyards still be- longs to Quinta da Pacheca today, under the
        leadership of the pioneer D. Eduardo Mendia Freire de Serpa Pimen- tel
        who was the first in Portugal to produce white wines from Sauvignon
        Blanc, Riesling and Gewurztraminer. Nowadays, Serpa Pimentel family
        continues involved in the project with the fourth generation of the
        family. In 1995 Quinta da Pacheca officially began its project in wine
        tourism opening its doors for guided tours to the property and sale of
        its wines in Quinta’s store. The con- cept was developed over the years
        with other activities of relevant wine tourism interest and resulted
        with the opening of The Wine House Hotel Quinta da Pacheca in 2009, thus
        exploring another form of business and con- tributing to broaden the
        tourism offer in an increasingly sought region and recognized as a
        destination of excellence.
      </p>
      <img src={exQ} alt=""></img>
      <p>
        A new cycle began in 2012 when the dynamic families of Paulo Pereira and
        Maria do Céu Gonçalves, partners with a long and successful record in
        international food and wine distribution, took the ownership of the
        project. The focus was clear, enhancing the quality of wines and
        invigorate the wine tourism. With its unparalleled singularity Quinta da
        Pacheca has become one of the most visited estates in the Douro Region
        and has been consecutively awarded in wine tourism, example of this is
        the prestigious distinction of Best of Wine Tourism* in various
        modalities, and in its famous wines which have been receiving the most
        distinct awards.
      </p>

      <SmallFooter />
    </div>
  );
};
export default Historia;
