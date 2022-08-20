<?php
  // 数据库连接的文件
  define('HOST','localhost');//主机名
  define('USERNAME','root');//数据库用户名
  define('PASSWORD','root');//数据库密码
  define('DBNAME','data_220304');//数据库名
  $conn = @new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
  if($conn->connect_error){//如果属性存在，说明有错误，自定义错误信息。
    die('数据库连接错误，请检查');//die函数会输出括号里面的信息，并且终止代码。
  }
  $conn->query("SET NAMES UTF8");
?>