/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent Cypress from failing tests due to app errors
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ); // Ensure correct URL
  });

  it("Waits for Element", () => {
    cy.get(".cypress").should("exist"); // Ensure element is found before proceeding

    cy.get(".class-cypress", { timeout: 10000 }).should("be.visible"); // Waits for element up to 10s
  });

  it("Waits for a Certain Time", () => {
    cy.wait(5000); // Avoid unnecessary waits; use explicit waits for elements instead

    cy.get(".list-group").find("a").contains("Laptops").should("be.visible"); // Ensure Laptops link is visible
  });

  it("Waits for a Network Route", () => {
    cy.intercept("GET", "/entries").as("waitForEntries");
    cy.intercept("POST", "/bycat").as("waitForLaptopsCall");

    cy.wait("@waitForEntries"); // Wait for API response before proceeding

    cy.get(".list-group").find("a").contains("Laptops").click();

    cy.wait("@waitForLaptopsCall"); // Ensure API call is completed
  });
});
