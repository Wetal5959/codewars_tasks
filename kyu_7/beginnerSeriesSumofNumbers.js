function getSum(a, b) {
    let acc = a
if (a > b) {
    acc = 0
    for (let i = b; i <= a; i++) {
         acc += i
    }}

if (a < b) {
        acc = 0
        for(let i = a; i <= b; i++) {
            acc += i
        }}
return acc
}

