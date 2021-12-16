import React from "react";
import "../styles/Contact.scss";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactImg from "../images/contact.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__back">
        <Link className="contact__backLink" to={"/home"}>
          <MdArrowBack />
        </Link>
      </div>

      <div className="contact__container">
        <div className="image_container">
          <img className="contactImg" src={ContactImg} alt="" />
        </div>

        <div className="form_container">
          <h2>Want to work together? Send us an email</h2>

          <div className="form-containerLabels">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input className="input" type="text" />
          </div>

          <div className="form-containerLabels">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input className="input" type="email" />
          </div>

          <div className="form-containerLabels">
            <label className="label" htmlFor="comment">
              How can we help you?
            </label>
            <textarea name="" id="" cols="20" rows="10"></textarea>
          </div>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
