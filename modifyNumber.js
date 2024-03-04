function solution(numLog) {
    let input = [];
    for (let i=1; i<numLog.length; i++) {
        if (numLog[i] - numLog[i-1] == 1) {
            input.push('w');
        }
        else if (numLog[i] - numLog[i-1] == -1) {
            input.push('s');
        }
        else if (numLog[i] - numLog[i-1] == 10) {
            input.push('d');
        }
        else {
            input.push('a');
        }
    }
    return input.join('');
}
