import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.getByRole("button", {name: "Test"});
    }

    async goto() {
        this.page.goto("https://test.com");
    }
}