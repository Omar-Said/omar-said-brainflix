import { Link } from "react-router-dom";
import "./Button.scss";

function Button() {
  return (
    <Link className="button-link" to="/VideoUpload">
      <button className="button">UPLOAD</button>
    </Link>
  );
}

export default Button;
