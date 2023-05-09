/// <reference types="cypress" />
const BASE_URL = 'http://localhost:1337';
// used to describe the test sweet or group of test
describe("Navigation", () => {
    // use 'it' fuction to give a name for a specific test
    it("should navigate to conference page", () => {
        // navigates to where you want to run tests
        cy.visit(`${BASE_URL}/conference`);
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
