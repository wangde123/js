// 导入模块，模块就是依赖的模块
import { $ } from './tool.js';

function tab() {
    const links = $('.title a', 'all'); //4个标题  类数组
    const imgs = $('.pic img', 'all'); //4个图片  类数组
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            for (let i = 0; i < links.length; i++) { //清空所有标题上面的类名
                links[i].className = '';
                imgs[i].className = '';
            }
            links[i].className = 'active';
            imgs[i].className = 'show';
        }
    }
}

// 定义模块，暴露模块
export {
    tab
}