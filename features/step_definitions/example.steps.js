import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import { createDriver } from '../../appium/appium-config.js';  // Import using ES module syntax

let driver;  // Declare driver here

Before(async function () {
  // Initialize driver before each scenario
  driver = await createDriver();
});

After(async function () {
  // Quit driver after each scenario
  if (driver) {
    await driver.quit();
  }
});

Given('the app is launched', async () => {
  // The driver is already initialized by createDriver
  console.log('App Launched Successfully!');
});

When('the user clicks the first button', async () => {
  const button = await driver.elementByXPath("//android.widget.Button");
  await button.click();
  console.log('First button clicked');
});

Then('the second button should be clicked', async () => {
  const button1 = await driver.elementByXPath("//androidx.compose.ui.platform.q1/android.view.View/android.view.View/android.view.View[1]/android.widget.Button");
  await button1.click();
  console.log('Second button clicked');
});
