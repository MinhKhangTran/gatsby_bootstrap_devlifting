import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
      icon: <FaTachometerAlt aria-hidden="true" size="4em" />,
      text: "Using the latest technology to generate fast static websites. Other nice features are security and scalability",
    },
    {
      id: 2,
      title: "Accessible",
      icon: <FaUniversalAccess aria-hidden="true" size="4em" />,
      text: "Websites should be accessible for everyone by default. I use the Web Content Accessibility Guideline (WCAG) to design and create my websites.",
    },
    {
      id: 3,
      title: "Search Engine Friendly",
      icon: <FaSearchengin aria-hidden="true" size="4em" />,
      text: "With Search Engine Optimaztion (SEO) your Business will get traffic while conversion optimized content will increase your goal achievements.",
    },
    {
      id: 4,
      title: "Customizable Content",
      icon: <FaDatabase aria-hidden="true" size="4em" />,
      text: "With the help of Content Management Systems (CMS) you can easily maintain and update your content.",
    },
  ];
  return (
    <section id="features" aria-label="features" className="section">
      <Container>
        <h2 className="text-center text-primary fw-bold text-uppercase">
          Build you up
        </h2>
        <p className="text-center text-dark mb-4">
          These are our key benefits help you build your business up
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
                  <h3 className="text-primary">{title}</h3>
                  <p className="text-dark">{text}</p>
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
