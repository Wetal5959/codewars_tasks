arr = [1, 1, 2]

function findUniq(arr) {
    let b = null;
    let a = null;
    arr[0] === arr[1] ? a = arr[0] : b = arr[1];
    if (a !== null) {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== a) {
                b = arr[i]
                break;
            }
        }
    } else {
        b === arr[2] ? b = arr[0] : b;
    }
    return b
}

