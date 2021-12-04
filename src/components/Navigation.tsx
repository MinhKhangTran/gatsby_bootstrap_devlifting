import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Trans } from "react-i18next";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "../images/logo.svg";
import logo_big from "../images/logo_big.svg";

const Navigation = () => {
  let isPageWide = useMediaQuery("(min-width: 992px)");
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Link
          to="/"
          id="top"
          className="navbar-brand text-primary d-flex align-items-center"
        >
          <img src={isPageWide ? logo_big : logo} alt="logo of devlifting" />
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          data-cy="nav_button"
        ></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" data-cy="nav_collapse">
          <Nav className="me-auto align-lg-items-center">
            <Link to="/#hero" className="nav-link">
              <Trans>Home</Trans>
            </Link>
            <Link to="/#features" className="nav-link">
              <Trans>Benefits</Trans>
            </Link>
            <Link to="/#process" className="nav-link">
              <Trans>Process</Trans>
            </Link>
            <Link to="/#faq" className="nav-link">
              <Trans>FAQ</Trans>
            </Link>

            <Link className="nav-link" to="/about">
              <Trans>About</Trans>
            </Link>
            <Link className="nav-link" to="/blog">
              <Trans>Blog</Trans>
            </Link>
          </Nav>
          <Link className="btn btn-outline-primary" to="/contact">
            <Trans>Contact</Trans>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
