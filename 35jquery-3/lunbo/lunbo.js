import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Banner{
    constructor(){
        this.banner=$('.banner')
        this.imgList=$('.banner ul li')
        this.btn=$('.banner ol li')
        this.left=$('.left')
        this.right=$('.right')
        this.num=null
        this.time=null
        
    }
    init(){
        let _this=this;
        this.btn.on('mouseover',function(){
            _this.num=$(this).index();
            _this.change()
        })
        this.right.on('click',()=>{
            this.num++
            if(this.num>4){
                this.num=0
            }
           this.change()
        })
        this.left.on('click',()=>{
            this.num--
            if(this.num<0){
                this.num=4
            }
           this.change()
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
    change(){
        this.btn.eq(this.num).addClass('active').siblings().removeClass('active')
            this.imgList.eq(this.num).addClass('show').siblings().removeClass('show')
    }
}
export{Banner}
