const { test, expect } = require('@playwright/test')

test('logout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('.shopping_cart_link').click();

    // Assert item exists in cart
    const item = page.locator('.inventory_item_name');
    await expect(item).toContainText('Sauce Labs Backpack');

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

});