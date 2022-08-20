import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Stair{
    constructor(){
        this.loutinav=$('#loutinav')
        this.louceng=$('.louceng')
        this.louti=$('#loutinav ul li').not('.last')
        this.last=$('.last')
    }
    init(){
        let _this=this
       function scroll(){
            let scrollTop=$(window).scrollTop()
            if(scrollTop>=400){
                _this.loutinav.show()
            }else{_this.loutinav.hide()}
            _this.louceng.each(function(index,element){
                let loucengtop=$(element).offset().top+100
                if(loucengtop>scrollTop){
                    _this.louti.eq(index).addClass('active').siblings().removeClass('active')
                    return false
                }
            })
        }
        scroll()
        $(window).on('scroll',function(){
            scroll()
        })
        this.louti.on('click',function(){
            $(window).off()
            $(this).addClass('active').siblings().removeClass('active')
            console.log(_this.louceng.eq(0).offset().top);
            let loucengtop=_this.louceng.eq($(this).index()).offset().top
            $('html').animate({
                scrollTop:loucengtop
            },200,function(){
                $(window).on('scroll',function(){
                    scroll()
                })
            })
        })
        this.last.on('click',function(){
            $('html').animate({
                scrollTop:0
            })

        })

    }
}
export{Stair}