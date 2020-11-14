import VideoDetails from "../VideoDetails/VideoDetails";
import VideoContents from "./VideoContent.scss";

function VideoContent(props) {
  let { mainData } = props;

  return (
    <div className="video-content">
      <VideoDetails mainData={mainData} />
    </div>
  );
}

export default VideoContent;
