import { test, expect } from '@playwright/test';

test.describe('<AvatarMenu', () => {
  test('avatar button is visible', async ({ page }) => {
    await page.goto('http://localhost:5050');
    const naviLink = page.getByText('menu');
    await naviLink.click();
    await expect(page).toHaveURL(/menu/);
    await expect(page.getByRole('button', { name: /toggle-button/ })).toBeVisible();
  });

  test('has three items when menu is open', async ({page}) => {
    await page.goto('http://localhost:5050');
    const naviLink = page.getByText('menu');
    await naviLink.click();
    const button = page.getByRole('button', { name: /toggle-button/ });
    await button.click();
    const menuItems = page.locator('[role="menuitem"]');
    expect(await menuItems.count()).toBe(3);
  });
})