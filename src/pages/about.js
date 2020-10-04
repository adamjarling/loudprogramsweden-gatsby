import React from "react";
import Layout from "../components/layout";
import HeroImageBg from "../components/HeroImageBg";
import pic1 from "../images/ScreenShot2019-09-01.jpg";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

const AboutPage = ({ data }) => {
  const { bgImage } = data;

  return (
    <Layout>
      <>
        <HeroImageBg
          title="Om Oss"
          subtitle="LOUD Sweden"
          bgImage={bgImage.childImageSharp.fluid}
        />

        <section className="section">
          <div className="container">
            <div className="box">
              <div className="content">
                <p>
                  <strong>
                    LOUD Swedens värdegrunder bygger på Jämställdhet, Mångkultur
                    och Kreativt lärande.
                  </strong>{" "}
                  Fokus ligger på att inspirera till, och stötta samarbeten
                  mellan ungdomar, visa att var och ens unika kvalitéer spelar
                  en stor roll som en del av helheten. Med musiken och
                  bandkonstellationer som utgångspunkt, förbereder programmet
                  deltagarna för alla typer av teamwork och relationer, längre
                  fram i livet.
                </p>

                <p>
                  LOUD Sweden som fristående program, samarbetar med LOUD USA
                  som startades i Santa Barbara 2015. Med hjälp av Audacious
                  Foundation, har LOUD USA vuxit till 19 olika skolor i Los
                  Angeles, och är i första hand avsett för ungdomar i
                  socioekonomiskt utsatta områden.
                </p>

                <p>
                  Instruktörerna är aktiva musiker, och den 32-veckor långa
                  läroplanen är noga framtagen av musikexperter, musiklärare och
                  musikbransch.
                </p>

                <p>
                  <strong>
                    LOUD Swedens tydliga koncept, internationella
                    musikgemenskap, omfattande mentorskap, välutvecklade
                    musikklasser med 32-veckors läroplan, och online-bibliotek,
                    hjälper LOUD deltagarna att ta sina kreativa ambitioner från
                    klassrummet och genom livet.
                  </strong>
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
                <div className="columns">
                  <div className="column">
                    <p>
                      <strong>Deltagarna i LOUD skapar band</strong>, bandnamn,
                      bandloggor, bandbiografier, bandriders - allt det som
                      ingår i att vara ett band. Genom att utgå ifrån
                      deltagarnas egna favoritlåtar, som en del av det Kreativa
                      Lärandet, lär de sig även det grundläggande inom
                      musikteori; rytm- och melodilära, noter och låtuppbyggnad.
                      LOUD handlar om att ge deltagarna ägandeskap över sin egen
                      kreativitet.
                    </p>
                  </div>
                  <div className="column is-one-quarter">
                    <Img fluid={data.golden.childImageSharp.fluid} />
                  </div>
                </div>

                <p>
                  <strong>Deltagarna får träffa etablerade artister</strong>{" "}
                  genom året, spela in i studio, skapa sina egna låtar och
                  videos, samt värdefull insyn i marknadsföringen av ett band.
                </p>

                <div className="columns">
                  <div className="column">
                    <p>
                      <strong>Uppträdanden är en viktig del av LOUD</strong>,
                      och deltagarna får flera chanser att visa upp sin musik.
                      Varje år avslutas med att samtliga LOUD-band samlas och
                      uppträder tillsammans, under LOUD fest. Här får samtliga
                      LOUD-band chans att spela på en riktig scen, och träffa
                      andra elever med samma intresse.
                    </p>
                  </div>
                  <div className="column is-one-quarter">
                    <Img fluid={data.livePic.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <Img fluid={data.frida.childImageSharp.fluid} />
                </div>
                <div className="column is-half">
                  <blockquote>
                    Att få tillgång till ett instrument, och att hitta en väg in
                    i musiken och samarbetet, öppnar så många dörrar, socialt
                    och själsligt. Det är ett mycket bra sätt att bygga ett
                    viktigt självförtroende. Det är fantastiskt att få följa
                    LOUDs dedikerade arbete att erbjuda ungdomar denna
                    möjlighet.
                    <cite>
                      Frida Hyvönen, Grammisprisad kompositör och textförfattare
                    </cite>
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
    frida: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "frida-hyvonen.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    golden: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "GoldenDiamonds2loggor.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    livePic: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "DSC09026.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
