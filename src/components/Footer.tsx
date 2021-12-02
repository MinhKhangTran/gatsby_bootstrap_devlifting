import { Link } from "gatsby";
import { useI18next, Link as IntLink } from "gatsby-plugin-react-i18next";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Trans } from "react-i18next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import logo_big from "../images/logo_big.svg";

const Footer = ({ path }: { path: string }) => {
  const { languages, originalPath } = useI18next();
  console.log(path);

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
              <Trans>Our heavy lifting will improve your web presence!</Trans>
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

          <Col lg={6} className="mt-4">
            <Row>
              <Col md={3} xs={6}>
                <h3>Home</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/#features" className="footer_links">
                      Beneftis
                    </Link>
                  </li>
                  <li>
                    <Link to="/#process" className="footer_links">
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/#faq" className="footer_links">
                      FAQ
                    </Link>
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
                    <a
                      className="footer_links"
                      href="https://blog.minhkhangtran.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
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
                <ul className="list-unstyled">
                  {languages.map((language) => (
                    <li key={language}>
                      <IntLink
                        className="footer_links"
                        to={originalPath}
                        language={language}
                      >
                        {language === "en" ? "Englisch" : "German"}
                      </IntLink>
                    </li>
                  ))}
                </ul>
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
