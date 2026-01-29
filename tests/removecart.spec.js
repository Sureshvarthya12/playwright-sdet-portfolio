const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const users = require('../data/users');

test('TC07 @regression - Remove item from cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    // Login
    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    // Inventory
    await inventory.assertOnInventory();
    await expect(inventory.title).toHaveText('Products');

    // Add item + go to cart
    await inventory.addBackpackToCart();
    await inventory.goToCart();

    // Verify item exists, remove it, verify empty
    await cart.assertBackpackInCart();
    await cart.removeBackpack();
    await cart.assertCartEmpty();
});
