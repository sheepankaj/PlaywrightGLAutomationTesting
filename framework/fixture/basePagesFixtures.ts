import { test as baseTest } from "@playwright/test";
import GlassLewisHomePgae from "../pages/glasslewisHomePage";
import TestBase from "../common/testBase";
import LoginToGlassLewisPage from "../pages/loginToGlassLewisPage";
import WDLandingPage from "../pages/WDLandingPage";


type pages = {
    glasslewisHomePage: GlassLewisHomePgae;
    testBase: TestBase;
    loginToGlassLewisPage: LoginToGlassLewisPage;
    wdLandingPage: WDLandingPage;
};

const testPages = baseTest.extend<pages>({

    glasslewisHomePage: async({ page },use)=>{
        await use(new GlassLewisHomePgae(page));
    },
    testBase: async ({ page }, use) => {
        await use(new TestBase(page));
    },
    loginToGlassLewisPage: async ({ page }, use) => {
        await use(new LoginToGlassLewisPage(page));
    },
    wdLandingPage: async ({ page }, use) => {
        await use(new WDLandingPage(page));
    },

});

export const test = testPages;
export const expect = testPages.expect;
