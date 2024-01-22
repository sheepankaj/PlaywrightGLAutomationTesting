import {test} from '../framework/fixture/basePagesFixtures';

test.describe("Multiple currency rates Validation Tests", async () => {
  test.beforeEach('Open the browser and validate the title of XE Currency Converter website',async ({currencyConverterPage}) => {
    await currencyConverterPage.gotoCurrencyConverterWebsite();
  });

  test('Select Euro to GB currency and Validate the expected text',async ({currencyConverterPage}) => {
      await currencyConverterPage.clickAcceptCookies();
      await currencyConverterPage.enterAmountValue();
      await currencyConverterPage.selectCurrencyValueAtFromField();
      await currencyConverterPage.validateExpectedEurToGBCurrencyTextDisplayed();
  });

  test('Select Euro to USD currency and Validate the expected text',async ({currencyConverterPage}) => {
    await currencyConverterPage.clickAcceptCookies();
    await currencyConverterPage.enterAmountValue();
    await currencyConverterPage.selectCurrencyValueAtFromField();
    await currencyConverterPage.validateExpectedEurToUSDCurrencyTextDisplayed();
  }); 

  test('Select Euro to CAD currency and Validate the expected text',async ({currencyConverterPage}) => {
    await currencyConverterPage.clickAcceptCookies();
    await currencyConverterPage.enterAmountValue();
    await currencyConverterPage.selectCurrencyValueAtFromField();
    await currencyConverterPage.validateExpectedEurToCADCurrencyTextDisplayed();
  }); 

  test('Select Euro to AUD currency and Validate the expected text',async ({currencyConverterPage}) => {
    await currencyConverterPage.clickAcceptCookies();
    await currencyConverterPage.enterAmountValue();
    await currencyConverterPage.selectCurrencyValueAtFromField();
    await currencyConverterPage.validateExpectedEurToAUDCurrencyTextDisplayed();
  }); 

  test('Select Euro to INR currency and Validate the expected text',async ({currencyConverterPage}) => {
    await currencyConverterPage.clickAcceptCookies();
    await currencyConverterPage.enterAmountValue();
    await currencyConverterPage.selectCurrencyValueAtFromField();
    await currencyConverterPage.validateExpectedEurToINRCurrencyTextDisplayed();
  }); 

});