function towerBuilder(nFloors) {
    const arr = [];

    let i = 0;
    for (nFloors; nFloors >= 1; nFloors--) {
        arr[nFloors - 1] = ' '.repeat(i) + '*'.repeat(1 + 2 * (nFloors - 1)) + ' '.repeat(i);
        i++

    }
    return arr
}

