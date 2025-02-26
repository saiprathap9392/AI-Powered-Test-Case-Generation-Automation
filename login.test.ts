import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import testData from '../test-data.json';

for (const data of testData) {
  test(`Login with ${data.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    if (data.expected === 'success') {
      await expect(page).toHaveURL('https://github.com/');
    } else {
      // Use a more specific selector for the error message
      const errorMessage = page.locator('.flash-full.flash-error');
      await expect(errorMessage).toBeVisible();
    }
  });
}