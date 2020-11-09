import "./VideoMain.scss";
import VideoContent from "../VideoContent/VideoContent";
import VideoTile from "../VideoTile/VideoTile";

function VideoMain(props) {
  return (
    <section className="video-main">
      <VideoContent mainData={props.mainData} />
      <VideoTile sideData={props.sideData} mainData={props.mainData} />
    </section>
  );
}

export default VideoMain;
