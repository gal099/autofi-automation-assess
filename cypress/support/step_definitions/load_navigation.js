/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { page } from "../../pages/test_page"

When('The user scrolls the page until the iframe', () => {
    page.elements.mainIframe().scrollIntoView()
})

Then('The user should see the text {string}', (text) => {
    page.checkText(text)
})