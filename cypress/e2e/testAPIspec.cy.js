/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent Cypress from failing due to app errors
});

describe("API Testing", () => {
  // Get a single resource
  it("Get the Data", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/todos/1").as(
      "getResource"
    );

    cy.get("@getResource").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
      cy.log(response);
    });
  });

  // Get all resources
  it("Get all the Data", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/todos").as(
      "getAllResource"
    );

    cy.get("@getAllResource").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").that.is.not.empty;
      cy.log(response);
    });
  });

  // Create data using API (POST)
  it("Create Data using API", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "Cypress API Test",
      body: "This is the Body",
      userId: 1,
    }).as("createResource");

    cy.get("@createResource").then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include({
        title: "Cypress API Test",
        body: "This is the Body",
        userId: 1,
      });
      cy.log(response);
    });
  });

  // Update data using API (PUT)
  it("Update Data using API", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "Updated Title",
      body: "Updated Body",
      userId: 42,
    }).as("updateResource");

    cy.get("@updateResource").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include({
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 42,
      });
      cy.log(response);
    });
  });

  // Update specific data using API (PATCH)
  it("Update specific Data using API", () => {
    cy.request("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
      title: "Attack on Titan",
    }).as("updateSpecificResource");

    cy.get("@updateSpecificResource").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Attack on Titan");
      cy.log(response);
    });
  });

  // Delete data using API
  it("Delete Data using API", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").as(
      "deleteTheResource"
    );

    cy.get("@deleteTheResource").then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response);
    });
  });
});
