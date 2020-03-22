const { I } = inject();

module.exports = {
  // insert your locators and methods here

  async stickierPrelayout() {
    const element = await I.grabNumberOfVisibleElements(
      "//android.support.v4.view.ViewPager"
    );
    return element;
  },

  allBoardsShouldBePresent() {
    I.seeElement("//android.widget.HorizontalScrollView");
    I.see("All boards");
    I.seeElement("//android.widget.ScrollView");
    I.see("New board");
  },

  sideMenuShoulBePresent() {
    I.seeElement("//android.support.v4.view.ViewPager");
    I.seeElement('//android.widget.TextView[@text="Help"]');
    I.seeElement('//android.widget.TextView[@text="★ Starred"]');
    I.seeElement('//android.widget.TextView[@text="All boards"]');
    I.seeElement(
      "//android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup"
    );
  },

  logout() {
    I.seeElement(
      "//android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup"
    );
    I.tap(
      "//android.support.v4.view.ViewPager/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup"
    );
    I.seeElement('//android.widget.TextView[@text="Logout"]');
    I.tap('//android.widget.TextView[@text="Logout"]');
  }
};
