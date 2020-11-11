import { Link } from "react-router-dom";
import "./Button.scss";

function Button() {
  return (
    <button className="button">
      <Link className="button-link" to="/VideoUpload">
        UPLOAD
      </Link>
    </button>
  );
}

export default Button;
