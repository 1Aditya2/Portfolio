import React from "react";
import "./Hero.scss";
import img from "../../Assets/kwe.png";
function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="cont">
        <div className="left">
          <span className="intro">Hi ! This side</span>
          <h2>
            Aditya <br />
            Yadav
          </h2>
          <span className="prof">Frontend Developer</span>

          <p>
            An experienced Frontend Developer crafting digital
            excellence.Let's turn your imagination into a great project.
          </p>
        </div>
        <div className="right">
          <div className="my-img ">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
