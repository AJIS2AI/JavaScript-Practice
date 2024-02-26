function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    
    let sum1 = 0;
    for (let i=0; i<len1; i++) {
        sum1 += arr1[i]
    }
    
    let sum2 = 0;
    for (let i=0; i<len2; i++) {
        sum2 += arr2[i]
    }
    
    if (len1 > len2) {
        return 1;
    } else if (len1 < len2) {
        return -1;
    } else {
        if (sum1 > sum2) {
            return 1;
        } else if (sum1 < sum2) {
            return -1;
        } else {
            return 0;
        }
    }
}
