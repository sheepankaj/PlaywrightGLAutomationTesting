import { Page, expect } from "@playwright/test";
import TestBase from "../common/testBase";
import * as data from "../common/data/data.json";

export default class WDLandingPage extends TestBase{
    testBase: TestBase;

    constructor(page: Page){
        super(page);
        this.testBase = new TestBase(page);
    }

    /**
     * Open the WD website and validate title of the page.
     */
    public async gotoWDLandingPage()
    {
        await this.page.goto(data.wdLandingpageUrl);
        await this.assertPageTitle(/Sample Disclosure/);
    };

    /**
     * Search the country value, then ticked the searched country checkbox and click Update button
     * Finally validate the checked country records are only showing in the result table.
     * @param countyValue 
     */
    public async selectCountryFromFilterList(countyValue: string)
    {
        await this.testBase.TypeInTheSearchField("#txt-multiselect-static-search-CountryFilter",countyValue,"(//label[@class='ccb'])[3]");
        await this.page.locator('#Belgium-cb-label-CountryFilter').check();
        await this.testBase.clickElement("(//button[@id='btn-update'])[2]");
        await this.page.waitForTimeout(1000);
        const resultTable = await this.page.locator("//div[@class='k-grid-content k-auto-scrollable']");
        expect(resultTable).toContainText(countyValue);
        console.log(`The table has only expected country value: ${countyValue}.`)     
    };

    /**
     * Search company name in the search company name field, then validate it landed in the respective company voting page.
     * @param companyName 
     */
    public async searchCompanyName(companyName: string){
        await this.page.fill("#kendo-Search-for-company", companyName,);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.testBase.assertTextInPage("#detail-issuer-name",companyName);  
    }

    /**
     * Click the hyperlink from the country result table and validate it landed in the respective comoany voting page.
     * @param hyperlinkCompanyNameFromColumn 
     */
    public async ClickCompanyNameHyperLink(hyperlinkCompanyNameFromColumn: string)
    {
        await this.testBase.clickElement(`//a[contains(text(),'${hyperlinkCompanyNameFromColumn}')]`);
        await this.testBase.assertTextInPage("#detail-issuer-name",hyperlinkCompanyNameFromColumn);
    }
}