import { test, expect } from '@playwright/test';
// Import Playwright test functions 'test' and 'expect' for writing tests

// This hook runs before each test
test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");  
    // Navigate to the website before each test starts
})

test('home test1', async({page})=>{
    await expect(page).toHaveTitle('STORE');  
    // Verify the page title is exactly 'STORE'
})

test('sign in', async ({ page }) => {
  
  await page.click("//a[text()='Sign up']");
  // Click on the 'Sign up' link using XPath selector

  await page.fill('#sign-username', 'thomashelby1021@mail.com');
  // Fill the username input field with the email

  await page.fill('#sign-password', "214421");
  // Fill the password input field with the password
});

test('log in', async({page})=>{

    await page.click("//a[text()='Log in']");
    // Click on the 'Log in' link using XPath selector

    await page.fill('#loginusername', 'thomashelby1021@mail.com');
    // Fill the login username input field with the email

    await page.fill('#loginpassword', '214421');
    // Fill the login password input field with the password

})
