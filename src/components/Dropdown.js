import React from "react";
import "../styles/Dropdown.scss";
import { GrClose } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Dropdown({ closed, toggle }) {
  return (
    <div
      className={`dropdown__container ${closed ? "display" : "opacity"}`}
      closed={closed}
      onClick={toggle}
    >
      <div className="dropdown__icon" onClick={toggle}>
        <GrClose className="dropdown__iconX" />
      </div>

      <div className="dropdown__wrapper">
        <HashLink className="dropdown__links" smooth to="#about">
          About
        </HashLink>

        <HashLink className="dropdown__links" smooth to="#products">
          Homes
        </HashLink>

        <HashLink className="dropdown__links" smooth to="#reviews">
          Reviews
        </HashLink>

        <button className="dropdrown__wrapperBtn">
          <Link className="dropdrown__wrapperBtnTxt" to={"/contact"}>
            CONTACT US
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
