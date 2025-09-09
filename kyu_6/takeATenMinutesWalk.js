function isValidWalk(walk) {
   const coardArr = [0, 0]
    if (walk.length !== 10) {
        return false
    }
    for (let ell of walk) {
        if (ell === 's') {
            coardArr[0]++
        } if (ell === 'n') {
            coardArr[0]--
        } if (ell === 'w') {
            coardArr[1]++ }
            if (ell === 'e') {coardArr[1]--}
console.log(coardArr)
    }
    return coardArr[0] === 0 && coardArr[1] === 0
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))