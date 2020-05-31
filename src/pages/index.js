import React from "react";
import Layout from "../components/layout";

import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PressItems from "../components/PressItems";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import HomeTitleAnimated from "../components/Home/TitleAnimated";
import StatsUSA from "../components/Home/StatsUSA";
import StatsSweden from "../components/Home/StatsSweden";
import HeroSlider from "../components/Home/HeroSlider";
import Img from "gatsby-image";

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
                  LOUD Program är ett internationellt musikprogram som erbjuder
                  högkvalitativ utbildning av instruktörer i världsklass till
                  grundskoleelever.
                </p>
                <p>
                  Eleverna skapar sina egna band, bandnamn och bandfoton. De lär
                  sig sina favoritlåtar, samt skriver och spelar in sitt
                  material. Under året får de flera chanser att uppträda med sin
                  musik.
                </p>

                <p>
                  Musikprogrammet finns i 19 skolor i USA, och sedan Januari
                  2020 även i Sverige. Det första LOUD Program Sweden finns nu i
                  den mångkulturella skolan{" "}
                  <a href="https://bit.ly/3ebIcNV">Vällingby Park</a>,
                  Pysslingens Skolor i Stockholm.
                </p>
              </div>

              <div className="columns is-centered">
                <div className="column is-four-fifths">
                  <Slide left>
                    <blockquote>
                      Vällingby Park formar framtidens svenska musikgenier!
                      Samarbetet mellan LOUD Program Sweden och skolan är ett
                      exempel på ännu en kvalitetshöjning av den svenska
                      musikundervisningen
                      <cite>Staffan Åsberg / Rektor Vällingby Park</cite>
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
                      Musikdirektör för LOUD Program Sweden är Josephine
                      Forsman, trummis och låtskrivare i Sahara Hotnights
                    </p>
                  </div>
                  <Slide left>
                    <blockquote>
                      –Jag vill erbjuda elever samma hjälp som jag fick när jag
                      var ung och började spela trummor, och jag insåg snabbt
                      att programmet gjorde skillnad bland ungdomarna i Los
                      Angeles. Det känns fantastiskt att svenska skolor delar
                      tron på att enighet och samarbete mellan människor och
                      kulturer är viktigt och att det börjar i skolorna.
                      <cite>Josephine Forsman</cite>
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
          </div>
        </section>

        <Bounce>
          <StatsUSA />
        </Bounce>
        <Bounce>
          <StatsSweden />
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
