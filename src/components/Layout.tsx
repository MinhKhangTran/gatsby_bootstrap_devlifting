import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

const Layout = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  return (
    <div>
      <header role="banner">
        <SkipNavLink />
        <Navigation />
        <SkipNavContent />
      </header>
      <main role="main">{children}</main>
      <Footer path={path} />
    </div>
  );
};

export default Layout;
