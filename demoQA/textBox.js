//Selenium + Javascript code to do some basic functionalities in demoqa website

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

async function textBox(
  givenInputName,
  givenInputEmail,
  givenInputCurrentAddress,
  givenInputPermanentAddress
) {
  try {
    const inputName = givenInputName;
    const inputEmail = givenInputEmail;
    const inputCurrentAddress = givenInputCurrentAddress;
    const inputPermanentAddress = givenInputPermanentAddress;

    await driver.get("https://demoqa.com/text-box");
    await driver.manage().window().maximize();
    await driver.findElement(By.id("userName")).sendKeys(inputName);
    await driver.findElement(By.id("userEmail")).sendKeys(inputEmail);
    await driver
      .findElement(By.id("currentAddress"))
      .sendKeys(inputCurrentAddress);
    await driver
      .findElement(By.id("permanentAddress"))
      .sendKeys(inputPermanentAddress);
    await driver.findElement(By.id("submit")).click();
    console.log("Input submitted for given data");
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

textBox(
  "User Name",
  "theawsomeuser@example.com",
  "Some where in this beautiful Earth",
  "Same beautiful Earth"
);
