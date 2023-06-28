/// <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor"
import { page } from "../../pages/test_page"

Then('The user should see the current URL in the Cypress Command Log', () => {
    page.elements.currentUrl()
    .then((url) => {
        cy.log(`Current URL: ${url}`);
    });
})