function bracket(e) {
  const m = {
    ')' : '(',
    '}' : '{',
  };
  let stack = [];

  for (let i=0; i<e.length; i++) {
    if (e[i].includes('(') || e[i].includes('{')) {
      stack.push(e[i]);
    } else if (m[e[i]]) {
      if (stack.length == 0) {
        return false;
      } else {
        let t = m[e[i]];
        if (t != stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length == 0;
}

while (1) {
  const order = prompt("Input data(1), Program over(2)");
  if (order == '1') {
    const ex = prompt("Please input data").split('');
    console.log(bracket(ex));
  } else {
    break;
  }
}
