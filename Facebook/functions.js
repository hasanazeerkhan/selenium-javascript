const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

  async function openFaceBook(){
    driver.get.url("https://www.facebook.com");
    driver.manage().window().maximize();
  }

  async function verifyPageTitle(){
    const actualTitle = await driver.getTitle();
    const expectedTitle = "Facebook – log in or sign up";
    if(actualTitle != expectedTitle){
        throw new Error ("Incorrect page title!");
    }else{
        console.log("Page title is correct!");
    }

  }

  async function enterAccountDetails(){

  }

  export{ openFaceBook, verifyPageTitle, enterAccountDetails}