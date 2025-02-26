import { Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: string;
  private readonly passwordInput: string;
  private readonly loginButton: string;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = 'input[name="login"]'; // GitHub username input
    this.passwordInput = 'input[name="password"]'; // GitHub password input
    this.loginButton = 'input[name="commit"]'; // GitHub login button
  }

  async goto(): Promise<void> {
    console.log('Navigating to login page...');
    await this.page.goto('https://github.com/login', { waitUntil: 'domcontentloaded' });
  }

  async login(username: string, password: string): Promise<void> {
    console.log('Navigating to login page...');
    await this.goto();
  
    console.log('Waiting for username input...');
    await this.page.waitForSelector(this.usernameInput, { timeout: 120000 });
    console.log('Filling username...');
    await this.page.fill(this.usernameInput, username);
  
    console.log('Waiting for password input...');
    await this.page.waitForSelector(this.passwordInput, { timeout: 120000 });
    console.log('Filling password...');
    await this.page.fill(this.passwordInput, password);
  
    console.log('Waiting for login button...');
    await this.page.waitForSelector(this.loginButton, { timeout: 120000 });
    console.log('Clicking login button...');
    await this.page.click(this.loginButton);
  }
}