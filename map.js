function solution(arr, k) {
    if (k % 2 == 1) {
        let result = arr.map((x) => x*k);
        return result;
    } else {
        let result2 = arr.map((x) => x+k);
        return result2;
    }
}

let list = +prompt("Please input array of numbers").split(' ');
let num = +prompt("Please input number.");

console.log(solution(list, num));
