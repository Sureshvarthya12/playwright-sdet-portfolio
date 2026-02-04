const { chromium } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const users = require('./data/users');

module.exports = async () => {
    const browser = await chromium.launch();

    const context = await browser.newContext({
        baseURL: process.env.BASE_URL,
    });

    const page = await context.newPage();

    const login = new LoginPage(page);
    await login.goto(); // this can now use '/'
    await login.login(users.standard.username, users.standard.password);

    await context.storageState({ path: 'storageState.json' });
    await browser.close();
};
