import * as React from "react";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Process from "../components/Process";
import SEO from "../components/Seo";

import { graphql } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="DevLifting" />
      <Hero />
      <Features />
      <Process />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query LangHome($language: String!) {
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
