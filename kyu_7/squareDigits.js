

function squareDigits(num) {
    return Number([...num.toString()].map((num) => {
        return (Number(num) ** 2).toString()
    }).join(''))
}

