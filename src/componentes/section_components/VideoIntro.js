import React, { useEffect, useState } from "react";
import video from "../../images/video.mp4";
import logoIntro from "../../images/logoVideo.png";
import { HashLoader } from "react-spinners";

const VideoIntro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    return;
  });

  return isLoading ? (
    <HashLoader color="rgb(112, 53, 53)" />
  ) : (
    <div className="video-intro">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"></source>
      </video>
      <div>
        <img src={logoIntro} alt="Logotipo"></img>
      </div>
    </div>
  );
};

export default VideoIntro;
