const { test, expect } = require('@playwright/test');

test('TC03 - Locked out user cannot log in', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const error = page.locator('h3[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText(/locked out/i);

    await expect(page).not.toHaveURL(/inventory\.html/);
});
