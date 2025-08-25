import { test, expect } from '@playwright/test';
import { stringify } from 'querystring';


test("soft assertions", async ({ page }) => {

    await page.goto("https://demoqa.com/");

    await expect.soft(page.getByText("Book Store Applications")).not.toBeInViewport();

    await expect.soft(page.getByText("Book Store Applications")).toContainText("Applications")//bu metto aplicassion içerip içermedigini kontrol ediyor

    //eger aidiye gore bir yer bulmak istiyorsan locatir kulllan ama sunu unutma expect ile 
    //bir degerin var olup olmadigini kontrol edersin

    await expect(page).toHaveTitle("STORE");
    //bu metot senin sayfanin basligini store olıp olmadigini kontrol eder

    await page.locator("#male").check();
    //locatatior zaten yer buludu anlamida burayi bulup sana o kutucugu işaretler

    await expect(page.locator("#male")).toBeChecked();
    //bu da malenin işaretlenip işaretlenmedigni kontrol eder

    //expect ile kontrol etme işlemi yapilr

    await expect(page.locator("#name")).toBeEmpty();
    //bu da name isimli kismin bos olup olmadigini kontrol eder

    await page.fill("#name", "emircan");//bu da name adili id de emircan simini veriri
    await expect(page.locator('#name')).toHaveValue("emircan");
    //bu da girdigin parametrenin name ismine sahip olup olöadigini kontrol eder


    await expect(page.getByText("benim adim emir")).toContainText("emir");
    //bu metot da siteden benim adim emir yazisini bulup içinde emir olup olmadigini kontrol eder


    await expect(page.getByText("book store applications")).toHaveText("book stora");
    //bu da tum yazinin olup olmadigini kotrol eder



    let value = 12;
    let valueee = 23;

    expect(value).toBe(12);
    //bu metot ise valuenin 12 olup olmadigni kontrol eder

    let str2: string;
    str2 = "emir";

    expect(str2).toContain("emir");
    //tocontain içermek anlaminda zaten ordan akina gelsin




    //Getbyrole

    await page.getByRole('button', { name: 'Login' }).click();
    //Bu metodun amacı, sayfadaki tüm butonlar arasından adı "Login" olan butonu bulup ona tıklamaktır.

    await page.getByText('heloo').isVisible();
    //bu da girilen textin sayfada gorunur olup olmadigni koontrol ediyor 

    await page.waitForTimeout(3000);
    //3 saniye bekler

    await page.locator('#country').selectOption('Canada');
    //bu metot country metodunu bulup canada degerini işaretliyor



    //----diger kullanim sekilleri


    const day1=page.getByText("monday");
    const day2=page.getByText("moday");

    await day1.click();
    await page.getByAltText("moday").click();
    //bu ikisi ayni anlmada kullanilir

    await expect(day1).toBeChecked();
    await expect(page.getByAltText("monday")).toBeChecked();
    //bu ikisi de tiklanip tiklanmadigini kontrol eder

    await page.press("#alan",'Enter');
    //pres senin bir tusa tiklamani saglar

})
