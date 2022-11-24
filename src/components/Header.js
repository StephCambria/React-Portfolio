import React from "react";
import "../styles/Header.css";

// Header will be the heading that appears on each page
// Planning to add either CSS typography of my name,
// or something hand-made with it.

function Header() {
  return (
    <div className="header">
      <img
        className="headerphoto"
        src={require("../images/header10.jpg")}
        alt={""}
      />
    </div>
  );
}

export default Header;
