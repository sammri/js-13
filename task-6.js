const shop = [
  { name: "apple", price: 10, quantity: 6 },
  { name: "pear", price: 15, quantity: 5 },
  { name: "watermelon", price: 5, quantity: 3 },
];

const calculateTotalPrice = (allProducts, productName) => {
  let total = 0;
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      total = price * quantity;
    }
  }
  return total;
};

console.log(calculateTotalPrice(shop, "apple"));
