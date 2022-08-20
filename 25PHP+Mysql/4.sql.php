<?php

header('content-type:text/html;charset=utf-8');//设置字符编码，防止中文出现乱码。

// 一.结构化查询语言
// 结构化查询语言(Structured Query Language)简称SQL，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新	和管理关系数据库系统

// 二.sql语句的基本操作,对象数据库进行增删改查
// 解读：利用php代码文件配合sql语句对数据库表里面的数据进行增删改查。

// 三.连接数据库(php文件和数据库进行连接)
// 1.利用mysqli类生成对象，进行数据库连接，类包含四个参数(主机名，数据库用户名，数据库密码，数据库名)
// 定义常量，配置mysqli的参数
define('HOST','localhost');//主机名
define('USERNAME','root');//数据库用户名
define('PASSWORD','root');//数据库密码
define('DBNAME','data_220304');//数据库名
$conn = @new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//通过mysqli类连接数据库，生成一个$conn对象
// 如果出现错误，表示这里的连接有问题。否则不显示任何信息。
// @符号可以忽略代码的错误，将其添加到代码的起始位置，慎用。
// 自定义错误，缓冲系统错误的不理解。
// 通过$conn对象下面的属性：connet_error来自定义错误。
if($conn->connect_error){//如果属性存在，说明有错误，自定义错误信息。
  die('数据库连接错误，请检查');//die函数会输出括号里面的信息，并且终止代码。
}

// 2.设置字符编码,输出数据库里面的信息时，中文完整显示。
// $conn->query():执行和数据库设置或者操作相关的代码，包括sql语句都可以执行
$conn->query("SET NAMES UTF8");


// 四.利用sql语句对数据库表进行增删改查。(大小写仅仅是为了区分sql关键字，没有其他意义，小写也可以)

// 1.增
// 结构：INSERT 表面 VALUES (); //values里面填的是和表对应的值。
// 注意：sid在表中设置了自动编号，所有这里设为为NULL
// $conn->query("INSERT registry_login VALUES(NULL,'wangba','13444444444','123456')");  

// 2.删
// 结构：DELETE FROM 表名 WHERE 条件
// $conn->query("DELETE FROM registry_login WHERE username='lisi'");

// 3.改
// 结构： UPDATE 表名 SET  设置的自动多个用逗号隔开  WHERE  条件 
// $conn->query("UPDATE registry_login SET tel='13888888888' WHERE sid>4 ");
// $conn->query("UPDATE registry_login SET tel='13999999999',password='8888888' WHERE sid%2!=0 ");

// 4.查 - 制作数据接口的核心
// 结构：SELECT 查看的字段*表示所有字段  FROM 表名 WHERE 条件; 
$result = $conn->query("SELECT * FROM registry_login");//获取当前数据库表里面的所有信息,赋值给$result变量。
// echo $result->num_rows; //5条数据，输出的是数据库记录的条数
// echo $result->fetch_assoc();//逐条获取数据库表里面的记录，一行就是一个记录。返回值是数组
// 5.json_encode():将括号里面的值转换成json格式输出。

$arr = [];//创建一个空数组
for($i=0;$i<$result->num_rows;$i++){
  $arr[$i] = $result->fetch_assoc();//将获取的记录当作数组项，但是获取的记录也是一个数组，形成了二维数组。
}

echo json_encode($arr);//这就是所谓的接口。

?>