import VideoDetails from "../VideoDetails/VideoDetails";

function VideoContent(props) {
  let { mainData } = props;

  return (
    <div>
      <VideoDetails mainData={mainData} />
    </div>
  );
}

export default VideoContent;
