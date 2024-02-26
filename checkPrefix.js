function solution(my_string, is_prefix) {
    let prefix = [];
    for (let i=0; i<my_string.length; i++) {
        prefix.push(my_string.slice(0, i+1));
    }
    if (prefix.includes(is_prefix)) {
        return 1;
    } else return 0;
}

let str = prompt("Please input your string.");
let pre = prompt("Please input your prefix.");
console.log(solution(str, pre));
