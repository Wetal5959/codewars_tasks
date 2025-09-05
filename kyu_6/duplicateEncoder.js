function duplicateEncode(word){

    const a =   [...word.toUpperCase()]
    const sum =  a.reduce((acc, elem) => (a.filter(el => el === elem).length > 1) ? acc += ')' : acc += '(','' );
    return sum
}

