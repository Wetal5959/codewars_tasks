
function spinWords(string) {

    return string.split(' ').map((element) => {return element.length > 4 ? [...element].reverse().join('') : element}).join(' ')
}

