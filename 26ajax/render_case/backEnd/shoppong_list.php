<?php
  // 制作商品数据接口的文件

  // 1.引入数据库连接：include函数引入数据库连接文件，这个函数可以省略外面的括号。
  include "conn.php";

  // 2.开始制作接口
  $result = $conn->query("SELECT * FROM taobaogoods");
  $arr = [];//创建一个空数组
  for($i=0;$i<$result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();//将获取的记录当作数组项，但是获取的记录也是一个数组，形成了二维数组。
  }
  echo json_encode($arr);//这就是所谓的接口。
?>