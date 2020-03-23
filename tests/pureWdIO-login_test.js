const wdio = require("webdriverio");
const assert = require("assert");
const config = require("../appium.conf").config;

async function LoginByExistedUser() {
  const user = {
    email: "keg.tezt@gmail.com",
    password: "keg123qwerty"
  };
  const client = await wdio.remote(config);
  client.setImplicitTimeout(5000);

  // waiting for displayed content
  const mainFrame = await await client.$(
    '//android.widget.LinearLayout[@resource-id="com.realtimeboard:id/action_bar_root"]'
  );
  mainFrame.waitForDisplayed(10000);
  const contentFrame = await await client.$(
    '//android.widget.FrameLayout[@resource-id="android:id/content"]'
  );
  mainFrame.waitForDisplayed(10000);

  // main elements should be present
  (await client.$('android.widget.TextView[@text="Sign up"]')).waitForDisplayed(
    5000
  );
  const emailField = await client.$('//android.widget.EditText[@text="email"]');
  const passwordField = await client.$(
    '//android.widget.EditText[@text="password"]'
  );
  const signinButton = await client.$(
    '//android.widget.TextView[@text="Sign In"]'
  );
  await client.$(
    '//android.widget.TextView[contains(@text, "Get Magic link")]'
  );

  // set email/password for login
  await emailField.setValue(user.email);
  const emailValue = await emailField.getText();
  assert.equal(emailValue, user.email);

  await passwordField.setValue(user.password);
  // const passwordValue = await passwordField.getText();
  // assert.equal(passwordValue, user.password); // <-- AssertionError [ERR_ASSERTION]: '••••••••••••' == 'keg123qwerty'

  await client.touchAction({
    action: "tap",
    element: signinButton
  });

  await client.deleteSession();
}

LoginByExistedUser();
