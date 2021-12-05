import { graphql } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import construction from "../images/construction.svg";

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO
        title={t("Blog")}
        description={t("A curated list of all my blog posts")}
      />
      <Container>
        <h1>
          <Trans>
            This site is still under construction come later again 😵‍💫
          </Trans>
        </h1>
        <img
          src={construction}
          className="img-fluid my-4"
          alt="Two man building a house from scratch."
        />
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query ($language: String!) {
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
