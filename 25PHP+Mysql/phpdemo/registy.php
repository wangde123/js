<?php



  // echo '我是registy.php页面';
  // 如果前端已经将值提交到地址栏上面，可以获取对应的值。
  // http://localhost/JS2204(2203)/week05/Day25_PHP+Mysql/code/phpdemo/registy.php?username=zhangsan&tel=13888888888&password=123456&registry=提交注册

  // 1.如果前端采用get方式提交数据，数据出现在地址栏上面。
  // 使用php下面的一个超级全局变量：$_GET[]获取，括号里面就是表单的name值。
  // $_GET[]获取的是地址栏上面的数据。如果地址栏上面的数据发送改变，获取的值也会改变。
  // 注意：很多的php页面不能直接预览，否则取不到值的。

  // if(isset($_GET['registry'])){//判断提交注册按钮有没有值，有值说明前端触发了submit按钮，可以获取数据，否则不获取数据。
  //   $user = $_GET['username'];//获取前端传入的用户名
  //   $tel = $_GET['tel'];//获取前端传入的手机号码
  //   $pass = $_GET['password'];//获取前端传入的密码

  //   echo "你输入的用户名是{$user},手机号码是{$tel}，密码是{$pass}";//php双引号里面也可以解析变量，通过{}将其括起来。
  // }else{
  //   exit('非法操作');//exit函数：退出并且输出括号里面的字符串。
  // }
 

  // 2.如果前端采用post方式提交数据.
  // 使用php下面的一个超级全局变量：$_POST[]获取，括号里面就是表单的name值。
  // 注意：很多的php页面不能直接预览，否则取不到值的。

  // if(isset($_POST['registry'])){//判断提交注册按钮有没有值，有值说明前端触发了submit按钮，可以获取数据，否则不获取数据。
  //   $user = $_POST['username'];//获取前端传入的用户名
  //   $tel = $_POST['tel'];//获取前端传入的手机号码
  //   $pass = sha1($_POST['password']);//获取前端传入的密码   sha1函数采用美国国家安全局使用的加密方式对字符进行加密。
  //   echo "你输入的用户名是{$user},手机号码是{$tel}，密码是{$pass}";//php双引号里面也可以解析变量，通过{}将其括起来。
  // }else{
  //   exit('非法操作');//exit函数：退出并且输出括号里面的字符串。
  // }


  // 3.获取前端传来的数据，提交到数据库
  // 3.1.数据库连接
  define('HOST','localhost');//主机名
  define('USERNAME','root');//数据库用户名
  define('PASSWORD','root');//数据库密码
  define('DBNAME','data_220304');//数据库名
  $conn = @new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//通过mysqli类连接数据库，生成一个$conn对象

  if($conn->connect_error){//如果属性存在，说明有错误，自定义错误信息。
    die('数据库连接错误，请检查');//die函数会输出括号里面的信息，并且终止代码。
  }

  $conn->query("SET NAMES UTF8");

  // 3.2.获取数据，sql语句插入数据库。
  if(isset($_POST['registry'])){
    $user = $_POST['username'];//获取前端传入的用户名
    $tel = $_POST['tel'];//获取前端传入的手机号码
    $pass = sha1($_POST['password']);//获取前端传入的密码  
    $conn->query("INSERT registry_login VALUES(NULL,'$user','$tel','$pass')");  //注意：sql语句里面的变量的值是字符串，需要添加引号
  }
?>