function combination(array, n) {
  let combi = [];
  const f = (prefix, array) => {
    for (let i=0; i<array.length; i++) {
      combi.push(prefix+array[i]);
      f(prefix+array[i], array.slice(i+1));
    }
  }

  f('', array);

  const result = combi.filter(x=>x.length == n)

  console.log(result);
  return result.length;
}

const chars = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ'];
let num = +prompt("Please input a number");

console.log(combination(chars, num));
