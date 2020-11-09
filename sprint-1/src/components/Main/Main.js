import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoMain from "../VideoMain/VideoMain";
import { mainVideo, sideVideo } from "../../data/videos";

class Main extends React.Component {
  state = {
    mainVid: mainVideo,
    sideVid: sideVideo,
  };

  render() {
    return (
      <div className="main">
        <VideoPlayer mainData={this.state.mainVid} />
        <VideoMain
          mainData={this.state.mainVid}
          sideData={this.state.sideVid}
        />
      </div>
    );
  }
}

export default Main;
