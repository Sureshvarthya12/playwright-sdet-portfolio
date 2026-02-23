import { test, expect } from '../../fixtures/basetest';

test('should add backpack to cart', async ({ inventoryPage }) => {
    await inventoryPage.addBackpackToCart();

    expect(await inventoryPage.getBadgeCount()).toBe(1);

    await inventoryPage.openCart();
    await expect(inventoryPage.page).toHaveURL(/cart.html/);

    await inventoryPage.verifyBackpackInCart();
});