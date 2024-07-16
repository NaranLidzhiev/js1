function openOrSenior(data){
    let buba = []
    for (i=0 ; i< data.length; i++){
        if (data[i][0] >= 55 && data[i][1] > 7){
            buba[i] = "Senior"
        }
        else{
            buba[i] = "Open"
        }
    }
    return buba
}

a = [[78,5],[19,15],[67,7],[67,13],[65,19],[86,16],[55,5],[13,22]]

console.log(openOrSenior(a))