function consecutiveNum(nums) {
  for (let i=0; i<nums.length; i++) {
    if (nums[i+1]-nums[i] !== 1) {
      return "NO"
    } else {
      return "YES"
    }
  }
}

let numbers = prompt("Please show your numbers").split(' ').map(Number)
console.log(consecutiveNum(numbers));
