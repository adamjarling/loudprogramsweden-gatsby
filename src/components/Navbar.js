import React from "react";
import { Link } from "gatsby";
import loudLogo from "../images/LOUDSwe2.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const styles = {
  nav: {
    textTransform: "uppercase",
  },
};

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
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
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
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
              <a
                className="navbar-item"
                href="https://www.instagram.com/loudprogramsweden/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" /> */}
                <FaInstagram />
              </a>
              <a
                className="navbar-item"
                href="https://www.facebook.com/loudprogramsweden/?modal=admin_todo_tour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
