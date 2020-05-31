import React from "react";
import Layout from "../components/layout";
import HeroImageBg from "../components/HeroImageBg";
import pic1 from "../images/ScreenShot2019-09-01.jpg";
import livePic from "../images/DSC09026.jpg";

import { Link, graphql } from "gatsby";

const AboutPage = ({ data }) => {
  const { bgImage } = data;

  return (
    <Layout>
      <>
        <HeroImageBg
          title="Om Oss"
          subtitle="LOUD Program Sweden"
          bgImage={bgImage.childImageSharp.fluid}
        />

        <section className="section">
          <div className="container">
            <div className="box">
              <div className="content">
                <p>
                  LOUD Program startades i Santa Barbara av Mason Orfalea med
                  hjälp av Audacious Foundation. Musikprogrammet finns i 19
                  skolor runtom i USA och är i första hand avsett för ungdomar i
                  socioekonomiskt utsatta områden.
                </p>
                <p>
                  I Januari 2020 startades LOUD Program Sweden. Implementeringen
                  leddes av initiativtagaren och programdirektören Josephine
                  Forsman. LOUD Program Sweden finns i den mångkulturella skolan{" "}
                  <a href="https://bit.ly/3ebIcNV">Vällingby Park</a>,
                  Pysslingens Skolor i Stockholm.
                </p>
                <p>
                  <strong>Eleverna</strong> på LOUD Program skapar sitt eget
                  band, bandnamn och bandfoton. Med bandet och musiken som
                  utgångspunkt, förbereder musikprogrammet eleverna för alla
                  typer av teamwork längre fram i livet.
                </p>
                <p>
                  <strong>Instruktörerna</strong> är aktiva musiker och den
                  32-veckor långa läroplanen är noga framtagen av musikexperter,
                  musiklärare och musikbransch.
                </p>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <blockquote>
                    Att anställa aktiva musiker som instruktörer, ger eleverna
                    en unik direktkontakt med musikvärlden, och visar att ett
                    liv med musik är möjligt
                    <cite>
                      Josephine Forsman / Programdirektör LOUD Program Sweden
                    </cite>
                  </blockquote>
                </div>
                <div className="column is-half">
                  <figure className="image">
                    <img src={pic1} alt="LOUD press photo" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <p>
                  Under skolåret, får LOUD-eleverna möjlighet, att visa upp sina
                  färdigheter genom uppträdanden på, och utanför skolan.
                </p>
                <p>
                  <strong>LOUD Fest</strong> är den stora årliga festivalen där
                  alla LOUD-band samlas och får spela på en stor scen med
                  professionellt ljud och ljus.
                </p>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <figure className="image">
                    <img src={livePic} alt="LOUD press photo" />
                  </figure>
                </div>
                <div className="column is-half">
                  <blockquote>
                    Att spela på LOUD Fest är det bästa med LOUD Program, jag
                    älskar att uppträda på stora scener!
                    <cite>Luis Garcia / Gitarrist LOUD Program</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    bgImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "DSC02092.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
