import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <p className="home__p">Find your dream house</p>

      <Link className="home__btn" to={"/home"}>
        Start searching
      </Link>
    </div>
  );
}

export default Home;
