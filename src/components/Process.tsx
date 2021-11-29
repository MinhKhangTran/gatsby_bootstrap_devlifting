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
      title: "Designing",
      items: [
        { id: 1, text: "Planing & implementing your goals for the website" },
        {
          id: 2,
          text: "Building Wireframing for desktop and handheld devices",
        },
        {
          id: 3,
          text: "From the beginning the focus is on UX/UI, Conversion and Accessibility.",
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
      title: "Developing",
      items: [
        {
          id: 1,
          text: "Converting design mockups with HTML/CSS and Javascript",
        },
        { id: 2, text: "Developing static sites with the latest technologies" },
        { id: 3, text: "Usage of known CMS (WordPress, Contentful, GraphCMS)" },
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
      title: "HOSTING & OPTIMASATION",
      items: [
        { id: 1, text: "Testing accessibility and reviewing the design" },
        { id: 2, text: "Launching and promoting your website" },
        {
          id: 3,
          text: "Increasing the traffic on your landing page and optimize your conversions",
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
          THE HEAVY LIFTING
        </h2>
        <p className="text-dark">
          The process from building and hosting a landing page from scratch is
          difficult and time comsuming. That’s where we come in.
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
