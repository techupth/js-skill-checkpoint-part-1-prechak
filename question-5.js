// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalProductPrice = products.reduce(function (acc, curr) {
    return acc + curr.price * curr.quantity;
  }, 0);
  // console.log(totalProductPrice);
  if (promotionCode === "SALE20") {
    totalProductPrice = totalProductPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    totalProductPrice = totalProductPrice * 0.5;
    console.log(totalProductPrice);
  } else {
    return totalProductPrice;
  }
}

console.log(calculateTotalPrice(products, ""));
