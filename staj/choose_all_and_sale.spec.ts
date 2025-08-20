import { test } from '@playwright/test';
import { SetupAction } from '../../../backend/actions/setup.action';
import { ApplicationSettingsAction } from '../../../backend/actions/application-settings.action';
import { OrderAssertions } from '../../../backend/assertions/order.assertions';
import { OrderAction } from '../../../backend/actions/order.action';
import { MobileLoginPageObject } from '../../../page-objects/mobile/login/mobile-login-page.object';
import { MainPageObject } from 'page-objects/main-page/main-page.object';
import { OperationsPageObject } from 'page-objects/operations-page.object';

test.beforeEach('Open start URL1', async ({ page, request }) => {
    console.log(`Running ${test.info().title}`);
    await SetupAction.create(request).setup();
    await ApplicationSettingsAction.create(request)
        .change('ORDER_SETTINGS', 'multipleOrder', 'false')
        .change('ORDER_SETTINGS', 'privacy', 'false')
        .change('SALE_SETTINGS', 'showPendingOrdersButton', 'true');
});


test('Full', async ({ page, request }) => {
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

        .backToGroupSelection()
        .takeGroup('Aus dem Tontopf')
        .backToProductSelection()
        .takeProduct('Firinda et Sote')

        .backToGroupSelection()
        .takeGroup('Getränke')
        .backToProductSelection()
        .takeProduct('Ayran')

        .backToGroupSelection()
        .takeGroup('Döner Kebap')
        .backToProductSelection()
        .takeProduct('Iskender Kebap')

        .backToGroupSelection()
        .takeGroup('Steaks')
        .backToProductSelection()
        .takeProduct('Doy Doy Köfte')
        .takeSize('Medium: 15.5 € ')

        .backToGroupSelection()
        .takeGroup('Warme Getränke')
        .backToProductSelection()
        .takeProduct('kleine Tee')

        .backToGroupSelection()
        .takeGroup('Gefüllte Rollfladen')
        .backToProductSelection()
        .takeProduct('Hähn.Hack.Dürüm')

        .backToGroupSelection()
        .takeGroup('Vom Grill')
        .backToProductSelection()
        .takeProduct('Beyti in ger.Teig')

        .backToGroupSelection()
        .takeGroup('Frühstück')
        .backToProductSelection()
        .takeProduct('Beilage Vegan')

        .backToGroupSelection()
        .takeGroup('Lahmacun/Pide')
        .backToProductSelection()
        .takeProduct('Pide Doy Doy')

        .backToGroupSelection()
        .takeGroup('Salat')
        .backToProductSelection()
        .takeProduct('Gem.Sal.+Hähn.')

        .backToGroupSelection()
        .takeGroup('To Go')
        .backToProductSelection()
        .takeProduct('sprite')

        .backToGroupSelection()
        .takeGroup(' Vegetarisch ')
        .backToProductSelection()
        .takeProduct('Falafel Dürüm')


        .backToGroupSelection()
        .takeGroup('Beilagen')
        .backToProductSelection()
        .takeProduct('Joghurt Soße')

        .backToGroupSelection()
        .takeGroup('Diverse')
        .backToProductSelection()
        .takeProduct('Speisen Diverse')
        .takeManualPrice('1')
        .back()

        .takeOrderList() // continue on this course // todo you are here
        .takeRow(1)
        .hasPlu('165')
        .hasName('Ayran')
        .hasAmount('1')
        .hasSinglePrice('04,00 €')
        .back()

        .takeRow(2)
        .hasPlu('186')
        .hasName('Beilage Vegan')
        .hasAmount('1')
        .hasSinglePrice('05,00 €')

        .back()
        .takeRow(3)
        .hasPlu('86')
        .hasName('Beyti in ger.Teig')
        .hasAmount('1')
        .hasSinglePrice('18,50 €')

        .back()
        .takeRow(4)
        .hasPlu('143')
        .hasName('Cevilzli Künefe')
        .hasAmount('1')
        .hasSinglePrice('08,00 €')

        .back()
        .takeRow(5)
        .hasPlu('78')
        .hasName('Doy Doy Köfte (Medium)')
        .hasAmount('1')
        .hasSinglePrice('15,50 €')

        .back()
        .takeRow(6)
        .hasPlu('67')
        .hasName('DoyDoy Burger')
        .hasAmount('1')
        .hasSinglePrice('14,00 €')

        .back()
        .takeRow(7)
        .hasPlu('65')
        .hasName('Falafel Dürüm')
        .hasAmount('1')
        .hasSinglePrice('09,00 €')

        .back()
        .takeRow(8)
        .hasPlu('70')
        .hasName('Firinda et Sote')
        .hasAmount('1')
        .hasSinglePrice('19,00 €')

        .back()
        .takeRow(9)
        .hasPlu('112')
        .hasName('Gem.Sal.+Hähn.')
        .hasAmount('1')
        .hasSinglePrice('15,50 €')

        .back()
        .takeRow(10)
        .hasPlu('36')
        .hasName('Hähn.Hack.Dürüm')
        .hasAmount('1')
        .hasSinglePrice('09,00 €')

        .back()
        .takeRow(11)
        .hasPlu('26')
        .hasName('Iskender Kebap')
        .hasAmount('1')
        .hasSinglePrice('16,00 €')

        .back()
        .takeRow(12)
        .hasPlu('125')
        .hasName('Joghurt Soße')
        .hasAmount('1')
        .hasSinglePrice('01,50 €')

        .back()
        .takeRow(13)
        .hasPlu('3')
        .hasName('Kuttelsuppe')
        .hasAmount('1')
        .hasSinglePrice('07,50 €')

        .back()
        .takeRow(14)
        .hasPlu('13')
        .hasName('Ofenkart.+Tzatziki')
        .hasAmount('1')
        .hasSinglePrice('09,00 €')

        .back()
        .takeRow(15)
        .hasPlu('56')
        .hasName('Pide Doy Doy')
        .hasAmount('1')
        .hasSinglePrice('13,00 €')

        .back()
        .takeRow(16)
        .hasName('Speisen Diverse')
        .hasAmount('1')
        .hasSinglePrice('01,00 €')

        .back()
        .takeRow(17)
        .hasPlu('174')
        .hasName('kleine Tee')
        .hasAmount('1')
        .hasSinglePrice('01,50 €')

        .back()
        .takeRow(18)
        .hasName('sprite')
        .hasAmount('1')
        .hasSinglePrice('03,00 €')

        .back()
        .takeOperation()
        .onClickTable()
        .onChooseTable('1').isOnMainPage()

        .takeOrderList()
        .takeOperation()
        .onClickTable()
        .onSelectTable('1')
        .onClickBill()
        .onClickPayment()
        .hasTotal('170,00 €')
        .hasToPay('€170.00')
        .hasTax('€27.14')
        .hasOpenPayment('€170.00')
        .onClickPay()
        .isOnMainPage().wait()


    const order1 = await OrderAction.create(request).readLatestOrder();
    await OrderAction.create(request).addToTable(order1.id, '1').wait();
    await OrderAssertions.create(request)
        .startAssertionWithOrderId(order1.id)
        .hasTotalSizeProducts(18)
        .assertPayment()
        .startAssertion()
        .hasTotalPaymentPart(1, 170.00)
        .hasPayments('CASH', 170.00)
        .back()

        .assertionOrderProducts()
        .assert(1)
        .hasProductStatus('PAID')
        .hasPrice(14)
        .hasName('DoyDoy Burger')
        .hasPlu('67')
        .back()

        .assert(2)
        .hasProductStatus('PAID')
        .hasPrice(7.50)
        .hasName('Kuttelsuppe')
        .hasPlu('3')
        .back()

        .assert(3)
        .hasProductStatus('PAID')
        .hasName('Cevilzli Künefe')
        .hasPrice(8)
        .hasPlu('143')
        .back()

        .assert(4)
        .hasProductStatus('PAID')
        .hasPrice(9)
        .hasName('Ofenkart.+Tzatziki')
        .hasPlu('13')
        .back()

        .assert(5)
        .hasProductStatus('PAID')
        .hasPrice(19)
        .hasName('Firinda et Sote')
        .hasPlu('70')
        .back()

        .assert(6)
        .hasProductStatus('PAID')
        .hasPrice(4)
        .hasName('Ayran')
        .hasPlu('165')
        .back()

        .assert(7)
        .hasProductStatus('PAID')
        .hasPrice(16)
        .hasName('Iskender Kebap')
        .hasPlu('26')
        .back()

        .assert(8)
        .hasProductStatus('PAID')
        .hasPrice(15.5)
        .hasName('Doy Doy Köfte')
        .hasPlu('78')
        .back()

        .assert(9)
        .hasProductStatus('PAID')
        .hasPrice(1.5)
        .hasName('kleine Tee')
        .hasPlu('174')
        .back()

        .assert(10)
        .hasProductStatus('PAID')
        .hasPrice(9)
        .hasName('Hähn.Hack.Dürüm')
        .hasPlu('36')
        .back()

        .assert(11)
        .hasProductStatus('PAID')
        .hasPrice(18.5)
        .hasName('Beyti in ger.Teig')
        .hasPlu('86')
        .back()

        .assert(12)
        .hasProductStatus('PAID')
        .hasPrice(5)
        .hasName('Beilage Vegan')
        .hasPlu('186')
        .back()

        .assert(13)
        .hasProductStatus('PAID')
        .hasPrice(13)
        .hasName('Pide Doy Doy')
        .hasPlu('56')
        .back()



        .assert(14)
        .hasProductStatus('PAID')
        .hasPrice(15.5)
        .hasName('Gem.Sal.+Hähn.')
        .hasPlu('112')
        .back()

        .assert(15)
        .hasProductStatus('PAID')
        .hasPrice(3)
        .hasName('sprite')
        .back()

        .assert(16)
        .hasProductStatus('PAID')
        .hasPrice(9)
        .hasName('Falafel Dürüm')
        .hasPlu('65')
        .back()

        .assert(17)
        .hasProductStatus('PAID')
        .hasPrice(1.5)
        .hasName('Joghurt Soße')
        .hasPlu('125')
        .back()

        .assert(18)
        .hasProductStatus('PAID')
        .hasPrice(1)
        .hasName('Speisen Diverse')
        .back()



});
