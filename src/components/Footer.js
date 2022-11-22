import React from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
import { TfiGithub } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import "../styles/Footer.css";


// Footer will be the footer containing icons that appears on each page

// Icons:
// Github

function Footer() {
  return (
  <div className="footer">
<div>

<TfiGithub />
<TfiLinkedin />
<TfiInstagram />
  
</div>


  <p> &copy; 2022 </p>
  </div>
  );
}

export default Footer;
