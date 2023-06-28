class Page {
    elements = {
        button: () => cy.get('.btn'), // Select all <button> elements on the page
        link: () => cy.get('a'), // Select all <a> elements on the page
        input: () => cy.get('input'), // Select all <input> elements on the page
        mainIframe: () => cy.get('.result'), // Select the main iframe
        currentUrl: () => cy.url(), // Get the current URL
        emailIdInput: () => cy.get('#user_email'), //Select the Email ID input
        passwordInput: () => cy.get('#user_password'), //Select the Password input
        loginBtn: () => cy.get('#user_login'), //Select the Login button
    };

    checkText(text) {
        this.elements.mainIframe() // Find the main iframe element
            .iframe() // Switch the context to the main iframe
            .contains(text)
    }

    /**
    * Clicks the About us link inside the nested iframe
    */
    clickAboutUs() {
        this.elements.mainIframe() // Find the main iframe element
            .iframe() // Switch the context to the main iframe
            .find("iframe") // Find the nested iframe within the main iframe
            .iframe() // Switch the context to the nested iframe
            .find('a.nav-link.fw-bold') // Find the ABout us link
            .contains('About us') // Check if element contains the text "About us"
            .click({ force: true }); //Click on the element
    }

    /**
    * Gets buttons
    */
    getButtons() {
        cy
        this.elements.mainIframe()
            .iframe()
            .find("iframe")
            .iframe()
        this.elements.button()
            .each(($button) => { // Iterate over each <button> element
                const text = $button.text(); // Gets the text of the button
                cy.log(`Button name: ${text}`); // Display the text in the Cypress console
            });
    }

    /**
    * Gets links
    */
    getLinks() {
        cy
        this.elements.mainIframe()
            .iframe()
            .find("iframe")
            .iframe()
        this.elements.link()
            .each(($link) => { // Iterates over each <a> element
                const url = $link.prop('href'); // Gets the 'href' property containing the URL
                cy.log(`URL: ${url}`); // Display the URL in the Cypress console
            })
    }

    /**
    * Gets text input fields
    */
    getInputs() {
        cy
        this.elements.mainIframe()
            .iframe()
            .find("iframe")
            .iframe()
        this.elements.input()
            .each(($input) => { // Iterate over each <input> element
                cy.wrap($input) // Wrap the input element to create a Cypress object
                    .invoke('attr', 'placeholder') // Invoke the 'attr' method to get the value of the 'placeholder' attribute
                    .then((text) => { // Handle the returned value
                        cy.log(`Input placeholder: ${text}`); // Display the input placeholder text in the Cypress console
                    });
            })
    }

    /**
     * Submits the login form with the provided emailId and password.
     * @param {string} emailId - The email ID to be entered in the email input field.
     * @param {string} password - The password to be entered in the password input field.
     */
    submitLogin(emailId, password) {
        this.elements.emailIdInput().should('be.visible').clear().type(emailId); // Enter the emailId parameter value into the email input field
        this.elements.passwordInput().should('be.visible').clear().type(password); // Enter the password parameter value into the password input field
        this.elements.loginBtn().should('be.visible').click(); // Click on the login button
    }
}

export const page = new Page();