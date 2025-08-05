import {test,expect} from '@playwright/test';//test baslama kodu


test('second_test',async({page})=>
{
    await page.goto("https://demoblaze.com/");//sokak girisi gibi dusun
   
    await expect(page).toHaveTitle('STORE');//basligin store olup olmadigini incelr
    await expect(page).toHaveURL('https://demoblaze.com/');//bu ise bu skeilde bir wepsitenin olup olamadigini kontrol eden kod blogu

    await expect(page.locator('h1')).toBeVisible();// tek tirnak içinde yazilan basligin olup olmadigini kontrol eder

    await page.click('text=Login');//login kismini otomatik olarak incelyen bir kod

    await page.fill('#username', 'myUserName');//bu kodda ise kullanici adi ve şifre kismini otomatik olarak test eder (kendi kendi giris yapar yani)
    await page.fill('#password', 'myPassword123');
    await page.check('#agree');//Checkbox kutunusu otomatik doldurur
    await page.selectOption('#country', 'TR');//dil secenegini turkce yapar


})
