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


    const day1 = page.getByText("monday");
    const day2 = page.getByText("moday");

    await day1.click();
    await page.getByAltText("moday").click();
    //bu ikisi ayni anlmada kullanilir

    await expect(day1).toBeChecked();
    await expect(page.getByAltText("monday")).toBeChecked();
    //bu ikisi de tiklanip tiklanmadigini kontrol eder

    await page.press("#alan", 'Enter');
    //pres senin bir tusa tiklamani saglar


//parseInt->bu ise  stingli intecera ceviran kod logu


})


test("Alert", async ({ page }) => {

    page.on("dialog", dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toBe("I am an alert box!");//uyari msjini kontrol etmeni saglayin kod satiri
        dialog.accept()
    })

    await page.click("//button[text()='Alert']");

})//alert sana vep sayfasinin msj yazip yazmadigni kontrol eder



//---Frame
//frameler bir vepsitenin içindeki baska bir siteyi test etmei saglar
//ornegin bir wepsitenin içindeki reklam gibi 
test("Frame1", async ({ page }) => {

    const frame1 = page.frameLocator("#frame1");

    frame1.getByText("This is a sample page");

    const elementsText = await frame1.getByAltText("This is a sample page").textContent();

    expect(elementsText).toBe("This is a sample page");



})


//klayye işlemleri
test("keyboar acions", async ({ page }) => {

    //klavyedeki butonlara basma işlemidir
    await page.goto("https://www.ebay.com/");//sayfaya git
    const searchBox = page.getByPlaceholder("Search for anything");

    await searchBox.fill("phone holder for bike");//search kismina bu yaziyi yazar


    await page.keyboard.down('Shift');//down basili tutma işlemini gerceklestirir

    for (let i = 0; i < 'bike'.length; i++) {

        await page.keyboard.press("ArrowLeft");//pres tek seferlik tiklamalar için kullanilir
        //arrowleft işe sol ok tusuna basmani sagar bir kere
    }
    await page.waitForTimeout(3000);

    await page.keyboard.up("Shift");//up ise down yani takili birakilandan elini  cekme işlemini saglar

    await page.keyboard.press("Blackspace");//bike kelimesini silma işleminidir

    await page.keyboard.press("c");

    await page.keyboard.press("a");

    await page.keyboard.press("r");

    await page.keyboard.press("Enter");//enter tusuna basar


  await page.paginationLocator("google.com")//bir sayfadaki diger linklere ulasmani saglar

})


//Dosya yukleme işlemleriza
test("updates file", async ({ page }) => {

    await page.goto("htts://demoqa.com/upload-dowloand");
    const uploadInput=page.locator("id=uploadFile");

    await uploadInput.setInputFiles("emircan.pdf");//bu dosyayi eklemei işlemidir

    const controls=page.locator("id=uploadFilePath");
    expect(controls.textContent()).toContain("emircan.pdf");//dosyanin yuklendi m yuklenmedigi mi kontrol eder



})
