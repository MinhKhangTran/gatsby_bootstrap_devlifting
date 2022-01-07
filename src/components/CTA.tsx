import { Link } from "gatsby";
import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <section id="cta" aria-label="cta" className="section bg-light py-5 ">
      <Container>
        <Row className="align-items-center px-xl-5">
          <Col lg={8}>
            <h2 className="text-primary text-uppercase fw-bold">
              ready to dive in?
            </h2>
            <h3 className="text-secondary text-uppercase fw-bold">
              Start your journey now!
            </h3>
          </Col>
          <Col lg={4}>
            <Link to="/work" className="btn btn-primary btn-lg mt-4 mt-lg-0">
              GET STARTED!
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
