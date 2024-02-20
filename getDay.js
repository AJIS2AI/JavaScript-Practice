const month = prompt("Input a month");
const date = prompt("Input a date");

function solution(m, d) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const x = new Date('2020-'+m+'-'+d);
  return day[x.getDay()];
}
console.log(solution(month, date));