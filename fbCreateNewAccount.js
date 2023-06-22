//A small snippet of code to create new account in facebook

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

async function fbLogin() {
  try {
    const url = "https://www.facebook.com";
    const firstName = "MyFirst";
    const lastName = "MyLast";
    const mobileNumber = "+910000000000"
    const password = "MySecretPassword";
    const dayInDob = "10";
    const monthInDob = "Dec"
    const yearInDob = "1999"
    const gender = "Female";

    await driver.get(url);
    driver.manage().window().maximize();
    const actualTitle = await driver.getTitle();
    const expectedTitle = "Facebook – log in or sign up";

    if (actualTitle === expectedTitle) {
      console.log('Page title is correct!')
    }else{
      console.log('Incorrect page title!')
    }

    const createNewAccount = await driver.findElement(By.xpath(`//*[@role='button' and @data-testid='open-registration-form-button']`));
    await createNewAccount.click();
    const inputFirstName = await driver.findElement(By.xpath("//input[@name='firstname']"));
    await inputFirstName.sendKeys(firstName);
    console.log('Updated First Name');

    const inputLastName = await driver.findElement(By.xpath("//input[@name='lastname']"));
    await inputLastName.sendKeys(lastName);
    console.log("Updated Last Name");

    const inputMobileNumber = await driver.findElement(By.xpath("//input[@name='reg_email__']"));
    await inputMobileNumber.sendKeys(mobileNumber);
    console.log("Updated Mobile Number");

    const inputPassword = await driver.findElement(By.xpath("//input[@name='reg_passwd__']"));
    await inputPassword.sendKeys(password);
    console.log("Updated Password")

    const inputDayForDob = await driver.findElement(By.xpath(`//*[@title='Day']/option[@value='${dayInDob}']`));
    await inputDayForDob.click();

    {
        var selectableMonth = monthInDob;
        var i = 1;
        switch (selectableMonth) {
          case "Jan": i = 1; break;
          case "Feb": i = 2; break;
          case "Mar": i = 3; break;
          case "Apr": i = 4; break;
          case "May": i = 5; break;
          case "Jun": i = 6; break;
          case "Jul": i = 7; break;
          case "Aug": i = 8; break;
          case "Sep": i = 9; break;
          case "Oct": i = 10; break;
          case "Nov": i = 11; break;
          case "Dec": i = 12; break;

        }
    }
    const inputMonthForDob = await driver.findElement(By.xpath(`//*[@title='Month']/option[@value='${i}']`));
    await inputMonthForDob.click();

    const inputYearForDob = await driver.findElement(By.xpath(`//*[@title='Year']/option[@value='${yearInDob}']`));
    await inputYearForDob.click();
    console.log("Updated Date Of Birth");

    {
        var selectableGender = gender;
        var j = 1;
        switch (selectableGender) {
          case "Female": j = 1; break;
          case "Male": j = 2; break;
          case "Custom": j = -1; break;

        }
    }
    const inputGender = await driver.findElement(By.xpath(`//input[@name='sex' and @value='${j}']`));
    await inputGender.click();
    console.log("Updated Gender");
    
    const signUpButton = await driver.findElement(By.xpath("//button[@type='submit' and @name='websubmit']"));
    signUpButton.click();
    console.log("Submitting given inputs");

  } catch (error) {
    console.log("An error has been occurred ", error);
  } finally {
    console.log('Closing chrome....')
    await driver.quit();
  }
}
fbLogin();
