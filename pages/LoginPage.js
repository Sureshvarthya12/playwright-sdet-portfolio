import { expect } from "@playwright/test";
export class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder('username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errormessage = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('/');
    }
    async isErrorVisible() {
        await expect(this.errormessage).toBeVisible();
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }
}
