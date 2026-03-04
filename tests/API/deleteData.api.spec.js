import { test, expect } from '@playwright/test';


test('Delete post', async ({ request }) => {

    const res = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(res.status()).toBe(200);

});