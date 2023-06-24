const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder().forBrowser('chrome').setChromeOptions(option).build();

async function practiceForm(){
    try{
        const url = "https://demoqa.com/automation-practice-form";
        const firstName = "MyFirst";
        const lastName = "MyLast";
        const gender = "Female";
        const email = "first.last@example.com"
        const mobileNumber = "+910000000000";
        const dateOfBirth = "24/06/2023";
        const subjects = "Maths";
        const hobbies = "Sports";
        const currentAddress = "Address Line One";
        const state = "NCR";
        const city = "Delhi"
        
        console.log('Executing tests');

        await driver.get(url);
        const inputFirstName = await driver.findElement(By.id("firstName"));
        await inputFirstName.sendKeys(firstName);
        const inputLastName = await driver.findElement(By.id("lastName"));
        await inputLastName.sendKeys(lastName);
        const inputGender = await driver.findElement(By.id("first_name"));
        await inputGender.sendKeys(gender);
        const inputEmail = await driver.findElement(By.id("userEmail"));
        await inputEmail.sendKeys(email);
        const inputMobileNumber = await driver.findElement(By.id("userNumber"));
        await inputMobileNumber.sendKeys(mobileNumber);
        const inputDateOfBirth = await driver.findElement(By.id("dateOfBirthInput"));
        await inputDateOfBirth.sendKeys(dateOfBirth);
        const inputSubjects = await driver.findElement(By.id("first_name"));
        await inputSubjects.sendKeys(subjects);
        const inputCurrentAddress = await driver.findElement(By.id("currentAddress"));
        await inputCurrentAddress.sendKeys(currentAddress);
        const inputHobbies = await driver.findElement(By.id(""));
        await inputHobbies.sendKeys(hobbies);
        const inputState = await driver.findElement(By.id(""));
        await inputState.sendKeys(state);
        const inputCity = await driver.findElement(By.id(""));
        await inputCity.sendKeys(city);

        
    }catch(error){
        console.log("An error has occurred: "+error)
    }finally{
        console.log('Closing chrome...')
    }
}
practiceForm();