import { expect } from "@playwright/test";

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.checkout = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continue = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }
    async clickCheckout() {
        await expect(this.checkout).toBeVisible();
        await this.checkout.click();
    }
    async expectFirstNameRequiredError() {
        await expect(this.errorMessage).toHaveText('Error: First Name is required');
    }
    async expectLastNameRequiredError() {
        await expect(this.errorMessage).toHaveText('Error: Last Name is required');
    }
    async expectPostalCodeRequiredError() {
        await expect(this.errorMessage).toHaveText('Error: Postal Code is required');
    }
    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continue.click();

    }

}