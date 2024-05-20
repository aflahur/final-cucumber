const { Given, When, Then } = require("@wdio/cucumber-framework");
const loginPage = require("../pages/loginPage");

Given(/^I open the Kasir Aja website$/, async () => {
    await loginPage.open();
})

When(/^I login with valid credentials$/, async () => {
    await loginPage.login('lagilagi@gmail.com', 'lagilagi')
})

Then(/^I should be on the dashboard page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
})
