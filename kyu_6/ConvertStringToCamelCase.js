function toCamelCase(str){
return str.split(/[-_]+/).map((e,index) => index ? e[0].toUpperCase() + e.slice(1) : e).join('')
}

