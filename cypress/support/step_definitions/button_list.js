/// <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor"
import { page } from "../../pages/test_page"

Then('The user should see a list of all the buttons in the Cypress Command Log', () => {
    page.getButtons()
})






