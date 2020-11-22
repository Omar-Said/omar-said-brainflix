import "./ChannelData.scss";
import viewsIcon from "../../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../../assets/Icons/SVG/Icon-likes.svg";

function ChannelData(props) {
  return (
    <div className="channel-data">
      <img className="channel-data__views-img" src={viewsIcon} alt="views" />
      <p className="channel-data__views-count">{props.mainData.views}</p>
      <img className="channel-data__likes-img" src={likesIcon} alt="likes" />
      <p className="channel-data__likes-count">{props.mainData.likes}</p>
    </div>
  );
}

export default ChannelData;
