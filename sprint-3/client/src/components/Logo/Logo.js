import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Logo.scss";

function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="brainflix logo" />
      </Link>
    </div>
  );
}

export default Logo;
