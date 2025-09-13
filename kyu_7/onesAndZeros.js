const binaryArrayToNumber = arr => {

    return arr.reverse().reduce((acc, el, i) => {
        if (el === 1) {
            acc += Math.pow(2, i)
        }
        return acc
    }, 0)
};

console.log(binaryArrayToNumber([0,0,0,0]))