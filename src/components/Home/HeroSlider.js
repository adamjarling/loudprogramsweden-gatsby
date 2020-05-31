import React, { useState, useEffect } from "react";
import Img from "gatsby-image";

const imageStyles = {
  position: "absolute",
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
};

const HeroSlider = ({ sliders }) => {
  const [currentBg, setCurrentBg] = useState(
    sliders[0].node.childImageSharp.fluid
  );
  const bgImages = sliders.map((slider) => slider.node.childImageSharp.fluid);

  useEffect(() => {
    // Run background carousel timer
    let count = 0;
    const interval = setInterval(() => {
      setCurrentBg(bgImages[count]);
      count = count === bgImages.length - 1 ? 0 : count + 1;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <Img fluid={currentBg} style={imageStyles} fadeIn={true} />;
};

export default HeroSlider;
