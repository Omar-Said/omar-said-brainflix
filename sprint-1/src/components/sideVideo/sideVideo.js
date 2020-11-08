function SideVideo(props) {
  return (
    <div className="sidevideo-wrapper">
      <img className="sidevideo-img" src={props.video} alt="" />
      <div className="detail-cont">
        <p className="vid-title">{props.title}</p>
        <p className="author">{props.channel}</p>
      </div>
    </div>
  );
}

export default SideVideo;
