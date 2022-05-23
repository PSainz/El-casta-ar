import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://vimeo.com/460938931?embedded=true&source=vimeo_logo&owner=90282594"
        playing="true"
        muted="true"
        controls="true"
        loop="true"
      />
    </div>
  );
}

export default VideoPlayer;
