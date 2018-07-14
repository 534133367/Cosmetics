new cc();
function cc(){
	this.ul=document.getElementById("bigimg");
	this.li=this.ul.getElementsByTagName("li");
	this.banner_wrap=document.getElementById("banner_wrap");
	this.banner=this.banner_wrap.getElementsByClassName("banner")[0];
	this.left=this.banner_wrap.getElementsByClassName("left")[0];
	this.right=this.banner_wrap.getElementsByClassName("right")[0];
	this.btn=this.banner_wrap.getElementsByClassName("bottom")[0].getElementsByTagName("a");
	var _this=this;
	this.did=this.banner_wrap.getElementsByClassName("play")[0];
	this.timer=null;
	this.Now=0;
	this.Next=0;
	this.n=0;
	this.timer=setInterval(function(){
		_this.autoplay();
		
	},3000)
	this.left.onclick=function(){
		_this.l();
		
	}
	this.right.onclick=function(){
		_this.r();
		
	}
	this.ul.onmouseover=function(){
		_this._in();
		
	}
	for(var i=0;i<this.btn.length;i++){
		this.btn[i].index=i;
		this.btn[i].onmouseover=function(){
			_this.fuck(this);
			
		}
	}
}

cc.prototype.fuck=function(bt){
	for(var i=0;i<this.btn.length;i++){
		this.li[i].style.opacity=0;
		this.btn[i].className="";
	}
	this.li[bt.index].style.opacity=1;
	this.btn[bt.index].className="color";
	this.Next=bt.index;
	this.Now=this.Next;
	if(this.Next==0){
		this.banner_wrap.style.background="#5bb5b5";
	}else if(this.Next==1){
		this.banner_wrap.style.background="#db5f9e";
	}else if(this.Next==2){
		this.banner_wrap.style.background="#e97b86";
	}else if(this.Next==3){
		this.banner_wrap.style.background="#f3bc58";
	}else if(this.Next==4){
		this.banner_wrap.style.background="#4f5baf";
	}else if(this.Next==5){
		this.banner_wrap.style.background="#5bb5b5";
	}
}
cc.prototype._in=function(){
	clearInterval(this.timer);
	var _this=this;
	this.did.onclick=function(){
		_this.n++;
		if(_this.n%2==0){
			_this.did.style.backgroundPosition="-60px 0";
			_this.timer=setInterval(function(){
				_this.autoplay();
			},3000)
		}else{
			_this.did.style.backgroundPosition="-180px 0";
			clearInterval(_this.timer);
		}
	}
	this.ul.onmouseout=function(){
		if(_this.n%2==0){
			_this.timer=setInterval(function(){
				_this.autoplay();
			},3000)
		}
	}
	
}
cc.prototype.l=function(){
	if(this.Next==0){
		this.Next=this.li.length-1;
	}else{
		this.Next--;
	}
	this.change();
}
cc.prototype.r=function(){
	if(this.Next==this.li.length-1){
		this.Next=0;
	}else{
		this.Next++;
	}
	this.change();
}
cc.prototype.autoplay=function(){
	if(this.Next==this.li.length-1){
		this.Next=0;
	}else{
		this.Next++;
	}
	this.change();
}

cc.prototype.change=function(){
	this.li[this.Next].style.opacity=1;
	this.li[this.Now].style.opacity=0;
	this.Now=this.Next;
	for(var i=0;i<this.li.length;i++){
		this.btn[i].className="";
	}
	this.btn[this.Next].className="color";
	if(this.Next==0){
		this.banner_wrap.style.background="#5bb5b5";
	}else if(this.Next==1){
		this.banner_wrap.style.background="#db5f9e";
	}else if(this.Next==2){
		this.banner_wrap.style.background="#e97b86";
	}else if(this.Next==3){
		this.banner_wrap.style.background="#f3bc58";
	}else if(this.Next==4){
		this.banner_wrap.style.background="#4f5baf";
	}else if(this.Next==5){
		this.banner_wrap.style.background="#5bb5b5";
	}
}


