const bufferMove = function(element, obj, fn) {
    let speed = 0; //速度
    window.clearInterval(element.t); //关闭定时器，防止事件下面会出现定时器的叠加
    element.t = window.setInterval(() => { //开启定时器
        let flag = 1; //开启运动的标记
        for (let attr in obj) { //遍历对象 attr:就是运动属性名  obj[attr]：目标点的值
            // 1.获取运动属性的当前值
            let attrValue = null;
            if (attr === 'opacity') { //如果当前值是透明度,换一种取值方式。
                attrValue = parseInt(window.getComputedStyle(element)[attr] * 100); //扩大100倍
            } else { //其他px为单位
                attrValue = parseInt(window.getComputedStyle(element)[attr]); //parseInt干掉单位
            }
            // 2.获取由快到慢速度
            speed = (obj[attr] - attrValue) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            // 3.判断运动是否停止
            if (attrValue !== obj[attr]) { //如果当前值不等于目标点，继续运动
                if (attr === 'opacity') { //透明度
                    element.style[attr] = (attrValue + speed) / 100; //还原取值时扩大的100倍
                } else { //其他px单位的
                    element.style[attr] = attrValue + speed + 'px';
                }
                flag = 2; //只要flag变成2,说明运动没有结束。
            }
        }
        if (flag === 1) { //值没有被forin修改，说明运动结束了。
            window.clearInterval(element.t);
            fn && typeof fn === 'function' && fn();
        }
    }, 1000 / 60);
};