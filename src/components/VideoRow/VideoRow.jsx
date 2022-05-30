import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./VideoRow.scss";

function VideoRow() {
  const resolution = window.innerWidth;
  const isMobile = resolution >= 320 && resolution <= 480;
  console.log(isMobile);
  console.log("resolution: " + resolution);

  const Mobile = () => {
    return (
      <div className="VideoRow-wrapper">
        <h1>Visita nuestro espacio en 30 segundos...</h1>
        <VideoPlayer />
        <div className="info-videoRow">
          <p>¿Demasiado corto el vídeo? !Veálo entero!</p>
          <a href="https://vimeo.com/448837513"> VER VIDEO COMPLETO</a>
        </div>
      </div>
    );
  };

  const Desktop = () => {
    return (
      <div className="VideoRow-wrapper">
        <div className="info-videoRow">
          <h1>Visita nuestro espacio en 30 segundos...</h1>
          <p>¿Demasiado corto el vídeo? !Veálo entero!</p>
          <a href="https://vimeo.com/448837513"> VER VIDEO COMPLETO</a>
        </div>
        <VideoPlayer />
      </div>
    );
  };
  return (
    <div>
      <div>
        {isMobile ? (
          <React.Fragment>
            <Mobile />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Desktop />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default VideoRow;
