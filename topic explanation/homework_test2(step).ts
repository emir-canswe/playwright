import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await test.step('Go to demoblaze homepage', async () => {
    await page.goto("https://demoblaze.com/");
  });
});

test('homepage title is STORE', async ({ page }) => {
  await test.step('Check page title', async () => {
    await expect(page).toHaveTitle('STORE');
  });
});

test('user can open sign up modal and fill form', async ({ page }) => {
  await test.step('Click Sign up button', async () => {
    await page.click("//a[text()='Sign up']");
  });
  await test.step('Fill sign up username', async () => {
    await page.fill('#sign-username', 'thomashelby1021@mail.com');
  });
  await test.step('Fill sign up password', async () => {
    await page.fill('#sign-password', '214421');
  });
});

test('user can open login modal and fill form', async ({ page }) => {
  await test.step('Click Log in button', async () => {
    await page.click("//a[text()='Log in']");
  });
  await test.step('Fill login username', async () => {
    await page.fill('#loginusername', 'thomashelby1021@mail.com');
  });
  await test.step('Fill login password', async () => {
    await page.fill('#loginpassword', '214421');
  });
});
