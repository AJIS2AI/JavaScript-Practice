function solution(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    let count = 0;
    
    if (len1 >= len2) {
        for (let i=0; i<len1; i++) {
            if (s2.includes(s1[i])) {
                count += 1;
            }
        }
    }
    else {
        for (let j=0; j<len2; j++) {
            if (s1.includes(s2[j])) {
                count += 1;
            }
        }
    }
    return count;
}
