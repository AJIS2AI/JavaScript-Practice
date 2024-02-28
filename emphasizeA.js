function empA(myString) {
    let arr = myString.split('');
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == 'a') {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr.join('');
}

let str = prompt("Enter your string.")
console.log(empA(str));
