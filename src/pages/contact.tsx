import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
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
  const [message, setMessage] = useState("");
  // useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data);
    const response = await fetch(`/api/form`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        "content-type": `application/json`,
      },
    });

    const daten = await response.json();

    console.log(`Response from api:`, daten);
    setMessage(daten);
    reset();
  };
  if (isPageWide) {
    return (
      <Layout>
        <SEO title="Contact" />
        <Container id="contact" className="my-4">
          <Row className="align-items-center">
            <Col lg={6} className="">
              <h1 className="text-uppercase text-primary fw-bold mt-3">
                Get in Touch!
              </h1>
              <p className="lead text-dark">
                Fell free to contact us and we will get back to you as soon as
                possible!
              </p>
              <Row>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Row className="contact_form">
                    <Col md={6}>
                      <FloatingLabel
                        className="mb-4"
                        controlId="floatingFirstName"
                        label="First Name"
                      >
                        <Form.Control
                          {...register("firstName", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                          type="text"
                          placeholder="First Name"
                          isInvalid={!!errors.firstName}
                        />

                        <Form.Control.Feedback type="invalid">
                          Please provide your first name
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        className="mb-4"
                        controlId="floatingLastName"
                        label="Last Name"
                      >
                        <Form.Control
                          {...register("lastName", {
                            required: true,
                            maxLength: 80,
                          })}
                          isInvalid={!!errors.lastName}
                          required
                          type="text"
                          placeholder="Last Name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your last name
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingEmail"
                        label="E-mail Address"
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
                          Please provide your e-mail address
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>

                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Message"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          as="textarea"
                          placeholder="Message"
                          style={{ height: "180px" }}
                          {...register("message", {
                            required: true,
                          })}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a message
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>

                    <Col lg={12} className="mx-auto">
                      <Button
                        type="submit"
                        variant="primary"
                        className="mt-3 mb-4"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <p className="fst-italic">
                  Already interested?{" "}
                  <Link to="/work">Click here to get started!</Link>
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
      <SEO title="Contact" />
      <StaticImage
        src="../images/contact_sm-min.jpg"
        alt="A beautiful image of seoul man made river"
        layout="fullWidth"
      />
      <Container id="contact">
        <h1 className="text-uppercase text-primary fw-bold mt-3">
          Get in touch!
        </h1>
        <p className="lead text-dark">
          Fell free to contact us and we will get back to you as soon as
          possible!
        </p>
        <Row>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row className="contact_form">
              <Col md={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingFirstName"
                  label="First Name"
                >
                  <Form.Control
                    {...register("firstName", {
                      required: true,
                      maxLength: 80,
                    })}
                    required
                    type="text"
                    placeholder="First Name"
                    isInvalid={!!errors.firstName}
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide your first name
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingLastName"
                  label="Last Name"
                >
                  <Form.Control
                    {...register("lastName", {
                      required: true,
                      maxLength: 80,
                    })}
                    isInvalid={!!errors.lastName}
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your last name
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingEmail"
                  label="E-mail Address"
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
                    Please provide your e-mail address
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Message"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Message"
                    style={{ height: "150px" }}
                    {...register("message", {
                      required: true,
                    })}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col lg={12} className="mx-auto">
                <Button type="submit" variant="primary" className="mt-3 mb-4">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          <p className="fst-italic">
            Already interested?{" "}
            <Link to="/contact">Click here to get started!</Link>
          </p>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
