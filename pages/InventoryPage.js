import { expect } from "@playwright/test";
export class InventoryPage {
    constructor(page) {
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        this.backpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.badgeLocator = page.locator('[data-test="shopping-cart-badge"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.itemName = page.locator('[data-test="inventory-item-name"]');
        this.removefromcart = page.locator('[data-test="remove-sauce-labs-backpack"]')

    }
    async verifyInventoryPageLoaded() {
        await this.page.waitForURL(/inventory.html/);
    }
    async isLoaded() {
        await expect(this.title).toBeVisible();
    }
    async addBackpackToCart() {
        await this.backpackButton.click();
    }
    async verifyBadgeCount() {
        if (await this.badgeLocator.count() === 0) {
            return 0;
        }
        const text = await this.badgeLocator.textContent();
        return Number(text?.trim());
    }
    async openCart() {
        await this.cartLink.click();
    }
    async verifyBackpackInCart() {
        await expect(this.itemName).toBeVisible();
    }
    async removeitemfromcart() {
        await this.removefromcart.click();
    }
    async verifyBackpackNotInCart() {
        await expect(this.itemName).toHaveCount(0);
    }
}