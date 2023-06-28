Feature: List of all buttons on the page
	This feature gets all the text inputs on the page and displays them in the Cypress Command Log

	Scenario: Display all text inputs on the page
		Given A user navigates to the page
		When The user click the about us link inside the iframe
		Then The user should see a list of all the text inputs in the Cypress Command Log