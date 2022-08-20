//声明变了
let username = 'zhangsan';
//声明函数
function fn() {
    console.log('我是函数');
}
//声明对象
const obj = {
    a: 1,
    b: 2,
    c: 3
};
//声明类
class Person {
    constructor() {
        this.name = '尼古拉斯赵四';
    }

    init() {
        console.log(this.name);
    }
}
// 定义模块：
// export定义模块，就是暴露模块，让其他模块引用。
// 一个页面表示一个模块，只能有一个export命令。

export {
    username,
    fn,
    obj,
    Person
}