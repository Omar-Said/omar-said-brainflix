import { Link } from "react-router-dom";

function SideVideo(props) {
  return (
    <div className="sidevideo__wrapper">
      <Link className="sidevideo__link" to={`/videos/${props.id}`}>
        <img className="sidevideo__img" src={props.video} alt="" />
        <div className="sidevideo__container">
          <p className="sidevideo__title">{props.title}</p>
          <p className="sidevideo__channel">{props.channel}</p>
        </div>
      </Link>
    </div>
  );
}

export default SideVideo;
