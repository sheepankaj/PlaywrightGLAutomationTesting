import { Page } from "@playwright/test";
import TestBase from "../common/testBase";
import * as data from "../common/data/data.json";

export default class GlassLewisHomePgae extends TestBase{
    testBase: TestBase;
    public loginButton: string = "#menu-item-62";

    constructor(page: Page){
        super(page);
        this.testBase = new TestBase(page);
    }

    /**
     * Open GlassLewis website
     * Validate the title in the website
     */
    public async gotoGlassLewisWebsite() {
        await this.page.goto(data.baseURLforGlassLewisWebsite);
        // Expect a title "to contain" a substring value.
        await this.testBase.assertPageTitle(/Glass Lewis - Proxy Voting/);
    };

    /***
     * Click Accept cookies button
     */
    public async clickAcceptCookies()
    {
        await this.testBase.clickElement("#hs-eu-confirmation-button");
    }

    /***
     * Click Login button and validate the login page title is displaying
     */
    public async clickLoginButton()
    {
        await this.testBase.clickElement(this.loginButton);
        await this.testBase.assertPageTitle(/Login Glass Lewis - Glass Lewis/);
    }    
}