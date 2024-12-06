import { Before, After } from '@cucumber/cucumber';
// import { driver } from '../../appium/appium-config.js';
import { createDriver } from '../../appium/appium-config.js';  // Path to your config

let driver;
Before(async function() {
    // Initialize Appium driver with capabilities
    driver = await createDriver();
    await driver.init({
        "platformName": "Android",
        "deviceName": "emulator-5554",
        "platformVersion": "35", 
        "app": "./dev-release.apk",
        "automationName": "UiAutomator2",   
        "newCommandTimeout": 300,
        "ensureWebviewsHavePages": true,
        "nativeWebScreenshot": true,
        "noReset": true,
        "ignoreHiddenApiPolicyError": true
    });
});

After(async function () {
    if (driver) {
      await driver.quit();
    }
  });   
