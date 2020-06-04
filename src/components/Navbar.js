import React, { useState } from "react";
import { Link } from "gatsby";
import loudLogo from "../images/LOUDSwe2.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";

const styles = {
  nav: {
    textTransform: "uppercase",
  },
};

const NavIcon = ({ url, iconComponent }) => (
  <a
    className="navbar-item"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {iconComponent}
  </a>
);

const Navbar = () => {
  const [active, setActive] = useState();
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  const data = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          instagram
          facebook
          youtube
        }
      }
    }
  `);

  function toggleHamburger() {
    // toggle the active boolean in the state
    setActive(!active);
    setNavBarActiveClass(active ? "" : "is-active");
  }

  return (
    <nav
      className="navbar is-white"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={loudLogo} alt="Loud Program Sweden" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div
            className="navbar-start has-text-centered is-family-secondary is-uppercase"
            style={styles.nav}
          >
            <Link className="navbar-item" to="/about">
              OM OSS
            </Link>
            <Link className="navbar-item" to="/voices">
              RÖSTER OM LOUD
            </Link>
            <Link className="navbar-item" to="/contact">
              KONTAKT
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <NavIcon
              url={data.site.siteMetadata.instagram}
              iconComponent={<FaInstagram />}
            />
            <NavIcon
              url={data.site.siteMetadata.facebook}
              iconComponent={<FaFacebook />}
            />
            <NavIcon
              url={data.site.siteMetadata.youtube}
              iconComponent={<FaYoutube />}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
