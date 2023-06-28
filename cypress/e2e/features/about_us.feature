Feature: Interaction with the "About us" link
	This feature enters to the About us page iside the iframe and returns the URL

	Scenario: Enter to the About us page
		Given A user navigates to the page
		When The user click the about us link inside the iframe
		Then The user should see the current URL in the Cypress Command Log