class CategoryPage {
    get buttonTambah() {
        return $('(//a[@class="chakra-button css-1piskbq"])');
    }

    get inputNama() {
        return $('//*[@id="nama"]');
    }

    get inputDeskripsi() {
        return $('//*[@id="deskripsi"]');
    }

    get buttonSimpan() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/button')
    }


    async addCategory(nama, deskripsi) {
        await this.buttonTambah.click()
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.buttonSimpan.click();
    }
}

module.exports = new CategoryPage();