import { test } from '../framework/fixture/basePagesFixtures';

test.describe("Validating Web Disclosure (WD) is a public site where our clients can make their votes public.",async () => {
    test.beforeEach("Open the browser and validate the title of WD public website",async ({ wdLandingPage }) => {
        await wdLandingPage.gotoWDLandingPage();
    });

    test('Filter Belgium Country and validate the grid displays all meetings that are associated with it',async ({wdLandingPage}) => {
        await wdLandingPage.selectCountryFromFilterList("Belgium");
    });
    
    test('Validate when user clicks a hyperlink of company name and land on the respective company voting page',async ({ wdLandingPage}) => {
        await wdLandingPage.selectCountryFromFilterList("Belgium");
        await wdLandingPage.ClickCompanyNameHyperLink('Aedifica NV');
    });

    test('Validate when user search the company-Activision Blizzard Inc and it lands at the “Activision Blizzard Inc.” vote card page.',async({wdLandingPage}) =>{
        await wdLandingPage.searchCompanyName("Activision Blizzard Inc","Activision Blizzard Inc - United States","https://viewpoint.glasslewis.com/WD/MeetingDetail/?siteId=DemoClient&securityId=17453");
    });
})
