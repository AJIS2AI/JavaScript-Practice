let student_score = [];
let class_score = [];
let total_score = [];

for (let k=0; k<7; k++) {
  class_score = [];
  for (let j=0; j<30; j++) {
    student_score = [];
    for (let i=0; i<5; i++) {
      student_score.push(Math.floor(Math.random()*100) + 1);
    }
    class_score.push(student_score);
  }
  total_score.push(class_score);
}

console.log(total_score);

let total_average = [];
let class_average = [];
let student_average = [];
let student_sum = [];
let class_sum = [];
let student_one = 0;
let num1 = 0;

for (let c of total_score) {
  for (let s of c) {
    student_sum = s.reduce((a,b) => a+b);
    student_average = student_sum / 5;
    class_average.push(student_average);
    if (num1 < student_average) {
      num1 = student_average;
    }
  }
  console.log(num1);
  num1 = 0;
  console.log(class_average);
  total_average.push(class_average.reduce((a,b) => a+b)/30);
  class_average = [];
}

console.log(total_average);
console.log(total_average.reduce((a,b) => a+b)/7);
