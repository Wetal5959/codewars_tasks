function hasLoop(indices) {
    const arrI = []
    let set = new Set()
    let i = 0
    const leng = indices.length
    for (i; i < leng;) {
        i = indices[i]
        if (i >= leng) {
            break
        }
        arrI.push(i)
        set.add(i)
        if (set.size !== arrI.length) {
            i = -1
            break
        }
    }
    return i === -1;
}