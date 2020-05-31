import React from "react";
import Layout from "../components/layout";
import HeroImageBg from "../components/HeroImageBg";
import { graphql } from "gatsby";
import Bounce from "react-reveal/Bounce";

const ContactPage = ({ data }) => {
  const { bgImage } = data;

  return (
    <Layout>
      <>
        <HeroImageBg
          title="KONTAKT"
          subtitle="LOUD Program Sweden"
          bgImage={bgImage.childImageSharp.fluid}
        />

        <section className="section">
          <div className="container content">
            <div className="columns is-centered">
              <div className="column is-9">
                <Bounce>
                  <div className="box">
                    <p className="has-text-centered is-size-3 is-size-5-mobile">
                      För frågor och mer information, maila till: <br />
                      <a href="mailto:info@loudprogramsweden.com">
                        info@loudprogramsweden.com
                      </a>
                    </p>
                  </div>
                </Bounce>
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
