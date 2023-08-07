let numbers = [];
// i=1 set default; i<=3 รับค่าสามมตัว; =>  for loop 3 round

for (let i = 1; i <= 3; i++) {
  let input = prompt(`Input number ${i} :`); //${i} นับจำนวนครั้ง
  let number = Number(input);
  numbers.push(number);
}

//.sort เรียงจาก max -> min
numbers.sort((a, b) => b - a);
alert(numbers.join(",")); //แปลง array -> string ,คั่นระหว่าง number
