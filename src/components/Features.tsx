import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import {
  FaTachometerAlt,
  FaUniversalAccess,
  FaSearchengin,
  FaDatabase,
} from "react-icons/fa";

const Features = () => {
  const featArray = [
    {
      id: 1,
      title: "Schnell",
      icon: <FaTachometerAlt aria-hidden="true" size="3em" />,
      text: "Wir verwenden die neueste Technologie, um schnelle statische Websites zu erstellen. Ihre Website wird schnell, sicher und skalierbar sein.",
    },
    {
      id: 2,
      title: "Zugänglich",
      icon: <FaUniversalAccess aria-hidden="true" size="3em" />,
      text: "Websites sollten standardmäßig für jeden barrierefrei sein. So kann Ihre Website von allen genutzt und gesehen werden.",
    },
    {
      id: 3,
      title: "Suchmaschinen Freundlich",
      icon: <FaSearchengin aria-hidden="true" size="3em" />,
      text: "Mit Suchmaschinenoptmierung (SEO) erhält Ihr Unternehmen Traffic und eine höhere Position bei Google. Mit konversionsoptimierten Inhalten kommt es auf Ihrer Website zu Verkaufsabschlüssen.",
    },
    {
      id: 4,
      title: "Anpassbare Inhalte",
      icon: <FaDatabase aria-hidden="true" size="3em" />,
      text: "Mit Hilfe ausgewählter Content-Management-Systeme (CMS) können Sie Ihre Inhalte einfach und flexibel pflegen und aktualisieren.",
    },
  ];
  return (
    <section id="features" aria-label="features" className="section">
      <Container>
        <h2 className="text-center text-primary fw-bold text-uppercase">
          Rundum-Sorglos-Paket
        </h2>
        <p className="text-center text-dark mb-4">
          Dies sind unsere wichtigsten Vorteile, die Ihnen helfen, Ihr
          Unternehmen aufzubauen.
        </p>
        <Row>
          {featArray.map((feat) => {
            const { id, icon, text, title } = feat;
            return (
              <Col md={6} key={id} className="feat_col">
                <div className="feat_kasten position-relative mx-xl-5">
                  <div className="feat_icon d-flex align-items-center justify-content-center text-white position-absolute">
                    {icon}
                  </div>
                  <h3 className="text-primary">{title}</h3>
                  <p className="text-dark">{text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
