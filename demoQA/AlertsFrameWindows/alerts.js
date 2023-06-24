const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function alerts(){
    try{
        const url = "https://demoqa.com/alerts";
        console.log('Executing tests');
        await driver.get(url);
        await driver.manage().window().maximize();
    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
    }
}
alerts();