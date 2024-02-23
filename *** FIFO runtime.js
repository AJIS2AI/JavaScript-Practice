function FIFO(frame, page) {
  let runTime = 0;
  let temp = [];

  if (frame == 0) {
    runTime = page.length * 6;
    return runTime;
  }

  for (let i of page) {
    if (temp.includes(i)) {
      runTime += 1;
    } else {
      if (temp.length < frame) {
        temp.push(i);
      } else {
        temp.shift();
        temp.push(i);
      }
      runTime += 6;
    }
  }
  return runTime;
}

const f = +prompt("Please input frame.");
const page = prompt("Please input page.").split('');

console.log(FIFO(f, page));
