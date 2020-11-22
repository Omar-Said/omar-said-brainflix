import "./VideoPlayer.scss";

const Video = (props) => {
  let { mainData } = props;

  return (
    <div className="video">
      <video poster={mainData[0].image} className="video__player">
        Your browser does not support video player
      </video>
      <div className="video-controls">
        <button id="playPause"></button>
        <div className="slider">
          <div className="slider__inner"></div>
          <p className="slider__inner-text">0:00 / {mainData[0].duration}</p>
        </div>
        <div className="sidebar">
          <button id="fullscreen"></button>
          <button id="volume"></button>
        </div>
      </div>
    </div>
  );
};

export default Video;
