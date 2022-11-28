import React from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
import { TfiGithub } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import "../styles/Footer.css";

// Footer will be the footer containing icons that appears on each page

function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/StephCambria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/stephanie-cambria-047972258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/the.grave.keeper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiInstagram />
        </a>
      </div>

      <p> &copy; 2022 Stephanie Cambria</p>
    </div>
  );
}

export default Footer;
