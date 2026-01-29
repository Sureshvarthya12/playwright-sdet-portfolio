const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;

        this.itemNames = page.locator('.inventory_item_name');
        this.removeBackpackBtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

    async assertBackpackInCart() {
        await expect(this.itemNames).toContainText('Sauce Labs Backpack');
    }

    async removeBackpack() {
        await this.removeBackpackBtn.click();
    }

    async assertCartEmpty() {
        await expect(this.itemNames).toHaveCount(0);
    }
}

module.exports = { CartPage };
