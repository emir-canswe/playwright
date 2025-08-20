import {APIRequestContext, expect} from '@playwright/test';
import {OrderProduct} from '../model/oder-product.model';
import {OrderProductAssertions} from './order-product.assertions';
import {SeasoningItemAssertions} from './seasoning-item.assertions';
import proxymise = require('proxymise');

export class OrderProductItemAssertions {


    constructor(private currentOrderProduct: OrderProduct,
                private request: APIRequestContext, private orderId: number,
                private orderProductAssertions: OrderProductAssertions
    ) {
    }

    async hasPlu(value: string | null): Promise<this> {
        expect(this.currentOrderProduct.plu).toBe(value);
        return this;
    }

    async hasName(value: string): Promise<this> {
        expect(this.currentOrderProduct.name).toBe(value);
        return this;
    }

    async hasSizeName(value: string | null): Promise<this> {
        expect(this.currentOrderProduct.sizeName).toBe(value);
        return this;
    }

    async hasUnit(value: string): Promise<this> {
        expect(this.currentOrderProduct.unit).toBe(value);
        return this;
    }

    async hasUnitQuantity(value: number): Promise<this> {
        expect(this.currentOrderProduct.unitQuantity).toBe(value);
        return this;
    }

    async hasPrice(value: number): Promise<this> {
        expect(this.currentOrderProduct.gross).toBeCloseTo(value, 2);
        return this;
    }

    async hasOriginalPrice(value: number): Promise<this> {
        expect(this.currentOrderProduct.originalPrice).toBe(value);
        return this;
    }

    async hasProductStatus(value: string): Promise<this> {
        expect(this.currentOrderProduct.productStatus).toBe(value);
        return this;
    }

    async hasTax(value: number): Promise<this> {
        expect(this.currentOrderProduct.tax).toBe(value);
        return this;
    }

    async hasTaxMode(value: string): Promise<this> {
        expect(this.currentOrderProduct.taxMode).toBe(value);
        return this;
    }

    async hasNote(value: string): Promise<this> {
        expect(this.currentOrderProduct.note).toContain(value);
        return this;
    }

    async hasTaxModeChanged(value: boolean): Promise<this> {
        expect(this.currentOrderProduct.taxModeChanged).toBe(value);
        return this;
    }

    async hasPrinted(value: boolean): Promise<this> {
        if (!this.currentOrderProduct.enriched) {
            expect(this.currentOrderProduct.printed).toBe(value);
        }
        return this;
    }

    async hasPrintDetail(value: string): Promise<this> {
        if (!this.currentOrderProduct.enriched) {
            expect(this.currentOrderProduct.printDetail).toBe(value);
        }
        return this;
    }

    async hasTaxName(value: string): Promise<this> {
        expect(this.currentOrderProduct.taxName).toBe(value);
        return this;
    }

    async hasDiscount(value: number): Promise<this> {
        expect(this.currentOrderProduct.discount).toBe(value);
        return this;
    }

    async hasGross(value: number): Promise<this> {
        expect(this.currentOrderProduct.gross).toBeCloseTo(value, 2);
        return this;
    }

    async hasNetPrice(value: number): Promise<this> {
        expect(this.currentOrderProduct.netPrice).toBeCloseTo(value, 2);
        return this;
    }

    async hasTaxRate(value: number): Promise<this> {
        expect(this.currentOrderProduct.taxRate).toBe(value);
        return this;
    }

    async print(): Promise<this> {
        console.log(this.currentOrderProduct)
        return this;
    }

    async hasSeasoningSize(value: number): Promise<this> {
        expect(this.currentOrderProduct.orderProductSeasonings.length).toBe(value);
        return this;
    }

    async seasoning(row: number): Promise<SeasoningItemAssertions> {
        return proxymise(new SeasoningItemAssertions(this.currentOrderProduct.orderProductSeasonings[row - 1], this));
    }

    async back(): Promise<OrderProductAssertions> {
        return this.orderProductAssertions;
    }


}
