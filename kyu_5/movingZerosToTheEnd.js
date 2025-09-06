function moveZeros(arr) {

    const newArr = arr.filter(el => el !== 0)
    let newI = arr.length - newArr.length
    for (let i = 0; i < newI; i++) {
        newArr.push(0)
    }
    return newArr
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))