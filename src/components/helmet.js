import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const LoudHelmet = () => {
  const data = useStaticQuery(graphql`
    query helmetQuery {
      site {
        siteMetadata {
          title
          author
          imageUrl
          description
          keywords
        }
      }
    }
  `);

  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />

      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <title>{data.site.siteMetadata.title}</title>
      <html lang="en" />
      <meta itemprop="name" content={data.site.siteMetadata.author} />
      <meta
        itemprop="description"
        content={data.site.siteMetadata.description}
      />
      <meta itemprop="image" content={data.site.siteMetadata.imageUrl} />
      {/* <link
        href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      ></link> */}
    </Helmet>
  );
};

export default LoudHelmet;
