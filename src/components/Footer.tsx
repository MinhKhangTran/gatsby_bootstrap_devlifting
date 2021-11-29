import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";
import logo_big from "../images/logo_big.svg";

const Footer = () => {
  return (
    <footer role="contentinfo" id="footer" className="bg-secondary py-4">
      {/* <p className="back-to-top text-center mb-0">
        <a
          href="#top"
          id="skip-to-top"
          title="skip back to top of page"
          className="text-white text-decoration-none"
        >
          <span aria-hidden="true">
            ▲<span className="text-capitalize">top</span>
          </span>
          <span className="visually-hidden">Back to top</span>
        </a>
      </p> */}
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={4} className="">
            <Link to="/" className="mt-0 text-dark d-flex align-items-center">
              <img src={logo_big} alt="logo of devlifting" height="60" />
            </Link>
            <p className=" my-2">
              We do all the heavy lifting to build your web presence up
            </p>
            <div className="footer_socials d-flex gap-3 text-dark">
              <div className="footer_icon">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size="1.75em"></FaTwitter>
                  <span className="visually-hidden">Twitter</span>
                </a>
              </div>
              <div className="footer_icon">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size="1.75em"></FaGithub>
                  <span className="visually-hidden">Github</span>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-3">
            <Row>
              <Col md={3} xs={6}>
                <h3>Home</h3>
                <ul className="list-unstyled">
                  <li>
                    <a className="footer_links" href="/#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="footer_links" href="/#benefits">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a className="footer_links" href="/#process">
                      Process
                    </a>
                  </li>
                  <li>
                    <a className="footer_links" href="/#faq">
                      FAQ
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={3} xs={6}>
                <h3>Company</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link className="footer_links" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={3} xs={6}>
                <h3>Legal</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link className="footer_links" to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/terms">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={3} xs={6}>
                <h3>Language</h3>
              </Col>
            </Row>
          </Col>
          <p className="text-center pt-3 mt-4 mb-0 copyright">
            &copy; {new Date().getFullYear()}, DevLifting. All rights reserved
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
