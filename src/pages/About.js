// Import useState to utilize conditional rendering
import React from "react";
import "../styles/About.css";

// About will be the home page
// containing a brief introduction and photo

function About() {
  return (
    <div className="home">
      { /* photo here */}
      <div className="about">
        <h3 className="about-title">About Me</h3>
        <p className="about-text">
          Hello! My name is Stephanie, and I am a painter turned junior web
          developer.
        </p>
      </div>
    </div>
  );
}

export default About;
