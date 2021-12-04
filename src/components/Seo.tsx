import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

function SEO({
  description,
  lang = "de",
  meta = [],
  image: metaImage,
  title,
  pathname,
}: {
  description?: string;
  lang?: string;
  meta?: any[];
  image?: any;
  title: string;
  pathname?: string;
}) {
  const { site } = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );
  const { t } = useTranslation();
  const { language } = useI18next();

  const metaDescription =
    description || t(`${site?.siteMetadata?.description}`);
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null;
  const titleTemp = t(`${site?.siteMetadata?.title}`);
  const canonical = pathname
    ? `${site?.siteMetadata?.siteUrl}${pathname}`
    : null;
  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={title}
      titleTemplate={`%s | ${titleTemp}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  );
}

export default SEO;
