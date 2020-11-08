import "./ChannelData.scss";
import views from "../../assets/Icons/SVG/Icon-views.svg";
import likes from "../../assets/Icons/SVG/Icon-likes.svg";

function ChannelData(props) {
  return (
    <div className="detail__wrapper-left">
      <img className="views-img" src={views} alt="views" />
      <p className="views-count">{props.mainData.views}</p>
      <img className="likes-img" src={likes} alt="likes" />
      <p className="likes-count">{props.mainData.likes}</p>
    </div>
  );
}

export default ChannelData;
