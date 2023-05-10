/// <reference types="cypress" />

// used to describe the test sweet or group of test
describe("Navigation", () => {
    // use 'it' fuction to give a name for a specific test
    it("should navigate to conference page", () => {
        // navigates to where you want to run tests
        cy.visit(`/conference`);
        // search for element on page
        cy.get('h1').contains("View Sessions").click();
        // click on a element and navigate to the next page)
        cy.url().should("include", "/sessions");
    });
});

// Hooks
describe("Hooks", () => { // group together test in the describe block
    before(() => {
        // root-level hook
        // runs once before all tests
    })
    
    beforeEach(() => {
        // root-level hook
        // runs before every test block
    })
    
    afterEach(() => {
        // runs after each test block
    })
    
    after(() => {
        // runs once all tests are done
    })
})

// Interacting with Elements Using Commands
// Built in commands
// Categorized as parent, child, and dual commands
// You can create custom commands, and override existing commands.

// Parent commands: Begin a new chain of Cypress commands
/*cy.visit("/conference");    // passurl to visit
cy.get("h1");   // get HTML element
cy.request("http://dev.local/seed");    // http request: default is get.
cy.exec("npm run build");   // Run system command
cy.intercept("/users/**");  // manage behavior of network request and responses.
*/
// Child commands
// Chained off parent commands or other child commands
//cy.get("[data-cy=speakerProfil").click();

