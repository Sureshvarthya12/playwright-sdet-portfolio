import { test, expect } from '@playwright/test';

import { users } from '../data/users';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/Confirmationpage';


test('checkout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    const confirmationPage = new ConfirmationPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/inventory.html/);

    // Add item to cart
    await inventoryPage.isLoaded();
    await inventoryPage.addBackpackToCart();
    const badgecount = await inventoryPage.getBadgeCount();
    expect(badgecount).toBe(1);

    // Go to cart
    await inventoryPage.openCart();
    await expect(page).toHaveURL(/cart.html/);
    await inventoryPage.verifyBackpackInCart();

    // Begin checkout
    await checkoutPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one.html/);
    await checkoutPage.fillCheckoutForm('james', 'hunt', '12345');
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(inventoryPage.badgeLocator).toHaveText(/1/);
    await confirmationPage.verifyOverviewPage();


});