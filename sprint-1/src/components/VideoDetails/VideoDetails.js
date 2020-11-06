import './VideoDetails.scss'
import views from "../../assets/Icons/SVG/Icon-views.svg"
import likes from "../../assets/Icons/SVG/Icon-likes.svg"

function VideoDetails (props) {
    console.log(props.data.data.data);
    return (
        <div className="detail__container">
        <div className="test">
            <h1 className="detail__container-title">{props.data.data.data.title}</h1>
            <div className="detail-sub__container">
            <div className="detail__wrapper">
                <h4 className="detail__wrapper-author">By {props.data.data.data.channel}</h4>
                <h5 className="detail__wrapper-date">{props.data.data.data.timestamp}</h5>
            </div>
            <div className="detail__wrapper-left">
                <img className="view-img" src={views} alt="views"/> 
                <p className="view-count">{props.data.data.data.likes}</p>
                <img className="like-img" src={likes} alt="likes"/> 
                <p className="like-count">{props.data.data.data.views}</p>
            </div>
            </div>
            </div>
            <p className="video-desc">{props.data.data.data.description}</p>
        </div>
    )
}

export default VideoDetails;