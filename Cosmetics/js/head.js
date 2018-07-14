new cc3();
function cc3(){
	this.ul=document.getElementById("header").getElementsByClassName("head")[0].getElementsByClassName("right")[0];
	this.a=this.ul.getElementsByClassName("_box")[0].getElementsByTagName("a");
	this.rol=this.ul.getElementsByClassName("aa");
	this.Language=this.ul.getElementsByClassName("Language")[0];
	this.home=this.ul.getElementsByClassName("home")[0];
	this.span=this.ul.getElementsByClassName("aa")[0].getElementsByTagName("span")[0];
	this.i=this.ul.getElementsByClassName("aa")[1].getElementsByTagName("i")[0];
	this._i1=this.ul.getElementsByClassName("aa")[2].getElementsByTagName("i")[0];
	this._i2=this.ul.getElementsByClassName("aa")[3].getElementsByTagName("i")[0];
	this.span2=this.ul.getElementsByClassName("aa")[1].getElementsByTagName("span")[0];
	this.home_a=this.home.getElementsByTagName("a");
	this.bigbox=this.ul.getElementsByClassName("bigbox")[0];
	var _this=this;
	this._ul=this.ul.getElementsByClassName("bottom")[0];
	this.li=this._ul.getElementsByTagName("li");
	
	
	for(var j=0;j<this.li.length;j++){
		this.li[j].onmousedown=function(){
			_this._i1.innerHTML=this.innerHTML;
			_this._i2.innerHTML=this.innerHTML;
		}
	}
	
	for(var i=0;i<this.a.length;i++){
		this.a[i].onclick=function(){
			_this.red(this);
		}
	}
	
	this.rol[0].onmouseover=function(){
		_this.change(this);
	}
	this.rol[1].onmouseover=function(){
		_this.one();
	}
	
	for(var k=0;k<this.home_a.length;k++){
		this.home_a[k].onmousedown=function(){
			_this.get(this);
		}
	}
}

function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}
cc3.prototype.get=function(d){
	this.span2.innerHTML=d.children[1].innerHTML;
	var t=getStyle(d.children[0],"backgroundPosition");
	var t1=t.split(" ");
	var arr=[];
	var num1=parseInt(t1[0]);
	var num2=parseInt(t1[1]);
	arr.push(num1*22/28+'px');
	arr.push(num2*22/28+'px');
	var last=arr.join(' ');
	this.i.style.backgroundPosition=last;
	
}
cc3.prototype.one=function(){
	this.rol[0].style.borderRight="1px solid black";
	var _this=this;
	this.home.onmouseover=function(){
		_this.rol[0].style.borderRight="1px solid black";
	}
	this.rol[1].onmouseout=function(){
		_this.rol[0].style.borderRight="1px solid #e7e7e7";
	}
	this.home.onmouseout=function(){
		_this.rol[0].style.borderRight="1px solid #e7e7e7";
	}
}
cc3.prototype.red=function(a){
	for(var i=0;i<this.a.length;i++){
		this.a[i].style.background="white";
		this.a[i].style.color="#666666";
		this.a[i].style.fontWeight="100";
	}
	a.style.background="#f43142";
	a.style.color="white";
	a.style.fontWeight="900";
	this.span.innerHTML=a.innerHTML;
}
cc3.prototype.change=function(b){
	var _this=this;
	this.rol[0].style.borderRight="1px solid black";
	this.rol[0].onmouseout=function(){
		_this.rol[0].style.borderRight="1px solid #e7e7e7";
	}
}
