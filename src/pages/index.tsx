import * as React from "react";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Process from "../components/Process";
import SEO from "../components/Seo";

import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

// markup
const IndexPage = ({ location }: { location: any }) => {
  const { t } = useTranslation();
  return (
    <Layout path={location.pathname}>
      <SEO title="DevLifting" />
      <Hero />
      <Features />
      <Process />
      <FAQ />
      <CTA />

      <h1>
        <Trans>Welcome to my Gatsby site!</Trans>
      </h1>
      <p>
        <Trans>My name is MKT</Trans>
      </p>
      <p>
        <Trans>My profession is Calculation engineer</Trans>
      </p>
    </Layout>
  );
};

export default IndexPage;

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
