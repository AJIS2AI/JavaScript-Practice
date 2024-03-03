function solution(my_string) {
    let suffix = [];
    let len = my_string.length;
    for (let i=0; i<len; i++) {
        suffix.push(my_string.slice(i, len));
    }
    return suffix.sort();
}

let str = prompt("Enter your string.");
console.log(solution(str));
