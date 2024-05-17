import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('test addition', async ({ page }) => {
  await page.locator('#1').click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.locator('#2').click();
  await page.locator('.btnEqual').click();
  await expect(page.locator('.screen')).toHaveText("3")
});

test('test bouton c', async ({ page }) => {
  await page.locator('#c-btn').click();
  await expect(page.locator('.screen')).toHaveText("0")
});