
import React from 'react';
import "./Main.scss"
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoMain from '../VideoMain/VideoMain'
import videoData from "../../data/videos"

console.log(videoData);

class Main extends React.Component {
    state = {
        mainVid: videoData
    }


        render() {
        return (  
            <div className="main">
            <VideoPlayer />
            <VideoMain data={this.state.mainVid} />
            </div>
        );
    }
}
 
export default Main;