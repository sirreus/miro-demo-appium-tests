# Mobile demo tests for Miro Android application

Tests of this project are based on CodeceptJS (https://codecept.io/) framework which uses Appium (http://appium.io/) like a helper.

On the command line from the project directory:

- To setup this project (package dependencies), use the command:

  `npm i`

- To local install Appium, use the command:

  `npm run setup`

- To run tests, use the command:

  `npm run test`

Also in this repository there is a simple login test on a clean WebdriverIO. To run it, execute the following command on the command line:

  `node tests/pureWdIO-login_test.js`

The behavior of all tests was based on this screen of the A\B testing version:

![auth screen](/screens/A-B_screen_1.png)
