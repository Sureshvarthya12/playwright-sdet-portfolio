import { expect } from "@playwright/test";

export class ConfirmationPage {
    constructor(page) {
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        this.paymentInfoLabel = page.locator('[data-test="payment-info-label"]');
        this.paymentInfoValue = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-label"]');
        this.shippingValue = page.locator('[data-test="shipping-info-value"]');
        this.totalPriceInfo = page.locator('[data-test="total-info-label"]');
        this.itemTotalInfo = page.locator('[data-test="subtotal-label"]');
        this.taxLabel = page.locator('[data-test="tax-label"]');
        this.totalLabel = page.locator('[data-test="total-label"]');
        this.finishBtn = page.locator('[data-test="finish"]');
        this.successMessage = page.locator('[data-test="complete-header"]')
    }
    async verifyOverviewPage() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Checkout: Overview');

        await expect(this.paymentInfoLabel).toBeVisible();
        await expect(this.paymentInfoValue).toBeVisible();
        await expect(this.shippingInfo).toBeVisible();
        await expect(this.shippingValue).toBeVisible();
        await expect(this.totalPriceInfo).toBeVisible();
        await expect(this.itemTotalInfo).toBeVisible();
        await expect(this.taxLabel).toBeVisible();
        await expect(this.totalLabel).toBeVisible();
        await expect(this.finishBtn).toBeVisible();
        await this.finishBtn.click();
        await expect(this.successMessage).toBeVisible();
    }

}