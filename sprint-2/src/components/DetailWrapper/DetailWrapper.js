import "./DetailWrapper.scss";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import ChannelData from "../ChannelData/ChannelData";

function DetailWrapper(props) {
  let { mainData } = props;
  return (
    <div className="detail__wrapper">
      <h1 className="detail__wrapper-title">{mainData.title}</h1>
      <div className="detail-sub__container">
        <ChannelInfo mainData={mainData} />
        <ChannelData mainData={mainData} />
      </div>
    </div>
  );
}

export default DetailWrapper;
