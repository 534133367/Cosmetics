
function _top(attr,n,s1,s2,box,dear){
		for(var k=0;k<attr.length;k++){
			if(attr[k].id==n){
				s1+=`<div class="detail content">
				<div class="left">
					<div class="bb">
						<div class="top">
							<img src="${attr[k].image}" class="pic"/>
							<div class="filter"></div>
						</div>
						<div class="bigimg">
							<img src="${attr[k].image}" />
						</div>
					</div>	
					<div class="bottom">
						<img src="${attr[k].image}" data-id="${attr[k].image}" class="small"/>
						<img src="${attr[k+1].image}" data-id="${attr[k+1].image}" class="small" />
						<img src="${attr[k+2].image}" data-id="${attr[k+2].image}" class="small" />
						<img src="${attr[k+3].image}" data-id="${attr[k+3].image}" class="small" />
					</div>
				</div>
				<div class="right">
					<div class="price">
						<div class="top">
							<img src="../img/ico1.png" /><span>国际配送</span>
						</div>
						<p class="cont">${attr[k].content}</p>
						<p class="num">Items No. <i>${s2}</i></p>
						<span class="cc">${attr[k].price2}</span>
						<span class="unit">${attr[k].price3}</span>
					</div>
					<div class="send">
						<div class="_left">
							<span>配送详情</span>
							<span>配送类型</span>
						</div>
						<div class="_right">
							<p>可海外配送(EMS,顺丰速运)</p>
							<ul>
								<li>
									<span>国际运费:</span>
									<a href="##">查看明细<img src="../img/xiangxia.gif"/></a>
								</li>
								<li>Domestic Delivery Fee : Free</li>
								<li>Average delivery period: 1.2 days</li>
							</ul>
							<input type="radio" checked="checked" name="send"/><span class="last">国际配送</span>
							<input type="radio" name="send"/><span class="last">韩国内配送</span>
						</div>
					</div>
					<div class="buy">
						<div class="choose">
							<span>选择类型</span>
							<select>
								<option>*必选</option>
								<option>1.${attr[k].content}</option>
							</select>
						</div>
						<div id="bigbox">
							<div class="smallbox">
								<p>${attr[k].content}</p>
								<div class="box">
									<span>${attr[k].price2}</span>
									<span class="cha">×</span>
									<input type="text" value="1">
									<div class="btn">
										<button class="top_btn"></button>
										<button class="bottom_btn"></button>
									</div>
								</div>
							</div>
							<div class="num">
								<span class="change">更改优惠券</span>
								<div class="all">
									<span>总金额</span>
									<span>(数量)</span>
								</div>
								<div class="money">
									<span class="price1">${attr[k].price2}</span>
									<span class="price2">${attr[k].price3}</span>
								</div>
							</div>
						</div>
						<ul class="get">
							<li>
								<a href="##">收藏</a>
							</li>
							<li>
								<a href="##" data-id="${attr[k].id} ${dear}" class="adder">添加到购物车</a>
							</li>
							<li>
								<a href="##">购买</a>
							</li>
						</ul>
					</div>
				</div>
			</div>`
			
		}
		box.innerHTML=s1;
	}
}