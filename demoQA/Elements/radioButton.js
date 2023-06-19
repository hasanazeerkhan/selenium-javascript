//Selenium + Javascript code to do some basic functionalities in demoqa website

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

async function RadioButton() {
  try {
    await driver.manage().window().maximize();
    await driver.get("https://demoqa.com/radio-button");
    await driver
      .findElement(By.xpath("//label[contains(.,'Impressive')]"))
      .click();
    await driver.findElement(By.xpath("//label[contains(.,'Yes')]")).click();
    await driver.findElements(
      By.xpath("//input[@class='custom-control-input disabled']")
    );
    await driver.close();
  } catch (error) {
    console.log(error);
  }
}
RadioButton();
