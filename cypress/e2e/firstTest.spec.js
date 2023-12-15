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
    cy.contains("nb-card", "Horizontal form").find("button");
    cy.contains("nb-card", "Horizontal form").contains("Sign in");
    cy.contains("nb-card", "Horizontal form").get("button");

    //cypress chains and DOM
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
  });

  it("save subject of the command", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");
    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputPassword2"]')
      .should("contain", "Password");

    //Not correct on Cypress
    //const usingTheGrid = cy.contains("nb-card", "Using the Grid");
    //usingTheGrid.find('[for="inputPassword2"]').should("contain", "Password");

    //1 Cypress Alias
    cy.contains("nb-card", "Using the Grid").as("usingTheGrid");
    cy.get("@usingTheGrid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");
    cy.get("@usingTheGrid")
      .find('[for="inputPassword2"]')
      .should("contain", "Password");

    // 2 Cypress then() methods
    cy.contains("nb-card", "Using the Grid").then((usingTheGridFrom) => {
      cy.wrap(usingTheGridFrom)
        .find('[for="inputEmail1"]')
        .should("contain", "Email");
      cy.wrap(usingTheGridFrom)
        .find('[for="inputPassword2"]')
        .should("contain", "Password");
    });
  });

  it.only("extract text values", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    //1
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");
  });
});
