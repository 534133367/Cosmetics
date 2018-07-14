
function cc2(){
	this.detail=document.getElementById("detail_wrap").getElementsByClassName("detail")[0];
	this.right=this.detail.getElementsByClassName("right")[0];
	this.i=this.right.getElementsByClassName("num")[0].getElementsByTagName("i")[0];
	this.sel=this.right.getElementsByClassName("buy")[0].getElementsByTagName("select")[0];
	this.smallbox=document.getElementById("bigbox").getElementsByClassName("smallbox")[0];
	this._input=this.smallbox.getElementsByTagName("input")[0];
	this.money=document.getElementById("bigbox").getElementsByClassName("money")[0];
	this.price1=this.money.getElementsByClassName("price1")[0];
	this.price2=this.money.getElementsByClassName("price2")[0];
	this.n=0;
	this.unit=this.right.getElementsByClassName("unit")[0].innerHTML;
	this.unit2=this.unit.slice(2);
	
	this._price=this.right.getElementsByClassName("cc")[0].innerHTML;
	this.get=this.right.getElementsByClassName("buy")[0].getElementsByClassName("get")[0];
	this.get_a=this.get.getElementsByTagName("a")[1];
	this.obj=[];
	this.judge=true;
	var _this=this;
	this.sel.onclick=function(){
		_this.add(this);
	}
	this.smallbox.onclick=function(){
		_this.change();
	}
	this._input.onblur=function(){
		_this.change2();
	}
}
cc2.prototype.add=function(a){
	this.n++;
	console.log("dd")
	if(this.n%2==0){
		if(a.value=="*必选"){
			this.smallbox.style.display="none";
		}else{
			this.smallbox.style.display="block";
		}
		
	}
}
//将有逗号的价格转换
function pricei(a,b){
	
			var price,last1,last2,join2,last;
			this.pricej=a.slice(1);
			var join = pricej.split("");
			
			for(var i=0;i<join.length;i++){
				if(join[i]==","){
					join.splice(i,1,".")
					break;
				}
			}
			
			price =  (parseFloat(join.join(''))).toFixed(3)*1000;
			last1 = price*b;
			
			last2 = last1.toString();
			join2 = last2.split("");
			join2.splice(join2.length-3,0,",");
			last = join2.join("");
			
			return last;
}
cc2.prototype.change2=function(){
	this.num=this._input.value;
	this._list=pricei(this._price,this.num);
	this.price1.innerHTML='￦'+this._list;
	this.price2.innerHTML='('+'￥'+(parseFloat(this.unit2)*this.num).toFixed(2)+')';
}
cc2.prototype.change=function(e){
	var e=e||event;
	var target=e.target||e.srcElement;
	if(target.className=="cha" && target.tagName=="SPAN"){
		target.parentNode.parentNode.style.display="none";
	}
	if(target.className=="top_btn" && target.tagName=="BUTTON"){
		this._input.value=this._input.value;
		this._input.value++;
		this.a=target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
		
		
		this.list = pricei(this.a,this._input.value);
		this.price1.innerHTML='￦'+this.list;
		this.price2.innerHTML='('+'￥'+(parseFloat(this.unit2)*this._input.value).toFixed(2)+')';
	}
	if(target.tagName=="BUTTON" &&target.className=="bottom_btn"){
		if(this._input.value>1){
			this._input.value--;
			this.b=target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
			
			this.list2=pricei(this.a,this._input.value);
			
			this.price1.innerHTML='￦'+this.list2;
			this.price2.innerHTML='('+'￥'+(parseFloat(this.unit2)*this._input.value).toFixed(2)+')';
		}
	}
}