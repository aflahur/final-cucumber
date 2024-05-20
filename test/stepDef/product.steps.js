const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const ProductPage = require('../pages/productPage.js');
const HomePage = require('../pages/homePage.js');

Given(/^I go to product page$/, async () => {
    await HomePage.gotoProductPage();
});

When(/^I add new product$/, async () => {
    await ProductPage.addProduct('Tiwul', 'Tiwul enak', '4000', '5000', '10');
});

Then(/^I can see the product in product page$/, async () => {
    await expect(HomePage.toastAlert).toBeDisplayed()
    await expect(HomePage.toastAlert).toHaveText('item ditambahkan')
});

  