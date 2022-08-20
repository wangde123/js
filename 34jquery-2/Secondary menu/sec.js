import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"
class Sec{
    constructor(){
        this.menu=$('.menu li')
        this.cartlist=$('.cartlist')
        this.item=$('.item')
        this.banner=$('.banner')
    }
    init(){
        let _this=this;
       
        _this.menu.hover(function(){
            _this.cartlist.show()
            _this.menu.eq($(this).index()).addClass('active').siblings().removeClass('active');
            _this.item.eq($(this).index()).show().siblings().hide()
        },function(){
            _this.cartlist.hide()
            
            _this.menu.removeClass('active');
        })

        this.cartlist.hover(function(){
            _this.cartlist.show() 

        },function(){
            _this.cartlist.hide()
            _this.menu.removeClass('active');

        })
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > _this.banner.offset().top) {
                _this.cartlist.css({
                    top: $(window).scrollTop() - _this.banner.offset().top
                })
            } else {
                _this.cartlist.css({
                    top: 0
                })
            }
        })

    }
}
export{
    Sec
}