const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    Appium: {
      app: "bs://04ca39c85924f1b819a58085d0f1c9e255bcc53f",
      host: "hub-cloud.browserstack.com",
      port: 4444,
      user: "kirillegorov3",
      key: "VDs5soy7MqXa3m6qp5sd",
      device: "Google Pixel 3"
    }
  },
  include: {
    I: "./steps_file.js",
    AuthForm: "./pages/authForm.js",
    SignUpForm: "./pages/signUpForm.js"
  },
  bootstrap: null,
  mocha: {},
  name: "miro-demo-appium-tests",
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"]
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
