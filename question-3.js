// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) return "weak";
  if (userPassword.length >= 6 && userPassword.length <= 10) return "Medium";
  if (userPassword.length > 10) return "Strong";
}

// console.log(checkPasswordStrength("asfasdf"));

////////////// Try ///////////////
// let firstCheck = "Weak";
// function checkPasswordStrength2(userPassword) {
//   for (let i = 0; i < userPassword.length; i++) {
//     if (i >= 6 && i <= 10) {
//       firstCheck = "Medium";
//     } else if (i >= 10) {
//       firstCheck = "Strong";
//     }
//   }
//   return firstCheck;
// }

// console.log(
//   checkPasswordStrength2("sdsasdddddfasdsfasfasffsdfdsfdsfasdasdfds")
// );
