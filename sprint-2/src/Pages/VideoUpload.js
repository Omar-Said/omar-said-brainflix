import Header from "../components/Header/Header";
import "./VideoUpload.scss";
import template from "../assets/Images/Upload-video-preview.jpg";

function VideoUpload() {
  return (
    <div>
      <Header />
      <section className="upload-main">
        <div className="upload-main__title-wrapper">
          <h1 className="upload-main__title">Upload Video</h1>
          <form className="upload-form">
            <div className="upload-form__wrapper">
              <div>
                <p className="upload-form__label">VIDEO THUMBNAIL</p>
                <img className="upload-form__vid" src={template} alt="video" />
              </div>
              <div className="upload-form__input">
                <label className="upload-form__label">TITLE YOUR VIDEO</label>
                <input
                  className="upload-form__title"
                  type="text"
                  placeholder="Add a title to your video"
                />
                <label className="upload-form__label">
                  ADD A VIDEO DESCRIPTION
                </label>
                <input
                  className="upload-form__desc"
                  type="text"
                  placeholder="Add a description of your video"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="publish">
          <button className="publish__button" input="submit">
            PUBLISH
          </button>
          <p className="publish__cancel">CANCEL</p>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;
