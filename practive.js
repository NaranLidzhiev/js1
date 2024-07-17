
function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1);
    return copy
}

b=[123, 67, 1, 24, 99]
console.log(removeSmallest(b))

// console.log(a)


