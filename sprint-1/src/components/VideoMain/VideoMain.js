import "./VideoMain.scss"
import VideoContent from "../VideoContent/VideoContent"
import VideoTile from "../VideoTile/VideoTile"

function VideoMain (props) {

    return (
        <section className="video__main">
            <VideoContent data={props} />
            <VideoTile />
        </section>
    )
}

export default VideoMain;