import { graphql } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import construction from "../images/construction.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BlogAndLangQuery } from "../types.generated";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      console.log(node);

      const { gatsbyImageData, description } = node.data.target;

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)!}
          alt={description}
          className="mb-10"
        />
      );
    },
  },
};

const BlogPage = ({ data }: { data: BlogAndLangQuery }) => {
  const { t } = useTranslation();
  console.log(data);

  return (
    <Layout>
      <SEO
        title={t("Blog")}
        description={t("A curated list of all my blog posts")}
      />
      <Container>
        <div>
          {renderRichText(data.allContentfulBlog.nodes[0].richtext, options)}
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const BlogAndLang = graphql`
  query BlogAndLang($language: String!) {
    allContentfulBlog {
      nodes {
        richtext {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              description
              gatsbyImageData(placeholder: TRACED_SVG)
              __typename
            }
          }
        }
      }
    }

    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
