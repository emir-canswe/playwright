import { test, expect } from '@playwright/test';

test("3. assertions", async ({ page }) => {

    let value = 1;
    let value2 = 23;


    expect(value).toBe(1);//value 1 in 1 oldugunnu kontrol ediyor


    let str1 = "emir";

    let str2 = "emir";


    expect(str1).toBe(str2);//bu ise str1 in str2 ye esit olup olmadigini kontrol ediyor

    //expect(0.2+0.4).toBe(0.6);bu sekide yaparsan hata ile karsilasabilrisin

    expect(0.4+0.3).toBeCloseTo(0.7);//bu sekilde ise yaklasik degerler birbirine esit olabilri


    const obj={
        prop:23
    };


    const obj2={
        prop:23
    }

    expect(obj).toEqual(obj2);//içerik karsilastirmasi yapar
    //expect(obj).toBe(obj2);//referans karsilasmasi yapar ve referaslari farkli oldugu için hata verir ve verir
 

    let str3:string;

    str3="hello world";

    expect(str3).toContain("world");//str3 un word kelimesini içerip içermedigini kontrol ediyor
    expect(str3).toContain("hello");

    const arr1=[2,3,4,5,6,7];

    expect(arr1).toContain(3);//3 sayisinin dizide olup olmadigini kontrol eder

})

