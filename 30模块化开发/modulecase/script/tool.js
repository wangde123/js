// 获取元素的函数封装
function $(selector, flag) { //selector:选择器的名称，flag:判断是否是获取多个元素。
    if (flag) {
        return document.querySelectorAll(selector); //多个元素
    } else {
        return document.querySelector(selector); //单个元素
    }
}

// 定义模块
export {
    $
}