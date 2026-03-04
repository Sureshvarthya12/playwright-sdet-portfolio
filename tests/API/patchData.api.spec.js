import { test, expect } from '@playwright/test';

test('Update post using PATCH', async ({ request }) => {

    const res = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: "patched title"
        }
    });

    expect(res.status()).toBe(200);
    console.log(await res.json());

});