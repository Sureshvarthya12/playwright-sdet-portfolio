const { test, expect } = require('@playwright/test');
test.use({ storageState: 'storageState.json' });


test('demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL(/saucedemo\.com/)

    await expect(page).toHaveTitle('Swag Labs');

    await page.locator('[data-test="username"]').fill('visual_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/)
    await expect(page.locator('.title')).toHaveText('Products');


    await page.close()
});
