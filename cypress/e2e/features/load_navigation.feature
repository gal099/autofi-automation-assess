Feature: Page load and navigation
	This feature loads the page and navigates into the page below “Document content goes here…“

	Scenario: Page loading
		Given A user navigates to the page
		When The user scrolls the page until the iframe
		Then The user should see the text 'Document content goes here...'