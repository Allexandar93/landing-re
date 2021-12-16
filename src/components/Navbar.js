import React from "react";
import "../styles/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar({ toggle }) {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <HashLink smooth to="#products">
          AZ Villas
        </HashLink>
      </div>
      <div className="navbar__menu">
        <HashLink smooth to="#about">
          About
        </HashLink>

        <p>
          <HashLink smooth to="#products">
            Homes
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="#reviews">
            Reviews
          </HashLink>
        </p>
      </div>
      <GiHamburgerMenu onClick={toggle} className="navbar__icon" />
      <div className="navbar__contact">
        <button className="contactBtn">
          <Link className="contactBtnTxt" to={"/contact"}>
            CONTACT US
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
