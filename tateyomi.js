function solution(my_string, m, c) {
    let substrings = [];
    for (let i=0; i<my_string.length; i+=m) {
        substrings.push(my_string.slice(i, i+m))
    }
    
    let result = [];
    for (let j=0; j<substrings.length; j++) {
        result.push(substrings[j][c-1])
    }
    return result.join('');
}
