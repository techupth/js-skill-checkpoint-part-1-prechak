// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

// 1 ใช้คำสั่งเพิ่มค่าใน Object
myTodo.push({ id: 5, todo: "Walk the dog" });

// 2 Reassign id 4 loop ?
function update(id, newTodoValue) {
  for (let i = 0; i < myTodo.length; i++) {
    if (myTodo[i].id === id) {
      myTodo[i].todo = newTodoValue;
    }
  }
}

update(4, "Go to the gym");

// 3 ลบ Walk the dog ทิ้ง
myTodo.pop();

// 4 log ออกมา
// console.log(myTodo[myTodo.length - 1]);
console.log(myTodo.slice(-1));
