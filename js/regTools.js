
//正则验证
//验证类型：QQ号、邮箱、手机号
//返回值：true;验证成功，false:验证失败
function check(type,str){
	switch(type){
		case "QQ":var reg=/^[1-9][0-9]{4,9}$/i;break;
		case "Email":var reg=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net|cn)$/i;break;
		case "Phone":var reg=/^1[3-9]\d{9}$/i;break;
		defalut:null;
	}
	return reg.test(str);
}