import { Link } from "gatsby";
import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Trans } from "react-i18next";

const CTA = () => {
  return (
    <section id="cta" aria-label="cta" className="section bg-light py-5 ">
      <Container>
        <Row className="align-items-center px-xl-5">
          <Col lg={8}>
            <h2 className="text-primary text-uppercase fw-bold">
              <Trans>ready to dive in?</Trans>
            </h2>
            <h3 className="text-secondary text-uppercase fw-bold">
              <Trans>Start your journey now!</Trans>
            </h3>
          </Col>
          <Col lg={4}>
            <Link to="/work" className="btn btn-primary btn-lg mt-4 mt-lg-0">
              <Trans>GET STARTED!</Trans>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
