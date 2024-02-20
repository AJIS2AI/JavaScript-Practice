let heights = prompt("Input friends' heights").split(" ").map(Number)
function checkSorted(h) {
  for (let i=0; i<h.length; i++) {
    if (h[i]>h[i+1]) {
      return "NO"
    } else return "YES"
  }
}
console.log(checkSorted(heights))