import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import lost from "../images/lost.svg";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Container>
        <main>
          <h1>Page not found</h1>
          <p>Sorry we couldn’t find what you were looking for.</p>
          <Link to="/">Go home</Link>.
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
