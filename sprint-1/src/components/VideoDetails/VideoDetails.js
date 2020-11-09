import "./VideoDetails.scss";
import DetailWrapper from "../DetailWrapper/DetailWrapper";
import CommentSection from "../CommentSection/CommentSection";
import CommentList from "../CommentList/CommentList";

function VideoDetails(props) {
  let [main] = props.mainData;

  return (
    <div className="video-details">
      <DetailWrapper mainData={main} />
      <p className="video-details__desc">{main.description}</p>
      <CommentSection />
      <CommentList mainData={main} />
    </div>
  );
}

export default VideoDetails;
