function solution(arr, idx) {
    for (let i=idx; i<arr.length; i++) {
        if (arr[i] == 1) {
            return i;
            break;
        }
    }
    return -1;
}

let array = prompt("Enter an integer array consisting only of 0 and 1.").split(" ");
let index = +prompt("Enter the index.");

console.log(solution(array, index));
