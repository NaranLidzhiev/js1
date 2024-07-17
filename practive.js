function comb(b){
    output = 1
    count =0
    while (count < b) {
        count += output ** 3
        if (count === b){
            return output
        }
        output +=1
    }
    return -1
}

console.log(comb(4183059834009))

