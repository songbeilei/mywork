<?php
 header("Content-type:text/html;charset=utf-8");
 //接收数据
 $useNum=$_POST['useNum'];
 $pass=$_POST['pass'];
 //处理
 //连接数据库服务器
 $conn=mysql_connect("localhost","root","root");
 if(!$conn){
 	die("连接失败".mysql_errno());
 }else{
 	//选择数据库
 	mysql_select_db("school",$conn);
 	//执行SQL语句
 	$sqlstr="select * from deng where zhangId='$useNum' and pass='$pass'";
 	$result=mysql_query($sqlstr);
 	//关闭数据库
 	mysql_close($conn);
 	if(mysql_num_rows($result)==0){
 		echo "0";
 	}else{
 		echo "1";
 	}
 }
?>