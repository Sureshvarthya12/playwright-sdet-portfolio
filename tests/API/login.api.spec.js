import { test, expect } from '@playwright/test';

test('GET products API should return 200 and list of products', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    // Check status code
    expect(response.status()).toBe(200);

    // Parse JSON
    const body = await response.json();

    // Validate structure
    expect(body).toHaveProperty('products');
    expect(body.products.length).toBeGreaterThan(0);

    // Validate one field
    expect(body.products[0]).toHaveProperty('title');
});