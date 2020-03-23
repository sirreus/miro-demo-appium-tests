exports.config = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9.0",
    deviceName: "Google Pixel 3",
    app: "/Users/kirillegorov/_Test/appium-test/Miro_v3.6.6.apk",
    appPackage: "com.realtimeboard",
    appActivity: "MainActivity",
    automationName: "UiAutomator2",
    deviceId: "emulator-5554"
  }
};
