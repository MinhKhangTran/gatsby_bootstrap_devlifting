import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import heroImg from "../images/Hero_illustration.svg";

const Hero = () => {
  return (
    <section id="hero">
      <Container className="">
        <Row className="hero_row">
          <Col lg={6}>
            <h1>Unsere Aufgabe ist es ihre Webpräsenz aufzubauen!</h1>
            <p className="lead">
              Der Fokus ist Ihr Unternehmen aufzubauen, indem wir Ihre Website
              zugänglich und konversionsoptimiert machen!
            </p>
            <div className="hero_buttons d-flex gap-3 justify-content-center justify-content-lg-start mt-4 mt-lg-5">
              <Link to="/work" className="btn btn-primary btn-lg">
                STARTE JETZT!
              </Link>
              <Button size="lg" variant="outline-primary" href="#features">
                ERFAHRE MEHR!
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
