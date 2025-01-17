import "./VideoDetails.scss";
import DetailWrapper from "../DetailWrapper/DetailWrapper";
import CommentSection from "../CommentSection/CommentSection";
import CommentList from "../CommentList/CommentList";

function VideoDetails(props) {
  let { mainData } = props;

  return (
    <div className="video-details">
      <DetailWrapper mainData={mainData} />
      <p className="video-details__desc">{mainData.description}</p>
      <CommentSection mainData={mainData} />
      <CommentList mainData={mainData} />
    </div>
  );
}

export default VideoDetails;
