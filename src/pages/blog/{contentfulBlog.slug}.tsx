import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import { SingleBlogpostQuery } from "../../types.generated";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import SEO from "../../components/Seo";
import CTA from "../../components/CTA";

const options = {

  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { gatsbyImageData, description } = node.data.target;

      return (
        <>
          <GatsbyImage
            image={getImage(gatsbyImageData)!}
            alt={description}
            className="my-3"
          />
          <p className="fw-light text-secondary bild_desc">{description}</p>
        </>
      );
    },
  },
};

const SingleBlogPost = ({ data }: { data: SingleBlogpostQuery }) => {
  const richtext = data.contentfulBlog
    ?.richtext as RenderRichTextData<ContentfulRichTextGatsbyReference>;

  return (
    <Layout>
      <SEO
        title={data.contentfulBlog?.title!}
        description={data.contentfulBlog?.excerpt?.excerpt}
      />

      <Container>
        <Row>
          <Col lg={8} md={10} className="mx-auto">
            <Breadcrumb className="mt-5">
              <li className="breadcrumb-item">
                <Link to="/blog">Blog</Link>
              </li>

              <Breadcrumb.Item active>
                {data.contentfulBlog?.title}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="my-4">{renderRichText(richtext, options)}</div>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  );
};

export default SingleBlogPost;

export const SingleBlogPostQuery = graphql`
  query SingleBlogpost($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(locale: "DD MM YYYY")
      readingTime
      excerpt {
        excerpt
      }
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
`;
