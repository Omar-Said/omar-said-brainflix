import VideoDetails from "../VideoDetails/VideoDetails";

function VideoContent(props) {
  return (
    <div>
      <VideoDetails mainData={props.mainData} />
    </div>
  );
}

export default VideoContent;
