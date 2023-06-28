Feature: List of all buttons on the page
	This feature gets all the buttons on the page and displays them in the Cypress Command Log

	Scenario: Display all buttons on the page
		Given A user navigates to the page
		When The user click the about us link inside the iframe
		Then The user should see a list of all the buttons in the Cypress Command Log