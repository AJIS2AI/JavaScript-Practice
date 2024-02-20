let input = +prompt("Please input the last number");

function strict369(n) {
 let arr = [];
 let count = 0;

 for (let i=1; i<=n; i++) {
   arr.push(i);
 }

 for (let i=0; i<arr.length; i++) {
   if (arr[i] == 3 || arr[i] == 6 || arr[i] == 9) {
     count++
   }
   if (Math.floor(arr[i]/10)==3 || Math.floor(arr[i]/10)==6 || Math.floor(arr[i]/10)==9) {
       if (arr[i]%10==3 || arr[i]%10==6 || arr[i]%10==9) {
         count++;
       }
     }
   }
 return count;
}

console.log(strict369(input));
