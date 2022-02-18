import React from "react";
import "./Home.css";
import profile_pic from "./../../assets/profile_pic.jpeg"

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1 className="text-dark">Paul Browne</h1>
        <p className="text-dark">Full Stack Developer</p>
      </div>
      <div className="img-container pt-5">
        <img src={profile_pic} alt="snowscene" className="img-fluid"></img>
      </div>
      <div className="head-btns">
        <a href="#projects" className="homepage-btn">
          <p className="btn-text text-white">Projects</p>
        </a>
        <a href="#contact" className="homepage-btn">
          <p className="btn-text text-white">Contact me</p>
        </a>
      </div>
      <div className="splash-image"></div>
    </div>
  );
};

export default Home;