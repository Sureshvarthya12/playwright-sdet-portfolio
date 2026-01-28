const { test, expect } = require('@playwright/test');

test('API - Get single post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/2');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(2);
    expect(body.userId).toBe(1);
    expect(body.title.length).toBeGreaterThan(0);
});
