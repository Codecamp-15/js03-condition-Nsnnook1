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