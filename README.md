# SDET-Take-Home-Test

This repository contains an end-to-end test suite for the example web application "Sauce Demo". The test suite is written in TypeScript using the Playwright testing framework.


Installation:

Before running the test suite, make sure you have Node.js and npm installed on your machine.


Clone this repository:

```git clone https://github.com/Cerbu02/SDET-Take-Home-Test.git```


Install dependencies:

```npm install```


Running the Test Suite:

To run the test suite, execute the follow command ```npx playwright test e2e```

To run an individual test, execute the command ```npx playwright test e2e/``` followed by the file name

To view the results of the Allure report, use the command ```allure open ./allure-report```
