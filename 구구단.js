let inputNum = prompt("Input a number")
function gugudan(num) {
  let arrNum = [];
  for (let i=1; i <= 9; i++) {
    arrNum.push(num*i);
  }
  let result = arrNum.join(" ")
  return result;
}
console.log(gugudan(inputNum));