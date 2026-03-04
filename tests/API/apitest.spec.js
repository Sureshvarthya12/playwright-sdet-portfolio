import { test, expect } from '@playwright/test';

test('API GET Method', async ({ request }) => {

    const response = await request.get('https://fake-json-api.mock.beeceptor.com/companies/1');

    expect(response.status()).toBe(200);

    /* const text = await response.text();
     expect(text).toContain('Breana') */

    console.log(await response.json());

});