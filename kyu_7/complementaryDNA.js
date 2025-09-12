function dnaStrand(dna) {
    let dNA = 0;
    return [...dna].reduce((acc, el) => {
        if (el === 'A') {
            return acc += 'T'
        }
        if (el === 'T') {
            return acc += 'A'
        }
        if (el === 'C') {
            return acc += 'G'
        }
        if (el === 'G') {
            return acc += 'C'
        }
    }, '')
}

