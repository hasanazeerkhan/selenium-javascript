const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function buttons() {

    try{
        await driver.get("https://demoqa.com/buttons");
        await driver.manage().window().maximize();
        const clickTwotime = await driver.findElement(By.xpath("//button[@id='doubleClickBtn']"));
        const actions = driver.actions({ bridge: true });
        actions.doubleClick(clickTwotime);
        const rightClick = await driver.findElement(By.xpath("//button[@id='rightClickBtn']"));
        await rightClick.click({button:2});
        const justClick = await driver.findElement(By.xpath("//button[@id='gdwmA']"));
        await justClick.click();

    }catch(error){
        console.log('An error has been occurred '+error);
    }finally{
        console.log('Closing chrome..')
        await driver.quit();
    }
}
buttons();