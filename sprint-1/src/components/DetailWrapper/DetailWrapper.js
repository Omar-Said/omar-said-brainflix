import "./DetailWrapper.scss";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import ChannelData from "../ChannelData/ChannelData";

function DetailWrapper(props) {
  return (
    <div className="detail__wrapper">
      <h1 className="detail__wrapper-title">{props.mainData.title}</h1>
      <div className="detail-sub__container">
        <ChannelInfo mainData={props.mainData} />
        <ChannelData mainData={props.mainData} />
      </div>
    </div>
  );
}

export default DetailWrapper;
