import React from "react";
import Layout from "../components/layout";
import HeroImageBg from "../components/HeroImageBg";
import { graphql } from "gatsby";
import Bounce from "react-reveal/Bounce";
import MailChimp from "../components/MailChimp";

const ContactPage = ({ data }) => {
  const { bgImage } = data;

  return (
    <Layout>
      <>
        <HeroImageBg
          title="KONTAKT"
          subtitle="LOUD Sweden"
          bgImage={bgImage.childImageSharp.fluid}
        />

        <section className="section">
          <div className="container content">
            <div className="box">
              <div className="columns is-centered">
                <div className="column is-9">
                  <Bounce>
                    <ul className="is-size-5">
                      <li>
                        Är du som Allmän / Friskola, Kommun, Aktivitetshus,
                        Kulturskola intresserad av att samarbeta med LOUD?
                      </li>
                      <li>
                        Har du som Musiker, Mentor, Instruktör intresse av att
                        jobba eller föreläsa hos LOUD?{" "}
                      </li>
                      <li>Vill du veta mer om vår verksamhet?</li>
                    </ul>

                    <p className="has-text-centered is-size-3 is-size-5-mobile">
                      Kontakta: <br />
                      <a href="mailto:info@loudprogramsweden.com">
                        info@loudsweden.com
                      </a>
                    </p>
                    <MailChimp />
                  </Bounce>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage {
    bgImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "DSC02051.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
