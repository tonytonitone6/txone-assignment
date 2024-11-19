import { test, expect } from '@playwright/test';

test.describe('<Nav />', () => {
  test('change page to menu page', async ({ page }) => {
    await page.goto('http://localhost:5050');
    const naviLink = page.getByText('menu');
    await naviLink.click();
    await expect(page).toHaveURL(/menu/);
  });

  test('change page to table page', async ({ page }) => {
    await page.goto('http://localhost:5050');
    const naviLink = page.getByText('table');
    await naviLink.click();
    await expect(page).toHaveURL(/table/);
  });
});
