/// <reference types="cypress"/>

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Visit Orange HRM", () => {
    cy.fixture("example").then(function (data) {
      this.data = data;

      cy.login(this.data.username, this.data.password);

      cy.get(":nth-child(8) > .oxd-main-menu-item > .oxd-text").contains(
        "Dashboard"
      );
      cy.contains("Invalid credentials").should("not.exist");

      cy.url().should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
      );
    });
  });

  it.skip("Should not Login to Website", () => {
    cy.fixture("example").then(function (data) {
      this.data = data;

      cy.login(this.data.username, this.data.password);

      cy.get(".oxd-button").click();
      cy.contains("Invalid credentials").should("exist");

      cy.url().should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
    });
  });

  afterEach(() => {
    cy.logout();
  });
});
