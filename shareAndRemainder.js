let input = prompt("숫자 2개를 입력하세요.").split(" ").map(Number);
let share = Math.floor(input[0] / input[1]);
let remainder = input[0] % input[1];
console.log(share +" "+ remainder)