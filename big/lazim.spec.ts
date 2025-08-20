import {test} from "@playwright/test";
import {SetupAction} from "../../../backend/actions/setup.action";
import {LoginPageObject} from "../../../page-objects/login/login-page.object";
import {OrderAction} from "../../../backend/actions/order.action";
import {OrderAssertions} from "../../../backend/assertions/order.assertions";

test.beforeEach('Open start URL', async ({page, request}) => {
    console.log(`Running ${test.info().title}`);
    await SetupAction.create(request).setup();
});

test('Complete selections', async ({page, request}) => {


    await LoginPageObject.create(page).start()
        .withPassword('571622')
        .onLogin()
        .hasUser('Administra Administra')

        .takeProductSelection()

        .takeProductGroupByName('Suppen')
        .takeProductByName('Kuttelsuppe')
        .takeSizePage()
        .takeSizeProduct()
        .takeSizeProductByName('Artikel')
        .back()

        .takeProductGroupByName('Burger')
        .takeProductByName('DoyDoy Burger')
        .back()


        .takeProductGroupByName('Nachtisch')
        .takeProductByName('Cevilzli Künefe')

        .back()

        .takeProductGroupByName('Ofenkartoffeln')
        .takeProductByName('Ofenkart.+Tzatziki')
        .back()

        .takeProductGroupByName('Aus dem Tontopf')
        .takeProductByName('Firinda et Sote')
        .back()

        .takeProductGroupByName('Getränke')
        .takeProductByName('Ayran')
        .back()

        .takeProductGroupByName('Döner Kebap')
        .takeProductByName('Iskender Kebap')
        .back()

        .takeProductGroupByName('Steaks')
        .takeProductByName('Doy Doy Köfte')
        .takeSizePage()
        .takeSizeProduct()
        .takeSizeProductByName('Medium')
        .back()

        .takeProductGroupByName('Warme Getränke')
        .takeProductByName('kleine Tee')
        .back()

        .takeProductGroupByName('Gefüllte Rollfladen')
        .takeProductByName('Hähn.Hack.Dürüm')
        .back()

        .takeProductGroupByName('Vom Grill')
        .takeProductByName('Beyti in ger.Teig')
        .back()

        .takeProductGroupByName('Frühstück')
        .takeProductByName('Beilage Vegan')
        .back()

        .takeProductGroupByName('Lahmacun/Pide')
        .takeProductByName('Pide Doy Doy')
        .back()

        .takeProductGroupByName('Salat')
        .takeProductByName('Gem.Sal.+Hähn.')
        .back()

        .takeProductGroupByName('To Go')
        .takeProductByName('sprite')
        .back()

        .takeProductGroupByName('Vegetarisch')
        .takeProductByName('Falafel Dürüm')
        .back()

        .takeProductGroupByName('Beilagen')
        .takeProductByName('Joghurt Soße')
        .back()
        .back()

        .takeOrderList()

        .hasTotal('169,00 €')
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
        .hasPlu('174')
        .hasName('kleine Tee')
        .hasAmount('1')
        .hasSinglePrice('01,50 €')

        .back()
        .takeRow(17)
        .hasName('sprite')
        .hasAmount('1')
        .hasSinglePrice('03,00 €')


        .back()
        .takeOperation()
        .onClickCasa()

        .wait()
        .payAndGoToMainPage()


    const order1 = await OrderAction.create(request).readLatestOrder();
    await OrderAction.create(request).addToTable(order1.id, '1').wait();
    await OrderAssertions.create(request)
        .startAssertionWithOrderId(order1.id)
        .hasTotalSizeProducts(17)
        .assertPayment()
        .startAssertion()
        .hasTotalPaymentPart(1, 169.00)
        .hasPayments('CASH', 169.00)
        .back()

        .assertionOrderProducts()

        .assert(1)
        .hasProductStatus('PAID')
        .hasPrice(7.50)
        .hasName('Kuttelsuppe')
        .hasPlu('3')
        .back()
        .assert(2)
        .hasProductStatus('PAID')
        .hasPrice(14)
        .hasName('DoyDoy Burger')
        .hasPlu('67')
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


});
