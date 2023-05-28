import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Navigation() {
  return (
    <>
      <nav className="nav nav__upload--page">
        <div className="nav__head">
          <Link to="/home">
            <img src={logoImage} alt="BrainFlix Logo" className="nav__logo" />
          </Link>
        </div>

        <div className="nav__head-box">
          <label htmlFor="search" className="nav__input">
            <input
              type="text"
              className="nav__search"
              id="search"
              placeholder="Search"
            />
          </label>
          <Link to="/upload">
            <button className="nav__upload hidden">UPLOAD</button>{" "}
          </Link>

          <img src={avatar} alt="BrainFlix Avatar" className="nav__avatar" />
        </div>

        <Link to="/upload">
          <button className="nav__upload">UPLOAD</button>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
