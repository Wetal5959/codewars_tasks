// Given an array of integers.
//
//Return an array, where the first element is the count of positives numbers and the second element is
// sum of negative numbers. 0 is neither positive nor negative.
//
//If the input is an empty array or is null, return an empty array.
//


function countPositivesSumNegatives(input) {

    if (!input) {
        return []
    }

    if (input.length <= 0) {
        return []
    }
    if (input.filter((n) => n !== 0).length === 0) {
        return []
    }

    let i = 0;
    let j = 0;
    input.forEach((n) => n > 0 ? i++ : j = j + n);


    return [i, j]
}
