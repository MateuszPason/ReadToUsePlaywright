import { test } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test('Ready To Use', async ({page}) => {
    const loginPage = new LoginPage(page);

    loginPage.goto();
});