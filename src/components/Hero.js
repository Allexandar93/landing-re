import React from "react";
import "../styles/Hero.scss";
import Slider from "./Slider";
import { SliderData } from "./../data/SliderData";

function Hero() {
  return (
    <div className="heroSection">
      <Slider slides={SliderData} />
    </div>
  );
}

export default Hero;
