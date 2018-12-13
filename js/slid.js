function slid(obj){
   let defaultObj={
   	    boxDom:null,
	 	width:300,
	 	height:400,
	 	imgs:[],
        currIndex : 0,
		timeSpace : 16,
		myTimer : null,
		isAutoPlay:true
   };
	for(let key in defaultObj){
		obj[key]!==undefined?(this[key] = obj[key]):(this[key] = defaultObj[key]);
	}
	this.createUI();
	this.addEvent();
	if(this.isAutoPlay){
		this.autoPlay();	
	}
  }
	 slid.prototype.createUI=function(){
	 	this.boxDom.style.overflow="hidden";
	 	for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute;left:0px;";
			if(i==0){
				imgDom.style.top = "0px";
			}else{
				imgDom.style.top = this.height+"px";
			}
			imgDom.style.width = this.width+"px";
			imgDom.style.height = this.height+"px";
			this.boxDom.appendChild(imgDom);
		}
	 }
	 slid.prototype.addEvent=function(){
	 	let that = this;
	 	this.boxDom.onmouseover=function(){
	 		that.stop();
	 	}
	 	this.boxDom.onmouseout = function(){
		if(that.isAutoPlay){
			that.autoPlay();	
		 }	
	   }
	}
	slid.prototype.autoPlay = function(){
		if(this.myTimer!=null){
		return;
	   }
	   this.myTimer = setInterval(()=>{
		//1、改变数据（图片序号）
		let outIndex = this.currIndex;//要出去的那张。
		this.currIndex=this.currIndex+1;
		//2、边界处理
		if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
			this.currIndex = 0;
		}
		//3、改变外观
		this.showImg(outIndex,this.currIndex);
	},this.timeSpace);
	}
	slid.prototype.stop=function(){
	if(this.myTimer!=null){
		window.clearInterval(this.myTimer);
		this.myTimer = null;
	}
  }
  slid.prototype.goImg=function(transIndex){//2
	//1、改变数据（图片序号）
	let outIndex = this.currIndex;
	this.currIndex=transIndex;//2
	//2、边界处理
	if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
		this.currIndex = 0;
	}
	//3、改变外观
	this.showImg(outIndex,this.currIndex);
}
  slid.prototype.showImg=function(outIndex,inIndex){
	//3、改变外观
	//1)、改图片
	let imgs = this.boxDom.children;
	imgs[inIndex].style.top = this.height+"px";
	//让inIndex滑入
	linearMove03(imgs[inIndex],"top",this.height,0,400);
	//让outIndex滑出
	linearMove03(imgs[outIndex],"top",0,-1*this.height,400);
}