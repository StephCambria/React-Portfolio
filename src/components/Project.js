import React from "react";

// Use props to render individual projects

function Project({ image, name }) {
  return (
    <div className="Project">
      <div
        className="projectImage"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className="projectName">{name}</h3>
    </div>
  );
}

export default Project;
