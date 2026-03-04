import { test, expect } from '@playwright/test';

test('Update post using PUT', async ({ request }) => {

    const res = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: "updated title",
            body: "updated body",
            userId: 1
        }
    });

    expect(res.status()).toBe(200);
    console.log(await res.json());

});