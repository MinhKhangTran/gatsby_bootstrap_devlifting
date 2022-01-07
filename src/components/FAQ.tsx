import { Link } from "gatsby";
import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  const faqArray = [
    {
      id: 1,
      question: "Was bedeutet DevLifting?",
      answer:
        "Dev ist die Kurzform von Developing (engl: Entwickeln) und Lifting kommt vom PowerLifting. Beides ist Leidenschaft des Schöfpers dieser Website",
    },
    {
      id: 2,
      question:
        "Zugänglichkeit oder Barrierefreiheit? Ist das wichtig für Websites?",
      answer:
        "Es ist sehr wichtig. Heutzutage ist das Internet für jeden wichtig. Mit der Barrierefreiheit ist gewährleistet, dass Menschen mit Behinderungen durch Ihre Website navigieren können. Die Website sollte mit der Tastatur navigierbar sein und der Screenreader für Menschen mit Sehschwäche sollte den Inhalt laut vorlesen können.",
    },
    {
      id: 3,
      question: "Was bedeutet Konversion?",
      answer:
        "Im Marketing wird dieses Wort verwendet, wenn ein Kunde etwas auf Ihrer Website kauft oder sich für Ihren Newsletter anmeldet. Es ist eine aktive Handlung des Kunden, nachdem er Ihre Website besucht und angesehen hat.",
    },
    {
      id: 4,
      question:
        "Statische Websites? Gibt es viele Arten von Websites? Ich dachte, Websites sind Websites?",
      answer:
        "Statische Websites sind wie Plakate. Sie sind im HTML-Code 'fest vorgeschrieben' und ändern sich für den Besucher nicht. Daher wird diese Art von Websites für Geschäfts- und Marketingseiten, Landing Pages, Blogs oder Portfolios verwendet. Die Hauptmerkmale einer dynamischen Website sind hauptsächlich CRUD-Operationen (Erstellen (engl. Create), Lesen (engl. Read), Aktualisieren (engl. Update) und Löschen (engl. Delete)) und/oder eine Möglichkeit zur Anmeldung oder Registrierung. Sie ist komplexer, da eine Verbindung zu einer Datenbank besteht.",
    },
    {
      id: 5,
      question: "Was ist der Zweck eines CMS?",
      answer:
        "Ein Content-Management-System speichert Ihre Daten wie Bilder und Texte. In unserem Fall verwenden wir Software wie Wordpress, Contentful oder GraphCMS.  Sie ist einfach zu handhaben und wir nutzen sie, um Bilder und Texte flexibel zu ändern. Zum Beispiel: Wenn Sie ein Bild im CMS ändern, wird sich auch das Bild auf Ihrer Website ändern.",
    },
  ];
  return (
    <section id="faq" aria-label="faq" className="section">
      <Container>
        <h2 className="text-center text-primary fw-bold text-uppercase">
          HÄUFIG GESTELLTE FRAGEN
        </h2>
        <p className="text-center text-dark mb-4">
          Sie können <Link to="/contact">mich gerne kontaktieren</Link>, wenn
          Sie die gewünschten Antworten nicht finden.
        </p>
        <Accordion defaultActiveKey="1" flush>
          {faqArray.map((faq) => {
            const { id, question, answer } = faq;
            return (
              <Accordion.Item key={id} eventKey={id + ""}>
                <Accordion.Header as="h3">{question}</Accordion.Header>
                <Accordion.Body>{answer}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
