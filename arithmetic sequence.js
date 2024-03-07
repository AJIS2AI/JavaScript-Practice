function solution(a, d, included) {
    let arr = [];
    for (let i=0; i<included.length; i++) {
        arr.push(a + d*i);
    }
    let sum = 0;
    for (let j=0; j<included.length; j++) {
        if (included[j] == true) {
            sum += arr[j]
        }
    }
    return sum
}
