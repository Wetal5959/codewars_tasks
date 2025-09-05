let uniqueInOrder=function(iterable){
    let a;
    const arr = [];
    for (let element of [...iterable]) {
        if (element !== a) {
            arr.push(element)
        }
        a = element
            }
    return arr
}