function partsSums(ls) {
    const arr = []
    let i = ls.length
    arr[i] = 0
    i = i - 1
    for(i  ; i >= 0; i--) {
        arr[i] = arr[i + 1] + ls[i]
        console.log(arr[i])
    }
    return  arr
}

console.log(partsSums([1, 2, 3, 1]))