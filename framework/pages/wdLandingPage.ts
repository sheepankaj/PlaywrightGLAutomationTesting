import { Page, expect } from "@playwright/test";
import TestBase from "../common/testBase";
import * as data from "../common/data/data.json";

export default class WDLandingPage extends TestBase {
    testBase: TestBase;

    constructor(page: Page) {
        super(page);
        this.testBase = new TestBase(page);
    }


    /**
     * Open the WD website and validate title of the page.
     */
    public async gotoWDLandingPage() {
        await this.page.goto(data.wdLandingpageUrl);
        await this.assertPageTitle(/Sample Disclosure/);
    };

    /**
     * Search the country value, then ticked the searched country checkbox and click Update button
     * Finally validate the checked country records are only showing in the result table.
     * @param countyValue 
     */
    public async selectCountryFromFilterList(countyValue: string) {

        await this.testBase.TypeInTheSearchField("#txt-multiselect-static-search-CountryFilter", countyValue, "(//label[@class='ccb'])[3]");
        await this.page.locator('#Belgium-cb-label-CountryFilter').check();
        await this.testBase.clickElement("(//button[@id='btn-update'])[2]");
        //this.waitforElement("//div[@id='loading-gif']");
        await this.testBase.WaitPollingMethod(data.wdLandingpageUrl);

        const eachRows = await this.page.locator("//div[@class='k-grid-content k-auto-scrollable']//tr").elementHandles();
        //verify that all rows in the table are associated with the filtered country
        for (const row of eachRows) {
            const eachRowCellOfCountryColumn = await row.$("//td[5]"); // Select the fifth cell in each row using xpath
            if (eachRowCellOfCountryColumn) {
                const eachRowCellOfCountryColumnText = await eachRowCellOfCountryColumn.textContent();
                expect(eachRowCellOfCountryColumnText).toEqual(countyValue);
                console.log("Retrieved Text: " + eachRowCellOfCountryColumnText + " Matched with expected text: " + countyValue + " :found in the given locator: " + eachRows)
            } else {
                throw new Error(`No ${eachRowCellOfCountryColumn} found the expected ${countyValue} in row`);
            }
        }
        console.log(`All rows are associated with ${countyValue}`);
        return true;

    };

    /**
     * Search company name in the search company name field and validate the prompt DDL list against the search company name, then validate it landed in the respective company voting page.
     * @param companyName 
     * @param ddlExpectedText 
     * @param responseUrl 
     */
    public async searchCompanyName(companyName: string, ddlExpectedText: string, responseUrl: string) {
        await this.page.fill("#kendo-Search-for-company", companyName);
        const slowExpect = expect.configure({ timeout: 10000 });
        await slowExpect(this.page.getByRole('option', { name: ddlExpectedText })).toHaveText(ddlExpectedText);
        console.log(`Retried DDL value is ${ddlExpectedText} matched with expected: ${companyName}`);

        await this.page.keyboard.press('Enter');
        await this.testBase.WaitPollingMethod(responseUrl);
        await this.testBase.assertTextInPage("#detail-issuer-name", companyName);
    };

    /**
     * Click the hyperlink from the country result table and validate it landed in the respective comoany voting page.
     * @param hyperlinkCompanyNameFromColumn 
     */
    public async ClickCompanyNameHyperLink(hyperlinkCompanyNameFromColumn: string) {
        await this.testBase.clickElement(`//a[contains(text(),'${hyperlinkCompanyNameFromColumn}')]`);
        await this.testBase.assertTextInPage("#detail-issuer-name", hyperlinkCompanyNameFromColumn);
    };
}