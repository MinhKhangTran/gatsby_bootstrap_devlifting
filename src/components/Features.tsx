import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Trans } from "react-i18next";
import {
  FaTachometerAlt,
  FaUniversalAccess,
  FaSearchengin,
  FaDatabase,
} from "react-icons/fa";

const Features = () => {
  const featArray = [
    {
      id: 1,
      title: "Fast",
      icon: <FaTachometerAlt aria-hidden="true" size="3em" />,
      text: "Using the latest technology to generate fast static websites. Your website will be fast, safe and scalable.",
    },
    {
      id: 2,
      title: "Accessible",
      icon: <FaUniversalAccess aria-hidden="true" size="3em" />,
      text: "Websites should be accessible for everyone by default. So your website can be used and seen by everyone.",
    },
    {
      id: 3,
      title: "Search Engine Friendly",
      icon: <FaSearchengin aria-hidden="true" size="3em" />,
      text: "With Search Engine Optimaztion (SEO) your business will get traffic and a higher position on Google. With conversion optimized content your website will sell.",
    },
    {
      id: 4,
      title: "Customizable Content",
      icon: <FaDatabase aria-hidden="true" size="3em" />,
      text: "With the help of chosen Content Management Systems (CMS) you can easily maintain and update your content flexible.",
    },
  ];
  return (
    <section id="features" aria-label="features" className="section">
      <Container>
        <h2 className="text-center text-primary fw-bold text-uppercase">
          <Trans>Full-Service Package</Trans>
        </h2>
        <p className="text-center text-dark mb-4">
          <Trans>
            These are our key benefits help you build your business up.
          </Trans>
        </p>
        <Row>
          {featArray.map((feat) => {
            const { id, icon, text, title } = feat;
            return (
              <Col md={6} key={id} className="feat_col">
                <div className="feat_kasten position-relative mx-xl-5">
                  <div className="feat_icon d-flex align-items-center justify-content-center text-white position-absolute">
                    {icon}
                  </div>
                  <h3 className="text-primary">
                    <Trans>{title}</Trans>
                  </h3>
                  <p className="text-dark">
                    <Trans>{text}</Trans>
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
