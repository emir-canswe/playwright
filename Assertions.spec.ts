import { test, expect } from '@playwright/test';

/*DOM, yani Document Object Model, bir web sayfasının HTML yapısının tarayıcı tarafından oluşturulmuş canlı halidir.yani iskeletidir */

test.describe("assertions", async () => {

  test("hard assertions", async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveURL(/demoblaze\.com/); // regex ile daha güvenli
    await expect(page).toHaveTitle("STORE");
    await expect(page.getByText("Place Order").nth(1)).not.toBeAttached();// “Sayfadaki ikinci 'Place Order' yazısına sahip elementin, şu anda DOM’a bağlı olmadığını (sayfada olmadığını) doğrula.”
    //yani place order yazisini ana sayfaada bulup sonra onrada olmadigini kontrol ediyor ama nth(1) demek bundan 2 tane var demek ve bana 2. sini bul demek
    /*🔹 Bu ne yapıyor? page.getByText("Place Order") → Sayfada “Place Order” yazan tüm elementleri buluyor..nth(1)→ Bu bulduğu elementler arasında 2. sıradakini alıyor.Çünkü sayma sıfırdan başlıyor, yani:nth(0) → 1. element nth(1) → 2. element (senin dediğin gibi).not.toBeAttached()→ Bu 2. “Place Order” elementinin şu anda DOM’da olmadığını (yani silinmiş / kaldırılmış olduğunu) kontrol ediyor. */
    //bu kodda not degrini caliştirssan hgata verecek cunku kodun o kisminda place order yazisi yok yani not olmali


  });


  test("autimation practice", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator('#male').check();
    //bu kod male aidisine sahip kutuyu bulup işaretler
    // await expect(page.locator('#male')).toBeChecked();
    //bu ise male aidisine sahip butonu bulup işaretli olup olmadigini kontrol eder

    // await expect(page.locator()).toBeDisabled();



    await expect(page.locator("#name")).toBeEmpty();//name isimli id degerinine sahip olan ksimin içerisnin  bos olup olamdigini kontrol eder
    await page.fill('#name', 'emircan');//name id sinine sahip sayfaya emircan yerlestirdim ve sonra o degerin eklenip eklenmedigini kontrol ettim dogru mu anladim
    await expect(page.locator("#name")).toHaveValue("emircan");
    //yukerdaki metotlae once bos olup olmadigini kontrol eder sonra olaraya emircan yazar en sonra da orada emircan yazip yazmadigini kontrol ediyor

    //  await expect(page.locator("#wikipedia-icon")).toHaveScreenshot();//onceden yuklenmis ekran goruntusunun su an var olup olmadigini kontrol eder


    //await expect(page.locator("")).toHaveTitle("Form Elements")  BU metot isse girilern basligin olp olmadigini kontorl eder





  })
  test("new site", async ({ page }) => {

    await page.goto("https://demoqa.com/");

    await expect(page.getByText("Book Store Application")).toContainText("Book ");//bu yazin içinde buna benzer bir yazinin olup olmadigini kontrol eder
    

    await expect(page.getByText("Book Store Application")).toHaveText("Book Store Application");//ayni metinden aynisi olmasi laizm
    


  })
})


