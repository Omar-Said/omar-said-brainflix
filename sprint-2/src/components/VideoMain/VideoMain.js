import "./VideoMain.scss";
import VideoContent from "../VideoContent/VideoContent";
import VideoTile from "../VideoTile/VideoTile";

function VideoMain({ mainData, sideData }) {
  return (
    <section className="video-main">
      <VideoContent mainData={mainData} />
      <VideoTile sideData={sideData} mainData={mainData} />
    </section>
  );
}

export default VideoMain;
