snail = function(array) {
    const res = []
    while (array.length) {
        res.push(...array.shift());
        array.map((e)=>res.push(e.pop()));
        array.reverse().map(e => e.reverse())
        console.log(res)

    }
    return res
}



const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(snail(array))