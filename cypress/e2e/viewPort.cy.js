/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent Cypress from failing due to app errors
});

describe("View Port", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ); // Ensure correct URL
    cy.get('[id="userName-label"]').as("aliasNameLabel");
    cy.fixture("example.json").as("aliasFixtureFile");
  });

  context("Mobile Test", () => {
    beforeEach(() => {
      cy.viewport("iphone-6"); // Set mobile viewport before test
    });

    it("Mobile View Test", () => {
      cy.get(".navbar").find("button").click();
      cy.get(".left-pannel").should("not.exist"); // Ensure side panel does not appear on mobile
    });
  });

  it("Web View Test", () => {
    cy.get(".navbar").find("button").click();
    cy.get(".left-pannel").should("exist"); // In web view, the panel should exist
  });
});
