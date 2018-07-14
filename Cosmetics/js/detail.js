//详情页
ajax("get","../json/all.json",{},function(data){
		//进入详情页显示商品信息
		var a=location.href.split("?");
		var num=a[1];
		var num2=num.split(",");
		var num3=num2[0];
		var num4=num2[1];
		var str="";
		var str2="";
		
		for(var i=0;i<=9;i++){
			str2+=parseInt(Math.random()*10);
		}
		var all=document.getElementById("detail_wrap");
		var top=data[0].top;
		
		var bottom=data[0].bottom;
		if(num4=="top"){
			_top(top,num3,str,str2,all,num4);
		}
		if(num4=="bottom"){
			_top(bottom,num3,str,str2,all,num4);
		}
		//获取和设置cookie;
		console.log(document.cookie)
			var _arr=[];
			var cookies = document.cookie.split('; ');
				for(var i=0;i<cookies.length;i++){
				var arr2 = cookies[i].split('=');
				if(arr2[0] === 'init'){
					_arr = JSON.parse(arr2[1]);
				}
			}
			var left=document.getElementById("detail_wrap").getElementsByClassName("left")[0];
			var right=document.getElementById("detail_wrap").getElementsByClassName("right")[0];
			var img=left.getElementsByClassName("pic")[0];
			var _content=right.getElementsByTagName("p")[0];
			var priceone=right.getElementsByClassName("cc")[0];
			var pricetwo=right.getElementsByClassName("unit")[0];		
			var get=right.getElementsByClassName("buy")[0].getElementsByClassName("get")[0];
			var inp=document.getElementById("bigbox").getElementsByClassName("box")[0].getElementsByTagName("input")[0];
			var money1=document.getElementById("bigbox").getElementsByClassName("money")[0].getElementsByTagName("span")[0];
			var money2=document.getElementById("bigbox").getElementsByClassName("money")[0].getElementsByTagName("span")[1];
			var tir=document.getElementById("tir");
			var a1=tir.getElementsByTagName("a")[0];
			var a2=tir.getElementsByTagName("a")[1];
			var dd=get.getElementsByTagName("a")[1];
			
			a1.onclick=function(){
				console.log("ss")
			}
			get.onclick=function(e){
				var e=e||event;
				var target=e.target||e.srcElement;
				if(target.tagName=="A" &&target.className=="adder"){
					tir.style.display="block";
				}
			}
			a1.onclick=function(){
						var _name=dd.getAttribute("data-id");
						var _name=_name.split(" ");
						var _attr=_name[1];
						var _id=_name[0];
						var goodobj={};
						var judge=true;
						goodobj.id=_id;
						goodobj.atr=_attr;
						goodobj.content=_content.innerHTML;
						goodobj.img=img.src;
						goodobj.price1=priceone.innerHTML;
						goodobj.price2=pricetwo.innerHTML;
						goodobj.num=inp.value;
						goodobj.money1=money1.innerHTML;
						goodobj.money2=money2.innerHTML;
						
						if(_arr.length==0){
							_arr.push(goodobj);
						}else{
							for(var i=0;i<_arr.length;i++){
								while(_arr[i].price1==goodobj.price1){
									_arr[i].num=Number(goodobj.num)+Number(_arr[i].num);
									_arr[i].money1=ff2(ff(_arr[i].money1)+ff(goodobj.money1));
									_arr[i].money2='('+'￥'+(parseFloat(_arr[i].money2.slice(2))+parseFloat(goodobj.money2.slice(2))).toFixed(2)+')';
									judge=false;
									break;
								}
							}
							if(judge==true){
								_arr.push(goodobj);
							}
						}
						
						document.cookie = 'init=' + JSON.stringify(_arr);
						console.log(_arr);
						tir.style.display="none";
					}
					a2.onclick=function(){
						tir.style.display="none";
					}

		//信息
		new cc2();
		//放大镜
		new cc();
		//导航
		new cc3();
	})