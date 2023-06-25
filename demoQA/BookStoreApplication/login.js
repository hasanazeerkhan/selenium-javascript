const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function login(){
    try{
        const url = "https://demoqa.com/login";
        const firstName = "FirstName";
        const lastName = "LastName";
        const userName = "MyUserName";
        const password = "MySecretPassword@123";
        console.log('Executing tests');
        await driver.get(url);
        await driver.manage().window().maximize();
        const newUser = await driver.findElement(By.xpath("//button[@id='newUser']"));
        await newUser.click();

        const inputFirstName = await driver.findElement(By.xpath("//input[@id='firstname']"));
        await inputFirstName.sendKeys(firstName);

        const inputLastName = await driver.findElement(By.xpath("//input[@id='lastname']"));
        await inputLastName.sendKeys(lastName);

        const inputUserName = await driver.findElement(By.xpath("//input[@id='userName']"));
        await inputUserName.sendKeys(userName);

        const inputPassword = await driver.findElement(By.xpath("//input[@id='password']"));
        await inputPassword.sendKeys(password);

        const captcha = await driver.findElement(By.xpath("//*[@class='recaptcha-checkbox-border']"));
        await captcha.click();

        const register = await driver.findElement(By.xpath("//input[@id='register']"));
        await register.click();

    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
    }
}
login();