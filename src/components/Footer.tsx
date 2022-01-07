import { Link } from "gatsby";

import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

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
          <Col lg={3} className="">
            <Link to="/" className="mt-0 text-dark d-flex align-items-center">
              <img src={logo_big} alt="logo of devlifting" height="60" />
            </Link>
            <p className=" my-2">
              Unsere Aufgabe ist es ihre Webpräsenz aufzubauen!
            </p>

            <div className="footer_socials d-flex gap-3 text-dark">
              <div className="footer_icon">
                <a
                  href="https://twitter.com/devLifting_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size="1.75em"></FaTwitter>
                  <span className="visually-hidden">Twitter</span>
                </a>
              </div>
              <div className="footer_icon">
                <a
                  href="https://github.com/MinhKhangTran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size="1.75em"></FaGithub>
                  <span className="visually-hidden">Github</span>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={8} className="mt-4">
            <Row>
              <Col md={4} xs={6}>
                <h3>Homepage</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/#features" className="footer_links">
                      Vorteile
                    </Link>
                  </li>
                  <li>
                    <Link to="/#process" className="footer_links">
                      Prozess
                    </Link>
                  </li>
                  <li>
                    <Link to="/#faq" className="footer_links">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} xs={6}>
                <h3>Unternehmen</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link className="footer_links" to="/about">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/contact">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} xs={6}>
                <h3>Rechtliches</h3>
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
              {/* <Col md={3} xs={6}>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-language">
                    {language === "en" ? "🇺🇸 Englisch" : "🇩🇪 German"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {languages.map((language) => (
                      <Dropdown.Item
                        as="p"
                        className="pb-2 mb-0"
                        key={language}
                      >
                        <IntLink
                          className="footer_links"
                          to={originalPath}
                          language={language}
                        >
                          {language === "en" ? "🇺🇸 Englisch" : "🇩🇪 German"}
                        </IntLink>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col> */}
            </Row>
          </Col>
          <p className="text-center pt-3 mt-4 mb-0 copyright">
            &copy; {new Date().getFullYear()}, DevLifting. Alle Rechte
            vorbehalten.
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
