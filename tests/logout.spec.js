const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users');

test('TC05 - User can log out successfully', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    await inventory.assertOnInventory();
    await expect(inventory.title).toHaveText('Products');

    await inventory.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(login.loginBtn).toBeVisible();
});
