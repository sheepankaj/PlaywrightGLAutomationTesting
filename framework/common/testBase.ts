import { Page, expect, Browser } from "@playwright/test";

export default class TestBase {
    protected readonly page: Page;
    protected readonly browser: Browser;

    constructor(page: Page) {
        this.page = page;

    }

    // Below all methods for common to use any page classes as per requirement.
    /**
     * 
     * @param pageTitle Validate the page title in a page
     */
    public async assertPageTitle(pageTitle: string | RegExp) {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveTitle(pageTitle);
        console.log("Validate the page title as expected: " + pageTitle);
    };

    /**
     * Press the button with the given selector.
     * @param locator 
     */
    public async clickElement(locator: string) {
        await this.page.waitForSelector(locator);
        await this.page.click(locator);
        console.log("Button is clicked at the given locator: " + locator);
    };

    /**
     * 
     * @param locator Validate the expected text is present in the given locator 
     * @param expectedText 
     */
    public async assertTextInPage(locator: string, expectedText: string) {
        await this.page.waitForLoadState('networkidle');
        const text = await this.page.textContent(locator);
        expect(text).toContain(expectedText);
        console.log("Retrieved Text: " + text + " Matched with expected text: " + expectedText + " :found in the given locator: " + locator);
    };

    /**
     * Type in the search field and validate it's showing in the result filter list.
     * @param searchLocator 
     * @param typeSearchValue 
     * @param promptResultSectionLocator 
     */
    public async TypeInTheSearchField(searchLocator: string, typeSearchValue: string, promptResultSectionLocator: string): Promise<void> {
        await this.page.waitForSelector(searchLocator);
        await this.page.fill(searchLocator, typeSearchValue);
        console.log("Search filter locator found and search value typed too");
        await this.page.keyboard.press('Enter');
        const slowExpect = expect.configure({ timeout: 10000 });
        const typeText = await this.page.textContent(promptResultSectionLocator);
        slowExpect(typeSearchValue).toContain(typeText);
        console.log("Searched value matched as expected: " + typeSearchValue + " at the given locator: " + promptResultSectionLocator + ".");
    };

    /**
     * Waiting method with polling for validating expected success response status
     * @param responseUrl 
     */
    public async WaitPollingMethod(responseUrl: string){
        await expect.poll(async () => {
            const response = await this.page.request.get(responseUrl);
            return response.status();
          }, {
            // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe
            // ... Defaults to [100, 250, 500, 1000].
            intervals: [1_000, 2_000, 10_000],
            timeout: 60_000
          }).toBe(200);
    };

}