import {test,expect} from '@playwright/test';

test('firs test',async({page})=>{

    await page.goto("https://demoblaze.com/");//await bir kodu bekletmeti saglar yani devami var
    await expect(page).toHaveTitle('STORE');//sayfanin baslik(title) kisminda store yazip yazmanidigini kontrol eder
    await expect(page).toHaveURL('https://demoblaze.com/');//bu sekil bir wepsitenin olup olmadigini kontrol eder
}
)
