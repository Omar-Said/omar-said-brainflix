import "./VideoUpload.scss";
import template from "../assets/Images/Upload-video-preview.jpg";
import React from "react";

class VideoUpload extends React.Component {
  state = {
    title: "",
    description: "",
    image: template,
  };

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  updateDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log(this.state.title, this.state.description, this.state.image);
    // Add an axios post method here - figure out how to push that through JSON
  };

  render() {
    return (
      <div>
        <section className="upload-main">
          <div className="upload-main__title-wrapper">
            <h1 className="upload-main__title">Upload Video</h1>
            <form className="upload-form">
              <div className="upload-form__wrapper">
                <div>
                  <p className="upload-form__label">VIDEO THUMBNAIL</p>
                  <input
                    className="upload-form__vid"
                    type="image"
                    name="thumbnail"
                    onChange={this.updateimage}
                    value={this.state.image}
                    src={template}
                    alt="video"
                  />
                </div>
                <div className="upload-form__input">
                  <label className="upload-form__label">TITLE YOUR VIDEO</label>
                  <input
                    className="upload-form__title"
                    type="text"
                    name="title"
                    onChange={this.updateTitle}
                    value={this.state.title}
                    placeholder="Add a title to your video"
                    required
                  />
                  <label className="upload-form__label">
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <input
                    className="upload-form__desc"
                    type="text"
                    name="description"
                    onChange={this.updateDescription}
                    value={this.state.description}
                    placeholder="Add a description of your video"
                    required
                  />
                </div>
              </div>
              <div className="publish">
                <button className="publish__button" onClick={this.handleClick}>
                  PUBLISH
                </button>
                <p className="publish__cancel">CANCEL</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default VideoUpload;

// import "./VideoUpload.scss";
// import template from "../assets/Images/Upload-video-preview.jpg";

// function VideoUpload() {
//   return (
//     <div>
//       <section className="upload-main">
//         <div className="upload-main__title-wrapper">
//           <h1 className="upload-main__title">Upload Video</h1>
//           <form className="upload-form">
//             <div className="upload-form__wrapper">
//               <div>
//                 <p className="upload-form__label">VIDEO THUMBNAIL</p>
//                 <img className="upload-form__vid" src={template} alt="video" />
//               </div>
//               <div className="upload-form__input">
//                 <label className="upload-form__label">TITLE YOUR VIDEO</label>
//                 <input
//                   className="upload-form__title"
//                   type="text"
//                   placeholder="Add a title to your video"
//                 />
//                 <label className="upload-form__label">
//                   ADD A VIDEO DESCRIPTION
//                 </label>
//                 <input
//                   className="upload-form__desc"
//                   type="text"
//                   placeholder="Add a description of your video"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="publish">
//           <button className="publish__button" input="submit">
//             PUBLISH
//           </button>
//           <p className="publish__cancel">CANCEL</p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default VideoUpload;
