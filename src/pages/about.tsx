import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AboutPage = () => {
  let isPageWide = useMediaQuery("(min-width: 992px)");

  const emailAddress = "devlifting@gmail.com";
  const about_text =
    "Das Superhirn hinter DevLifting ist Minh Khang Tran. Er ist ein Freiberufler aus Deutschland. Er hat sich auf die Erstellung von statischen Websites wie Geschäfts- und Marketingseiten, Landing Pages, Blogs oder Portfolios spezialisiert. Er arbeitet sowohl mit lokalen als auch internationalen Kunden zusammen, um deren Bedürfnisse zu erfüllen.";
  if (isPageWide) {
    return (
      <Layout>
        <SEO
          title="Über uns"
          description="Hier erfahren Sie mehr über DevLifting und die Ziele"
        />
        <Container id="about" className="my-4">
          <Row className="">
            <Col lg={6}>
              <h1 className="text-uppercase text-primary fw-bold mt-3">
                ÜBER DEVLIFTING
              </h1>
              <p className="lead text-dark">{about_text}</p>
              <h2 className="text-uppercase text-primary fw-bold mt-3">
                Die Ziele
              </h2>
              <p className="lead text-dark">
                Das Hauptziel von DevLifting ist es, individuelle und
                zugängliche Webseiten zu erstellen. Eines unserer
                Hauptaugenmerke ist die Zugänglichkeit. Websites sollten
                standardmäßig für jeden zugänglich sein. Zum Beispiel sollten
                Menschen mit Sehschwäche oder Blinde Zugang zu allen Websites
                haben. Die Website sollte dann auch mit Bildschirmlesegeräten
                oder anderen Hilfsmitteln normal funktionieren. Es wird immer
                einige Probleme mit der Zugänglichkeit geben, aber wir versuchen
                unser Bestes, um allen Besuchern unserer Seiten ein gutes
                Erlebnis zu bieten.
              </p>
              <p className="lead text-dark">
                Wir verwenden die neueste Technologie, um sichere und schnelle
                Websites zu erstellen. Kombiniert mit CMS (Content Management
                Systems) können Sie die Website agil anpassen.
              </p>
              <p className="lead text-dark">
                Das Tüpfelchen auf dem i ist eine Website, die in Suchmaschinen
                wie Google und Bing hoch platziert ist. Dies wird Besucher auf
                die Seite ziehen. Mit Hilfe von UX (User Experience) und mit
                Copywriting ist die Seite bereit für Konversionen.
              </p>

              <div className="about_socials mt-5">
                <h2 className="text-uppercase text-primary fw-bold mt-3">
                  Kontakt
                </h2>
                <p className="lead text-dark">{emailAddress}</p>
                <h2 className="text-uppercase text-primary fw-bold mt-3">
                  Folge mir!
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
        title="About"
        description="Learn more about DevLifting and the goals here"
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
                  ÜBER DEVLIFTING
                </h1>
                <p className="lead text-dark">{about_text}</p>
                <h2 className="text-uppercase text-primary fw-bold mt-3">
                  Die Ziele
                </h2>
                <p className="lead text-dark">
                  Das Hauptziel von DevLifting ist es, individuelle und
                  zugängliche Webseiten zu erstellen. Eines unserer
                  Hauptaugenmerke ist die Zugänglichkeit. Websites sollten
                  standardmäßig für jeden zugänglich sein. Zum Beispiel sollten
                  Menschen mit Sehschwäche oder Blinde Zugang zu allen Websites
                  haben. Die Website sollte dann auch mit Bildschirmlesegeräten
                  oder anderen Hilfsmitteln normal funktionieren. Es wird immer
                  einige Probleme mit der Zugänglichkeit geben, aber wir
                  versuchen unser Bestes, um allen Besuchern unserer Seiten ein
                  gutes Erlebnis zu bieten.
                </p>
                <p className="lead text-dark">
                  Wir verwenden die neueste Technologie, um sichere und schnelle
                  Websites zu erstellen. Kombiniert mit CMS (Content Management
                  Systems) können Sie die Website agil anpassen.
                </p>
                <p className="lead text-dark">
                  Das Tüpfelchen auf dem i ist eine Website, die in
                  Suchmaschinen wie Google und Bing hoch platziert ist. Dies
                  wird Besucher auf die Seite ziehen. Mit Hilfe von UX (User
                  Experience) und mit Copywriting ist die Seite bereit für
                  Konversionen.
                </p>
              </Col>
              <Col md={3}>
                <div className="about_socials mt-5 mt-md-0">
                  <h2 className="text-uppercase text-primary fw-bold mt-3">
                    Kontakt
                  </h2>
                  <p className="lead text-dark">{emailAddress}</p>
                  <h2 className="text-uppercase text-primary fw-bold mt-3">
                    Folge mir!
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
