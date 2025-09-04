function wave(str) {
    let arr = [...str];
    let arrMex = [];
    for (let i = 0; i < str.length; i++) {
        if (arr[i] !== ' ') {
            arr = [...str]
            arr[i] = arr[i].toUpperCase()
            arrMex.push(arr.join(''))
        }

    }
    return arrMex
}