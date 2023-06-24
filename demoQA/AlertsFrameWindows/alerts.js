const {Builder, By, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function alerts(){
    try{
        const url = "https://demoqa.com/alerts";
        console.log('Executing tests');
        await driver.get(url);
        await driver.manage().setTimeouts({ implicit: 4000 });
        await driver.manage().window().maximize();
        console.log('Passes step 1');
        const alertButton = await driver.findElement(By.xpath("//button[@id='alertButton']"))
        await alertButton.click();
        const alert = await driver.switchTo().alert();
        await driver.wait(until.alertIsPresent(alert), 5000);
        await alert.accept();
        console.log("Passes step 2");
        const timerAlertButton = await driver.findElement(By.xpath("//button[@id='timerAlertButton']"))
        await timerAlertButton.click();
        await driver.wait(until.alertIsPresent(timerAlertButton), 5000);
        await alert.accept();
        console.log("Passes step 3");
        const confirmButton = await driver.findElement(By.xpath("//button[@id='confirmButton']"))
        await confirmButton.click();
        await driver.wait(until.alertIsPresent(confirmButton), 5000);
        await alert.dismiss();
        console.log("Passes step 4");
        await confirmButton.click();
        await driver.wait(until.alertIsPresent(confirmButton), 5000);
        await alert.accept();
        console.log("Passes step 5");
        const promtButton = await driver.findElement(By.xpath("//button[@id='promtButton']"))
        await promtButton.click();
        await driver.wait(until.alertIsPresent(promtButton), 5000);
        await alert.sendKeys("Mohammed Hasan");
        await alert.accept();
        console.log("Passes step 6");
    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
        driver.quit();
    }
}
alerts();