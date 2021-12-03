import { Link } from "gatsby";
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Trans } from "react-i18next";

const FAQ = () => {
  const faqArray = [
    {
      id: 1,
      question: "Why do you call yourself DevLifting?",
      answer:
        "Dev is a short form of Developing and Lifting comes from Powerlifting. Both are the passion of the creator of this website.",
    },
    {
      id: 2,
      question: "Accessibility? Is that important on websites?",
      answer:
        "It is very important. Nowadays the internet is important for everyone. With accessibility it is guaranteed, that people with disabilities can navigate through your website. The site should be navigate with key board and the screen reader for people with bad vision should be able to read the content aloud.",
    },
    {
      id: 3,
      question: "What do you mean with Conversion?",
      answer:
        "In marketing this word is used when a customer buys something on your website or signs to your newsletter. It is an active action of the customer after visiting and watching your website.",
    },
    {
      id: 4,
      question:
        "Static Sites? Are there many types of websites? I thought websites are websites?",
      answer:
        "Static websites are like posters. They are 'hard-coded' in the HTML and don't change for the visited viewer. Therefore this type of websites are used for landing page, blogs or portfolios. 'Dynamic Site's key features are mainly the CRUD (Creat, Read, Update and Delete) operations and/or a possibility to login or register. It is more complex due to a connection to a database.",
    },
    {
      id: 5,
      question: "What is the purpose of a CMS",
      answer:
        "A content managment system stores your data like assets and text. In our case, we use open-source softwares like wordpress, contentful or graphCMS. It is easy to handle and we use it to change images and text flexible. For instance: If you change an image in the CMS, the image on your website will change, too.",
    },
  ];
  return (
    <section id="faq" aria-label="faq" className="section">
      <Container>
        <h2 className="text-center text-primary fw-bold text-uppercase">
        <Trans>FREQUENTLY ASKED QUESTIONS</Trans>
        </h2>
        <p className="text-center text-dark mb-4">
        <Trans>Feel free to <Link to="/contact"><Trans>contact me</Trans></Link> if you can't find
          the answers you are looking for.</Trans>
        </p>
        <Accordion defaultActiveKey="1" flush>
          {faqArray.map((faq) => {
            const { id, question, answer } = faq;
            return (
              <Accordion.Item key={id} eventKey={id + ""}>
                <Accordion.Header as="h3">
                <Trans>
                  {question}</Trans>
                  </Accordion.Header>
                <Accordion.Body><Trans>{answer}</Trans>
                
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
