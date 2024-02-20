let inputString = prompt("Input your string");
function QtoE(str) {
  let arr = str.split("");
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == 'q') {
      arr[i] = 'e';
    } 
  } return arr.join("");
}
console.log("result: "+ QtoE(inputString))