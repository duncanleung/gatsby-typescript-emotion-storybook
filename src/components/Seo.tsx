import React from "react";
import { Helmet } from "react-helmet-async";
import { useStaticQuery, graphql } from "gatsby";
// const FavIcon = require("../images/favicon-32x32.png");
// const SeoTwitterImage = require("../images/desktop-design.jpg");

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  pathname?: string;
  image?: {
    alt: string;
    src: string;
  };
};

const SEO: React.FC<Props> = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            lang
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const lang = site?.siteMetadata?.lang || "en";
  const url = site?.siteMetadata?.siteUrl || "/";

  return (
    <Helmet
      title={title || site.siteMetadata.title}
      htmlAttributes={{ lang }}
      // TODO:
      // link={[{ rel: "icon", type: "image/ico", href: FavIcon }]}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        // {
        //   property: "og:image",
        //   content: SeoTwitterImage,
        // },
        // {
        //   property: "og:image:alt",
        //   content: SeoTwitterImage,
        // },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    />
  );
};

export default SEO;
