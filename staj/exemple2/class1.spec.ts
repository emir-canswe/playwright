import { APIRequestContext, expect } from '@playwright/test';
import { CouponModel } from "../model/coupon.model";
import proxymise from 'proxymise';

export class CouponAssertions {
  private currentCoupon!: CouponModel;



  constructor(private request: APIRequestContext) {
  }

  static create(request: APIRequestContext) {
    return proxymise(new CouponAssertions(request));
  }

  async startAssertionWithCouponId(id: number): Promise<this> {
    try {
      const response = await this.request.get(`${process.env.BASE_BACKEND_URL}/api/payment-service/coupons/${id}`, {
        headers: { Authorization: `Bearer ${process.env.BASE_BACKEND_TOKEN}` }
      });
      expect(response.status()).toBe(200);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error(`Error starting assertion for coupon: ${error}`);
    }
  }
  async startAssertionWithCoupon(coupon: CouponModel): Promise<this> {
    this.currentCoupon = coupon;
    return this;
  }

  async hasSaleDate(): Promise<this> {
    expect(this.currentCoupon.saleDate).toBeDefined();
    return this;
  }
  async hasCreationDate(): Promise<this> {
    expect(this.currentCoupon.creationDate).toBeDefined();
    return this;
  }
  async hasSerialKey(): Promise<this> {
    expect(this.currentCoupon.serialKey).toBeDefined();
    return this;
  }
  async hasValidUntil(): Promise<this> {
    expect(this.currentCoupon.validUntil).toBeDefined();
    return this;
  }
  async hasCouponDate(): Promise<this> {
    expect(this.currentCoupon.couponDate).toBeDefined();
    return this;
  }
  async hasUserName(value: string): Promise<this> {
    expect(this.currentCoupon.username).toBe(value);
    return this;
  }

  async hasCreatedBy(value: string): Promise<this> {
    expect(this.currentCoupon.createdBy).toBe(value);
    return this;
  }
  async hasFirstAmount(value: number): Promise<this> {
    expect(this.currentCoupon.firstAmount).toBe(value);
    return this;
  }
  async hasAmount(value: number): Promise<this> {
    expect(this.currentCoupon.amount).toBe(value);
    return this;
  }
  async hasStatus(value: string): Promise<this> {
    expect(this.currentCoupon.status).toBe(value);
    return this;
  }

  async hasNote(value: string): Promise<this> {
    expect(this.currentCoupon.noteOnCoupon).toBe(value);
    return this;
  }

  async hasEnabled(value: boolean): Promise<this> {
    expect(this.currentCoupon.enabled).toBe(value);
    return this;
  }


}
