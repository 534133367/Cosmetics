
function cc(){
	this.left=document.getElementById("detail_wrap").getElementsByClassName("detail")[0].getElementsByClassName("left")[0];
	this.pic=this.left.getElementsByClassName("pic")[0];
	this.smallimg=this.left.getElementsByClassName("bottom")[0].getElementsByTagName("img");
	this.filer=this.left.getElementsByClassName("filter")[0];
	this.top=this.left.getElementsByClassName("top")[0];
	this.bb=this.left.getElementsByClassName("bb")[0];
	this.bigimg=this.left.getElementsByClassName("bigimg")[0].getElementsByTagName("img")[0];
	this.bigbox=this.left.getElementsByClassName("bigimg")[0];
	this._left=this.bb.offsetLeft;
	this._top=this.bb.offsetTop;
	
	var _this=this;
	this.left.onmouseover=function(){
		_this.click();
	}
	this.top.onmouseover=function(){
		_this.move();
	}
}

cc.prototype.click=function(e){
	var e=e||event;
	var target=e.target||e.srcElement;
	if(target.className=="small" && target.tagName=="IMG"){
		this.src=target.getAttribute("data-id");
		this.pic.src=this.src;
		this.bigimg.src=this.src;
	}
}
cc.prototype.move=function(){
	this.bigbox.style.display="block";
	this.filer.style.display="block";
	this.scrolltop=document.documentElement.scrollTop;
	var _this=this;
	document.onmousemove=function(e){		
		var e=e||event;
		_this.l=e.clientX-_this._left-_this.filer.offsetWidth/2;
		_this.h=_this.scrolltop+e.clientY-_this._top-_this.filer.offsetHeight/2;
		if(_this.l<=0){
			_this.l=0;
		}
		if(_this.h<=0){
			_this.h=0;
		}
		if(_this.l>=_this.bb.offsetWidth-_this.filer.offsetWidth){
			_this.l=_this.bb.offsetWidth-_this.filer.offsetWidth;
		}
		if(_this.h>=_this.bb.offsetHeight-_this.filer.offsetHeight){
			_this.h=_this.bb.offsetHeight-_this.filer.offsetHeight;
		}
		_this.filer.style.left=_this.l+'px';
		_this.filer.style.top=_this.h+'px';
		_this.bigimg.style.left=-2*_this.l+'px'
		_this.bigimg.style.top=-2*_this.h+'px'
	}
	this.top.onmouseout=function(){
		document.onmousemove=null;
		_this.bigbox.style.display="none";
		_this.filer.style.display="none";
	}
}



































