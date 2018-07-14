function ff(a){
	
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
			
			
			
			
			return price;
	}
	function ff2(b){
		var last2,join2,last;
		last2 = b.toString();
		join2 = last2.split("");
		join2.splice(join2.length-3,0,",");
		last ="￦"+join2.join("");
		return last;
	}