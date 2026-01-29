const { expect } = require('@playwright/test');

class InventoryPage {
    constructor(page) {
        this.page = page;

        this.title = page.locator('.title');
        this.cartLink = page.locator('.shopping_cart_link');

        // Product actions
        this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async assertOnInventory() {
        await expect(this.page).toHaveURL(/inventory\.html/);
    }

    async addBackpackToCart() {
        await this.addBackpackBtn.click();
    }

    async goToCart() {
        await this.cartLink.click();
        await expect(this.page).toHaveURL(/cart\.html/);
    }
}

module.exports = { InventoryPage };
