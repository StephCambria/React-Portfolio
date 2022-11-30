import React, { useEffect, useState } from "react";
import "../styles/Navigation.css";
import { FcMenu } from "react-icons/fc";

// Navigation will be the navbar that appears on each page

function Navigation({ currentPage, handlePageChange }) {

  const [expandNavbar, setExpandNavbar] = useState(false);


  useEffect(() => {
    setExpandNavbar(false);
  }, [currentPage])
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
    <div className="mobileNav">
      <p
      className="toggleButton"
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      >
        <FcMenu />
      </p>
    </div>
      <div className="links">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "navbar a" : "navbar"}
        >
          about
        </a>

        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Portfolio" ? "navbar a" : "navbar"}
        >
          portfolio
        </a>

        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "navbar a" : "navbar"}
        >
          contact
        </a>

        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "navbar a" : "navbar"}
        >
          resume
        </a>
      </div>
    </div>
  );
}

export default Navigation;
