// 面向对象开发
class Render {
    constructor() {
        this.shoppinglist = document.querySelector('.shoppinglist'); //获取页面盒子
    }

    init() { //初始化方法
        this.render();
        this.effect();
        this.delshopping();
    }

    render() { //渲染的方法
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost/JS2204(2203)/week05/Day26_ajax/code/render_case/backEnd/shoppong_list.php', true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let arrData = JSON.parse(xhr.responseText); //获取数据，转换成数组对象
                console.log(arrData);
                let str = '<ul>';
                for (let value of arrData) { //遍历数组对象，value是一个对象
                    str += `
                        <li id="${value.sid}">
                          <a href="#">
                              <img src="${value.url}"/>
                              <p>${value.title}</p>
                              <span>${value.price}</span>
                              <span class="close">X</span>
                          </a>
                        </li>
                    `;
                }
                str += '</ul>';
                this.shoppinglist.innerHTML = str;
            }
        }
    }

    effect() { //添加鼠标引入效果
        // 获取li元素，添加鼠标移入移出事件，边框发生改变。
        // alert(document.querySelectorAll('li').length); //无法获取渲染的元素，ajax渲染发生在异步操作中
        // 采用事件委托，找父元素。
        this.shoppinglist.onmouseover = function(e) {
            //e.target:鼠标当前操作的元素
            if (e.target.parentNode.parentNode.nodeName === 'LI') {
                e.target.parentNode.parentNode.style.border = '1px solid red';
            }
            if (e.target.nodeName === 'SPAN') {
                e.target.parentNode.parentNode.style.border = '1px solid red';
            }
        };

        this.shoppinglist.onmouseout = function(e) {
            if (e.target.parentNode.parentNode.nodeName === 'LI') {
                e.target.parentNode.parentNode.style.border = '1px solid #ccc';
            }
            if (e.target.nodeName === 'SPAN') {
                e.target.parentNode.parentNode.style.border = '1px solid #ccc';
            }

        };
    }

    delshopping() { //删除商品列表的效果
        //采用事件委托
        this.shoppinglist.onclick = function(e) {
            if (e.target.nodeName === 'SPAN' && e.target.className === 'close') {
                if (window.confirm('你确定要删除吗?')) {
                    e.target.parentNode.parentNode.remove(); //删除父元素的父元素
                    // 将输出的li元素身上的id发送给后端，后端拿到sid，配合sql语句，数据库删除
                    let id = e.target.parentNode.parentNode.id;
                    let xhr = new XMLHttpRequest();
                    xhr.open('get', 'http://localhost/JS2204(2203)/week05/Day26_ajax/code/render_case/backEnd/delete_shop.php?sid=' + id, true);
                    xhr.send();
                }
            }
        }
    }

}


new Render().init(); //init被触发了