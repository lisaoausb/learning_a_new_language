class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    let sum = 0;
    const items_prices = this.basket.map((item) => item.price);
    items_prices.forEach((price) => {
      sum += price;
    });
    return sum;
  }

  addItem(item) {
    this.basket.push(item);
  }
}

module.exports = { Candy, ShoppingBasket };

// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97
