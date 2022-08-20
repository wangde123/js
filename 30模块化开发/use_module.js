// 调用模块：
// import命令：调用模块，使用模块，导入模块.....
// 通过import命令调用多个模块，甚至还可以判断加载。
// 在调用时候必须知道暴露的模块提供的变量或者函数等代码的名称(解构赋值)


// 配置模块：
// 文件名称前面的./就是配置模块，表示这个模块是本地目录下面的模块，未来的开发还包含第三方提供的百万数量模块。


import {
    obj,
    Person,
    username,
    fn,
} from './define_module.js';

console.log(username);
fn();
console.log(obj);
new Person().init();