function queueTime(customers, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = 0;

    }
    for (let i = 0; i < customers.length; i++) {
        arr.sort((a, b) => a - b)
        arr[0] += customers[i]
        console.log(arr)
    }
    return Math.max(...arr)
}


console.log(queueTime([5, 5, 4, 3, 2, 10], 2))