import React from "react";
import "../styles/Header.css";

// Header will be the heading that appears on each page

function Header() {
  return (
    <div className="header">
      <img
        className="headerphoto"
        src={require("../images/header4.jpg")}
        alt={""}
      />
    </div>
  );
}

export default Header;
