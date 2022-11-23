// Import useState to utilize conditional rendering
import React from "react";
import "../styles/About.css";

// About will be the home page
// containing a brief introduction and a short summary of skills

function About() {
  return (
    <div className="home">
    <div className="about">
      <h3 className="about-title">About Me</h3>
      <p className="about-text">
        Hello! My name is Stephanie, and I am a painter turned junior web
        developer.
      </p>
      <br></br>

     
      <div className="skills">
        <ul className="list">
          <li className="list-item">
            <h4 className="title">Front-End Skills</h4>
            <span>ReactJS, HTML, CSS, Javascript, BootStrap, TailwindCSS</span>
          </li>

          <br></br>
          <li className="list-item">
            <h4 className="title">Back-End Skills</h4>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <br></br>
          <li className="list-item">
            <h4 className="title">Supplemental Skills</h4>
            <span>Painting, Illustration, Graphic Design</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default About;
