function dontGiveMeFive(start, end) {
    let lengthEnd = 0
    for (let i = start; i <= end; i++) {
        if ([...i.toString()].indexOf('5') === -1) {
            lengthEnd++;
        }
    }
    return lengthEnd;
}

