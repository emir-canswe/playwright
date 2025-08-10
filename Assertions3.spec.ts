import { test, expect } from '@playwright/test';


test ("soft assertions",async({page})=>{

    await page.goto("https://demoqa.com/");

    await expect.soft(page.getByText("Book Store Applications")).not.toBeInViewport();

    await expect.soft(page.getByText("Book Store Applications")).toContainText("Applications")//bu metto aplicassion içerip içermedigini kontrol ediyor

    //expect tek kullanilirsa hata verilen ilk adna kod biter ama soft kullanirsan hata verirse bile test calişmaya devam eder


    //yani en sonda sana hatali olanlari listeleme işlemine tabi tutuyor


})
