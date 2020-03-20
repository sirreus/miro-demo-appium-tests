Feature("Miro android app Sign-in tests");

Before("At first open Sign", async AuthForm => {
  AuthForm.mainAuthFormShouldBePresent();
});

Scenario("Login by existed User", async (AuthForm, BoardsScreen) => {
  AuthForm.inputEmail(email);
  AuthForm.inputPassword(password);
  AuthForm.clickOnSignInButton();
  BoardsScreen.allBoardsShouldBePresent();
});

Scenario("Login by existed User with incorrect passeord", async AuthForm => {
  AuthForm.inputEmail(email);
  AuthForm.inputPassword(incorrectPassword);
  AuthForm.clickOnSignInButton();
  AuthForm.alertPopupShouldBePresent();
});

Scenario("Login with not existed email", async AuthForm => {
  AuthForm.inputEmail(incorrectEmail);
  AuthForm.inputPassword(password);
  AuthForm.clickOnSignInButton();
  AuthForm.alertPopupShouldBePresent();
});

Scenario("Login by Magic link", async AuthForm => {
  AuthForm.inputEmail(email);
  AuthForm.pressOnMagicLinkButton();
  AuthForm.checkYourEmailScreenShouldBePresent();
});

Scenario("Login by Google", async AuthForm => {
  AuthForm.pressOnGoogleButton();
  AuthForm.googleAccPopupShouldBePresent();
});

Scenario("Login by Slack", async AuthForm => {
  AuthForm.pressOnSlackButton();
  AuthForm.redirectOnSlack();
});

Scenario("Login by Microsoft", async AuthForm => {
  AuthForm.pressOnMicrosoftButton();
  AuthForm.redirectOnMicrosoft();
});

Scenario("Login by Facebook", async AuthForm => {
  AuthForm.pressOnFacebookButton();
  AuthForm.redirectOnFacebook();
});

Scenario("Login by SSO", async AuthForm => {
  AuthForm.pressOnSSOButton();
  AuthForm.SSOFormShouldBePresent(email);
});
