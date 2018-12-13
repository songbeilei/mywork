<?php
  header("Content-type:text/html;charset=utf-8");
  //接收数据
 $name=$_POST['name'];
 $pass=$_POST['pass'];
  //处理
 //连接数据库服务器
 $conn=mysql_connect("localhost","root","root");
 if(!$conn){
 	die("连接失败".mysql_error());
 }else{
 	//选择数据库
 	mysql_select_db("school",$conn);
 	//执行SQL语句
 	$str="select * from deng where zhangId='$name'";
 	$result=mysql_query($str,$conn);
 	$rows = mysql_num_rows($result);
 	if($rows==0){
 		$sqlstr="insert into deng (zhangId,pass) values ('$name','$pass')";
 	    $result=mysql_query($sqlstr,$conn);
 	    //关闭数据库
 	    mysql_close($conn);
 	   if($result==1){
 	   	echo "注册成功,请<a href='index.html'>登录</a>";
 	  }else{
 	  	echo "注册失败,请<a href='reg.html'>重新注册</a>";
 	  }
 	}else{
 		echo "用户名已存在";
 	}
 }
?>