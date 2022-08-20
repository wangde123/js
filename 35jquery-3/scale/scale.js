import "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js";
class Scale{
    constructor(){
        this.scale=$('.scale')
        this.spic=$('.spic')
        this.sf=$('.sf')
        this.bf=$('.bf')
        this.bpic=$('.bpic')
    }
    init(){
        this.spic.hover(()=>{
            this.sf.css('visibility','visible')
            this.bf.css('visibility','visible')
            //大图/小图=大放/小放
            this.sf.width(this.spic.width()*this.bf.width()/this.bpic.width())
            this.sf.height(this.spic.height()*this.bf.height()/this.bpic.height())
            this.bili=this.bpic.width()/this.spic.width()
            this.spic.on('mousemove',(e)=>{
                let leftValue=e.pageX-this.scale.offset().left-this.sf.width()/2
                let topValue=e.pageY-this.scale.offset().top-this.sf.height()/2
                if(leftValue<=0){
                    leftValue=0
                }else if(leftValue>=this.spic.width()-this.sf.width()){
                    leftValue=this.spic.width()-this.sf.width()  
                }
                if(topValue<=0){
                    topValue=0
                }else if(topValue>=this.spic.width()-this.sf.width()){
                    topValue=this.spic.width()-this.sf.width()  
                }
                this.sf.css({
                    left:leftValue,
                    top:topValue
                })
                this.bpic.css({
                    left:-leftValue*this.bili,
                    top:-topValue*this.bili
                })
            })
        },()=>{
            this.sf.css('visibility','hidden')
            this.bf.css('visibility','hidden')
        })

    }
}
export{Scale}