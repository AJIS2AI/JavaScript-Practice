function sol(str) {
  let result = [];
  for (let i=1; i<str.length+1; i++) {
    for (let j=0; j<str.length; j++) {
      result.push(str.slice(j, j+str.length-i+1));
    }
  }
  return result;
}

const inputFirst = prompt("Please input first string.");
const inputSecond = prompt("Pleas input second string.");
const array1 = sol(inputFirst);
const array2 = sol(inputSecond);

let intersection = array1.filter(x=>array2.includes(x));

intersection.sort((a,b)=>{
  return b.length-a.length;
});

console.log(intersection[0].length);
