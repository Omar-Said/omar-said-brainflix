import VideoDetails from "../VideoDetails/VideoDetails"

function VideoContent (props) {
    console.log(props.data.data);
    return (
        <div>
            <VideoDetails data={props}/>
        </div>
    )
}

export default VideoContent;