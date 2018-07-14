//热销尖货
	ajax("get","../json/shop.json",{},function(data){
		var shop_ul=document.getElementById("foot_wrap").getElementsByClassName("shop")[0];
		var shop_choose=document.getElementById("foot_wrap").getElementsByClassName("choose")[0];
		var shop_a=shop_choose.getElementsByTagName("a");
		function shop_page(n){
			var str="";
			for(var i=5*(n-1);i<5*n;i++){
				str+=`<li>
						<a href="detailpage.html?${data[i].id},bottom">
							<img src="${data[i].image}" />
							<div class="em">
								<p>${data[i].content}</p>
								<span>${data[i].price1}</span>
								<span>${data[i].scale}</span><br/>
								<span>${data[i].price2}</span><br/>
								<span>${data[i].price3}</span>
							</div>
						</a>
					</li>`;
			}
			shop_ul.innerHTML=str;
		}
		shop_page(1);
		
		for(var i=0;i<shop_a.length;i++){
			shop_a[i].index=i;
			shop_a[i].onclick=function(){
				var num=this.getAttribute("data-id");
				shop_page(num);
				for(var k=0;k<shop_a.length;k++){
					shop_a[k].style.borderBottom="2px solid transparent";
					shop_a[k].children[1].style.color="#888888";
					shop_a[k].children[0].style.backgroundPositionX='0';
				}
				this.children[1].style.color="#f43142";
				this.style.borderBottom="2px solid #f43142";
				var a=-this.index*40+'px';
				this.children[0].style.backgroundPositionX='-40px';
				this.children[0].style.backgroundPositionY='a';
			}
		}
		
	})
	//特惠专区
	ajax("get","../json/list.json",{},function(data){
		var list_ul=document.getElementById("list_wrap").getElementsByClassName("bottom")[0];
		var top=document.getElementById("list_wrap").getElementsByClassName("top")[0];
		var li=top.getElementsByTagName("li");
		var a=top.getElementsByTagName("a");
		function page(n){
			var str="";
			for(var i=8*(n-1);i<8*n;i++){
				str+=`<li>
						<a href="detailpage.html?${data[i].id},top">
							<img src="${data[i].image}" />
							<div class="em">
								<p>${data[i].content}</p>
								<span>${data[i].price1}</span>
								<span>${data[i].scale}</span><br/>
								<span>${data[i].price2}</span><br/>
								<span>${data[i].price3}</span>
							</div>
						</a>
					</li>`;
			}
			list_ul.innerHTML=str;
		}
		page(1);
		
		top.onclick=function(e){
			var e=e||event;
			var target=e.target||e.srcElement;
			if(target.tagName=="A"){
				var num=target.getAttribute("data-id");
				page(num);
				for(var k=0;k<a.length;k++){
					li[k].className="";
				}
				target.parentNode.className="color";
			}
		}
		
	})