import { test, expect } from '@playwright/test';

test('login and call protected endpoint', async ({ request }) => {
    // login (get token)
    const loginRes = await request.post('https://dummyjson.com/auth/login', {
        data: { username: 'emilys', password: 'emilyspass' },
    });
    expect(loginRes.status()).toBe(200);

    const { accessToken } = await loginRes.json();
    expect(accessToken).toBeTruthy();

    // use token
    const meRes = await request.get('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    expect(meRes.status()).toBe(200);

    const me = await meRes.json();
    expect(me).toHaveProperty('id');
});