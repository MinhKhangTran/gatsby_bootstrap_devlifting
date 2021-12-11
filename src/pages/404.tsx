import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import lost from "../images/lost.svg";

// markup
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("404")} />
      <Container>
        <main>
          <h1>
            <Trans>Page not found</Trans>
          </h1>
          <p>
            <Trans>Sorry we couldn’t find what you were looking for.</Trans>
          </p>
          <Link to="/">
            <Trans>Go home</Trans>
          </Link>
          .
          <article className="d-flex justify-content-center align-items-center">
            <img
              src={lost}
              className="img-fluid my-4 w-50"
              alt="A man wandering in the universe looking where to go"
            />
          </article>
        </main>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query Lang404($language: String!) {
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
