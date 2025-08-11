import { test } from '@playwright/test';
import { SetupAction } from '../../../backend/actions/setup.action';
import { ApplicationSettingsAction } from '../../../backend/actions/application-settings.action';
import { OrderAssertions } from '../../../backend/assertions/order.assertions';
import { OrderAction } from '../../../backend/actions/order.action';
import { MobileLoginPageObject } from '../../../page-objects/mobile/login/mobile-login-page.object';


test.beforeEach('Open start URL', async ({ page, request }) => {
    console.log(`Running ${test.info().title}`);
    await SetupAction.create(request).setup();
    await ApplicationSettingsAction.create(request)
        .change('ORDER_SETTINGS', 'multipleOrder', 'false')
        .change('ORDER_SETTINGS', 'privacy', 'false')
        .change('SALE_SETTINGS', 'showPendingOrdersButton', 'true');
});

test('test', async ({ page, request }) => {
    await MobileLoginPageObject.create(page).start()
        .withPassword('1234')//şifre girisi
        .onLogin()//login ile giriş yap
        .takeInput()//cikti al
        .onType('69').onClickEnter()//type gir ve entere bas(ekle yani)
        .onType('66').onClickEnter()//sonra bir sonraki degeri al 
        .back()//ana sayfaya donder
        .takeOrderList().hasTotal('31,00 €');
});


test('new test', async ({ page, request }) => {
    await MobileLoginPageObject.create(page).start()
        .withPassword('1234')//şifre girisi
        .onLogin()//login ile giriş yap
        .takeProductGroupSelection()
        .takeGroup('Burger')
        .backToProductSelection()
        .takeProduct('DoyDoy Burger')

        .backToGroupSelection()
        .takeGroup('Suppen')
        .backToProductSelection()
        .takeProduct('Kuttelsuppe')
        .takeSize('7.5 €')

        .backToGroupSelection()
        .takeGroup('Nachtisch')
        .backToProductSelection()
        .takeProduct('Cevilzli Künefe')

        .backToGroupSelection()
        .takeGroup('Ofenkartoffeln')
        .backToProductSelection()
        .takeProduct('Ofenkart.+Tzatziki')

});


test('table 6', async ({ page }, require) => {

    await MobileLoginPageObject.create(page).start()
        .withPassword('571622')
        .onLogin()
        .takeProductGroupSelection()
        .takeGroup('Döner Kebap')
        .backToProductSelection()
        .takeProduct('Döner Box')


    await page.getByText('Salat:').click()
    await page.click("#choose-table")
    await page.click('#table_18')
    await page.getByText('An Tisch Senden').click()
})

test('odeme', async ({ page }) => {
    const loginPage = await MobileLoginPageObject.create(page);

    await loginPage
        .start()
        .withPassword('571622')
        .onLogin()
        .takeProductGroupSelection()
        .takeGroup('Döner Kebap')
        .backToProductSelection()
        .takeProduct('Döner Box');

    await page.getByText("Salat:").click();

    await loginPage
        .openTableSelection()
        .selectTable('18')
        .sendToTable()
        .confirmOk()
        .openTableSelection()
        .selectTable('18')
        .showInvoice()
        .closeInvoice();
});
