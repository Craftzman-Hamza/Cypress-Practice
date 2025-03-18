/// <reference types="cypress"/>

import { navigateTo } from "../support/demoSitePage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent Cypress from failing on uncaught exceptions
});

describe("Page Object Model", () => {
  it.only("Test with Page Object", () => {
    cy.visit("https://demoblaze.com/");

    // Intercepting API requests
    cy.intercept("GET", "/entries").as("waitForEntries");
    cy.intercept("POST", "/bycat", { category: "notebooks" }).as(
      "waitForLaptops"
    );
    cy.intercept("POST", "/bycat", { category: "monitors" }).as(
      "waitForMonitors"
    );
    cy.intercept("POST", "/bycat", { category: "phones" }).as("waitForPhones");

    // Wait for initial entries to load
    cy.wait("@waitForEntries");

    // Navigate through categories
    navigateTo.laptopPage();
    cy.wait("@waitForLaptops");

    navigateTo.monitorPage();
    cy.wait("@waitForMonitors");

    navigateTo.phonesPage();
    cy.wait("@waitForPhones");

    navigateTo.laptopPage(); // No need to wait again
  });
});
