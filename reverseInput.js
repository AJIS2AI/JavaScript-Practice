let inputNums = prompt("여러개의 숫자를 입력하세요. ")

function reverseNumbers(nums) {
  let arrNum = nums.split(" ");
  let reverseNum = arrNum.reverse();
  let result = reverseNum.join(" ");
  return result;
}

console.log(reverseNumbers(inputNums));