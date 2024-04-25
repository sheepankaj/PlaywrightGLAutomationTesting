import { expect, test } from "../framework/fixture/basePagesFixtures";

test.describe("Sign-In Validation Tests at GlassLewis website", async () => {
  test.beforeEach('Open the browser and validate the title of GlassLewis website', async ({ glasslewisHomePage }) => {
    await glasslewisHomePage.gotoGlassLewisWebsite();
  });

  test('Validate Sign-In functionality after clicked Login button', async ({ glasslewisHomePage, loginToGlassLewisPage }) => {
    await glasslewisHomePage.clickAcceptCookies();
    await glasslewisHomePage.clickLoginButton();
    const newLoginPage = await loginToGlassLewisPage.ClickLoginToViewpointAndHandleNewOpenTab();
    await newLoginPage.ClickSignInButton();
    await newLoginPage.ValidateErrorMessageForTryingToSignInWithoutUsernameAndpassword();
  });

});