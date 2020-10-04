import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight, zoomIn } from "react-animations";
import { themeVars } from "../../theme-vars";

const fadeLeft = keyframes`${fadeInLeft}`;
const FadeLeftDiv = styled.div`
  animation: 5s ${fadeLeft};
  height: 5px;
  background: ${themeVars.primary};
`;

const fadeRight = keyframes`${fadeInRight}`;
const FadeRightDiv = styled.div`
  animation: 5s ${fadeRight};
  height: 5px;
  background: ${themeVars.primary};
  margin-top: 1rem;
`;

const zoom = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 5s ${zoom};
`;

const HomeTitleAnimated = () => {
  return (
    <>
      <FadeLeftDiv />
      <ZoomInDiv>
        <h1 className="title">
          <span className="top-bottom-border">LOUD Sweden</span>
        </h1>
        <h2 className="subtitle has-text-white is-size-4">
          STÄRKER GEMENSKAPEN MED MUSIKUTBILDNING I VÄRLDSKLASS
        </h2>
      </ZoomInDiv>
      <FadeRightDiv />
    </>
  );
};

export default HomeTitleAnimated;
