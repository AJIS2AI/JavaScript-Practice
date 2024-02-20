function checkBracket(br) {
  let count = 0;

  for (let i=0; i<br.length; i++) {
    if (br[i] == '(') {
      count++;
    }
    if (br[i] == ')') {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  let bracket = [];
  for (let i in br) {
    if (br[i] == '(') {
      bracket.push('(')
    }
    if (br[i] == ')') {
      if (bracket.length == 0) {
        return false;
      }
      bracket.pop();
    }
  }
  return true;
}

const n = prompt("Please input").split('');
if (checkBracket(n) == true) {
  console.log("YES");
} else { console.log("NO") };
