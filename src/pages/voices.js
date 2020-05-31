import React from "react";
import Layout from "../components/layout";
import HeroImageBg from "../components/HeroImageBg";
import Fade from "react-reveal/Fade";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const VoicesPage = ({ data }) => {
  return (
    <Layout>
      <>
        <HeroImageBg
          title="RÖSTER"
          subtitle="Om LOUD"
          bgImage={data.bgImage.childImageSharp.fluid}
        />
        <section className="section">
          <div className="container">
            <Fade>
              <article className="tile notification is-white">
                <blockquote>
                  Att få tillgång till instrument, och att hitta in i
                  musikalitet och samspel, öppnar upp så många ytterligare
                  dörrar, socialt och själsligen. Självkänslan stärks, inte
                  minst. Det är fantastiskt att följa LOUD's hängivna arbete för
                  denna möjlighet.
                  <cite>Frida Hyvönen Artist/Sångerska/Låtskrivare </cite>
                </blockquote>
              </article>
            </Fade>

            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <Fade>
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-primary">
                        <blockquote>
                          Det bästa med LOUD Program är att man får lära sig
                          spela sina favoritlåtar - och nästan alla innehåller
                          bara 3 eller 4 ackord!
                          <cite>Christopher Irula Basist LOUD Program</cite>
                        </blockquote>
                      </article>
                      <article className="tile is-child notification is-link">
                        <blockquote>
                          Jag har lärt mig att det krävs mer än bra musik för
                          att vara ett bra band
                          <cite>Alissandra Sanchez Sångerska LOUD Program</cite>
                        </blockquote>
                      </article>
                      <article className="tile is-child notification is-light">
                        <blockquote>
                          De flesta av mina bästa vänner har jag träffat genom
                          LOUD Program{" "}
                          <cite>Lizzeth Guzman Trummis LOUD Program</cite>
                        </blockquote>
                      </article>
                    </div>
                  </Fade>
                  <div className="tile is-parent">
                    <Fade>
                      <article className="tile is-child notification is-dark">
                        <figure className="image">
                          <Img fluid={data.kidsPic.childImageSharp.fluid} />
                        </figure>
                        <blockquote>
                          Jag skulle vilja säga tack till LOUD, för att det
                          hjälpte mig komma över mitt scenskräck, genom att jag
                          fått ställa mig framför en stor folkmassa. Jag skulle
                          också vilja säga tack, för att ni ger elever som
                          älskar musik, en möjlighet att spela, och lära sig nya
                          saker. <cite>LOUD-sångerska</cite>
                        </blockquote>
                      </article>
                    </Fade>
                  </div>
                </div>

                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <Fade>
                      <article className="tile is-child notification is-white">
                        <blockquote>
                          Vad jag har lärt mig av att vara med i LOUD Program,
                          är att övning ger färdighet. Jag har också lärt mig
                          att läsa noter.
                          <cite>LOUD-pianist</cite>
                        </blockquote>
                      </article>
                    </Fade>
                    <Fade>
                      <article className="tile is-child notification is-primary">
                        <blockquote>
                          LOUD möjliggör, att elever som redan har viss kunskap
                          inom musik, får lära sig fler instrument i ett större
                          ljudformat. Programmet främjar kamratskap, och skapar
                          en positiv inlärningsmiljö för eleverna. Den utmärkta
                          pedagogiska kompetensen hos lärarna är en del av
                          framgången.
                          <cite>Terrence Wright (Vista Charter Academy)</cite>
                        </blockquote>
                      </article>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <Fade>
                  <article className="tile is-child notification is-light">
                    <blockquote>
                      Musik är ett kraftfullt medel för att utveckla
                      självkänsla. LOUD Program arbetar med ungdomar, under de
                      kritiska åren, när de kommer underfund med vilka de är.
                      Programmet lär eleverna, hur man samarbetar ihop med sina
                      kamrater i ett band. Det lär dem, hur man övar och
                      experimenterar, för att utveckla konstnärlig talang. Lika
                      viktigt, hur man bygger tillit och samband med sina
                      medmänniskor, hur man deltar och bidrar till gruppens
                      välmående, och hur man som resultat växer som människa,
                      med utökat förtroende och tålamod. LOUD Program Sverige
                      ska vara en internationell frizon, där ungdomar kan skapa
                      relationer över kulturella gränser, där de kan lära sig av
                      andra elever med liknande, eller helt annan bakgrund
                      <cite>
                        Catherine Brozowski CEO of Audacious Foundation
                        Administrator, LOUD US
                      </cite>
                    </blockquote>
                  </article>
                </Fade>
              </div>
            </div>

            <Fade>
              <article className="tile notification is-link">
                <blockquote>
                  LOUD Program är en framgång, på grund av de otroliga lärarna.
                  Jag hade äran att vara på plats, när några av handledningarna
                  och instruktionerna gavs till eleverna. Det var tydligt att
                  eleverna tyckte om programmet, och de kunde visa på stora
                  framsteg, genom uppträdanden under året.
                  <cite>Hector Ortiz (Cisneros Learning Academy)</cite>
                </blockquote>
              </article>
            </Fade>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default VoicesPage;

export const pageQuery = graphql`
  query VoicesPage {
    bgImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "DSC02059.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kidsPic: file(name: { eq: "ScreenShot2019-09-06" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
