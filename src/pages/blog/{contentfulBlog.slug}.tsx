import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import { SingleBlogpostQuery } from "../../types.generated";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import SEO from "../../components/Seo";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { gatsbyImageData, description } = node.data.target;

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)!}
          alt={description}
          className="my-3"
        />
      );
    },
  },
};

const SingleBlogPost = ({ data }: { data: SingleBlogpostQuery }) => {
  const richtext = data.contentfulBlog
    ?.richtext as RenderRichTextData<ContentfulRichTextGatsbyReference>;

  return (
    <Layout>
      <SEO title={data.contentfulBlog?.title!} />
      <Container>
        <Row>
          <Col lg={8} md={10} className="mx-auto">
            <div className="my-4">{renderRichText(richtext, options)}</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SingleBlogPost;

export const SingleBlogPostQuery = graphql`
  query SingleBlogpost($slug: String!, $language: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(locale: "DD MM YYYY")
      readingTime
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
