//Selenium + Javascript code to do some basic functionalities in demoqa website

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

async function radioButton() {
  try {
    await driver.get("https://demoqa.com/radio-button");
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath("//label[contains(text(),'Yes')]")).click();
    await driver.findElement(By.xpath("//span[contains(text(),'Yes')]")).isDisplayed();
    console.log("'Yes' is displayed when clicked");
    await driver.findElement(By.xpath("//label[contains(text(),'Impressive')]")).click();
    await driver.findElement(By.xpath("//span[contains(text(),'Impressive')]")).isDisplayed();
    console.log("'Impressive' is displayed when clicked");
    await driver.findElement(By.xpath("//input[@class='custom-control-input disabled']")).isDisplayed();
    console.log("'No' is in disabled state");
    
  } catch (error) {
    console.log(error);
  }finally{
    console.log("All steps were passing closing chrome...")
    await driver.quit();
  }
}
radioButton();
