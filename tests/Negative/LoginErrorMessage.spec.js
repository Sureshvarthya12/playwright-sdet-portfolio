import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../data/users';


test('unsuccessful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, 'secretsauce');
    await expect(loginPage.errormessage).toBeVisible();

});

