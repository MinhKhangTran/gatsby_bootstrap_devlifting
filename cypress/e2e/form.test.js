/// <reference types="Cypress" />
describe("Check contact form in mobile view", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("Form success mobile", () => {
    cy.viewport("iphone-8");
    cy.get("#floatingFirstName").type("John");
    cy.get("#floatingLastName").type("Doe");
    cy.get("#floatingEmail").type("johndoe@example.com");
    cy.get("#floatingTextarea").type(
      "this is a test with cypress on mobile view ignore it please"
    );
    cy.contains("Submit").click();
    cy.get("[data-cy=toast_sm]").should("be.visible");
  });
});
describe("Check contact form in mobile view", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("Form fail mobile", () => {
    cy.viewport("iphone-8");
    cy.contains("Submit").click();
    cy.get(":nth-child(1) > .mb-4 > .invalid-feedback").should("be.visible");
  });
});
describe("Check contact form in desktop view", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("Form success desktop", () => {
    cy.viewport("macbook-16");
    cy.get("#floatingFirstName").type("John");
    cy.get("#floatingLastName").type("Doe");
    cy.get("#floatingEmail").type("johndoe@example.com");
    cy.get("#floatingTextarea").type(
      "this is a test with cypress on desktop view ignore it please"
    );
    cy.contains("Submit").click();
    cy.get("[data-cy=toast_lg]").should("be.visible");
  });
});
describe("Check contact form in desktop view", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("Form fail desktop", () => {
    cy.viewport("macbook-16");
    cy.contains("Submit").click();
    cy.get(":nth-child(1) > .mb-4 > .invalid-feedback").should("be.visible");
  });
});

// work page

describe("Check work form in mobile view", () => {
  beforeEach(() => {
    cy.visit("/work");
  });
  it("Form success mobile", () => {
    cy.viewport("iphone-8");
    cy.get("#floatingFirstName").type("John");
    cy.get("#floatingLastName").type("Doe");
    cy.get("#floatingEmail").type("johndoe@example.com");
    cy.get("#floatingCompany").type("JohnDoe GmbH");
    cy.get("#floatingBudget").type("1000");
    cy.get("#floatingTextarea").type(
      "this is a test with cypress on mobile view ignore it please"
    );
    cy.contains("Submit").click();
    cy.get("[data-cy=toast_sm]").should("be.visible");
  });
});
describe("Check work form in mobile view", () => {
  beforeEach(() => {
    cy.visit("/work");
  });
  it("Form fail mobile", () => {
    cy.viewport("iphone-8");
    cy.contains("Submit").click();
    cy.get(":nth-child(1) > .mb-4 > .invalid-feedback").should("be.visible");
  });
});
describe("Check work form in desktop view", () => {
  beforeEach(() => {
    cy.visit("/work");
  });
  it("Form success mobile", () => {
    cy.viewport("macbook-16");
    cy.get("#floatingFirstName").type("John");
    cy.get("#floatingLastName").type("Doe");
    cy.get("#floatingEmail").type("johndoe@example.com");
    cy.get("#floatingCompany").type("JohnDoe GmbH");
    cy.get("#floatingBudget").type("1000");
    cy.get("#floatingTextarea").type(
      "this is a test with cypress on desktop view ignore it please"
    );
    cy.contains("Submit").click();
    cy.get("[data-cy=toast_lg]").should("be.visible");
  });
});
describe("Check work form in desktop view", () => {
  beforeEach(() => {
    cy.visit("/work");
  });
  it("Form fail desktop", () => {
    cy.viewport("macbook-16");
    cy.contains("Submit").click();
    cy.get(":nth-child(1) > .mb-4 > .invalid-feedback").should("be.visible");
  });
});
