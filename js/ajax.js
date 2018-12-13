//功能：发送ajax请求
//参数：
//   请求方式
//   请求地址
//   请求参数
//   是否异步
//   回调函数
//返回值：无
function ajax(method,url,param,isAsync,func){
	let xhr=new XMLHttpRequest();
	let urlAndParam=url;
	if(method.toLowerCase()=="get" && param!=""){
		urlAndParam+="?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);
	xhr.onreadystatechange=function(){
       if(xhr.readyState==4 && xhr.status==200){
       	  func&&func(xhr.responseText);
       }
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}
}
//参数是对象
function ajax01(obj){
	let xhr=new XMLHttpRequest();
	let urlAndParam=obj.url;
	if(obj.method.toLowerCase()=="get" && obj.param!=""){
		urlAndParam+="?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func&&obj.func(xhr.responseText);
		}
	}
   if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   	    xhr.send(obj.param);
   }else{
   	    xhr.send();
   }
}
//参数是对象,并且带默认值
function ajax02(obj){
   let defaultObj={
   	   url:"#",
   	   method:"get",
   	   param:"",
   	   isAsync:true,
   	   func:null
   };
   for(let key in defaultObj){
       if(obj[key]){
       	defaultObj[key]=obj[key];
       }
   }
   let xhr=new XMLHttpRequest();
   let urlAndParam=defaultObj.url;
   if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
   	    urlAndParam+="?"+defaultObj.param;
   }
   xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
   xhr.onreadystatechange=function(){
   	 if(xhr.readyState==4 && xhr.status==200){
   	 	defaultObj.func&&defaultObj.func(xhr.responseText);
   	 }
   }
  if(defaultObj.method.toLowerCase()=="post"){
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(defaultObj.param);
  }else{
  	xhr.send();
  }  
}