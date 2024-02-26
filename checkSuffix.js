function solution(my_string, is_suffix) {
    let suffix = [];
    let len = my_string.length;
    
    for (let i=len-1; i>=0; i--) {
        suffix.push(my_string.slice(i, len));
    }
    
    if (suffix.includes(is_suffix) == true) {
        return 1;
    } else return 0;
}

let str = prompt("Please input your string.");
let suf = prompt("Please input your suffix.")
console.log(solution(str, suf));
