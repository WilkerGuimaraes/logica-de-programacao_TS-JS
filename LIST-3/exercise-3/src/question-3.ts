class Sales {
  static standardDiscount: number = 0.3;

  private discount: number;

  constructor() {
    this.discount = Sales.standardDiscount;
  }

  getDiscountRate(discountType: number): number {
    return discountType === 1 ? 0.1 : this.discount;
  }

  calculateDiscountValue(purchaseValue: number, discountType: number): number {
    const discountRate = this.getDiscountRate(discountType);
    const discountedPrice = purchaseValue * (1 - discountRate);
    return discountedPrice;
  }
}

const sale = new Sales();

const purchaseValue = 100;

const discountType = 1;

const discountedPrice = sale.calculateDiscountValue(
  purchaseValue,
  discountType
);
console.log(`Product value: R$${purchaseValue}`);
console.log(`Discounted price: R$${discountedPrice}`);
