function likes(names) {
    const nL = names.length
    if (nL === 0) {
        return "no one likes this"
    }
    if (nL === 1) {
        return names[0] + " likes this"
    }
    if (nL === 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    if (nL === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if (nL > 3) {
        return `${names[0]}, ${names[1]} and ${nL - 2} others like this`
    }}

