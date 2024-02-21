function rotation(arr, t) {
  let b = arr.slice();
  for (let i=0; i<t; i++) {
    b.unshift(b.pop());
  }
  let diff = [];
  for (let i in arr) {
    diff.push(Math.abs(arr[i]-b[i]));
  }
  let max = Math.max.apply(null, diff);
  let index = diff.indexOf(max);
  
  console.log(`MAX : ${max}, INDEX : ${index}`);
}

const array = [30, 35, 40, 45, 50, 55, 60];
let turn = +prompt("Please input a number.");
rotation(array, turn);
