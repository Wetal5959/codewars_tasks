snail = function (array) {
    let arrRes = []
    let arrLength = array.length
    if (array[0][0] === undefined) {
        return []
    }
    if(arrLength === 1 ){
        return [array[0][0]]
    }


    let i = 0
    let j = 0
      const smolSnail = (arr) => {

        while (arr[j][i + 1]) {
            arrRes.push(arr[j][i])
            delete arr[j][i]
            i = i + 1
        }
        arrRes.push(arr[j][i])
        delete arr[j][i]
        j = j + 1
        if (!arr[j][i]) { return arrRes }

        /////////////////////////////////////////////////////////////////


        while (!(j >= arrLength)) {
            arrRes.push(arr[j][i])
            delete arr[j][i]
            j = j + 1
        }
        arrLength = arrLength - 1
        i = i - 1
        j = j - 1
        if (!arr[j][i]) { return arrRes }
        /////////////////////////////////////////////////////////
        while (arr[j][i - 1]) {
            arrRes.push(arr[j][i])
            delete arr[j][i]
            i = i - 1

        }
        arrRes.push(arr[j][i])
        delete arr[j][i]
        j= j - 1
        if (!arr[j][i]) { return arrRes }
        /////////////////////////////////////////////////////////////////
        while (arr[j-1][i]) {
            arrRes.push(arr[j][i])
            delete arr[j][i]
            j = j - 1
        }
        arrRes.push(arr[j][i])
        delete arr[j][i]
        i = i + 1
        if (!arr[j][i]) { return arrRes }
        else {smolSnail(array)}

        i = i - 1
        if (!arr[j][i]) { return arrRes }

    }
    smolSnail(array)

    return arrRes
}


console.log(snail([[11]]))

    //
    // [1, 2, 3, 4, 5, 6,14],
    // [20, 21, 22, 23, 24, 7,14],
    // [19, 32, 33, 34, 25, 8,14],
    // [18, 31, 36, 35, 26, 9,14],
    // [17, 30, 29, 28, 27, 1,14],
    // [16, 15, 14, 13, 12, 11,14]]))

