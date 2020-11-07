import "./VideoDetails.scss";
import views from "../../assets/Icons/SVG/Icon-views.svg";
import likes from "../../assets/Icons/SVG/Icon-likes.svg";
import DetailWrapper from "../DetailWrapper/DetailWrapper";

function VideoDetails(props) {
  let [main] = props.mainData;

  console.log(main);

  return (
    <div className="detail__container">
      <DetailWrapper mainData={main} />
      <p className="video-desc">{main.description}</p>
    </div>
  );
}

export default VideoDetails;
