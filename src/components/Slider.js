import React, { useState, useRef, useEffect } from "react";
import "../styles/Slider.scss";
import {
  BsArrowLeftCircle,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);

    console.log(current);
  };

  const previousSliede = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {slides.map((slide, index) => {
        return (
          <div key={index} className="slide">
            {index === current && (
              <div className="sliderSec">
                <img src={slide.image} className="slider__image" />
                <div className="slide__content">
                  <h1>
                    Luxury villa in <span>{slide.location}</span>{" "}
                  </h1>

                  <p> {slide.price} </p>
                  <button className="slide__contentBtn">View Home</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="slider__btns">
        <BsFillArrowLeftCircleFill
          onClick={previousSliede}
          className="buttons"
        />
        <BsFillArrowRightCircleFill onClick={nextSlide} className="buttons" />
      </div>
    </div>
  );
}

export default Slider;
