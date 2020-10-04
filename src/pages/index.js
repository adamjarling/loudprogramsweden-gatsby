import React from "react";
import Layout from "../components/layout";

import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PressItems from "../components/PressItems";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import HomeTitleAnimated from "../components/Home/TitleAnimated";
import StatsUSA from "../components/Home/StatsUSA";
import StatsVallingbyPark from "../components/StatsVallingbyPark";
import StatsRoberts from "../components/StatsRoberts";
import HeroSlider from "../components/Home/HeroSlider";
import Img from "gatsby-image";
import Values from "../components/Values";

const IndexPage = ({ data }) => {
  const { josephine, sliders = [], introPdf } = data;

  return (
    <Layout>
      <>
        <section className="hero is-fullheight has-background is-dark">
          <HeroSlider sliders={sliders.edges} />
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div
                  className="column has-text-centered is-9"
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  <HomeTitleAnimated />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="box">
              <div className="content">
                <p>
                  <strong>
                    LOUD Sweden är ett internationellt musikprogram
                  </strong>
                  , som erbjuder gratis högkvalitativ musikundervisning till
                  ungdomar från olika samhällsklasser, genom samarbete med
                  skolor, kommuner och aktivitetshus.
                </p>
                <p>
                  LOUD Sweden är grundat av trummisen och låtskrivaren Josephine
                  Forsman från bandet Sahara Hotnights, som också leder
                  verksamheten som ytterst ansvarig, med sina med 20+ års
                  erfarenhet av både svensk och internationell musikindustri.
                </p>
              </div>

              <div className="columns is-centered">
                <div className="column is-four-fifths">
                  <Slide left>
                    <blockquote>
                      Jag vill erbjuda elever samma hjälp som jag fick när jag
                      var ung och började spela trummor. Det känns fantastiskt
                      att svenska skolor och kommuner, delar tron på att enighet
                      och samarbete mellan människor och kulturer är viktigt,
                      och att det börjar i tidig skolålder.
                      <cite>Josephine Forsman, grundare LOUD Sweden</cite>
                    </blockquote>
                  </Slide>
                </div>
              </div>
            </div>

            <div className="box ">
              <div className="columns">
                <div className="column is-three-fifths">
                  <div className="content">
                    <p>
                      <strong>
                        Efter lanseringen av LOUD Sweden Januari 2020
                      </strong>
                      , har programmets samtliga klasser nått full
                      deltagarkapacitet med växande väntelistor, nära total
                      jämställdhet mellan kön, och med deltagare från inte
                      mindre än 20 olika kulturer.
                    </p>
                  </div>
                  <Slide left>
                    <blockquote>
                      Vällingby Park formar framtidens svenska musikgenier!
                      Samarbetet mellan LOUD Sweden och skolan är ett exempel på
                      ännu en kvalitetshöjning av den svenska
                      musikundervisningen
                      <cite>Staffan Åsberg / f.d Rektor Vällingby Park</cite>
                    </blockquote>
                  </Slide>
                </div>
                <div className="column is-two-fifths">
                  <Img fluid={josephine.childImageSharp.fluid} />
                </div>
              </div>
              <div
                className="has-text-centered"
                style={{ paddingBottom: "2rem" }}
              >
                <a
                  className="is-size-2 is-size-4-mobile"
                  href={introPdf.publicURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HÄLSNING FRÅN PROGRAMDIREKTÖR JOSEPHINE FORSMAN
                </a>
              </div>
            </div>
            <Values />
          </div>
        </section>

        <Bounce>
          <StatsVallingbyPark />
        </Bounce>

        <Bounce>
          <StatsRoberts />
        </Bounce>

        <Bounce>
          <StatsUSA />
        </Bounce>

        <section className="section">
          <div className="container">
            <div className="box">
              <h2 className="title">NYHETER OCH PRESS</h2>
              <PressItems />
            </div>
          </div>
        </section>

        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container content has-text-centered ">
              <h3 className="title is-size-2 is-size-3-mobile">KONTAKT</h3>
              <p className="is-size-3 is-size-6-mobile">
                För frågor och mer information, maila till: <br />
                <a href="mailto:info@loudprogramsweden.com">
                  info@loudprogramsweden.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    introPdf: file(
      sourceInstanceName: { eq: "pdf" }
      relativePath: { eq: "loud-introduction.pdf" }
    ) {
      id
      publicURL
    }
    sliders: allFile(
      sort: { order: ASC, fields: name }
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sliderimages" }
      }
    ) {
      totalCount
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    josephine: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "Director+SweLogo.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
