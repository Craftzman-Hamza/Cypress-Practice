export class DemoSitePage {
  laptopPage() {
    cy.get(".list-group a").contains("Laptops").click();
  }

  monitorPage() {
    cy.get(".list-group a").contains("Monitors").click(); // Fix: "Monitor" → "Monitors" (as per site)
  }

  phonesPage() {
    cy.get(".list-group a").contains("Phones").click();
  }
}

export const navigateTo = new DemoSitePage();
