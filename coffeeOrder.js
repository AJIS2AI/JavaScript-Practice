function solution(order) {
    let sum = 0;
    for (let i=0; i<order.length; i++) {
        if (order[i].includes('americano')) {
            sum += 4500;
        }
        else if (order[i].includes('latte')) {
            sum += 5000;
        }
        else  {
            sum += 4500;
        }
    }
    return sum;
}
