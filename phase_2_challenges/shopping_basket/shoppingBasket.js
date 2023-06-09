class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }
  getTotalPrice = () => {
    const prices = this.basket.map((candy) => candy["price"]);
    let sum = 0;
    prices.forEach((price) => (sum += price));
    return sum - this.discount;
  };
  addItem = (candy) => {
    this.basket.push(candy);
    return NaN;
  };

  applyDiscount = (discount) => {
    this.discount = discount;
  };
}

module.exports = ShoppingBasket;
