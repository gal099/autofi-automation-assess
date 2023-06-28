# Autofi - Automation Assessment

## Description:

Create an interaction with a website where the URL tutorialspoint.com/html/html_iframes.htm is loaded and the program navigates into the page below “Document content goes here…“, interacts with the “About us” link, then returns the URL of the new page, a list of all URLs on the page, a list of all buttons on the page, a list of all text input fields on the page, then creates an account and logs into the site. The output should be both via console and output to the appended file."

## Usage

1. Clone the repository
```bash
git clone git@github.com:gal099/autofi-automation-assess.git
```
2. Enter the folder
```bash
cd autom_assess
```
3. NVM installation
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
4. Node installation
```bash
nvm use
```
5. Run `npm install` command. After that, you will be able to start running the tests.
```bash
npm install
```
---
## Project strucure:

```
AUTOM_ASSESS
└── cypress
    ├── e2e
    │   ├── features (Gherkin files)
    │   ├── pages (Element definitions and methods)
    └── support
        └── step_definitions (Test step implementations)
```
---

## Running tests

All of these commands will execute the tests in headless mode. At the end of the test a video will be created in /videos.

To run all the tests use this command:
```
npx cypress run --browser chrome
```



> **Note**: If a test fails due to a time-out error, relaunch the test to check the result using the command corresponding to the failed test.

- Load the page and navigates into the page below “Document content goes here…“
```bash
npx cypress run --spec "cypress/e2e/features/load_navigation.feature" --browser chrome
```
- Interacts with the “About us” link, then returns the URL of the new page
```bash
npx cypress run --spec "cypress/e2e/features/about_us.feature" --browser chrome
```
- URLs list
```bash
npx cypress run --spec "cypress/e2e/features/urls_list.feature" --browser chrome
```
- Buttons list
```bash
npx cypress run --spec "cypress/e2e/features/buttons_list.feature" --browser chrome
```
- Text inputs list
```bash
npx cypress run --spec "cypress/e2e/features/text_inputs_list.feature" --browser chrome
```
- Login to the page
```bash
npx cypress run --spec "cypress/e2e/features/login.feature" --browser chrome
```
---

To watch the Cypress Command Log, use the Cypress user interface to run the tests. 
```bash
npx cypress open
```

---
To print a test result in a file, add the following snippet at the end of the command:
```bash
>> cypress/test_result.txt
```
Example: 
```bash
npx cypress run --spec "cypress/e2e/features/login.feature" --browser chrome >> cypress/test_result.txt
```
---