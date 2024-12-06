import pkg from 'appium';  // Default import from appium package
const { AppiumDriver } = pkg; // Destructure AppiumDriver from the imported package

import { Builder } from 'selenium-webdriver';

async function createDriver() {
  const driver = await new Builder()
    .usingServer('http://localhost:4723/wd/hub')  // Appium server URL
    .withCapabilities({
      platformName: 'Android',
      deviceName: 'emulator-5554',  // Your emulator ID
      platformVersion: '35',  // Android version
      app: './dev-release.apk',  // Path to your app
      automationName: 'UiAutomator2',
      newCommandTimeout: 300,
      ensureWebviewsHavePages: true,
      nativeWebScreenshot: true,
      noReset: true,
      ignoreHiddenApiPolicyError: true
    })
    .forBrowser('android')
    .build();
  
  return driver;
}

// Export the function to create the driver
export { createDriver };  // Use export as you're using ES modules
