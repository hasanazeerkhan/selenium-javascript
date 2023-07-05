const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const action = new ActionSequence(driver);
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function droppable(){
    try{
        console.log('Executing tests');
        const url = "https://demoqa.com/droppable";
        await driver.get(url);
        await driver.manage().window().maximize();
        const sourceElement = await driver.findElement(By.xpath());
        const targetElement = await driver.findElement(By.xpath());

        await action.dragAndDrop(sourceElement, targetElement);

    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
    }
}
droppable();