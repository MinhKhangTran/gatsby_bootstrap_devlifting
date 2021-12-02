import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Container } from "react-bootstrap";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 oh no🥲" />
      <Container>
        <main>
          <h1>Page not found</h1>
          <p>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === "development" ? (
              <code>
                <br />
                Try creating a page in <code>src/pages/</code>.
                <br />
              </code>
            ) : null}
            <br />
            <Link to="/">Go home</Link>.
          </p>
        </main>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

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
