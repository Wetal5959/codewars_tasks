function findEvenIndex(arr) {
   let sumRight = 0;
   let sumLeft = 0;
   let index = null;
    for(let i = 1; i < arr.length; i++) {
        sumRight += arr[i]
    }

    for(let i =0; i < arr.length; i++ ){
        if (sumRight === sumLeft) {
            index = i;
            break
        }
        sumLeft += arr[i];
        sumRight -= arr[i+1]

    }
    return index !== null ? index : -1
}

