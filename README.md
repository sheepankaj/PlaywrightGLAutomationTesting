# Playwright Automation Tetsing for Glass Lewis website.
## Dependencies:
> 1. IDE used: Visual Studio Code
> 2. npm needs to install
> 3. Playwright test needs to be installed with Typescript language option
> 4. URLs for SUT: https://www.glasslewis.com/ and https://www.glasslewis.com/
> 5. Design pattern is used the POM model
> 6. Reporting: It uses the inbuilt reporting of playwright framework.

## The Acceptance criteria is to test and validate the error message when a user tries to signin without username and password.
## Steps for Scenario-1:
1. In a browser, navigate to http://www.glasslewis.com
2. Navigate to the client login link on the top right of the page here:
3. From the dialog, click on the Viewpoint Voting Platform link here:
4. That should bring you to the following page: https://viewpoint.glasslewis.com
5. On that page, click on the “Sign In” button
6. An error message should be displayed: The fields USERNAME and PASSWORD are required.

## The Acceptance criteria is to test and validate the Web Disclosure (WD) is a public site where our clients can make their votes public.
## Stes for Scenario-2:
1. Given the user is on the landing page for the WD site
2. And the Country filter is available
3. When the user selects “Belgium” from the Country filter list on the left panel
4. And click on Update button for the country filter list
5. Then the grid displays all meetings that are associated with the country “Belgium” And no meetings associated with any other country appear on the

## Stes for Scenario-3: I modified the test as the system is not giving based on the steps instead otherway around I found the steps and test it.
1. Given the user is on the landing page for the WD site
2. When the user clicks the Company Name “Activision Blizzard Inc” hyperlink Then the user lands on the “Activision Blizzard Inc.” vote card page.
3. And “Activision Blizzard Inc” should appear in the top banner.
   
## Stes for Scenario-4:
1. Given the user is on the landing page for the WD site
2. Filter the country value based on Belgium
3. When the user clicks the Company Name “Aedifica NV” hyperlink Then the user lands on the “Aedifica NV” vote card page.
4. And “Aedifica NV” should appear in the top banner.

## Project:
1. tests folder has all the tests.
2. pages folder has all the page classes and their locators values and methods.
3. common folder has all the commonly used methods in the project.
4. date folder has common test data used in the project.

   
## How to run the test:
> 1. Open terminal
> 2. enter as: npm run test:e2e:localchromeonly
> 3. Chrome will not open and execute all tests in headless model.
> 4. To execute parallel-enter as: npm run test:e2e:allbrowsers
> 5. The report will produced and opened automatically in the browser once the test execution is finished including screenshots and videos.

## Feedback
1. It's a good website however some points need to be considered for automation.
2. It's a little hard through playwright compared to selenium to do the automation when new tab opened after clicking the 'Log into Viewpoint button'.
3. Another field in the WD landing page. When automation was typing county value in the 'Country filter' section, the expected value was not prompted as manual testing. That can be improved by development team.
4. One Acceptance criteria was incorrect for scenario 3.
5. There are many places where ID locator values are missing and it's critical from an automation point of view.
6. Selenium WebDriver would be better for these two websites to do automation.
