const d = new Date()

let ms = d.getTime()
let year = Math.floor(ms/(1000*60*60*24*365))
let thisYear = 1970 + year
console.log(thisYear)