import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import heroImg from "../images/Hero_illustration.svg";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Hero = () => {
  return (
    <section id="hero">
      <Container className="">
        <Row className="hero_row">
          <Col lg={6}>
            <h1><Trans>We do all the heavy lifting to build your web presence up</Trans></h1>
            <p className="lead">
            <Trans>
              Our focus is growing your business by making your websites accessible and conversion optimized!
              </Trans>
            </p>
            <div className="hero_buttons d-flex gap-3 justify-content-center justify-content-lg-start mt-4 mt-lg-5">
              <Link to="/work" className="btn btn-primary btn-lg">
              <Trans>START NOW!</Trans>
              </Link>
              <Button size="lg" variant="outline-primary" href="#features">
              <Trans>LEARN MORE!</Trans>
              </Button>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center mt-4 mt-lg-0">
            <img
              height="300px"
              src={heroImg}
              alt="hero image: a starting rocket"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
