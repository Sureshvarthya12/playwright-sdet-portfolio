const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login', () => {
    test('valid login should land on inventory page', async ({ page }) => {
        await page.goto('/');

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // Strong assertion: URL + page signal
        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('invalid login should show an error message', async ({ page }) => {
        await page.goto('/');

        await page.locator('[data-test="username"]').fill('wrong_user');
        await page.locator('[data-test="password"]').fill('wrong_pass');
        await page.locator('[data-test="login-button"]').click();

        // Strong assertion: visible error
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
});
