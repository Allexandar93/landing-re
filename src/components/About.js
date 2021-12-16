import React from "react";
import "../styles/About.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="about__sections">
        <h2>Safe Living</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button>Buy Now</button>
      </div>

      <div className="about__sections">
        <h2>Peacfull Locations</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Buy Now</button>
      </div>

      <div className="about__sections">
        <h2>Great Prices</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default About;
