import { Locator, Page } from '@playwright/test';
import proxymise = require('proxymise');

// 1. Page → Playwright'in sayfa nesnesi. Sayfadaki her şeyi kontrol etmeye yarar.
let page: Page; // Örnek: const page = await browser.newPage();

// 2. modalLocator → Sayfadaki modal (açılır pencere) elementini temsil eder.
// Modal içindeki elementlerle işlem yapmak için kullanılır.
let modalLocator: Locator; 
// Örnek kullanım: modalLocator.getByPlaceholder("Search").fill("ürün adı");

// 3. paginationLocator → Modal içindeki sayfa numaraları veya ileri-geri butonlarını bulmak için
let paginationLocator: Locator; 
// Örnek: paginationLocator.locator('a.page-link[aria-label="Next"]').click();

// 4. this → Sınıfın kendisini temsil eder. Bu sayede sınıf içindeki değişken ve fonksiyonlara erişebiliriz.
// Örnek: this.modalLocator.fill("65");

// 5. proxymise → Basitçe, bir objeyi promise gibi kullanmamızı sağlar. Burada numpadLocator için kullanılıyor.
let numpadLocator = { clickNumber: async (num: number) => console.log(num) };
await proxymise(numpadLocator).clickNumber(5); // Örnek

// 6. waitForTimeout → Belirli bir süre beklemek için kullanılır (ms cinsinden)
await page.waitForTimeout(1000); // 1 saniye bekler

// 7. waitFor → Locator'un belirli bir state olmasını bekler ('visible', 'hidden', 'detached')
// Örnek: await modalLocator.waitFor({state: 'visible', timeout: 5000});

// 8. fill → Input elementine değer girer
await modalLocator.getByPlaceholder("Search").fill("ürün");

// 9. press → Klavye tuşuna basmak için kullanılır
await modalLocator.getByPlaceholder("Search").press('Control+a'); // Hepsini seç
await modalLocator.getByPlaceholder("Search").press('Delete'); // Sil

// 10. locator → Sayfadaki elementleri seçmek için kullanılır
const productItem = modalLocator.locator('.product-item'); 
await productItem.click();

// 11. scrollIntoViewIfNeeded → Element görünür değilse kaydırır
await paginationLocator.locator('a.page-link[aria-label="Next"]').scrollIntoViewIfNeeded();

// 12. click({force: true}) → Normalde tıklanamayan elementlere bile zorla tıklar
await paginationLocator.locator('a.page-link[aria-label="Next"]').click({force:true});

// 13. filter({has}) → Locator içinden belirli bir text veya elemente sahip olanı seçer
const filteredProduct = modalLocator.locator('.product-item')
    .filter({ has: page.locator('.card-title:has-text("ÜrünAdı")') }).first();

// 14. first() → Locator'dan bulunan ilk elementi seçer
await filteredProduct.click();

// 15. return this → Fonksiyon zincirlemesi için kullanılır
await pageObject.fillInput("65").searchAndSelectProductByName("65");

// 16. return proxymise(this.numpadLocator) → NumpadPageObject'e geçiş yapar
const numpadPage = await pageObject.back();
