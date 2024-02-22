function bubble(arr) {
let result = arr.slice();

for (let i=0; i<result.length-1; i++) {
for (let j=0; j<result.length-i; j++) {
if (result[j] > result[j+1]) {
let t;
t = result[j];
result[j]=result[j+1];
result[j+1] = t; }
}
}
return result;
}

const items = prompt("Please input numbers.").split(' ').map((n) => {
return parseInt(n, 10);
});

console.log(bubble(items));
