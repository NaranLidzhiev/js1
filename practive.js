let str = "Это моя винтовка. Таких винтовок много но это - моя"
console.log(str.match(/моя/gi))
console.log(str.match(/моя/i))
console.log(str.match(/КАСКАД/gi))

beta = str.replace(/винтовка/gi, 'кошка')
console.log(beta)

if (/много/i.test(str)){
   console.log("True")
} else{
   console.log("False")
}

