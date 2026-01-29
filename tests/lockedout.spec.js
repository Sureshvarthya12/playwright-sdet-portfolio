const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../data/users');

test('TC03 @smoke - Locked out user cannot log in', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.locked.username, users.locked.password);

    await expect(login.error).toBeVisible();
    await expect(login.error).toContainText(/locked out/i);
    await expect(page).not.toHaveURL(/inventory\.html/);
});
