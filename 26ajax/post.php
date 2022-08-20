<?php
  // 前端ajax通过post传输的数据通过$_POST[]进行获取
  // 中括号里面的值就是前端传入的key值
  $user = $_POST['name'];
  $age = $_POST['age'];
  $sex = $_POST['sex'];

  echo '前端传入的值是：'.$user.$age.$sex;
?>