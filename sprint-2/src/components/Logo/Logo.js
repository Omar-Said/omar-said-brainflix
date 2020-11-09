import logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Logo.scss";

function Logo() {
  return (
    <div className="logo-container">
      <a className="logo-container__link" href="../../App">
        <img src={logo} alt="brainflix logo" />
      </a>
    </div>
  );
}

export default Logo;
