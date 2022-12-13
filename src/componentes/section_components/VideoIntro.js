import React, { Component } from "react";
import video from "../../images/video.mp4";
import logoIntro from "../../images/logoVideo.png";

export default class VideoIntro extends Component {
  render() {
    return (
      <div className="video-intro">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
        </video>
        <div>
          <img src={logoIntro} alt="Logotipo"></img>
        </div>
      </div>
    );
  }
}
