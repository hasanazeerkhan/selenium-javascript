const {Builder, By} = require("selenium-webdriver");
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
        const alertButton = await driver.findElement(By.xpath("//button[@id='alertButton']"))
        await alertButton.click();
        const alert = await driver.switchTo().alert();
        await alert.accept();
        const timerAlertButton = await driver.findElement(By.xpath("//button[@id='timerAlertButton']"))
        await timerAlertButton.click();
        await driver.manage().setTimeouts({ implicit: 5500 });
        await alert.accept();
        const confirmButton = await driver.findElement(By.xpath("//button[@id='confirmButton']"))
        await confirmButton.click();
        await alert.dismiss();
        await confirmButton.click();
        await alert.accept();
        const promtButton = await driver.findElement(By.xpath("//button[@id='promtButton']"))
        await promtButton.click();
        await alert.sendKeys("Mohammed Hasan");
        await alert.accept();
    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
        driver.quit();
    }
}
alerts();