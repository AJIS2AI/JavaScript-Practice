let korName = prompt("행성의 이름을 입력하세요.");
function korToEng(str) {
  switch(str) {
    case '수성':
      return 'Mercury';
      break;
    case '금성':
      return 'Venus';
      break;
    case '지구':
      return 'Earth';
      break;
    case '화성':
      return 'Mars';
      break;
    case '목성':
      return 'Jupiter';
      break;
    case '토성':
      return 'Saturn';
      break;
    case '천왕성':
      return 'Uranus';
      break;
    case '해왕성':
      return 'Neptune';
      break;
    default:
      return "태양계 행성의 이름을 입력하세요."
      break;
  }
}

console.log(korToEng(korName));