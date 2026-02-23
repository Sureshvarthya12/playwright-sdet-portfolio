import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/users';

const authFile = 'playwright/.auth/standard.json';

setup('authenticate as standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, process.env.STANDARD_PASSWORD);

    await expect(page).toHaveURL(/inventory\.html/);

    // Save cookies + localStorage etc.
    await page.context().storageState({ path: authFile });
});