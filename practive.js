let number = '7-903-540-04-37'
let regex = new RegExp(/\d/gi)

let a = number.match(regex)
let str = ''
for (const aKey in a) {
   str += a[aKey]
}
console.log(str)