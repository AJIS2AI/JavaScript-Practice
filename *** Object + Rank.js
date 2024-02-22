let name = "MADARA REI NAGISA RINNE".split(" ");
let height = "180 179 178 181".split(" ");
height.map(a => parseInt(a, 10));
console.log(height);

function rank(name, height) {
  let temp = [];
  for (let i of name) {
    let obj = {};
    obj['name'] = i;
    obj['value'] = height[name.indexOf(i)];
    temp.push(obj);
  }
  console.log(temp);

  temp.sort(function (a, b){
    return a.value < b.value ? 1: a.value > b.value ? -1: 0;
  })

  console.log(temp);

  let result = {};
  for (let i of temp) {
    result[i['name']] = temp.indexOf(i) + 1;
  };

  return result;
}

console.log(rank(name, height));
