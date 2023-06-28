Feature: Login
    This feature logs in to the site

    Scenario: Logis to the site
        Given A user navigates to the page
        When The user clicks on the Login button
        And Enters their credentials, and clicks on the login button
            | emailId                | password     |
            | hopihir877@extemer.com | TempPass123! |
        Then The user should log in successfully