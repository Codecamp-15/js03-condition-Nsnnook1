let numbers = [];
// i=1 set default; i<=3 รับค่าสามมตัว; => for loop 3 round

for (let i = 1; i <= 3; i++) {
  let input = prompt(`Input number ${i} :`); //${i} นับจำนวนครั้ง
  let number = Number(input);
  numbers.push(number);
}

//.sort เรียงarrayจาก max -> min
numbers.sort((a, b) => b - a);
alert(numbers.join(",")); //แปลง array -> string ,คั่นระหว่าง number




//Sol2
// let numbers = [];
// for (let i = 1; i <= 3; i++) {
//     let input = prompt(`Input number ${i} :`);
//     let number = Number(input);

//     if(isNaN(number)) {
//         alert("Invalid input");
//     }else{
//         numbers.push(number);
//     }
// }
// numbers.sort((a, b) => b - a);
// alert(numbers.join(","));




//V.0 แสดงเฉพาะตัวที่มากสุด
// let x = Number(prompt("Input Number 1"));
// let y = Number(prompt("Input Number 2"));
// let z = Number(prompt("Input Number 3"));

//CASE : x มากสุด
//CASE : y มากสุด
//CASE : z มากสุด

// if (x > y > z) {
//   console.log(`Max = &{x}`);
// } else if (y > x && y > z) {
//   console.log(`Max = &{y}`);
// } else if (y > x && y > z) {
//   console.log(`Max = &{z}`);
// }




//V.0-1 แสดงเฉพาะตัวที่มากสุด
// let x = Number(prompt("Input Number 1"));
// let y = Number(prompt("Input Number 2"));
// let z = Number(prompt("Input Number 3"));

// let max;

// if (x > y > z) {
//   max = x;
// } else if (y > x && y > z) {
//   max = y;
// } else if (y > x && y > z) {
//   max = z;
// } console.log(`MAX = ${max}`);





//V.1 Handle เลขที่ไม่เหมือนกัน
//V.2 Handle เลขที่เหมือนกันได้
// let max;
// let mid;
// let min;

// if (x >= y && x >= z) {
//   max = x;
//   if (y >= z) {
//     mid = y;
//     min = z;
//   } else {
//     mid = z;
//     min = y;
//   }
// } else if (y >= x && y >= z) {
//   max = y;
//   if (x >= z) {
//     mid = x;
//     min = z;
//   } else {
//     mid = z;
//     min = x;
//   }
// } else if (x >= x && z >= y) {
//   max = z;
//   if (x >= y) {
//     mid = x;
//     min = y;
//   } else {
//     mid = y;
//     min = x;
//   }
// }
// console.log(`${max} : ${mid} : ${min}`);

// if (x >= y && x >= z && y >= z) {
//   // x,y,z
//   max = x;
//   mid = y;
//   min = z;
// } else if (x >= y && x >= z && y < z) {
//   max = x;
//   mid = z;
//   min = y;
// } else if (y >= x && y >= z && x >= z) {
//   max = y;
//   mid = x;
//   min = z;
// } else if (y >= x && y >= z && x < z) {
//   max = y;
//   mid = z;
//   min = x;
// } else if (z >= x && z >= y && x >= y) {
//   max = z;
//   mid = x;
//   min = y;
// } else {
//   max = z;
//   mid = y;
//   min = x;
// }

// console.log(`${max} : ${mid} : ${min}`);