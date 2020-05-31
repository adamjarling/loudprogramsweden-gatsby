import React from "react";
import Img from "gatsby-image";

const HeroImageBg = ({ title = "", subtitle = "", bgImage }) => (
  <section className="hero is-fullheight has-background is-dark">
    <Img fluid={bgImage} className="hero-background" />
    <div className="hero-body">
      <div className="container">
        <h1>
          <span className="title hero-image-bg-title has-background-primary is-inline-block">
            {title}
          </span>
        </h1>
        <h2>
          <span className="subtitle is-size-3 hero-image-bg-subtitle has-background-link is-inline-block">
            {subtitle}
          </span>
        </h2>
      </div>
    </div>
  </section>
);

export default HeroImageBg;
