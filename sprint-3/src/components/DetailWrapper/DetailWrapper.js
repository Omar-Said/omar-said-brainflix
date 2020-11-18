import "./DetailWrapper.scss";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import ChannelData from "../ChannelData/ChannelData";

function DetailWrapper(props) {
  let { mainData } = props;
  return (
    <div className="details">
      <h1 className="details__title">{mainData.title}</h1>
      <div className="details__wrapper">
        <ChannelInfo mainData={mainData} />
        <ChannelData mainData={mainData} />
      </div>
    </div>
  );
}

export default DetailWrapper;
