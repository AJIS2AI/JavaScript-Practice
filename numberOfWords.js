let inputString = prompt("Input your stirng:");

function numbersOfWords(str) {
  let numOfword = str.split(" ");
  return numOfword.length;
}

console.log("단어의 개수: "+numbersOfWords(inputString))