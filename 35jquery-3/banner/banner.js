// 引入jquery模块
import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Banner {
    constructor() {
        this.banner = $('.banner'); //获取banner盒子
        this.imgList = $('.banner ul li'); //5张图片
        this.btnList = $('.banner ol li'); //5个按钮
        this.left = $('.left');
        this.right = $('.right');
        this.num = null; //存储当前索引
        console.log(this.num);
        this.time = null; //存储定时器的返回值
    }
    init() {
        // this指向实例对象
        console.log(this);
        let _this = this;
        // 1.按钮添加鼠标移入事件
        this.btnList.on('mouseover', function() {
            // $(this):当前操作的按钮
            // $(this).index():当前操作的按钮索引，按钮的索引和图片的索引是一一匹配的，知道按钮的索引，也就知道图片的索引。
            _this.num = $(this).index(); //存储当前点击的按钮的索引
            // console.log(this);

            // 切换的核心
            _this.change();
        });

        // 2.箭头事件
        this.right.on('click', () => { //只要不需要当前元素，可以使用箭头函数，this一定指向实例对象。
            this.num++; //点击一次，切换到下一张
            // console.log(this);
            if (this.num > this.btnList.length - 1) {
                this.num = 0;
            }
            this.change();
        });

        this.left.on('click', () => { //只要不需要当前元素，可以使用箭头函数，this一定指向实例对象。
            this.num--; //点击一次，切换到上一张
            if (this.num < 0) {
                this.num = this.btnList.length - 1;
            }
            this.change();
        });

        // 3.自动轮播，通过定时器进行右键事件，事件是被动的方法，也可以主动触发。
        this.time = setInterval(() => { //每隔3s自动点击右键
            this.right.click();
        }, 3000);


        // 4.鼠标移入banner，停止自动轮播，鼠标移出继续自动轮播。
        // hover([over,]out):jquery鼠标移入移出的方法，两个函数做参数，第一个参数表示鼠标移入，第二个参数表示鼠标移出。
        $('.banner').hover(() => {
            clearInterval(this.time); //关闭定时器
        }, () => { //移出继续开启定时器
            this.time = setInterval(() => { //每隔3s自动点击右键
                this.right.click();
            }, 3000);
        })
    }



    // 左右箭头和按钮切换过程完全相同，封装
    change() {
        this.btnList.eq(this.num).addClass('active').siblings().removeClass('active');
        this.imgList.eq(this.num).addClass('show').siblings().removeClass('show');
    }
}

export {
    Banner
}