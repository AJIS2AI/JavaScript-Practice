let char = prompt("Input Alphabet")

function checkBig(c) {
  if (c == c.toUpperCase()) {
    return "YES";
  } else return "NO";
}

console.log(checkBig(char));