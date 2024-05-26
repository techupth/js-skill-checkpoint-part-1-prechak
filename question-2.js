// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

// 1. แก้ไข Apple quantity - loop ?
inventory[0].quantity = 200;

/* ทำไปเพื่ออัลไล ทำง่ายๆก็ได้นิ - -"
function update(name, quantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      inventory[i].quantity = quantity;
    }
  }
}

update("Apple", 200);
*/

// 2. เพิ่ม Orange
inventory.push({ name: "Orange", price: 20, quantity: 300 });

// 3. รวมมูลค่า loop ?
const total = inventory.reduce(function (acc, curr) {
  return acc + curr.price * curr.quantity;
}, 0);

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${total} บาท`);

// inventory;
/*
const sumQuantity = inventory.reduce(function (acc, curr) {
  return acc + curr.quantity;
}, 0);
console.log(sumQuantity);

const sumPrice = inventory.reduce((acc, curr) => acc + curr.price,0);
console.log(sumPrice);

const total = sumQuantity + sumPrice;
console.log(total);
//ผิิดจุดประสงค์ lol
*/
