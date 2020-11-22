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

  componentDidMount() {
    const query = this.props.match.params.id
      ? this.props.match.params.id
      : "1af0jruup5gu";

    // if I do the axios.get request prior to the ternary and then use the ternary afterwards I can make the hard coded id dynamic by using this.state.sidevid[0]
    // Put axios calls into separate functions and call them within update and mount.
    // Publish should route back to main page
    // Cancel button should clear the form
    // sidevideo and sidevideo__header are misplaced - switch the block

    axios
      .get(API_URL + "/videos/" + query)
      .then((response) => {
        this.setState({ mainVid: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(API_URL + "/videos/")
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
