
ajax("get","../json/all2.json",{},function(data){

		new search();
		function search(){
			this.form=document.getElementById("search_wrap").getElementsByClassName("look")[0];
			this.ul=this.form.getElementsByClassName("show")[0];
			this._input=document.getElementById("input");
			this.btn=this.form.getElementsByTagName("img")[0];
			var _this=this;
			this.n=0;
			this.btn.onclick=function(){
				_this.find();
			}
			
		}

		search.prototype.find=function(e){
			var e=e||event;
			e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
			this.ul.style.display="block";
			this.ul.innerHTML="";
			this.n=0;
			this.value=this._input.value;
			for(var i=0;i<data.length;i++){
				if(data[i].content.indexOf(this.value) != -1){
					this.n++;
					this.li=document.createElement("li");
					this.li.innerHTML=this.n+""+data[i].content;
					if(i>48){
						this.li.className=data[i].id+" "+"bottom";
					}else{
						this.li.className=data[i].id+" "+"top";
					}
					this.ul.appendChild(this.li);
				}
			}
			var _this=this;
			document.onclick=function(){
				_this.ul.style.display="none";
				document.onclick=null;
			}
			this.ul.onclick=function(e){
				console.log(2)
				var e=e||event;
				var target=e.target||e.srcElement;
				if(target.tagName=="LI"){
					_this._input.value=target.innerHTML.slice(1);
					_this.ul.style.display="none";
					_this._class=target.getAttribute("class");
					_this.arr=_this._class.split(" ");
					location.href="detailpage.html?"+_this.arr[0]+","+_this.arr[1];
				}
				
			}
		}
})

