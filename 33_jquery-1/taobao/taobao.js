// 引入jquery模块
import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Taobao {
    constructor() {
        this.banner = $('.banner'); //获取banner盒子
        this.moveUl = $('.banner ul'); //运动的无序列表
        this.imgList = $('.banner ul li'); //6张图片
        this.btnList = $('.banner ol li'); //5个按钮
        this.left = $('.left');
        this.right = $('.right');
        this.num = null; //存储索引
        this.time = null; //定时器的返回值
    }

    init() {
        let _this = this;
        // 1.设置ul宽度
        this.liWidth = this.imgList.eq(0).width(); //获取1个li的宽度790
        this.moveUl.width(this.liWidth * this.imgList.length);

        // 2.点击按钮moveUl进行运动
        // 规律：当前点击的按钮的索引*一个li的宽度，负值
        this.btnList.on('click', function() {
            _this.num = $(this).index(); //当前点击的按钮索引
            _this.change(); //调用封装过程
            // 设置按钮的样式
            _this.btnList.eq(_this.num).addClass('active').siblings().removeClass('active');

        });

        // 3.左右箭头添加事件
        this.right.on('click', () => {
            this.num++;
            this.change();
            // 设置按钮的样式
            if (this.num === this.btnList.length) {
                this.btnList.eq(0).addClass('active').siblings().removeClass('active');
            } else {
                this.btnList.eq(this.num).addClass('active').siblings().removeClass('active');
            }
        });

        this.left.on('click', () => {
            this.num--;
            this.change();
            // 设置按钮的样式,这里无需判断，eq的负数刚好是从后往前数。
            this.btnList.eq(this.num).addClass('active').siblings().removeClass('active');
        });

        // 4.自动轮播
        this.time = setInterval(() => {
            this.right.click();
        }, 3000);

        // 5.鼠标引入移出
        this.banner.hover(() => {
            clearInterval(this.time);
        }, () => {
            this.time = setInterval(() => {
                this.right.click();
            }, 3000);
        });

    }

    // 封装运动过程
    change() {
        console.log(this.num);
        if (this.num === this.btnList.length + 1) {
            // 满足条件，做两件事件，首先归位，然后切换
            this.moveUl.css('left', 0);
            this.num = 1;
        }

        if (this.num < 0) {
            // 满足条件，做两件事件，首先归位，然后切换
            this.moveUl.css('left', -this.liWidth * this.btnList.length)
            this.num = this.btnList.length - 1;
        }
        this.moveUl.stop(true).animate({
            left: -this.liWidth * this.num
        }, 200);
    }
}


export {
    Taobao
}