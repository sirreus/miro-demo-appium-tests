const { I } = inject();

module.exports = {
  // insert your locators and methods here
  form: {
    nameInput: '//android.widget.EditText[@text="Name"]',
    emailInput: '//android.widget.EditText[@text="email"]',
    passwordInput: '//android.widget.EditText[@text="password"]'
  },
  termsOption:
    '//android.widget.TextView[@text="I agree to Miro Terms of Service and Privacy Policy"]',
  subscriptionsOption:
    '//android.widget.TextView[@text="I agree to receive news and product updates from Miro"]',
  signupButton: '//android.widget.TextView[@text="Sign Up"]',
  alertPopup: {
    title:
      '//android.widget.TextView[@resource-id="android:id/alertTitle"][@text="Review the Terms"]',
    text:
      '//android.widget.TextView[@resource-id="android:id/message"][@text="Please agree to Miro Terms of Service and Privacy policy before signing up"]',
    okButton:
      '//android.widget.Button[@resource-id="android:id/button1"][@text="OK"]'
  },

  commonAlertPopup: {
    title: '//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    text: '//android.widget.TextView[@resource-id="android:id/message"]',
    okButton: '//android.widget.Button[@resource-id="android:id/button1"]'
  },

  confirmationForm: {
    container:
      '//android.widget.LinearLayout[@resource-id="com.realtimeboard:id/action_bar_root"]',
    title: '//android.widget.TextView[@text="Confirmation"]',
    text: `//android.widget.TextView[@text="We've sent you a six-digit confirmation code to ${email}. Please enter it below to confirm your email address."]`,
    codeInput: "//android.widget.EditText",
    confirmButton: '//android.widget.TextView[@text="Confirm"]'
  },

  fillNewUserName(name) {
    I.seeElement(this.form.nameInput);
    I.fillField(this.form.nameInput, name);
  },

  fillNewUserEmail(email) {
    I.seeElement(this.form.emailInput);
    I.fillField(this.form.emailInput, email);
  },

  fillNewUserPassword(password) {
    I.seeElement(this.form.passwordInput);
    I.fillField(this.form.passwordInput, password);
  },

  agreeTerms() {
    I.seeElement(this.termsOption);
    I.tap(this.termsOption);
  },

  subscriptionsOptionShouldBePresent() {
    I.seeElement(this.subscriptionsOption);
    I.tap(this.subscriptionsOption);
  },

  clickSignUpButton() {
    I.seeElement(this.signupButton);
    I.tap(this.signupButton);
  },

  confirmFormShouldBePresent(userEmail) {
    I.seeElement(this.confirmationForm.container);
    I.seeElement(this.confirmationForm.title);
    I.seeElement(this.confirmationForm.text.replace("${email}", userEmail));
    I.seeElement(this.confirmationForm.codeInput);
    I.seeElement(this.confirmationForm.confirmButton);
  },

  seeTermsAlertPopup() {
    I.seeElement(this.alertPopup.title);
    I.seeElement(this.alertPopup.text);
    I.seeElement(this.alertPopup.okButton);
    I.tap(this.alertPopup.okButton);
  },

  alertPopupShouldbepresent(text) {
    I.seeTextEquals(text, this.commonAlertPopup.title);
    I.seeElement(this.commonAlertPopup.okButton);
    I.tap(this.commonAlertPopup.okButton);
  }
};
