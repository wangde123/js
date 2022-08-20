import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Louti {
    constructor() {
        this.loutinav = $('#loutinav')
        this.louti = $('#loutinav li').not('.last')
        this.louceng = $('.louceng')
        this.last = $('.last')
    }
    init() {
        let _this = this
        function scroll() {
            $(window).on('scroll', function () {
                let scrolltop = $(window).scrollTop()
                if (scrolltop >= 400) {
                    _this.loutinav.show()
                } else { _this.loutinav.hide() }
                _this.louceng.each(function (index, element) {
                    let loucengtop = $(element).offset().top + 200
                    if (loucengtop >= scrolltop) {
                        _this.louti.eq(index).addClass('active').siblings().removeClass('active')
                        return false
                    }

                })

            })
        }
        scroll()
        $(window).on('scroll',()=>{
            scroll()
        })

        this.louti.on('click', function () {
            $(window).off()
            $(this).addClass('active').siblings().removeClass('active')
            let loucengtop = _this.louceng.eq($(this).index()).offset().top
            $('html').animate({
                scrollTop: loucengtop
            }, function () {
                $(window).on('scroll', () => {
                    scroll()
                })
            })
        })
        this.last.on('click', function () {
            $('html').animate({
                scrollTop: 0
            })
        })
    }
}
export {
    Louti
}