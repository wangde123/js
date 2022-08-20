// 导入模块，模块就是依赖的模块
import { $ } from './tool.js';

function drag() {
    var box = $('.box');
    box.onmousedown = function(e) {
        // 鼠标按下，确定不变的短线（鼠标离当前操作盒子的左上的距离）
        var shortx = e.offsetX;
        var shorty = e.offsetY;

        // 鼠标移动，针对于文档移动
        document.onmousemove = function(e) { //重新获取事件对象，才能产生新的鼠标位置，如果不重新获取，位置就是一个值。
            box.style.left = e.clientX - shortx + 'px';
            box.style.top = e.clientY - shorty + 'px';
        };

        // 鼠标抬起，结束拖拽，放到外面或者里面都没关系。
        document.onmouseup = function() {
            document.onmousemove = null; //取消鼠标移动事件。
        };
    }
}


export {
    drag
}