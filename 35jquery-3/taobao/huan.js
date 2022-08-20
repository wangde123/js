import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Taobao{
    constructor(){
        this.banner=$('.banner')
        this.imgList=$('.banner ul li')
        this.btn=$('.banner ol li')
        this.imgUL=$('.banner ul')
        this.left=$('.left')
        this.right=$('.right')
        this.num=null
        this.time=null

    }
    init(){
        let _this=this;
        this.liWidth=this.imgList.eq(0).width() 
        this.imgUL.width(this.liWidth*this.imgList.length)
        this.btn.on('mouseover',function(){
            _this.num=$(this).index()
            _this.imgUL.stop(true).animate({
                left:-_this.liWidth*_this.num
            },200)
            _this.btn.eq(_this.num).addClass('active').siblings().removeClass('active')

        })
        this.right.on('click',()=>{
            console.log(this.num);
            this.num++
           if(this.num===this.btn.length+1){
              this.imgUL.css('left',0)
              this.num=1
           }
            this.imgUL.stop(true).animate({
                left:-this.liWidth*this.num
            },200)
            this.imgList.eq(this.num).addClass('show').siblings().removeClass('show')
            if (this.num === this.btn.length) {
                this.btn.eq(0).addClass('active').siblings().removeClass('active');
            } else {
                this.btn.eq(this.num).addClass('active').siblings().removeClass('active');
            }

        })
        this.left.on('click',()=>{
            console.log(this.num);
            this.num--
            if(this.num<0){
               this.imgUL.css('left',-this.liWidth*this.btn.length)
               this.num=this.btn.length-1
            }
             this.imgUL.stop(true).animate({
                 left:-this.liWidth*this.num
             },200)
             this.imgList.eq(this.num).addClass('show').siblings().removeClass('show')
             if (this.num === this.btn.length) {
                this.btn.eq(0).addClass('active').siblings().removeClass('active');
            } else {
                this.btn.eq(this.num).addClass('active').siblings().removeClass('active');
            }
             
        })
        
        this.time=setInterval(()=>{
            this.right.click()
        },2000)
        $('.banner').hover(()=>{
            clearInterval(this.time)
        },()=>{
            this.time=setInterval(()=>{
                this.right.click()
            },2000)
        })
    }
}
export{Taobao}