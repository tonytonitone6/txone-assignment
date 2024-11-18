import { test, expect } from '@playwright/test';

test.describe('<AvatarMenu', () => {
  test('avatar button is visible', async ({ page }) => {
    await page.goto('http://localhost:5050');
    await expect(page.getByRole('button', { name: /toggle-button/ })).toBeVisible();
  });

  test('', () => { });
})