let input1 = prompt("Input String: ");
let input2 = prompt("What you want to seek: ");

function indexStr(str1, str2) {
  return str1.indexOf(str2);
}

console.log(indexStr(input1, input2));