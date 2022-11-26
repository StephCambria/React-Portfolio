import React from "react";
import Project from "../components/Project";
import "../styles/Portfolio.css";

// Portfolio will be the page containing images of all projects.
// Individual projects will be contained in either components or a seperate folder.

function Portfolio() {
  return <div className="portfolio">
    <h3 className="title">Portfolio</h3>
    <div className="projectsList">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  </div>;
}

export default Portfolio;
