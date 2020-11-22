import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList(props) {
  let { comments } = props.mainData[0];
  // had to change it to index 0 on the array to work

  return (
    <section className="commented__container">
      <ul className="map-wrapper">
        {comments.map((comment) => (
          <Comment
            name={comment.name}
            timestamp={new Date(comment.timestamp).toLocaleDateString()}
            comment={comment.comment}
            key={comment.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default CommentList;
