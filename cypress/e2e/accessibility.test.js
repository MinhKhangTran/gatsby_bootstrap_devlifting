/// <reference types="Cypress" />

const urls = ["/about", "/contact", "/work", "/privacy", "/terms"];
describe("Accessibility tests for home page", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.viewport("macbook-16");
    cy.checkA11y();
  });
  it("Check mobile viewport for a11y", () => {
    cy.viewport("iphone-8");
    cy.checkA11y();
  });
  it("Check tablet viewport for a11y", () => {
    cy.viewport("ipad-2");
    cy.checkA11y();
  });
});

describe("Accessibility tests pages", () => {
  urls.forEach((url) => {
    it(`Accessibility tests on ${url}`, () => {
      cy.visit(url).get("main").injectAxe();
    });
    it("Has no detectable accessibility violations on load", () => {
      cy.viewport("macbook-16");
      cy.checkA11y();
    });
    it("Check mobile viewport for a11y", () => {
      cy.viewport("iphone-8");
      cy.checkA11y();
    });
    it("Check tablet viewport for a11y", () => {
      cy.viewport("ipad-2");
      cy.checkA11y();
    });
  });
});
