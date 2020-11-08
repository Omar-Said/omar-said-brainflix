import "./VideoDetails.scss";
import DetailWrapper from "../DetailWrapper/DetailWrapper";
import CommentSection from "../CommentSection/CommentSection";
import CommentList from "../CommentList/CommentList";

function VideoDetails(props) {
  let [main] = props.mainData;

  return (
    <div className="detail__container">
      <DetailWrapper mainData={main} />
      <p className="video-desc">{main.description}</p>
      <CommentSection />
      <CommentList mainData={main} />
    </div>
  );
}

export default VideoDetails;
