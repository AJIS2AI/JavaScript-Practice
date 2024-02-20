let inputNum = prompt("Input a number.")
function checkPrime(num) {
  if (num == 0 || num == 1) {
    return "NO"
  }
  for (let i=2; i < num; i++) {
    if (num % i == 0) {
      return "NO"
    }
  } return "YES"
}
console.log("Is your input prime number?: "+checkPrime(inputNum));