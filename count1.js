function numbersOf1(n) {
  let arr1 = [];
  for (let i=0; i<=n; i++) {
    arr1.push(i);
  }
  let arr2 = arr1.join('');
  arr2.split('').map(Number);
  let count = 0;
  for (let j=0; j<arr2.length; j++) {
    if (arr2[j] == 1) {
      count++;
    }
  }
  return count;
}

let input = +prompt("Input a number.")
console.log(`0부터 ${input}까지의 수에서 등장하는 1의 개수는 ${numbersOf1(input)}개입니다.`);
