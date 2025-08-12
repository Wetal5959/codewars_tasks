//
// const str = 'aadfvsdfghdfngxcv bxyyyyvmo90adsvooooasda';


function getCount(str) {
    let i = 0;
    [...str].forEach( (n) => {if (n === 'a' || n === 'e' || n === 'i' || n === 'o' || n === 'u') { i++ }  });
    return i;
}


//
// console.log(getCount(str));