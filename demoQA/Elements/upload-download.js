const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function upload(){
    try{
        console.log('Executing tests');
        await driver.get('');
    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
    }
}
upload();

async function download() {
  try {
    console.log("Executing tests");
  } catch (error) {
    console.log("An error has occurred: " + error);
  } finally {
    console.log("Closing chrome...");
  }
}
download();