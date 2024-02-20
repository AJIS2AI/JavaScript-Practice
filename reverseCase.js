let input = prompt("Input String.").split('');

function reverseCase(str) {
let result = [];
for (let i=0; i<str.length; i++) {
if (str[i] == str[i].toUpperCase()) {
result.push(str[i].toLowerCase()) }
else { result.push(str[i].toUpperCase()) }
}
let resultString = result.join('');
return resultString;
}

console.log("Output: "+reverseCase(input))