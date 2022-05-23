import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./VideoRow.scss";

function VideoRow() {
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
}

export default VideoRow;
