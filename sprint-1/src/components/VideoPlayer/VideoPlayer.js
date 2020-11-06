import "./VideoPlayer.scss"
import hero from "../../assets/Images/video-list-0.jpg"



const Video = () => {
    return (  
        <div className="video">
       <video poster={hero} className="video-player"> 
       Your browser does not support video player</video>
       <div className="video-controls">
            <button id="playPause"></button>
            <input type="range" min="1" max="100" className="slider" id="myRange" step="1"/>
            <button id="fullScreen"></button>
       </div>
        </div>
    );
}
 
export default Video;

