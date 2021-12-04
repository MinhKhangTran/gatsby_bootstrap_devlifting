import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import construction from "../images/construction.svg";

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Under construction come later again 😵‍💫</h1>
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
