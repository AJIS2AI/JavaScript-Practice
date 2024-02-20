let input = prompt("Please input string")

 function fillBlank(str) {
  let blank = 50 - str.length;
  let left = Math.floor(blank/2);
  let right = blank - left;
  return "=".repeat(left)+str+"=".repeat(right);
 }

 console.log(fillBlank(input));
