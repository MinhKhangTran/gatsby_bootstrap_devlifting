import { graphql, Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const richtext = data.allContentfulBlog.nodes[0]
    .richtext as RenderRichTextData<ContentfulRichTextGatsbyReference>;

  return (
    <Layout>
      <SEO
        title={t("Blog")}
        description={t("A curated list of all my blog posts")}
      />
      <Container id="blog">
        <h1 className="text-uppercase text-primary fw-bold mt-3">
          <Trans>From the Blog</Trans>
        </h1>
        <p className="lead text-dark">
          <Trans>
            This posts should help beginners or curious people to understand the
            big world of web development.
          </Trans>
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
    </Layout>
  );
};

export default BlogPage;

export const BlogAndLang = graphql`
  query BlogAndLang($language: String!) {
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
