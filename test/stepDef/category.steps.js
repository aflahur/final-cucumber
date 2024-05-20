const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = require('../pages/homePage');
const categoryPage = require('../pages/categoryPage');
const { expect } = require('@wdio/globals');


Given(/^I go to category page$/, async () => {
    await homePage.gotoCategoryPage()
});

When(/^I add new category$/, async () => {
    await categoryPage.addCategory('Jajanan pasar', 'Jajanan pasar enak')
});

Then(/^I can see the category in category page$/, async () => {
    await expect(homePage.toastAlert).toBeDisplayed()
    await expect(homePage.toastAlert).toHaveText('item ditambahkan')
});



