import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FaCheck } from "react-icons/fa";
import process_1 from "../images/process_1.svg";
import process_2 from "../images/process_2.svg";
import process_3 from "../images/process_3.svg";

const Process = () => {
  const processArray = [
    {
      id: 1,
      title: "Gestaltung",
      items: [
        { id: 1, text: "Planung und Umsetzung Ihrer Ziele für die Website" },
        {
          id: 2,
          text: "Erstellung von Wireframing für Desktop- und Handheld-Geräte",
        },
        {
          id: 3,
          text: "Von Anfang an liegt der Fokus bei uns auf UX/UI, Conversion und Barrierefreiheit",
        },
      ],
      img: (
        <img
          src={process_1}
          className="img-fluid"
          alt="Illustration of a man next to a large mobile screen showing heatmaps of where users clicked"
        />
      ),
    },
    {
      id: 2,
      title: "Entwicklung",
      items: [
        {
          id: 1,
          text: "Umsetzung von Design-Mockups mit HTML/CSS und Javascript",
        },
        {
          id: 2,
          text: "Entwicklung von statischen Websites mit den neuesten Technologien",
        },
        {
          id: 3,
          text: "Verwendung eines bekannten CMS (WordPress, Contentful, GraphCMS)",
        },
      ],
      img: (
        <img
          src={process_2}
          className="img-fluid"
          alt="Illustration of a man with headphones coding with an iMac"
        />
      ),
    },
    {
      id: 3,
      title: "HOSTING & OPTIMIERUNG",
      items: [
        { id: 1, text: "Testen der Zugänglichkeit und Überprüfen des Designs" },
        { id: 2, text: "Veröffentlichung und Bewerbung Ihrer Website" },
        {
          id: 3,
          text: "den Traffic auf Ihrer Webseite erhöhen und Ihre Konversionen optimieren",
        },
      ],
      img: (
        <img
          src={process_3}
          className="img-fluid"
          alt="Illustration of a man standing in front of a diagram showing the progress of the curve"
        />
      ),
    },
  ];
  return (
    <section id="process" aria-label="process" className="section">
      <Container>
        <h2 className="text-primary fw-bold text-uppercase">
          DIE SCHWIERIGEN AUFGABEN
        </h2>
        <p className="text-dark">
          Der Prozess der Erstellung und des Hostings einer Website von Grund
          auf ist schwierig und zeitaufwendig. Da kommen wir ins Spiel.
        </p>
        {processArray.map((process) => {
          const { id, title, items, img } = process;
          return (
            <Row key={id} className="align-items-center process_row mx-xl-5">
              <Col md={6} className="">
                <div className="process_text text-dark position-relative">
                  <span className="position-absolute">{id}</span>
                  <h3 className="text-primary text-uppercase fw-bold mb-2">
                    {title}
                  </h3>
                  {items.map((item) => {
                    const { id, text } = item;
                    return (
                      <ul className="list-unstyled" key={id}>
                        <li className="d-flex align-items-center gap-2">
                          <FaCheck className="text-secondary" /> {text}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </Col>
              <Col md={6} className="mt-4 d-flex justify-content-center">
                {img}
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Process;
