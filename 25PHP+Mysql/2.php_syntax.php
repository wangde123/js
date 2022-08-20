<?php
  // 一.php的变量和常量
  // 1.php的变量：php的变量通过$符号声明，后面跟着变量和变量值，和JavaScript一样属于松散类型。
  // 注意：使用变量的时候每次带上声明的符号$.
  // $num = 10;
  // $str = 'zhangsan';
  // $bool = true;

  // 2.php的常量：通过define函数实现
  // define(常量名称,常量的值)；// 第一个参数常量名称习惯性采用大写字母表示。
  // define('USERNAME','尼古拉斯赵四');//注意引号

  // 二.php的输出
  // 1.echo函数:输出括号里面的值到浏览器上面,括号可以省略,非常类似于JavaScript里面的document.write方法。
  // echo($num);
  // echo '<hr>';//解析html标签
  // echo $str;
  // echo '<hr>';//解析html标签
  // echo USERNAME;// 注意不能添加引号

  // 2.isset函数：检测变量的值是否存在,返回布尔值(php的布尔值true输出1，false输出空白)。
  // echo isset($str);// true -> 1
  // echo isset($str123);// false -> 空白

  // 三.php的分支循环语句
  // 1.if语句
  // $num = 10;
  // if($num%2===0){
  //   echo '我是偶数';
  // }else{
  //   echo '我是奇数';
  // }

  // 2.for循环
  // for($i=0;$i<=10;$i++){
  //   echo $i;
  // }

  // 四.php的函数
  // function sum($n1,$n2){
  //   return $n1+$n2;
  // }
  // echo sum(2,4);
  // echo '<hr>';
  // echo sum(3,7);


  // 五.php的数组:注意不要添加new关键字，php里面的数组是单独的数据类型
  // $arr1 = [1,2,3];//声明一个数组
  // $arr2 = array(4,5,6);//声明一个数组
  // $arr3 = Array(7,8,9);//声明一个数组
  // echo $arr1; //不会输出数组项的值，输出Array类型。
  // echo $arr1[0];//1
  // echo $arr2[0];//4
  // echo $arr3[0];//7

  // 六.类和对象
  // 声明的属性添加公有的，私有的，受保护的
  // 通过->访问属性和方法，不再是点符号，php里面的点符号是拼接符号(相当于js里面的加号)。
  // class person{
  //   public $name = 'zhangsan';
  //   public function showname(){
  //     return $this->name;
  //   }
  // }
  // $p1 = new person();
  // echo $p1->name;//输出属性  zhangsan
  // echo $p1->showname();//输出方法的值  zhangsan


  // 理解上面的基础即可，然后就是在实际案例中需要使用php提供的一些函数。
?>