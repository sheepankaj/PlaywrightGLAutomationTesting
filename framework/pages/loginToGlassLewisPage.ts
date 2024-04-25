import { Page, expect } from "@playwright/test";
import TestBase from "../common/testBase";
import * as data from "../common/data/data.json";

export default class LoginToGlassLewisPage extends TestBase {
    testBase: TestBase;

    constructor(page: Page) {
        super(page);
        this.testBase = new TestBase(page);
    }

    /**
     * Click the Login to View button, then switch to new tab and validate the new tab has the expected URL.
     * @returns 
     */
    public async ClickLoginToViewpointAndHandleNewOpenTab() {
        await this.testBase.assertTextInPage("//strong[text()='Viewpoint Voting Platform']", "Viewpoint Voting Platform");
        const newPagePromise = new Promise<Page>(resolve =>
            this.page.once('popup', resolve)
        );
        await this.testBase.clickElement("text=Log in to Viewpoint");
        const newPage = await newPagePromise;
        const newPageURL = newPage.url();
        console.log("The Url of new tab is: "+newPageURL);
        expect(newPageURL).toBe(data.viewpointVotingURL);
        
        return new LoginToGlassLewisPage(newPage);
    };

    /**
     * Click the SignIn button.
     */
    public async ClickSignInButton() {
        await this.testBase.clickElement("#btn-submit-login");
    };

    /**
     * Validate the eroor message for clicking SignIn button without entering username and password.
     */
    public async ValidateErrorMessageForTryingToSignInWithoutUsernameAndpassword() {
        await this.testBase.assertTextInPage("text=The fields USERNAME and PASSWORD are required.", "The fields USERNAME and PASSWORD are required.");
    };

}