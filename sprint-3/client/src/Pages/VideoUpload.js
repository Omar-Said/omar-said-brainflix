import "./VideoUpload.scss";
import template from "../assets/Images/Upload-video-preview.jpg";
import React from "react";
import axios from "axios";

class VideoUpload extends React.Component {
  state = {
    title: "",
    description: "",
  };

  addVideo = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    const object = {
      title: title,
      description: description,
    };

    axios.post("http://localhost:8080/videos", object).then((response) => {
      console.log(response);
    });
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
// import React from "react";

// class VideoUpload extends React.Component {
//   state = {
//     title: "",
//     description: "",
//     image: template,
//   };

//   updateTitle = (event) => {
//     this.setState({
//       title: event.target.value,
//     });
//   };

//   updateDescription = (event) => {
//     this.setState({
//       description: event.target.value,
//     });
//   };

//   // Better way to incorpate all of the inputs into one function

//   handleClick = (event) => {
//     event.preventDefault();
//     console.log(this.state.title, this.state.description, this.state.image);
//     // Add an axios post method here - figure out how to push that through JSON
//   };

//   render() {
//     return (
//       <div>
//         <section className="upload-main">
//           <div className="upload-main__title-wrapper">
//             <h1 className="upload-main__title">Upload Video</h1>
//             <form className="upload-form">
//               <div className="upload-form__wrapper">
//                 <div>
//                   <p className="upload-form__label">VIDEO THUMBNAIL</p>
//                   <input
//                     className="upload-form__vid"
//                     type="image"
//                     name="thumbnail"
//                     onChange={this.updateimage}
//                     value={this.state.image}
//                     src={template}
//                     alt="video"
//                   />
//                 </div>
//                 <div className="upload-form__input">
//                   <label className="upload-form__label">TITLE YOUR VIDEO</label>
//                   <input
//                     className="upload-form__title"
//                     type="text"
//                     name="title"
//                     onChange={this.updateTitle}
//                     value={this.state.title}
//                     placeholder="Add a title to your video"
//                     required
//                   />
//                   <label className="upload-form__label">
//                     ADD A VIDEO DESCRIPTION
//                   </label>
//                   <input
//                     className="upload-form__desc"
//                     type="text"
//                     name="description"
//                     onChange={this.updateDescription}
//                     value={this.state.description}
//                     placeholder="Add a description of your video"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="publish">
//                 <button className="publish__button" onClick={this.handleClick}>
//                   PUBLISH
//                 </button>
//                 <p className="publish__cancel">CANCEL</p>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default VideoUpload;

// addVideo = (e) => {
//   e.preventDefault();
//   const title = e.target.title.value;
//   const description = e.target.description.value;

//   const object = {
//     title: title,
//     description: description,
//   };
//   axios.post("http://localhost:8080/videos", object).then((response) => {
//     console.log(response);
//     this.setState({
//       title: "",
//       description: "",
//     });
//   });
//   console.log(object);
// };
