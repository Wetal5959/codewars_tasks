function positiveSum(arr) {
    return arr.reduce(function (acc, a) {
        if (a > 0) {
            return acc + a
        } else return acc

    }, 0)
}



