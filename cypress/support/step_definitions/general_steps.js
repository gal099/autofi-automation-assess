/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor"
import { page } from "../../pages/test_page"

Given('A user navigates to the page', () => {
    cy.visit('/html/html_iframes.htm')
})

When('The user click the about us link inside the iframe', () => {
    page.clickAboutUs()
})