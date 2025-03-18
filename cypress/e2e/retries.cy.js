/// <reference types="cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent failures due to uncaught exceptions
});

// Set global retry strategy
describe("Retries", { retries: { runMode: 1, openMode: 4 } }, () => {
  context("Mobile Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[id="userName-label"]').as("aliasNameLabel");
      cy.fixture("example.json").as("aliasFixtureFile");
    });

    it("Mobile View Test", () => {
      cy.viewport("iphone-6"); // Ensures mobile view before testing

      cy.get(".navbar").find("button").should("be.visible").click();
      cy.get(".left-pannel").should("not.exist");
    });
  });
});
