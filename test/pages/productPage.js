class ProductPage {
    get buttonTambah() {
        return $('(//a[@class="chakra-button css-1piskbq"])');
    }

    get inputNama() {
        return $('/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/input');
    }

    get inputDeskripsi() {
        return $('(//input[@id="deskripsi"])');
    }

    get inputHargaBeli() {
        return $('//*[@id="harga beli"]');
    }

    get inputHargaJual() {
        return $('//*[@id="harga jual"]');
    }

    get inputStok() {
        return $('//*[@id="stok"]');
    }

    get inputKategori() {
        return $('(//input[@id="kategori"])');
    }

    get listKategori() {
        return $('(//td[@class="css-u3dlpe"])[1]');
    }

    get buttonSimpan() {
        return $('(//button[@class="chakra-button css-l5lnz6"])')
    }
    async addProduct(nama, deskripsi, hargaBeli, hargaJual, stok) {
        await this.buttonTambah.click();
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.inputHargaBeli.setValue(hargaBeli);
        await this.inputHargaJual.setValue(hargaJual);
        await this.inputStok.setValue(stok);
        await this.inputKategori.click();
        await this.listKategori.click();
        await this.buttonSimpan.click();
    }
}

module.exports = new ProductPage();