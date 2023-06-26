const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

async function datePicker() {
  try {
    const url = "https://demoqa.com/date-picker";
    console.log("Executing tests");
    await driver.get(url);
    await driver.manage().window().maximize();
    console.log("Maximized screen");
  } catch (error) {
    console.log("An error has occurred: " + error);
  } finally {
    console.log("Closing chrome...");
  }
}
datePicker();
