import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useMediaQuery } from "../hooks/useMediaQuery";
import axios from "axios";
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

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;

  message: string;
}

const ContactPage = () => {
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
          title="Kontakt"
          description="Nehmen Sie Kontakt mit uns auf und wir werden uns so schnell wie möglich bei Ihnen melden!"
        />
        <Container id="contact" className="my-5">
          <Row className="align-items-center">
            <Col lg={6} className="">
              <h1 className="text-uppercase text-primary fw-bold mt-3">
                Melden Sie sich bei uns!
              </h1>
              <h2 className="lead text-dark mb-5">
                Nehmen Sie Kontakt mit uns auf und wir werden uns so schnell wie
                möglich bei Ihnen melden!
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
                          placeholder="s"
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
                        controlId="floatingTextarea"
                        label="Nachricht"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          as="textarea"
                          placeholder="Nachricht"
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
                        data-cy="toast_sm"
                        className="p-3"
                        position="bottom-center"
                      >
                        <Toast bg="success" className="text-white" show={alert}>
                          <Toast.Body>Danke für deine Nachricht 🥰</Toast.Body>
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
                  Schon interessiert?{" "}
                  <Link to="/work">Klicken Sie hier, um loszulegen!</Link>
                </p>
              </Row>
            </Col>
            <Col lg={6}>
              <StaticImage
                src="../images/contact_sm-min.jpg"
                alt="A beautiful image of seoul man made river"
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
        title="Contact"
        description="Contact us and we will get back to you as soon as possible"
      />
      <StaticImage
        src="../images/contact_sm-min.jpg"
        alt="A beautiful image of seoul man made river"
        layout="fullWidth"
      />
      <Container id="contact">
        <h1 className="text-uppercase text-primary fw-bold mt-3">
          Melden Sie sich bei uns!
        </h1>
        <h2 className="lead text-dark mb-4">
          Nehmen Sie Kontakt mit uns auf und wir werden uns so schnell wie
          möglich bei Ihnen melden!
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
                    placeholder="s"
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
                  controlId="floatingTextarea"
                  label="Nachricht"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Nachricht"
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
                  data-cy="toast_sm"
                  className="p-3"
                  position="bottom-center"
                >
                  <Toast bg="success" className="text-white" show={alert}>
                    <Toast.Body>Danke für deine Nachricht 🥰</Toast.Body>
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
            Schon interessiert?{" "}
            <Link to="/work">Klicken Sie hier, um loszulegen!</Link>
          </p>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactPage;
