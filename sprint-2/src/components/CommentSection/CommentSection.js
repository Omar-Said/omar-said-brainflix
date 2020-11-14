import "./CommentSection.scss";
import mohan from "../../assets/Images/Mohan-muruge.jpg";

function CommentSection() {
  return (
    <div className="comment">
      <h4 className="comment-counter">3 Comments</h4>
      <div className="comment__wrapper">
        <div className="avatar__wrapper-mod">
          <img className="avatar-img" src={mohan} alt="avatar" />;
        </div>
        <form className="form">
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              JOIN THE CONVERSATION
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Add a comment"
            />
          </div>
          <button className="form__button" input="submit">
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;
