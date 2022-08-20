// 引入jquery模块
import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Scale {
    constructor() {
        this.scale = $('.scale'); //包含框
        this.spic = $('.spic'); //小图
        this.sf = $('.sf'); //小放
        this.bf = $('.bf'); //大放
        this.bpic = $('.bpic'); //大图
    }

    init() {
        // 1.鼠标移入移出显示隐藏小放和大放
        this.spic.hover(() => {
            this.sf.css('visibility', 'visible');
            this.bf.css('visibility', 'visible');

            // 2.计算小放的尺寸,赋值
            // 大图/小图 = 大放/小放     大图/大放 = 小图/小放
            this.sf.width(this.spic.width() * this.bf.width() / this.bpic.width());
            this.sf.height(this.spic.height() * this.bf.height() / this.bpic.height());

            // 3.计算放大的比例，比例必须是大的比小的
            this.bili = this.bpic.width() / this.spic.width(); //获得比例。

            // 4.鼠标在小图中移动，小放跟随鼠标
            // 因为鼠标的位置相对于文档，小放的位置相对于小图，减去scale的位置。最后减去自身宽高的一般，鼠标在中间了。
            this.spic.on('mousemove', (e) => {
                let leftValue = e.pageX - this.scale.offset().left - this.sf.width() / 2;
                let topValue = e.pageY - this.scale.offset().top - this.sf.height() / 2;
                if (leftValue <= 0) {
                    leftValue = 0;
                } else if (leftValue >= this.spic.width() - this.sf.width()) {
                    leftValue = this.spic.width() - this.sf.width();
                }

                if (topValue <= 0) {
                    topValue = 0;
                } else if (topValue >= this.spic.height() - this.sf.height()) {
                    topValue = this.spic.height() - this.sf.height();
                }
                this.sf.css({
                    left: leftValue,
                    top: topValue
                });

                // 重点:大图在sf移动的基础上乘以比例
                this.bpic.css({
                    left: -leftValue * this.bili,
                    top: -topValue * this.bili
                });
            });


        }, () => {
            this.sf.css('visibility', 'hidden');
            this.bf.css('visibility', 'hidden');
        });
    }
}

export {
    Scale
}