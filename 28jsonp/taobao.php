<?php
  //解决跨域问题
  header('Access-Control-Allow-Origin:*');//允许跨域访问的域名，*表示所有域名。
  header('Access-Control-Allow-Method:POST,GET');//允许跨域访问的请求方式。
  //后端不存在跨域，可以获取任意接口数据，然后再传给前端。
  $content = file_get_contents('https://suggest.taobao.com/sug?k=1&area=c2c&q=apple');
  echo $content;
?>