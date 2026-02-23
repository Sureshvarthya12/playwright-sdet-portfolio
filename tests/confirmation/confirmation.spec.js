import { test, expect } from '../../fixtures/basetest';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ConfirmationPage } from '../../pages/ConfirmationPage';

test('Confirmation', async ({ inventoryPage, page }) => {
    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.badgeLocator).toHaveText('1');

    await inventoryPage.openCart();
    await expect(page).toHaveURL(/cart\.html/);
    await inventoryPage.verifyBackpackInCart();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);

    await checkoutPage.fillCheckoutForm('james', 'hunt', '12345');
    await expect(page).toHaveURL(/checkout-step-two\.html/);

    const confirmationPage = new ConfirmationPage(page);
    await confirmationPage.verifyOverviewPage();

});