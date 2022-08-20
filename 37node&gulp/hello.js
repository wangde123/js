// js语法中不能出现window相关的内容，window属于浏览器的，nodeJS脱离浏览器
function fn(n1, n2) {
    return n1 + n2;
}

console.log(fn(3, 4));
console.log(fn(3, 40));
console.log(fn(3, 400));
console.log(fn(3, 40000));