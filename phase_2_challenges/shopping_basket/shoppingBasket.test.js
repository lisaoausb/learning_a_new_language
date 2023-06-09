const Candy = require("./candy");
const ShoppingBasket = require("./shoppingBasket");

describe("test shopping basket class", () => {
  let basket = new ShoppingBasket();
  it("get total of basket", () => {
    expect(basket.getTotalPrice()).toBe(0);
  });
  it("add new item to basket", () => {
    let candy = new Candy("Mars", 4.99);
    basket.addItem(candy);
    expect(basket.basket).toEqual([candy]);
    expect(basket.getTotalPrice()).toBe(4.99);
  });
  it("add more items to basket", () => {
    // const candy = new Candy("Mars", 4.99); --- here, the candy added in test 2 is carried forward to test 3, maybe because it is in the same 'describe'
    // basket.addItem(candy);
    basket.addItem(new Candy("Skittle", 3.99));
    basket.addItem(new Candy("Skittle", 3.99));
    expect(basket.getTotalPrice()).toBe(12.97);
  });
});

describe("test shopping basket class with mock", () => {
  let basket = new ShoppingBasket();
  it("get total of basket", () => {
    expect(basket.getTotalPrice()).toBe(0);
  });
  it("add new mock item to basket", () => {
    let candyDouble = { name: "Mars", price: 4.99 };
    basket.addItem(candyDouble);
    expect(basket.basket).toEqual([candyDouble]);
    expect(basket.getTotalPrice()).toBe(4.99);
  });
  it("add more items to basket", () => {
    basket.addItem({ name: "Skittle", price: 3.99 });
    basket.addItem({ name: "Skittle", price: 3.99 });
    expect(basket.getTotalPrice()).toBe(12.97);
  });

  it("apply a discount", () => {
    basket.applyDiscount(2.97);
    expect(basket.getTotalPrice()).toBe(10.0);
  });
});
