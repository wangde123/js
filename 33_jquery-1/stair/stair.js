// 引入jquery模块
import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Stair {
    constructor() {
        this.loutinav = $('#loutinav');
        this.louti = $('#loutinav li').not('.last'); //获取10个li，排除里面包含.last的li
        this.louceng = $('.louceng'); //获取9个楼层
        this.last = $('.last');
    }
    init() {
        let _this = this;
        // 1.显示隐藏左侧的楼梯
        function scroll() {
            // console.log($(window).scrollTop());
            let scrolltop = $(window).scrollTop(); //存储滚动条的top值
            if (scrolltop >= 400) {
                _this.loutinav.show(); //显示楼梯
            } else {
                _this.loutinav.hide(); //隐藏楼梯
            }

            // 4.拖到滚动条，对应的楼层发生变化，对应楼梯也要配合添加激活状态。
            // 这一步非常麻烦。
            // 比较的核心：滚动条的top值 和 每一个楼层的top值 进行比较，只要第一个楼层的top值大于滚动条的top值，必须给对应的楼梯添加active。
            $('title').html(scrolltop)

            _this.louceng.each(function(index, element) { //index:元素的索引，element:原生的元素对象
                // 获取每一个楼层的top值。
                let loucengtop = $(element).offset().top + 200;
                console.log($(element).offset().top);
                console.log($(window).scrollTop());
                if (loucengtop >= scrolltop) {
                    _this.louti.eq(index).addClass('active').siblings().removeClass('active'); //给楼层对应的楼梯添加active
                    return false;
                }
            });
        }
        scroll(); //正常刷新执行这里
        $(window).on('scroll', () => {
            scroll(); //滚动条出发执行这里
        });

        // 2.点击左侧的楼梯，对应的楼层运动到对应的位置。
        // 点击左侧对应的楼梯，将和左侧楼梯对应的右侧楼层的top值给滚动条的top值
        this.louti.on('click', function() {
            $(window).off(); //点击左侧楼梯，删除滚轮事件。
            $(this).addClass('active').siblings().removeClass('active'); //设置楼梯的样式
            // 切换
            console.log(_this.louceng.eq(1).offset().top);
            let loucengtop = _this.louceng.eq($(this).index()).offset().top; //每一个和楼梯对应的楼层的top值。
            // 运动浏览器的滚动条，给html标签设置scrollTop属性。
            // document.documentElement.scrollTop
            $('html').animate({
                scrollTop: loucengtop
            }, function() { //楼梯事件出发完成，继续滚轮事件。
                $(window).on('scroll', () => {
                    scroll(); //滚动条出发执行这里
                });
            });
        });

        // 3.回到顶部
        this.last.on('click', function() {
            $('html').animate({
                scrollTop: 0
            })
        });
    }
}
export {
    Stair
}