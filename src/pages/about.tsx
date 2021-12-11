import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import { FaTwitter } from "react-icons/fa";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AboutPage = () => {
  const { t } = useTranslation();
  let isPageWide = useMediaQuery("(min-width: 992px)");

  const emailAddress = "devlifting@gmail.com";
  const about_text =
    "The master mind behind DevLifting is Minh Khang Tran. He is a freelancer from Germany. He specialized himself in creating static websites like business & marketing pages, landing pages, blogs or portfolios. He works with both locale and international customers to fulfill their needs.";
  if (isPageWide) {
    return (
      <Layout>
        <SEO
          title={t("About")}
          description={t("Learn more about DevLifting and the goals here")}
        />
        <Container id="about" className="my-4">
          <Row className="">
            <Col lg={6}>
              <h1 className="text-uppercase text-primary fw-bold mt-3">
                <Trans>ABOUT DEVLIFTING</Trans>
              </h1>
              <p className="lead text-dark">
                <Trans>{about_text}</Trans>
              </p>
              <h2 className="text-uppercase text-primary fw-bold mt-3">
                <Trans>The goals</Trans>
              </h2>
              <p className="lead text-dark">
                <Trans>
                  The main goal of DevLifting is to create custom and accessible
                  websites. On of our main attention is accessiblity. Websites
                  should be accessible for everyone by default. For example
                  people with low vision or blind people should access all
                  websites. The website should then be still function normally
                  with screen readers or other assistive technologies. There
                  will always be some accessibility issues, but we try our best
                  to deliver a good experience for everyone who visits our
                  pages.
                </Trans>
              </p>
              <p className="lead text-dark">
                <Trans>
                  We use the latest technology to provide secure and fast
                  websites. Combined with CMS (Content Managment Systems) the
                  customer can adapt the website agil.
                </Trans>
              </p>
              <p className="lead text-dark">
                <Trans>
                  The cherry on the cake is a website with high ranking position
                  on search engines like google and bing. This will draw traffic
                  to the page. With the help of UX (User experience) and with
                  copywriting the page is ready for conversions.
                </Trans>
              </p>

              <div className="about_socials mt-5">
                <h2 className="text-uppercase text-primary fw-bold mt-3">
                  <Trans>Contact</Trans>
                </h2>
                <p className="lead text-dark">{emailAddress}</p>
                <h2 className="text-uppercase text-primary fw-bold mt-3">
                  <Trans>Follow me!</Trans>
                </h2>
                <a
                  href="https://twitter.com/devLifting_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size="1.75em"></FaTwitter>
                  <span className="visually-hidden">Twitter</span>
                </a>
              </div>
            </Col>
            <Col lg={6} className="">
              <article className="text-center">
                <StaticImage
                  src="../images/about.png"
                  alt="a picture about me"
                  height={350}
                  width={350}
                />
              </article>
            </Col>
          </Row>
        </Container>
        <CTA />
      </Layout>
    );
  }
  return (
    <Layout>
      <SEO
        title={t("About")}
        description={t("Learn more about DevLifting and the goals here")}
      />
      <Container id="about" className="my-4">
        <Row className="flex-lg-row-reverse">
          <Col lg={6} className="">
            <article className="text-center">
              <StaticImage
                src="../images/about.png"
                alt="a picture about me"
                height={150}
                width={150}
              />
            </article>
          </Col>
          <Col lg={6}>
            <Row>
              <Col md={9}>
                <h1 className="text-uppercase text-primary fw-bold mt-3">
                  <Trans>ABOUT DEVLIFTING</Trans>
                </h1>
                <p className="lead text-dark">
                  <Trans>{about_text}</Trans>
                </p>
                <h2 className="text-uppercase text-primary fw-bold mt-3">
                  <Trans>The goals</Trans>
                </h2>
                <p className="lead text-dark">
                  <Trans>
                    The main goal of DevLifting is to create custom and
                    accessible websites. On of our main attention is
                    accessiblity. Websites should be accessible for everyone by
                    default. For example people with low vision or blind people
                    should access all websites. The website should then be still
                    function normally with screen readers or other assistive
                    technologies. There will always be some accessibility
                    issues, but we try our best to deliver a good experience for
                    everyone who visits our pages.
                  </Trans>
                </p>
                <p className="lead text-dark">
                  <Trans>
                    We use the latest technology to provide secure and fast
                    websites. Combined with CMS (Content Managment Systems) you
                    can adapt the website agil.
                  </Trans>
                </p>
                <p className="lead text-dark">
                  <Trans>
                    The cherry on the cake is a website with high ranking
                    position on search engines like google and bing. This will
                    draw traffic to the page. With the help of UX (User
                    experience) and with copywriting the page is ready for
                    conversions.
                  </Trans>
                </p>
              </Col>
              <Col md={3}>
                <div className="about_socials mt-5 mt-md-0">
                  <h2 className="text-uppercase text-primary fw-bold mt-3">
                    <Trans>Contact</Trans>
                  </h2>
                  <p className="lead text-dark">{emailAddress}</p>
                  <h2 className="text-uppercase text-primary fw-bold mt-3">
                    <Trans>Follow me!</Trans>
                  </h2>
                  <a
                    href="https://twitter.com/devLifting_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size="1.75em"></FaTwitter>
                    <span className="visually-hidden">Twitter</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query LangAbout($language: String!) {
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
