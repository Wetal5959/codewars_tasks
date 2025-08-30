function gimme (triplet) {
      let sortArray = [...triplet].sort((a, b) => a - b)
      return triplet.indexOf(sortArray[1])
}