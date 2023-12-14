/// <reference types="cypress" />

describe("First test suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // put the code of the test
    cy.get("input");

    //findById
    cy.get("#inputEmail1");
    //find By Class value
    cy.get(".input-full-width");
    //findByAttribute
    cy.get("[fullwidth]");
    // find by attribute and value
    cy.get('[placeholder="Email"]');

    //find By attribute
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // find using two attributes
    cy.get('[placeholder="Email"][fullwidth]');

    // find by tag, attribute id and class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    //find by Cypress testID
    cy.get('[data-cy="imputEmail1"]');
  });

  it("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    //Theory
    // get() - find elements on the page by locator globally
    // find() - fin child elements y locator
    // contains - find HTML text and by text and locator
    cy.contains("Sign in");
    cy.contains('[status="warning"]', "Sign in");
    cy.contains("nb-card", "Horizontal Form");
  });
});
