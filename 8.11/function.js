const products = [{ id: 1, price: 10000 }, { id: 2, price: 20000 }];

// function applyDiscountInPlace(list, rate) {
//   for (const p of list) {
//     p.price = Math.round(p.price * (1 - rate));
//   }
// }

// applyDiscountInPlace(products);
// console.log(products);
function applyDiscount(list, rate) {
  return list.map(p => ({ ...p, price: Math.round(p.price * (1 - rate)) }));
}

const discounted = applyDiscount(products, 0.1);
console.log(products);   // 원본 그대로
console.log(discounted); // 새로운 결과