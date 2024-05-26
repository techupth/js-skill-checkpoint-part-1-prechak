// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 40 },
];
// เริ่มเขียนโค้ดตรงนี้
function findMin() {
  let min = Infinity;
  let minName = "";
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < min) {
      min = inventory[i].quantity;
      minName = inventory[i].name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึืงมี ${min} ชิ้น`;
}

console.log(findMin());
