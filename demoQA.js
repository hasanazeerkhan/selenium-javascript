//Selenium + Javascript code to do some basic functionalities in demoqa website

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const driver = new Builder().forBrowser("chrome").build();

async function TextBox() {
    try{
    await driver.get("https://demoqa.com/text-box")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.id("userName")).sendKeys("The Awesome User")
    await driver.findElement(By.id("userEmail")).sendKeys("theawsomeuser@example.com")
    await driver.findElement(By.id("currentAddress")).sendKeys("Some where in this beautiful Earth")
    await driver.findElement(By.id("permanentAddress")).sendKeys("Same beautiful Earth")
    await driver.findElement(By.id("submit")).click()
    let output = await driver.findElement(By.id("output")).getText();
    assert.strictEqual(output.includes("The Awesome User"), true);
    assert.strictEqual(output.includes("theawsomeuser@example.com"), true);
    assert.strictEqual(output.includes("Some where in this beautiful Earth"), true);
    assert.strictEqual(output.includes("Same beautiful Earth"), true);
    await driver.close();
    }catch(error){
        console.log(error);
    }
}
TextBox();

async function checkBox(){
    try{
    await driver.get("https://demoqa.com/checkbox")
    await driver.manage().window().setRect({ width: 1936, height: 1048 });
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
checkBox();

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
RadioButton();
