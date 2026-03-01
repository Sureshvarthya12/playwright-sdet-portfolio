import { test, expect } from '../../fixtures/basetest';

test('should remove item from cart', async ({ inventoryPage }) => {
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.badgeLocator).toHaveText('1');

    await inventoryPage.openCart();
    await expect(inventoryPage.page).toHaveURL(/cart.html/);

    await inventoryPage.verifyBackpackInCart();
    await inventoryPage.removeitemfromcart();
    await expect(inventoryPage.badgeLocator).toHaveCount(0);
    await inventoryPage.verifyBackpackNotInCart();


});