import { graphql, Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import construction from "../images/construction.svg";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { BlogAndLangQuery } from "../types.generated";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import Moment from "react-moment";
import "moment/locale/de";
import CTA from "../components/CTA";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
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
  const richtext = data.allContentfulBlog.nodes[0]
    .richtext as RenderRichTextData<ContentfulRichTextGatsbyReference>;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Eine kuratierte Liste aller meiner Blogbeiträge"
      />
      <Container id="blog">
        <h1 className="text-uppercase text-primary fw-bold mt-3">
          Aus dem Blog
        </h1>
        <p className="lead text-dark">
          Diese Beiträge sollen Anfängern oder Neugierigen helfen, die große
          Welt der Webentwicklung zu verstehen.
        </p>
        <Row className="my-5 mx-0 gap-5">
          {data.allContentfulBlog.nodes.map((post) => {
            return (
              <Col
                lg={4}
                md={6}
                className="p-2 bg-white shadow-sm card"
                key={post.id}
              >
                <GatsbyImage
                  image={
                    getImage(post.thumbnail?.gatsbyImageData as ImageDataLike)!
                  }
                  alt={post.title!}
                />
                <article className="p-4">
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="">{post.title}</h2>
                  </Link>
                  <p className="lead text-dark ">{post.excerpt?.excerpt}</p>
                  <div className="mt-5 d-flex gap-2 text-primary card_unten">
                    <Moment locale="de" className="" format="DD.MMMM YYYY">
                      {post.date as any}
                    </Moment>
                    <span>-</span>
                    <span>{post.readingTime} min Lesezeit</span>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </Container>
      <CTA />
    </Layout>
  );
};

export default BlogPage;

export const BlogAndLang = graphql`
  {
    allContentfulBlog(sort: { order: DESC, fields: date }) {
      nodes {
        date(locale: "DD MM YYYY")
        id
        readingTime
        slug
        title
        thumbnail {
          id
          title
          gatsbyImageData(placeholder: TRACED_SVG)
        }
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
  }
`;
