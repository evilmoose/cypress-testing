/// <reference types="cypress" />

// used to describe the test sweet or group of test
describe("Navigation", () => {
    // use 'it' fuction to give a name for a specific test

    // Hook
    beforeEach(() => {
        // navigates to where you want to run tests
        cy.visit(`/conference`);
        // search for element on page
        cy.get('h1').contains("View Sessions").click();
        // click on a element and navigate to the next page)
        cy.url().should("include", "/sessions");

        cy.get("a").contains("Submit a Session!").click();
        
    })
    it("should navigate to Subimt Sessions page", () => {
        cy.url().should("include", "/sessions/new")
    });

    it("should subimt a session successfully", () => {
        // Fill the form with session informatiion
        cy.contains("Title").type("New session title");
        cy.contains("Description").type("This is the greatest session");
        cy.contains("Day").type("Thursday");
        cy.contains("Level").type("Advanced");

        // Submit the form
        cy.get("form").submit();

        // Validates that form was submitted successfully
        cy.contains("Session Submitted Successfully");
    });
});