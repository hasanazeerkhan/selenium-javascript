//Selenium + Javascript code to do some basic functionalities in demoqa website

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const option = new chrome.Options();
const driver = new Builder().forBrowser("chrome").setChromeOptions(option).build();

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
    await driver.findElement(By.id("currentAddress")).sendKeys(inputCurrentAddress);
    await driver.findElement(By.id("permanentAddress")).sendKeys(inputPermanentAddress);
    await driver.findElement(By.id("submit")).click();
  } catch (error) {
    console.log(error);
  } finally {
    await driver.close();
  }
}

async function checkBox(){
    try{
    await driver.get("https://demoqa.com/checkbox")
    await driver.manage().window().maximize();
    await driver.findElement(By.css(".rct-icon-expand-close")).click()
    {
      const element = await driver.findElement(By.css(".rct-icon-expand-close"))
      await driver.actions({ bridge: true }).move(element).perform();
    }
    await driver.findElement(By.css(".rct-node-collapsed:nth-child(1) .rct-collapse > .rct-icon")).click()
    await driver.findElement(By.css(".rct-node-parent:nth-child(2) .rct-collapse > .rct-icon")).click()
    await driver.findElement(By.css(".rct-node:nth-child(3) .rct-collapse > .rct-icon")).click()
    {
      const element = await driver.findElement(By.css(".rct-node:nth-child(3) .rct-collapse > .rct-icon"))
      await driver.actions({ bridge: true }).move(element).perform();
    }
    await driver.findElement(By.css(".rct-node:nth-child(3) .rct-node:nth-child(2) .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-icon-check > path")).click()
    await driver.findElement(By.css(".rct-node:nth-child(3) .rct-node:nth-child(1) .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-icon-check > path")).click()
    await driver.findElement(By.css(".rct-node:nth-child(3) > .rct-text .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-node-parent > .rct-text .rct-icon-check > path")).click()
    await driver.findElement(By.css(".rct-node-collapsed:nth-child(2) .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-icon-check")).click()
    await driver.findElement(By.css(".rct-node-collapsed:nth-child(1) .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-icon-check")).click()
    await driver.findElement(By.css(".rct-node-expanded:nth-child(2) > .rct-text .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-node-expanded > .rct-text .rct-icon-check > path")).click()
    await driver.findElement(By.css(".rct-node .rct-node:nth-child(1) .rct-node:nth-child(2) .rct-checkbox > .rct-icon")).click()
    await driver.findElement(By.css(".rct-icon-check > path")).click()
    await driver.close();
    }catch(error){
        console.log(error);
    }
}
//checkBox();

async function RadioButton(){
    try{
    await driver.manage().window().setRect({ width: 1936, height: 1048 });
    await driver.get("https://demoqa.com/radio-button")
    await driver.findElement(By.xpath("//label[contains(.,\'Impressive\')]")).click()
    await driver.findElement(By.xpath("//label[contains(.,\'Yes\')]")).click()
    await driver.findElements(By.xpath("//input[@class=\'custom-control-input disabled\']"))
    await driver.close();

    }catch(error){
        console.log(error);
    }
}
//RadioButton();

textBox(
  "User Name",
  "theawsomeuser@example.com",
  "Some where in this beautiful Earth",
  "Same beautiful Earth"
);