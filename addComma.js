function comma(n) {
  n.reverse();
  for (let i=3; i<n.length; i+=3) {
    n.splice(i, 0, ',');
    i++;
  }
  n.reverse();
  let result = n.join('');
  return result;
}

let input = prompt("Please input today's ammount").split('');
console.log(`result: ${comma(input)}`);
