import { test, expect } from '@playwright/test';
//npx playwright test testhoce.spec.ts --headed ---This method ensures that only the selected file is executed.

test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");
})

test('home test1',async({page})=>{

    await expect(page).toHaveTitle('STORE');

})

test('sing in', async ({ page }) => {
  
  await page.click("//a[text()='Sign up']");
  await page.fill('#sign-username','thomashelby1021@mail.com');
  await page.fill('#sign-password',"214421");
 // await page.click('button.btn.btn-primary');//This has no id


});


test('log in',async({page})=>{

    await page.click("//a[text()='Log in']");
    await page.fill('#loginusername','thomashelby1021@mail.com');
    await page.fill('#loginpassword','214421');


})

test('search', async ({ page }) => {
  await expect(page.locator('img')).toBeVisible();
  await expect(page.locator('h1')).toBeVisible();
});

//waitt
test('wait',async({page})=>{
    await page.waitForSelector('#signin2',{timeout:5000});//
})

test('otokey',async({page})=>{
    await page.type('#loginusername','emir');
    await page.type('#loginpassword','2121');
})

