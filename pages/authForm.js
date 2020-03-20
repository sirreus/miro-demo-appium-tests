const { I } = inject();

module.exports = {
  // insert your locators and methods here
  mainAuthFormShouldBePresent() {
    I.seeElement('//android.widget.TextView[@text="Sign up"]');
    I.seeElement('//android.widget.TextView[@text="email"]');
    I.seeElement('//android.widget.TextView[@text="password"]');
  }
};
