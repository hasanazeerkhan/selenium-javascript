//Selenium + Javascript code to do some basic functionalities in demoqa website

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

async function checkBox() {
  try {
    await driver.get("https://demoqa.com/checkbox");
    await driver.manage().window().maximize();

    //Scenario 1 : Verifying enabling home button enables everything
    const homeCheckBox = await driver.findElement(
      By.xpath("//*[@class='rct-checkbox']")
    );
    await homeCheckBox.click();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'You have selected :')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'home')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'commands')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'commands')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'documents')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'workspace')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'react')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'angular')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'veu')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'office')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'public')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'private')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'classified')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'general')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'downloads')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'wordFile')]`))
      .isDisplayed();
    await driver
      .findElement(By.xpath(`//span[contains(text(),'excelFile')]`))
      .isDisplayed();

    console.log("Scenario 1 - Success!");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("All steps were passing closing chrome...");
    await driver.quit();
  }
}

checkBox();
