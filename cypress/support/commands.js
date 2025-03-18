Cypress.Commands.add("login", (username, password) => {
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    username
  );
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    password
  );
  cy.get(".oxd-button").click();
});

Cypress.Commands.add("logout", () => {
  cy.get(".oxd-userdropdown-tab > .oxd-icon");
  cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
});
