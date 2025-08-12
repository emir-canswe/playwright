import { expect, Expect,test } from "@playwright/test";

test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
})


test.describe("for elements",async()=>{

    test("text box",async({page})=>{


        const nameField=page.locator("#name");
        await page.fill('#name','emircan');

        //const gonder=page.locator("#male");

        await expect(nameField).toHaveValue("emircan");


       
       // await gonder.check();
        await page.locator("#male").click();
       // await expect(gonder).toBeChecked();//istinel butonun tiklanip tiklanmadigini kontrol eder


        //await expect.locator("#male").click()=await expert(goner).click() arasinda hiçbir fark yoktur

    })
    test("chechBox",async({page})=>{

        const day1=page.getByText("Sunday");
        const day2=page.getByText("Monday");
        const day3=page.getByText("Wednesday");
        const day4=page.getByText("Thursday");




        await page.getByText("Monday").click();//bu kod sana montay textinin oldugu butonu tıklar
        await day1.click();//bu ile yukardali arasinda hicbir fark yok bunu kafana sok,
        //awaid page.getByText("Monday").click();
        await day3.click();//carsamba gunune ait box kutusunu iretleme işlemi yapiyr
        await expect(day3).toBeChecked();//bu kod ise oranin işeretli olup olmadigini kontrol eden method
        await day4.click();//buradaki kod satirinda ise girilen parametre
        await expect(day4).toBeChecked();

    }
    )


})
