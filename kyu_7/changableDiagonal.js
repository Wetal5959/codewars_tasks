function matrixDiagonal(matrix, value) {

    if (matrix.length < Math.abs(value) + 1) {
        return 0
    }
    let sum = 0
    let leng = matrix.length
    if (value > 0) {
        for (let i = 0; i < leng - value; i++) {
            sum += matrix[i + value][i]
        }
        return sum
    }
    for (let i = 0; i < leng + value; i++)
        sum += matrix[i][i - value]
    }
    return sum
}

matrix = [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]]

console.log(matrixDiagonal(matrix, -3))

