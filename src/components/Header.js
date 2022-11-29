import React from "react";
import "../styles/Header.css";

// Header will be the heading that appears on each page

function Header() {
  return (
    <div className="header">
      <img
        className="headerphoto"
        src={require("../images/cover4.png")}
        alt={""}
      />
    </div>
  );
}

export default Header;
