let Object = {};
let inputName = prompt("학생의 이름을 2개 입력하세요.").split(" ")
let inputScore = prompt("학생의 성적을 2개 입력하세요.").split(" ")

for (let i = 0; i < inputName.length; i++) { 
  Object[inputName[i]] = parseInt(inputScore[i], 10)
}

console.log(Object)
