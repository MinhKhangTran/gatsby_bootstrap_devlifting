import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import heroImg from "../images/Hero_illustration.svg";

const Hero = () => {
  return (
    <section id="hero">
      <Container className="">
        <Row className="hero_row">
          <Col lg={6}>
            <h1>We do all the heavy lifting to build your web presence up</h1>
            <p className="lead">
              Our focus is growing your business by making your websites
              accessible and conversion optimized!
            </p>
            <div className="hero_buttons d-flex gap-3 justify-content-center justify-content-lg-start mt-4 mt-lg-5">
              <Button size="lg">START NOW!</Button>
              <Button size="lg" variant="outline-primary" href="#features">
                LEARN MORE!
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
