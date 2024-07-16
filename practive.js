function comp(a, b){
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < b.length; j++)
        if (a[i]*a[i] == b[j]) {
                b.splice(j, 1)
            }
    }
    return true
}

c = [121, 144, 19, 161, 19, 144, 19, 11]

d = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(comp(c,d))
