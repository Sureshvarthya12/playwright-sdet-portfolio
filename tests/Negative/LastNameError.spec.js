import { test, expect } from '../../fixtures/basetest';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('First Name Error Message in checkout page', async ({ inventoryPage, page }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.getBadgeCount(1);

    await inventoryPage.openCart();
    await expect(page).toHaveURL(/cart\.html/);
    await inventoryPage.verifyBackpackInCart();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await checkoutPage.fillCheckoutForm('james', '', '12345');
    await checkoutPage.expectLastNameRequiredError();
});
