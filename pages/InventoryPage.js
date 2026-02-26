import { expect } from "@playwright/test";
export class InventoryPage {
    constructor(page) {
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        this.backpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.badgeLocator = page.locator('[data-test="shopping-cart-badge"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.itemName = page.locator('[data-test="inventory-item-name"]');

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
    async getBadgeCount(expectedCount) {
        const actual = await this.badgeLocator.count();
        expect(actual).toBe(expectedCount);
    }
    async openCart() {
        await this.cartLink.click();
    }
    async verifyBackpackInCart() {
        await expect(this.itemName).toBeVisible();
    }
}