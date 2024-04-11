import { test, expect } from '@playwright/test';

test('find hei', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('hei')).toBeVisible();});



