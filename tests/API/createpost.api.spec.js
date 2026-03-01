import { test, expect } from '@playwright/test';

test('POST creates an item', async ({ request }) => {
    const res = await request.post('https://dummyjson.com/posts/add', {
        data: {
            title: 'hello',
            userId: 1,
        },
    });

    expect(res.status()).toBe(201);

    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('hello');
});