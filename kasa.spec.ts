import { Page } from 'playwright';
import { MobileMainPageObject } from '../main/mobile-main-page.object';
import proxymise = require('proxymise');
import { BasePage } from 'page-objects/base-page';
import { promises } from 'dns';

export class MobileLoginPageObject extends BasePage {
    takeProductGroupSelection() {
        throw new Error('Method not implemented.');
    }
    takeOrderList() {
        throw new Error('Method not implemented.');
    }

    constructor(page: Page) {
        super(page);
    }

    static create(page: Page) {
        return proxymise(new MobileLoginPageObject(page));
    }

    async withPassword(value: string): Promise<this> {
        await this.page.getByPlaceholder('Passwort Eintragen').click();
        await this.page.getByPlaceholder('Passwort Eintragen').fill(value);
        return this;
    }

    async onLogin(): Promise<MobileMainPageObject> {
        await this.page.getByRole('button', { name: 'Einloggen' }).click();
        return proxymise<MobileMainPageObject>(new MobileMainPageObject(this.page));
    }

    async start(): Promise<this> {
        await this.page.goto(`${process.env.BASE_MOBILE}/login`);
        return this;
    }



    async openTableSelection(): Promise<this> {
        await this.page.click('#choose-table');
        return this;
    }

   async choose_size(itemName: string, price: string): Promise<this> {
        const buttonName = `${itemName}: ${price}`;
        await this.page.getByRole('button', { name: buttonName }).click();
        return this;
    }

    async selectTable(tableNumber: string): Promise<this> {
        await this.page.click(`#table_${tableNumber}`);
        return this;
    }

    async sendToTable(): Promise<this> {
        await this.page.getByText('An Tisch Senden').click();
        return this;
    }

    async confirmOk(): Promise<this> {
        await this.page.getByText('OK').click();
        return this;
    }

    async showInvoice(): Promise<this> {
        await this.page.getByText('Rechnung Anzeigen').click();
        return this;
    }

    async closeInvoice(): Promise<this> {
        await this.page.click('#close');
        return this;
    }
}
