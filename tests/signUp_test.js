Feature("Miro android app Sign-up tests");

Before("At first open Sign", async (I, AuthForm) => {
  AuthForm.mainAuthFormShouldBePresent();
  I.tap('//android.widget.TextView[@text="Sign up"]');
});

Scenario("Sign up like New User", async (I, SignUpForm) => {
  SignUpForm.fillNewUserName("Keg");
  SignUpForm.fillNewUserEmail("keg.tezt@gmail.com");
  SignUpForm.fillNewUserPassword("Keg123-demo");
  SignUpForm.agreeTerms();
  SignUpForm.subscriptionsOptionShouldBePresent();
  SignUpForm.clickSignUpButton();
  SignUpForm.confirmFormShouldBePresent();
  // I.fillField(this.confirmationForm.codeInput, 'code123'); // here need to get actual code from email or use a fake code
  // I.tap(this.confirmationForm.confirmButton);
});

Scenario(
  "New User who with sign up forgot to agree Terms of Service and Privacy Policy",
  async SignUpForm => {
    SignUpForm.fillNewUserName("Keg");
    SignUpForm.fillNewUserEmail("keg.tezt+1@gmail.com");
    SignUpForm.fillNewUserPassword("Keg123-demo");
    SignUpForm.clickSignUpButton();
    SignUpForm.seeTermsAlertPopup();
    SignUpForm.agreeTerms();
  }
);

Scenario(
  "Sign up like New User with password less 8 symbols",
  async SignUpForm => {
    SignUpForm.fillNewUserName("Keg");
    SignUpForm.fillNewUserEmail("keg.tezt+2@gmail.com");
    SignUpForm.fillNewUserPassword("123");
    SignUpForm.agreeTerms();
    SignUpForm.clickSignUpButton();
    SignUpForm.alertPopupShouldBePresent(
      "Password has to be longer than 8 symbols"
    );
  }
);

Scenario(
  "Sign up like New User with password less 8 symbols",
  async SignUpForm => {
    SignUpForm.fillNewUserName("Keg");
    SignUpForm.fillNewUserEmail("keg.tezt");
    SignUpForm.fillNewUserPassword("12345678");
    SignUpForm.agreeTerms();
    SignUpForm.clickSignUpButton();
    SignUpForm.alertPopupShouldBePresent(
      "Sorry, this email is too short or invalid"
    );
  }
);
