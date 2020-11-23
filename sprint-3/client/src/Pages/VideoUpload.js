import "./VideoUpload.scss";
import template from "../assets/Images/Upload-video-preview.jpg";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class VideoUpload extends React.Component {
  state = {
    title: "",
    description: "",
    submitted: false,
  };

  componentDidUpdate() {
    if (this.state.submitted) {
      this.props.history.push("/");
    }
  }

  addVideo = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/videos", {
        title: e.target.title.value,
        description: e.target.description.value,
      })
      .then((response) => {
        this.setState({
          submitted: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };

  render() {
    return (
      <div>
        <section className="upload-main">
          <div className="upload-main__title-wrapper">
            <h1 className="upload-main__title">Upload Video</h1>
            <form className="upload-form" onSubmit={this.addVideo}>
              <div className="upload-form__wrapper">
                <div>
                  <p className="upload-form__label">VIDEO THUMBNAIL</p>
                  <input
                    className="upload-form__vid"
                    type="image"
                    name="thumbnail"
                    src={template}
                    alt="video"
                  />
                </div>
                <div className="upload-form__input">
                  <label className="upload-form__label">TITLE YOUR VIDEO</label>
                  <input
                    className="upload-form__title"
                    type="text"
                    id="title"
                    placeholder="Add a title to your video"
                    required
                  />
                  <label className="upload-form__label">
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <input
                    className="upload-form__desc"
                    type="text"
                    id="description"
                    placeholder="Add a description of your video"
                    required
                  />
                </div>
              </div>
              <div className="publish">
                <button className="publish__button">PUBLISH</button>
                <Link to="/" className="publish__cancel">
                  CANCEL
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default VideoUpload;
