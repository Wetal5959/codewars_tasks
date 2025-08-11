// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.

const numbers = [1, 2, 3, 4, 5];

function squareSum(numbers) {
    return numbers.reduce((sum, number) => sum + number ** 2, 0);

}