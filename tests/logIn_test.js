Feature("Miro android app Login tests");

// Before("Main screen shoul be present", AuthForm => {
//   AuthForm.mainAuthFormShouldBePresent();
// });

Scenario.only("Check login screen A/B testing", async AuthForm => {
  const magicLink = await AuthForm.checkMagicLinkButton();
  const byEmail = await AuthForm.checkContinueWithEmailButton();
  console.log(magicLink, byEmail);
  AuthForm.checkABtestLoginScreen(magicLink, byEmail);
});

Scenario("Login by existed User", async (I, AuthForm, BoardsScreen) => {
  AuthForm.mainAuthFormShouldBePresent();
  AuthForm.inputEmail("keg.tezt@gmail.com");
  AuthForm.inputPassword("keg123qwerty");
  AuthForm.clickOnLogInButton();
  const stickierPrelayout = await BoardsScreen.stickierPrelayout();
  if (stickierPrelayout > 0) {
    I.tap(
      "//android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup[3]"
    );
  }
  BoardsScreen.allBoardsShouldBePresent();
  I.tap('//android.widget.TextView[@text=""All boards]');
  BoardsScreen.sideMenuShoulBePresent();
  BoardsScreen.logout();
  AuthForm.mainAuthFormShouldBePresent();
});

Scenario("Login by existed User with incorrect password", async AuthForm => {
  AuthForm.inputEmail("keg.tezt@gmail.com");
  AuthForm.inputPassword("keg123");
  AuthForm.clickOnSignInButton();
  AuthForm.alertPopupShouldBePresent(
    "Invalid username or password",
    "Please try again"
  );
});

Scenario("Login with not existed email", async AuthForm => {
  AuthForm.inputEmail("keg@gmail.com");
  AuthForm.inputPassword("keg123qwerty");
  AuthForm.clickOnSignInButton();
  AuthForm.alertPopupShouldBePresent(
    "Invalid username or password",
    "Please try again"
  );
});

Scenario("Login by Magic link", async AuthForm => {
  const email = "keg.tezt@gmail.com";
  AuthForm.inputEmail(email);
  AuthForm.pressOnMagicLinkButton();
  AuthForm.checkYourEmailScreenShouldBePresent(email);
});

// Scenario("Login by Google", async AuthForm => {
//   AuthForm.pressOnGoogleButton();
//   AuthForm.googleAccPopupShouldBePresent();
// });

// Scenario("Login by Slack", async AuthForm => {
//   AuthForm.pressOnSlackButton();
//   AuthForm.redirectOnSlack();
// });

// Scenario("Login by Microsoft", async AuthForm => {
//   AuthForm.pressOnMicrosoftButton();
//   AuthForm.redirectOnMicrosoft();
// });

// Scenario("Login by Facebook", async AuthForm => {
//   AuthForm.pressOnFacebookButton();
//   AuthForm.redirectOnFacebook();
// });

// Scenario("Login by SSO", async AuthForm => {
//   AuthForm.pressOnSSOButton();
//   AuthForm.SSOFormShouldBePresent(email);
// });
