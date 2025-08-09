import {test,expect} from '@playwright/test';//test baslama kodu


//eger sadece bir test alanini caliştirmak istiyorsan dosyanin ismini de girmek zorundasin

//npx playwright test firstest.spec.ts dersen terminalde sadece bu test tek calisacak


test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");//bu kod her teste yeniden ve sifirdan baslamani saglayan kdo satiri

})

//describe=betimleme demke zaten ordan aklina kasin

//describle javdaki fonksiyonlar ile benzer işleri  yurutur olay bu yani

test.describe("test_ders1",()=>{
    test('helllo',async({page})=>{

    await expect(page).toHaveTitle('STORE');//basligin store olup olmadigini incelr
    await expect(page).toHaveURL('https://demoblaze.com/');//bu ise bu skeilde bir wepsitenin olup olamadigini kontrol eden kod blogu

   /* await expect(page.locator('h1')).toBeVisible();// tek tirnak içinde yazilan basligin olup olmadigini kontrol eder

    await page.click('text=Login');//login kismini otomatik olarak incelyen bir kod

    await page.fill('#username', 'myUserName');//bu kodda ise kullanici adi ve şifre kismini otomatik olarak test eder (kendi kendi giris yapar yani)
    await page.fill('#password', 'myPassword123');
    await page.check('#agree');//Checkbox kutunusu otomatik doldurur
    await page.selectOption('#country', 'TR');
});


test('Verify that user able to log in the system with right credentials',async({page})=>{

    await page.click("//a[text()='Log in']");//belirtlen adresi bu kod ile test edeblirsin
    //await page.locator("//a[text()='Log in']").click();
   // await page.fill("#loginusername","thomashelby1021");
    //await page.fill("#loginpassword","214421");


    //await expect(page.locator("//a[@id='logout2']")).toBeVisible();//logoutun ekranda gorunup gorenmedigini kontrol eder
})
})





