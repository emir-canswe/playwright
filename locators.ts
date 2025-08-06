import { test, expect } from '@playwright/test' // Test framework import

// npx playwright test buildlnLocators.spec.ts --headed

test.beforeEach(async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // Navigates to the login page before each test
})

test('build-in locators', async ({ page }) => {

    await page.getByRole('button', { name: 'Login' }).click();
    // Finds the button element by its role 'button' and name 'Login', then clicks it

    await page.getByText('Welcome to OrangeHRM').isVisible();
    // Checks if the text 'Welcome to OrangeHRM' is visible on the page

    // await page.getByLabel('Username').fill('emircan');
    // Finds an input by its associated label text 'Username' and fills it with 'emircan'

    await page.getByPlaceholder("Username").fill("Admin");
    // Finds input by its placeholder text 'Username' and fills it with 'Admin'

    await page.getByPlaceholder("Password").fill("Admin123");
    // Finds input by its placeholder text 'Password' and fills it with 'Admin123'

    // await expect(page.getByAltText("Forgot your password?")).toBeVisible();
    // Checks if an element with alt text 'Forgot your password?' is visible

    // await page.getByAltText('company-branding').click();
    // Attempts to find an element (usually an image) by its alt attribute 'company-branding' and clicks it
    // (This might not work if alt attribute does not exactly match)

    // await page.getByTitle('Settings Menu').click();
    // Finds an element by its title attribute 'Settings Menu' and clicks it

})
