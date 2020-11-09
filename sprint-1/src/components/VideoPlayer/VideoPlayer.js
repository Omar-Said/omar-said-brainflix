import "./VideoPlayer.scss";

const Video = (props) => {
  let [main] = props.mainData;

  return (
    <div className="video">
      <video poster={main.image.videoList0} className="video__player">
        Your browser does not support video player
      </video>
      <div className="video-controls">
        <button id="playPause"></button>
        <div className="slider">
          <div className="slider__inner"></div>
          <p className="slider__inner-text">{main.duration}</p>
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
