import { expect } from "@playwright/test";

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.checkout = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continue = page.locator('[data-test="continue"]');

    }
    async clickCheckout() {
        await expect(this.checkout).toBeVisible();
        await this.checkout.click();
    }
    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continue.click();

    }

}