import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite"; // Import heart icon
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/tarun_2203_/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://github.com/lordtarun2203" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/tarunaaditya/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>Made with <FavoriteIcon style={{ color: "red" }} /> by Tarun Aaditya</p>
    </div>
  );
}

export default Footer;
