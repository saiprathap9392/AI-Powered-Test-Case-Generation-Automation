import { Page } from '@playwright/test';

export class DashboardPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('https://github.com/dashboard');
  }

  async isVisible(): Promise<boolean> {
    return this.page.locator('.dashboard').isVisible();
  }
}