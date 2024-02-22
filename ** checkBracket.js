function solution(d) {
  let step = 0;
  for (let i in d) {
    if (d[i] == "(") {
      step++;
    } else if (d[i] == ")") {
      step--;
    }
  }
  if (step == 0) {
    return true;
  } else {return false}
}

while(1) {
  const n = prompt("1: Input data, 2:program over")
  if (n == '1') {
    const str = prompt("Input data").split("");
    console.log(solution(str));
  } else { break; }
}
