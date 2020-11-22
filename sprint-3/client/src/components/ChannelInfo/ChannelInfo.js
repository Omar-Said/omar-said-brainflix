import "./ChannelInfo.scss";

function ChannelInfo(props) {
  return (
    <div className="channel">
      <h4 className="channel__author">By {props.mainData[0].channel}</h4>
      <h5 className="channel__timestamp">
        {new Date(props.mainData[0].timestamp).toLocaleDateString()}
      </h5>
    </div>
  );
}

export default ChannelInfo;
