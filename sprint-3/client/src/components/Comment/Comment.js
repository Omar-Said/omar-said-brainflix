function Comment(props) {
  return (
    <div className="commented__wrapper-top">
      <div>
        <div className="commented__img commented__avatar"></div>
      </div>
      <div className="commented__wrapper">
        <div className="commented__wrapper-bot">
          <p className="commented__name">{props.name}</p>
          <p className="commented__date">{props.timestamp}</p>
        </div>
        <p className="commented__comment">{props.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
