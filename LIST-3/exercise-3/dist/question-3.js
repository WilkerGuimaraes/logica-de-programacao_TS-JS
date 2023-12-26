"use strict";
class Sales {
    constructor() {
        this.discount = Sales.standardDiscount;
    }
    getDiscountRate(discountType) {
        return discountType === 1 ? 0.1 : this.discount;
    }
    calculateDiscountValue(purchaseValue, discountType) {
        const discountRate = this.getDiscountRate(discountType);
        const discountedPrice = purchaseValue * (1 - discountRate);
        return discountedPrice;
    }
}
Sales.standardDiscount = 0.3;
const sale = new Sales();
const purchaseValue = 100;
const discountType = 1;
const discountedPrice = sale.calculateDiscountValue(purchaseValue, discountType);
console.log(`Product value: R$${purchaseValue}`);
console.log(`Discounted price: R$${discountedPrice}`);
