import { test, expect } from '@playwright/test';

test.describe('<DataTable', () => {
  test('table is visible', async ({ page }) => {
    await page.goto('http://localhost:5050');
    const naviLink = page.getByText('table');
    await naviLink.click();
    await expect(page.getByRole('table')).toBeVisible();
  });

  test('has seven rows on the table', async ({ page }) => {
    await page.goto('http://localhost:5050');
    const naviLink = page.getByText('table');
    await naviLink.click();
    const rows = page.locator('[role="row"]');
    expect(await rows.count()).toBe(7)
  });
});
