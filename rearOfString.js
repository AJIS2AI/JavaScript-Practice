function solution(my_string, n) {
    let len = my_string.length;
    let result = my_string.slice(len-n, len);
    return result;
}

let str = prompt("Please input string.")
let n = prompt("Please input number.")

console.log(solution(str, n));
