import React from "react";
import VideoIntro from "../componentes/section_components/VideoIntro";
import Intro from "../componentes/section_components/Intro";
import Vinhos from "../componentes/section_components/Vinhos";
import Last from "../componentes/section_components/Last";
import Fotos from "../componentes/section_components/Fotos";
import ImageIntro from "../componentes/section_components/ImageIntro";
import { Helmet } from "react-helmet-async";

const Home = (props) => {
  return (
    <main className="app">
      <Helmet>
        <title>Home - Quinta do Cabril</title>
      </Helmet>

      <ImageIntro />
      <VideoIntro />
      <Intro />
      <Fotos />
      <Vinhos />
      <Last />
    </main>
  );
};

export default Home;
