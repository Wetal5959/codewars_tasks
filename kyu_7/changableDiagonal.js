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

    for (let i = 0; i < leng + value; i++) {
        sum += matrix[i][i - value]
    }
    return sum
}