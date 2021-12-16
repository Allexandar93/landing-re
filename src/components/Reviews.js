import React from "react";
import "../styles/Reviews.scss";
import John from "../images/john.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Reviews() {
  return (
    <div className="reviews" id="reviews">
      <div className="reviewWrapper">
        <div className="reviews__costumers">
          <img className="john" src={John} alt="" />
          <div className="text">
            <div className="nameAndStars">
              <div className="name">John Smith</div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="comment">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.""
            </div>
          </div>
        </div>

        <div className="moreReviews">
          <p>
            Read <a href="#">9,000+</a> more reviews{" "}
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="footer_contact">
          <div className="footer_contactSocials">
            <h3>AZ VILLAS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="footer_contactSocialsIcons">
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>

          <div className="footer_contactAdresses">
            <h3>Contact us</h3>
            <p>98-54687-878</p>
            <p>azvillas@villas.com</p>
            <p>New York, US</p>
          </div>
        </div>

        <div className="copyright">© 2021 AZ Villas, All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Reviews;
