// Import useState to utilize conditional rendering
import React from "react";
import "../styles/About.css";

import Profile from "../assets/profile.png";
import ig1 from "../assets/ig1.png";

// About will be the home page
// containing a brief introduction and photo

function About() {
  return (
    <div className="home">
      <div className="about">
        <br></br>
        <h3 className="about-title">About Me</h3>
        <img src={Profile} alt="me!" className="profilePhoto" />
        <h4 className="about-blurb">
          Hello! My name is Stephanie, and I am a painter turned junior web
          developer.
        </h4>
        <div className="aboutSection">
          <p className="about-text">
            When I was a kid, I loved to build websites with my dad for fun, and
            now as an adult, I am studying to become a full-stack developer. Due
            to my background in visual art, writing code has actually become a
            new creative outlet for me. I tend to gravitate towards the front
            end of web development, but at the end of the day I am eager to
            learn anything I can.
            <br></br>
            <br></br>
            Please don't hesitate to reach out to me through email, GitHub, or
            Instagram (if you are interested in my personal work)!
          </p>
        </div>
        <img src={ig1} alt="ig" className="igPhoto" />
      </div>
    </div>
  );
}

export default About;
