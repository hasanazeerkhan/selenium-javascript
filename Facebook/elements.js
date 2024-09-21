const createNewAccount = await driver.findElement(
    By.xpath(
      `//*[@role='button' and @data-testid='open-registration-form-button']`
    )
  );