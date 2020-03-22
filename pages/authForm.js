const { I } = inject();

module.exports = {
  // insert your locators and methods here

  // async checkMagicLinkButton() {
  //   const element = await I.grabNumberOfVisibleElements(
  //     '//android.widget.TextView[contains(@text, "Get Magic link")]'
  //   );
  //   return element;
  // },

  // async checkContinueWithEmailButton() {
  //   const element = await I.grabNumberOfVisibleElements(
  //     '//android.widget.TextView[@text="Continue with Email"]'
  //   );
  //   return element;
  // },

  async checkMagicLinkButton() {
    return I.seeElement(
      '//android.widget.TextView[contains(@text, "Get Magic link")]'
    );
  },

  async checkContinueWithEmailButton() {
    return I.seeElement(
      '//android.widget.TextView[@text="Continue with Email"]'
    );
  },

  checkABtestLoginScreen(magicLink, byEmail) {
    if (magicLink && !byEmail) {
      I.seeElement('//android.widget.TextView[@text="Sign up"]');
      I.seeElement('//android.widget.EditText[@text="email"]');
      I.seeElement('//android.widget.EditText[@text="password"]');
      I.seeElement('//android.widget.TextView[@text="Sign In"]');
      I.say("This is a A/B testing #1, look at ./screens");
    } else if (!magicLink && byEmail) {
      I.seeElement('//android.widget.TextView[@text="Sign up"]');
      I.seeElement('//android.widget.EditText[@text="enter your email"]');
      I.seeElement(
        '//android.widget.TextView[contains(@text, "Continue with Email")]'
      );
      I.say("This is a A/B testing #3, look at ./screens");
    } else {
      I.seeElement('//android.widget.TextView[@text="Create new account"]');
      I.seeElement('//android.widget.EditText[@text="Email"]');
      I.seeElement('//android.widget.EditText[@text="Password"]');
      I.say("This is a A/B testing #2, look at ./screens");
    }
  },

  mainAuthFormShouldBePresent() {
    I.seeElement('//android.widget.TextView[@text="Sign up"]');
    I.seeElement('//android.widget.EditText[@text="email"]');
    I.seeElement('//android.widget.EditText[@text="password"]');
    I.seeElement(
      '//android.widget.TextView[contains(@text, "Get Magic link")]'
    );
  },

  inputEmail(email) {
    I.seeElement('//android.widget.EditText[contains(@text, "mail")]');
    I.fillField('//android.widget.EditText[contains(@text, "mail")]', email);
  },
  inputPassword(password) {
    I.seeElement('//android.widget.EditText[@text="password"]');
    I.fillField('//android.widget.EditText[@text="password"]', password);
  },
  clickOnLogInButton() {
    I.seeElement('//android.widget.TextView[@text="Login"]');
    I.tap('//android.widget.TextView[@text="Sign In"]');
  },

  alertPopupShouldBePresent(title, text) {
    I.seeTextEquals(
      title,
      '//android.widget.TextView[@resource-id="android:id/alertTitle"]'
    );
    I.seeTextEquals(
      text,
      '//android.widget.TextView[@resource-id="android:id/message"]'
    );
    I.seeElement('//android.widget.Button[@resource-id="android:id/button1"]');
    I.tap('//android.widget.Button[@resource-id="android:id/button1"]');
  },

  checkYourEmailScreenShouldBePresent(email) {
    I.seeElement('//android.widget.TextView[@text="Sign in faster"]');
    I.seeElement(
      `//android.widget.TextView[@text="Use the magic link we'll send to your email to sign in instantly"]`
    );
    I.seeElement(`//android.widget.EditText[@text=${email}]`);
    I.seeElement('//android.widget.TextView[@text="Send me the Magic Link"]');
  }
};
