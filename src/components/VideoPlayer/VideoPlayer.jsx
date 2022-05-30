import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.scss";

const VideoPlayer = () => (
  <div className="player-wrapper">
    <ReactPlayer
      url="https://vimeo.com/460938931?embedded=true&source=vimeo_logo&owner=90282594"
      className="react-player"
      playing
      width="100%"
      loop="true"
      // height="100%"
      controls={true}
    />
  </div>
);

export default VideoPlayer;

// import React from "react";
// import ReactPlayer from "react-player";
// // import styled from "styled-components";
// import "./VideoPlayer.scss";

// function VideoPlayer() {
//   return (
//     <div className="player-wrapper">
//       {/* <ReactPlayer
//         className="react-player"
//         url="https://vimeo.com/460938931?embedded=true&source=vimeo_logo&owner=90282594"
//         playing="true"
//         muted="true"
//         controls="true"
//         loop="true"
//         width="100%"
//         // height="100%"
//       /> */}
//     </div>
//   );
// }

// export default VideoPlayer;

// import React from "react";
// import ReactPlayer from "react-player";
// import styled from "styled-components";

// const VideoPlayer = ({ className }) => (
//   <ReactPlayer
//     url="https://vimeo.com/460938931?embedded=true&source=vimeo_logo&owner=90282594"
//     className={className}
//     playing
//     width="100%"
//     // height="100%"
//     controls={false}
//     muted
//   />
// );

// const AbsolutelyPositionedPlayer = styled(VideoPlayer)`
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// const RelativePositionWrapper = styled.div`
//   position: relative;
//   padding-top: 56.25%;
// `;

// const ResponsiveStyledPlayer = () => (
//   <RelativePositionWrapper>
//     <AbsolutelyPositionedPlayer />
//   </RelativePositionWrapper>
// );

// export default ResponsiveStyledPlayer;
