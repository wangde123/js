<?php
// 1.连接数据库
define('HOST','localhost');//主机名
define('USERNAME','root');//数据库用户名
define('PASSWORD','root');//数据库密码
define('DBNAME','data_220304');//数据库名
$conn = @new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
if($conn->connect_error){//如果属性存在，说明有错误，自定义错误信息。
  die('数据库连接错误，请检查');//die函数会输出括号里面的信息，并且终止代码。
}

$conn->query("SET NAMES UTF8");

// 2.输出接口数据
// limit 0,10   0表示数据的索引编号，即第一条数据，10表示条数
$result = $conn->query("SELECT * FROM taobaogoods limit 0,10");

$arr = [];//创建一个空数组
for($i=0;$i<$result->num_rows;$i++){
  $arr[$i] = $result->fetch_assoc();//将获取的记录当作数组项，但是获取的记录也是一个数组，形成了二维数组。
}

echo json_encode($arr);//这就是所谓的接口。

?>