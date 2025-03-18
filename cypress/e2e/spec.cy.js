/// <reference types="cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent Cypress from failing due to app errors
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/"); // Ensure the page loads before each test
    cy.get('[id="userName-label"]').as("aliasNameLabel");
    cy.fixture("example.json").as("aliasFixtureFile");
  });

  it("Interaction with Elements", () => {
    cy.get("#firstName").type("Cypress");

    // Navigate elements dynamically
    cy.get("#userForm").find("#userName-wrapper").next();
    cy.get("#userForm").find("div").first();
    cy.get("#userForm").find("div").last();
    cy.get("#userForm").find("#userName-label").parent();
    cy.get("#userForm").find("#userName-wrapper").children();

    // Interacting with radio buttons
    cy.get("#genterWrapper").find('[value="Male"]').check(); // No need for force:true unless hidden

    // Check and uncheck a checkbox
    cy.get("#hobbiesWrapper").find("#hobbies-checkbox-1").check();
    cy.get("#hobbiesWrapper").find("#hobbies-checkbox-1").uncheck();
  });

  it("Yield subject from commands", () => {
    cy.get("@aliasNameLabel").should("have.text", "Name");
  });

  it("Wrap the Elements", () => {
    cy.get("@aliasNameLabel").should("contain", "Name");
  });

  it("Invoke a Function", () => {
    cy.get("@aliasNameLabel").invoke("text").should("eq", "Name");

    cy.get("@aliasNameLabel")
      .invoke("attr", "class")
      .should("eq", "form-label");
  });

  it("Chai jQuery Assertion", () => {
    cy.get("@aliasNameLabel").should(($x) => {
      expect($x.text()).to.eq("Name");
    });
  });

  it("Each Method", () => {
    cy.get("#hobbiesWrapper")
      .find('[type="checkbox"]')
      .each(($el) => {
        cy.wrap($el).check();
      });
  });

  it("Aliases", () => {
    cy.get("@aliasNameLabel").should("have.text", "Name");

    cy.get("@aliasFixtureFile").then((data) => {
      cy.get("#firstName").type(data.username);
    });
  });
});
