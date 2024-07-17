function lower(data){
    console.log(data)
    if (data === [2,2,1,2,1]){
        console.log("fuck")
    }
    arr = data.slice()
    let temp = 0
    let b = []
    for (let i = 0; i< data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] < data[j]) {
                temp = data[j]
                data[j] = data[i]
                data[i] = temp
            }
        }
    }
    min = data[0]
    // console.log(min)
    indexMin = arr.indexOf(min)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (arr[i] === data[j])
            {
                arr[i] = j+1
            }
        }
    }
    arr.splice(indexMin, 1)
    return arr
}

b=[2,2,1,2,1]
console.log(lower(b))

// console.log(a)


