import { test, expect } from '@playwright/test';

test('Create product', async ({ request }) => {

    const response = await request.post('https://dummyjson.com/products/add', {
        data: {
            title: 'Playwright Phone',
            price: 999
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(body);

});