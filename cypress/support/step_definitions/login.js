/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { page } from "../../pages/test_page";

When('The user clicks on the Login button', () => {
    cy.get('body > header > nav > div > div.navbar-nav.d-lg-inline-block.nav-login > a').eq(0).click();
})

When('Enters their credentials, and clicks on the login button', (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.emailId);
        cy.log(row.password);
        page.submitLogin(row.emailId, row.password)   
    })
})

Then('The user should log in successfully', () => {
    cy.url().should('include', 'dashboard')
})