//A small snippet of code to create new account in facebook

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();

import{openFaceBook, verifyPageTitle, enterAccountDetails} from './functions';

openFaceBook();
verifyPageTitle();
enterAccountDetails();
await driver.quit();

async function fbLogin() {
  try {
    {
      var selectableMonth = monthInDob;
      var i = 1;
      switch (selectableMonth) {
        case "Jan":
          i = 1;
          break;
        case "Feb":
          i = 2;
          break;
        case "Mar":
          i = 3;
          break;
        case "Apr":
          i = 4;
          break;
        case "May":
          i = 5;
          break;
        case "Jun":
          i = 6;
          break;
        case "Jul":
          i = 7;
          break;
        case "Aug":
          i = 8;
          break;
        case "Sep":
          i = 9;
          break;
        case "Oct":
          i = 10;
          break;
        case "Nov":
          i = 11;
          break;
        case "Dec":
          i = 12;
          break;
      }
    }
    const inputMonthForDob = await driver.findElement(
      By.xpath(`//*[@title='Month']/option[@value='${i}']`)
    );
    await inputMonthForDob.click();

    const inputYearForDob = await driver.findElement(
      By.xpath(`//*[@title='Year']/option[@value='${yearInDob}']`)
    );
    await inputYearForDob.click();
    console.log("Updated Date Of Birth");

    {
      var selectableGender = gender;
      var j = 1;
      switch (selectableGender) {
        case "Female":
          j = 1;
          break;
        case "Male":
          j = 2;
          break;
        case "Custom":
          j = -1;
          break;
      }
    }
    const inputGender = await driver.findElement(
      By.xpath(`//input[@name='sex' and @value='${j}']`)
    );
    await inputGender.click();
    console.log("Updated Gender");

    const signUpButton = await driver.findElement(
      By.xpath("//button[@type='submit' and @name='websubmit']")
    );
    signUpButton.click();
    console.log("Submitting given inputs");
  } catch (error) {
    console.log("An error has been occurred ", error);
  } finally {
    console.log("Closing chrome....");
  }
}
fbLogin();
