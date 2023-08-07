
let num1 = prompt("Input the first number");
let num2 = prompt("Input the second number");

//!isNan ใช้เช็คค่าว่าเป็นตัวเลขหรือไม่เป็น
if (!isNaN(num1) && !isNaN(num2)) {
  alert(Number(num1) + Number(num2));
} else {
  alert("Invalid number");
}

//วิธีที่สอง
// let num1 = prompt("Input the first number");
// let num2 = prompt("Input the second number");

// num1 = parseFloat(num1);  //แปลง string ให้เป็น number
// num2 = parseFloat(num2);

// //!isNan ใช้เช็คค่าว่าเป็นตัวเลขหรือไม่เป็น
// if (!isNaN(num1) && !isNaN(num2)) {
//   alert(num1 + num2);
// } else {
//   alert("Invalid number");
// }