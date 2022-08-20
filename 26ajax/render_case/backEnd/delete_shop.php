<?php
  // 删除商品数据的文件
   // 1.引入数据库连接：include函数引入数据库连接文件，这个函数可以省略外面的括号。
   include "conn.php";

  // 2.获取前端传入的sid
  if($_GET['sid']){//判断前端传来的sid是否存在
    $sid = $_GET['sid'];//获取sid
    $conn->query("DELETE FROM taobaogoods WHERE sid=$sid");//执行sql语句，删除对应的数据库里面的数据
  }
?>