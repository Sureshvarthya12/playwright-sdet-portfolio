class CartPage {
    constructor(page) {
        this.page = page;
        this.itemNames = page.locator('.inventory_item_name');
    }
}

module.exports = { CartPage };
