import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { SliderData } from "./../data/SliderData";
import "../styles/Products.scss";
import About from "./About";
import Dropdown from "./Dropdown";
import Reviews from "./Reviews";

function Products() {
  const [closed, setClosed] = useState(true);

  const toggle = () => {
    setClosed(!closed);
  };
  return (
    <div className="products" id="products">
      <Navbar toggle={toggle} />
      <Dropdown closed={!closed} toggle={toggle} />
      <Hero slides={SliderData} />
      <div className="sections">
        <About path={"/about"} />
      </div>

      <div className="sections">
        <Reviews />
      </div>
    </div>
  );
}

export default Products;
