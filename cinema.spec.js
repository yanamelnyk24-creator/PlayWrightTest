const { test, expect } = require('@playwright/test');

test('Перевірка кінотеатру MovieLand', async ({ page }) => {
    const response = await page.goto(
        'https://m.vkino.com.ua/ua/cinema/ivano-frankovsk/movieland'
    );

    expect(response).not.toBeNull();
    expect(response.status()).toBe(200);

    await expect(page).toHaveURL(/movieland/);
    await expect(page.locator('body')).not.toBeEmpty();
});
