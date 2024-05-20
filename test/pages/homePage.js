class HomePage {
    get categoryMenu() {
        return $('(//div[@class="css-1mqa38q"])[5]')
    }

    get productMenu() {
        return $('(//div[@class="css-1mqa38q"])[6]')
    }

    get toastAlert() {
        return $('(//div[@class="chakra-alert__desc css-zycdy9"])[1]')
    }

    async gotoProductPage() {
        await this.productMenu.click();
    }

    async gotoCategoryPage() {
        await this.categoryMenu.click();
    }
}
  
  module.exports = new HomePage();