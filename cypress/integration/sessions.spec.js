/// <reference types="cypress" />

// used to describe the test sweet or group of test
describe("Sessions", () => {
    // use 'it' fuction to give a name for a specific test
    it("should navigate to conference sessions page and view day filter buttons", () => {
        // navigates to where you want to run tests
        cy.visit(`/conference`);
        // search for element on page
        cy.get('h1').contains("View Sessions").click();
        // click on a element and navigate to the next page)
        cy.url().should("include", "/sessions");

        // Validate that button to filter by day exists
        // Example of using 'data-cy'
        cy.get("[data-cy=all-sessions]");
        cy.get("[data-cy=wednesday]");
        cy.get("[data-cy=thursday]");
        cy.get("[data-cy=friday]");
    });
});