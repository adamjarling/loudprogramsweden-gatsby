import React from "react";
import loudLogo from "../images/LOUDSwe2-inverted.png";

const Footer = () => (
  <footer className="footer has-text-white-ter has-background-dark">
    <div className="content has-text-centered">
      <img
        src={loudLogo}
        alt="Loud Sweden"
        style={{ width: "10em", height: "auto" }}
      />
      <p>
        LOUD Sweden -{" "}
        <a
          href="http://www.loudprogram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOUD USA
        </a>
      </p>
      <p>&copy; 2020 - All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
