function SideVideo(props) {
  return (
    <div className="sidevideo">
      <img className="sidevideo__img" src={props.video} alt="" />
      <div className="sidevideo__container">
        <p className="sidevideo__title">{props.title}</p>
        <p className="sidevideo__channel">{props.channel}</p>
      </div>
    </div>
  );
}

export default SideVideo;
