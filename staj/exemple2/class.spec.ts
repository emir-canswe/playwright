import {Page} from '@playwright/test';
import {MobileMainPageObject} from '../mobile-main-page.object';
import {MobileProductPageObject} from "./mobile-product-page.object";
import proxymise = require('proxymise');

export class MobileProductGroupPageObject {
    private baseElement: string = '//kasa-application-mobile-category';

    constructor(private page: Page) {
    }

 async takeGroup(value: string): Promise<this> {
    const parentElement = this.page.locator(this.baseElement);

    // Buton görünür olana kadar bekle (en fazla 60 saniye)
    await parentElement.getByRole('button', { name: value, exact: true }).waitFor({ state: 'visible', timeout: 60000 });

    // Sonra tıkla
    await parentElement.getByRole('button', { name: value, exact: true }).click();

    return this;
}


    async backToProductSelection(): Promise<MobileProductPageObject> {
        return proxymise(new MobileProductPageObject(this.page));
    }

    async back(): Promise<MobileMainPageObject> {
        return proxymise(new MobileMainPageObject(this.page));
    }

}
