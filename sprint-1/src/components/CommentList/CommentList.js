import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList(props) {
  let { comments } = props.mainData;

  return (
    <section className="commented__container">
      <ul className="map-wrapper">
        {comments.map((comment) => (
          <Comment
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
            key={comment.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default CommentList;
