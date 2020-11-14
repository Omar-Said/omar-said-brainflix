import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoMain from "../VideoMain/VideoMain";
import axios from "axios";
import { API_KEY, API_URL } from "../../data/videos";

class Main extends React.Component {
  state = {
    mainVid: null,
    sideVid: null,
  };

  componentDidMount() {
    const query = this.props.match.params.id
      ? this.props.match.params.id
      : "1af0jruup5gu";

    axios
      .get(API_URL + "/videos/" + query + API_KEY)
      .then((response) => {
        this.setState({ mainVid: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(API_URL + "/videos/" + API_KEY)
      .then((response) => {
        this.setState({ sideVid: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    let query = this.props.match.params.id;

    if (prevProps.match.params.id !== query) {
      query = this.props.match.params.id
        ? this.props.match.params.id
        : "1af0jruup5gu";

      axios
        .get(API_URL + "/videos/" + query + API_KEY)
        .then((response) => {
          this.setState({ mainVid: response.data });
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          window.scrollTo(0, 0);
        });
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
