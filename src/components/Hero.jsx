import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div className="intro">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
          <div className="figures">
            <div>
              <span>140+</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>978+</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>50+</span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button id="btn1" className="btn">
              Get Started
            </button>
            <button id="btn2" className="btn">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" className="src" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
};

export default Hero;
