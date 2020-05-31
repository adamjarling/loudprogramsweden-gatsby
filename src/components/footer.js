import React from "react";
import { Link } from "gatsby";
import loudLogo from "../images/LOUDSwe2-inverted.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter has-background-dark">
        <div className="content has-text-centered">
          <img
            src={loudLogo}
            alt="Loud Music Program Sweden"
            style={{ width: "10em", height: "auto" }}
          />
          <p>
            LOUD Program Sweden -{" "}
            <a
              href="http://www.loudprogram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LOUD Program USA
            </a>
          </p>
          <p>&copy; 2020 - All rights reserved</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
