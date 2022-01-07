import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";

import { SubmitHandler, useForm } from "react-hook-form";
import { graphql, Link } from "gatsby";
import axios from "axios";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  budget: string;
}

const WorkPage = () => {
  let isPageWide = useMediaQuery("(min-width: 992px)");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  // useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setLoading(true);
    axios({
      method: "post",
      url: `https://getform.io/f/${process.env.GATSBY_GETFORM}`,
      data,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setLoading(false);
    setAlert(true);
    reset();
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  if (isPageWide) {
    return (
      <Layout>
        <SEO
          title="Lassen Sie uns zusammenarbeiten"
          description="Füllen Sie einfach dieses Formular aus und wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen."
        />
        <Container id="work" className="my-4">
          <Row className="align-items-center">
            <Col lg={6} className="">
              <h1 className="text-uppercase text-primary fw-bold mt-3">
                Lassen Sie uns zusammenarbeiten
              </h1>
              <h2 className="lead text-dark mb-5">
                Wir würden uns freuen, von Ihnen zu hören. Füllen Sie einfach
                dieses Formular aus und wir werden uns so schnell wie möglich
                mit Ihnen in Verbindung setzen
              </h2>
              <Row>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Row className="contact_form">
                    <Col md={6}>
                      <FloatingLabel
                        className="mb-4"
                        controlId="floatingFirstName"
                        label="Vorname"
                      >
                        <Form.Control
                          {...register("firstName", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                          type="text"
                          placeholder="Vorname"
                          isInvalid={!!errors.firstName}
                        />

                        <Form.Control.Feedback type="invalid">
                          Bitte geben Sie Ihren Vornamen an
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        className="mb-4"
                        controlId="floatingLastName"
                        label="Nachname"
                      >
                        <Form.Control
                          {...register("lastName", {
                            required: true,
                            maxLength: 80,
                          })}
                          isInvalid={!!errors.lastName}
                          required
                          type="text"
                          placeholder="Nachname"
                        />
                        <Form.Control.Feedback type="invalid">
                          Bitte geben Sie Ihren Nachnamen an
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingEmail"
                        label="E-Mail Adresse"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          type="email"
                          placeholder="name@beispiel.de"
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          Bitte geben Sie Ihre E-Mail Adresse an
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingCompany"
                        label="Unternehmen"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Unternehmen"
                          {...register("company", {
                            required: true,
                          })}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          Bitte geben Sie Ihr Unternehmen an
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingBudget"
                        label="Erwartetes Budget"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Erwartetes Budget"
                          {...register("budget", {
                            required: true,
                          })}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          Bitte geben Sie Ihr Budget an
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Wie können wir Ihnen helfen?"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          as="textarea"
                          placeholder="Wie können wir Ihnen helfen?"
                          style={{ height: "150px" }}
                          {...register("message", {
                            required: true,
                          })}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          Bitte geben Sie Ihre Nachricht an
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>

                    <Col lg={12} className="mx-auto">
                      <ToastContainer
                        data-cy="toast_lg"
                        className="p-3"
                        position="bottom-center"
                      >
                        <Toast bg="success" className="text-white" show={alert}>
                          <Toast.Body>Danke für Ihre Nachricht 🥰</Toast.Body>
                        </Toast>
                      </ToastContainer>
                      <Button
                        disabled={loading}
                        type="submit"
                        variant="primary"
                        className="mt-3 mb-4"
                      >
                        Senden
                      </Button>
                    </Col>
                  </Row>
                </Form>

                <p className="fst-italic">
                  Möchten Sie nur 'Hallo' sagen?{" "}
                  <Link to="/contact">
                    Klicken Sie hier, um uns zu kontaktieren!
                  </Link>
                </p>
              </Row>
            </Col>
            <Col lg={6}>
              <StaticImage
                src="../images/work_sm.jpg"
                alt="two girls laughing and working together watching a notebook from microsoft"
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
  return (
    <Layout>
      <SEO
        title="Let's work together"
        description="Just fill this form and we will connect to you as soon as possible"
      />
      <StaticImage
        src="../images/work_sm.jpg"
        alt="two girls laughing and working together watching a notebook from microsoft"
        layout="fullWidth"
      />
      <Container id="work">
        <h1 className="text-uppercase text-primary fw-bold mt-3">
          Lassen Sie uns zusammenarbeiten
        </h1>
        <h2 className="lead text-dark mb-4">
          Wir würden uns freuen, von Ihnen zu hören. Füllen Sie einfach dieses
          Formular aus und wir werden uns so schnell wie möglich mit Ihnen in
          Verbindung setzen
        </h2>
        <Row>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row className="contact_form">
              <Col md={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingFirstName"
                  label="Vorname"
                >
                  <Form.Control
                    {...register("firstName", {
                      required: true,
                      maxLength: 80,
                    })}
                    required
                    type="text"
                    placeholder="Vorname"
                    isInvalid={!!errors.firstName}
                  />

                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihren Vornamen an
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingLastName"
                  label="Nachname"
                >
                  <Form.Control
                    {...register("lastName", {
                      required: true,
                      maxLength: 80,
                    })}
                    isInvalid={!!errors.lastName}
                    required
                    type="text"
                    placeholder="Nachname"
                  />
                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihren Nachnamen an
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingEmail"
                  label="E-Mail Adresse"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="email"
                    placeholder="name@beispiel.de"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihre E-Mail Adresse an
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingCompany"
                  label="Unternehmen"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Unternehmen"
                    {...register("company", {
                      required: true,
                    })}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihr Unternehmen an
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingBudget"
                  label="Erwartetes Budget"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Erwartetes Budget"
                    {...register("budget", {
                      required: true,
                    })}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihr Budget an
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Wie können wir Ihnen helfen?"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Wie können wir Ihnen helfen?"
                    style={{ height: "150px" }}
                    {...register("message", {
                      required: true,
                    })}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihre Nachricht an
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col lg={12} className="mx-auto">
                <ToastContainer
                  data-cy="toast_lg"
                  className="p-3"
                  position="bottom-center"
                >
                  <Toast bg="success" className="text-white" show={alert}>
                    <Toast.Body>Danke für Ihre Nachricht 🥰</Toast.Body>
                  </Toast>
                </ToastContainer>
                <Button
                  disabled={loading}
                  type="submit"
                  variant="primary"
                  className="mt-3 mb-4"
                >
                  Senden
                </Button>
              </Col>
            </Row>
          </Form>

          <p className="fst-italic">
            Möchten Sie nur 'Hallo' sagen?{" "}
            <Link to="/contact">Klicken Sie hier, um uns zu kontaktieren!</Link>
          </p>
        </Row>
      </Container>
    </Layout>
  );
};

export default WorkPage;
