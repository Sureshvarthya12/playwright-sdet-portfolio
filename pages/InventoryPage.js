class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.title');
        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.cartLink = page.locator('.shopping_cart_link');
        this.addBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async assertOnInventory() {
        await this.page.waitForURL(/inventory\.html/);
    }

    async logout() {
        await this.menuBtn.click();
        await this.logoutLink.waitFor({ state: 'visible' });
        await this.logoutLink.click();
    }
}

module.exports = { InventoryPage };
