<?php

  // 后端获取前端ajax通过get方式传递的数据
  // $name = $_GET['name'];//参数就是前端传入的key
  // $age = $_GET['age'];//参数就是前端传入的key
  // $sex = $_GET['sex'];//参数就是前端传入的key

  // echo '前端传入的值是：'.$name.$age.$sex;

  $username = $_GET['username'];//参数就是前端传入的key
  $tel = $_GET['tel'];//参数就是前端传入的key
  $email = $_GET['email'];//参数就是前端传入的key
  echo '前端传入的值是：'.$username.$tel.$email;

?>