let inputString = prompt("문자열을 입력하세요.");

function reverseString(str) {
  let splitArray = str.split("");
  let reverseArray = splitArray.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString(inputString));