let weight = +prompt('Please input a weight')

function elevator(w) {
  let w_7 = Math.floor(w/7);
  let remain = w % 7;
  let w_3 = Math.floor(remain/3);
  let count = w_7 + w_3;
  if (w_7*7 + w_3*3 == w) {
    return count;
  } else {
    return -1;
  }
}

console.log(`화물 ${weight}kg을 옮기기 위해 엘리베이터를 최소 ${elevator(weight)}번 이용해야합니다.`);
