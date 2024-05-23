class LoginPage {
    get emailInput() {
        return $('//*[@id="email"]');
    }

    get passwordInput() {
        return $('//*[@id="password"]');
    }

    get loginButton() {
        return $('/html/body/div/div/div/div/div[2]/div/button');
    }

    get emailAlert() {
        return$('//*[@id="root"]/div/div/div/div[2]/div/div[1]');
    }

    async open() {
        await browser.url('https://kasirdemo.belajarqa.com/');
    }

    async login(username, password) {
        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getUrl() {
        return await browser.getUrl()
    }
}

module.exports = new LoginPage();