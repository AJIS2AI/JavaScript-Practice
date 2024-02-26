function solution(rny_string) {
    let arr = rny_string.split('');
    let len = arr.length;
    for (let i=0; i<len; i++) {
        if (arr[i] == 'm') {
            arr[i] = 'rn';
        }
    }
    let result = arr.join('');
    return result;
}

let input = prompt("Please input string(only lower case)");
console.log(solution(input));
