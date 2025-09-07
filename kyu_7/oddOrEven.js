function oddOrEven(array) {
    let sum = 0
      for (let elem of array) {
       sum += elem
    }
      console.log(sum)
    return sum % 2 ? "odd" : 'even'
}

