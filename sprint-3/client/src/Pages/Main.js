import React from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoMain from "../components/VideoMain/VideoMain";
import axios from "axios";
import { API_URL } from "../Utils/Utils";

class Main extends React.Component {
  state = {
    mainVid: null,
    sideVid: null,
  };

  getMainVid = (query) => {
    axios
      .get(API_URL + "/videos/" + query)
      .then((response) => {
        this.setState({ mainVid: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        window.scrollTo(0, 0);
      });
  };

  getSideVid = () => {
    axios
      .get(API_URL + "/videos/")
      .then((response) => {
        this.setState({ sideVid: response.data });
      })
      .then((response) => {
        this.getMainVid(this.state.sideVid[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getSideVid();
  }

  componentDidUpdate(prevProps) {
    let query = this.props.match.params.id;

    if (prevProps.match.params.id !== query) {
      this.getMainVid(query);
    }
  }

  render() {
    if (!this.state.mainVid || !this.state.sideVid) {
      return <main>Loading...</main>;
    }
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
