function getMiddle(s) {
    let arrL = [...s].length
    let arrLHalt = Math.floor(arrL / 2)
    return arrL % 2 ? s.slice(arrLHalt, arrLHalt + 1) : s.slice(arrLHalt - 1, arrLHalt + 1)
}

