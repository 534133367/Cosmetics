//二级导航
	ajax("get","../json/nav.json",{},function(data){
		var li=document.getElementById("back_wrap").getElementsByClassName("nav")[0].getElementsByTagName("li");
		var ul=document.getElementById("back_wrap").getElementsByClassName("nav")[0];
		var box=document.getElementById("back_wrap");
		var divbox = document.getElementsByClassName("in");
		var t=0;
		var back=document.getElementById("back_wrap");
		var num={};
		ul.onmouseover=function(){
			box.style.overflow="initial";
			this.onmouseout=function(){
				box.style.overflow="hidden";
			}
		}
		back.onmouseover=function(e){
			var e=e||event;
			var target=e.target||e.srcElement;
				if(target.tagName=="A" && target.className=="a"){
					var d=target.getAttribute("data-id");
					var n=num[d];
					if(!n){
						n=1;
						num[d]=n;
						for(var i=0;i<data.length;i++){
							if(d==data[i].id){
								for(var k=0;k<data[i].num.length;k++){
									var oDiv = document.createElement('a');
									oDiv.href="#";
									oDiv.innerHTML=data[i].num[k];
									divbox[i].appendChild(oDiv);
								}
							}
						}
					}else{
						n++;
						num[d]=n;
					}
				}
		}
	})