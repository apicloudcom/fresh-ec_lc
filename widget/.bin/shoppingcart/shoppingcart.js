(function() {
	var Shoppingcart = /*@__PURE__*/ (function(Component) {
		function Shoppingcart(props) {
			Component.call(this, props);
			this.data = {
				haveData: false,
				dataList: [],
				count: 0,
				amount: 0
			};
		}

		if (Component) Shoppingcart.__proto__ = Component;
		Shoppingcart.prototype = Object.create(Component && Component.prototype);
		Shoppingcart.prototype.constructor = Shoppingcart;
		Shoppingcart.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Shoppingcart.prototype.fnOpenDetailWin = function(id, wareCount) {
			api.openWin({
				name: "ware" + id,
				url: "../ware/ware.stml",
				pageParam: {
					wareId: id,
					wareCount: wareCount
				},

				animation: {
					type: "fade"
				}
			});
		};
		Shoppingcart.prototype.fnMinus = function() {
			api.toast({
				msg: "减少商品数量"
			});
		};
		Shoppingcart.prototype.fnAdd = function(e) {
			api.toast({
				msg: "增加商品数量"
			});
		};
		Shoppingcart.prototype.fnSelectAll = function(e) {
			api.toast({
				msg: "全选"
			});
		};
		Shoppingcart.prototype.fnCloseWin = function() {
			api.closeWin();
		};
		Shoppingcart.prototype.fnOpenOrderWin = function() {
			api.openWin({
				name: "order",
				url: "../order/order.stml",
				pageParam: {
					dataList: dataList
				}
			});
		};
		Shoppingcart.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "main"},
				apivm.h(
					"view",
					{class: "nav-header"},
					apivm.h(
						"view",
						{class: "nav-header-button nav-left-button", onClick: this.onLeftButton},
						apivm.h("img", {
							src: "../../image/back.png",
							mode: "widthFix",
							class: "nav-bar-left-img"
						})
					),
					apivm.h("text", {class: "nav-header-title"}, "购物车"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "content"},
					apivm.h(
						"scroll-view",
						{"scroll-y": "true", class: "listView"},
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									"data-id": "56c94a0426f863e874c76caf",
									"data-wareCount": 1,
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76caf", 1);
									}
								},
								apivm.h(
									"label",
									null,
									apivm.h("img", {
										src: "../../image/order_on.png",
										alt: "checkbox",
										class: "checkbox-icon"
									})
								),
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/116d90e46e369dbffd0198026efe35ab.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "佳沛绿奇异果 4个"),
									apivm.h(
										"text",
										{class: "info-description"},
										"享受清爽汁水融进齿间感觉"
									),
									apivm.h("text", {class: "info-price"}, "￥18.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥25.8")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("img", {
										class: "minus",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "count"}, "1"),
									apivm.h("img", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						)
					)
				),
				apivm.h(
					"view",
					{class: "footer"},
					apivm.h(
						"label",
						{class: "left"},
						apivm.h("img", {
							src: "../../image/order_on.png",
							alt: "checkbox",
							class: "checkbox-icon",
							onClick: this.fnSelectAll
						}),
						apivm.h(
							"view",
							null,
							apivm.h("text", {style: "color:#000;"}, "全选"),
							apivm.h("text", {class: "bottomInfo"}, "已选 1 件")
						)
					),
					apivm.h(
						"view",
						{class: "right"},
						apivm.h(
							"view",
							{class: "right-info"},
							apivm.h(
								"view",
								{class: "right-info-top"},
								apivm.h("text", {class: "footer-text"}, "总金额:"),
								apivm.h("text", {class: "amount"}, "￥18.9")
							),
							apivm.h("text", {class: "bottomInfo"}, "不含运费")
						),
						apivm.h("img", {
							class: "buy-button",
							src: "../../image/buy.png",
							onClick: this.fnOpenOrderWin
						})
					)
				)
			);
		};

		return Shoppingcart;
	})(Component);
	Shoppingcart.css = {
		".main": {width: "100%", height: "100%", backgroundColor: "#fff"},
		".nav-header": {
			backgroundColor: "#e3007f",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			height: "44px",
			flexShrink: "0"
		},
		".nav-header-title": {color: "#fff", fontSize: "18px", fontWeight: "bold"},
		".nav-header-button": {
			flexDirection: "row",
			alignItems: "center",
			minWidth: "44px",
			height: "100%"
		},
		".nav-header-button:active": {opacity: "0.5"},
		".nav-left-button": {justifyContent: "flex-start", paddingLeft: "10px"},
		".nav-bar-left-img": {width: "11px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"},
		".content": {flex: "1"},
		".empty": {alignItems: "center", flex: "1", width: "100%"},
		".empty-icon": {width: "115px", height: "190px", marginTop: "50px"},
		".closeBtn": {
			position: "absolute",
			width: "100px",
			height: "30px",
			top: "205px"
		},
		".listView": {width: "100%", height: "100%", backgroundColor: "#f1f1f1"},
		".cell": {height: "130px"},
		".container": {
			flexDirection: "row",
			alignItems: "center",
			width: "100%",
			height: "120px",
			backgroundColor: "#fff"
		},
		".container:active": {backgroundColor: "#f8f8f8"},
		".thumbnail": {width: "100px", height: "100px"},
		".info": {
			flex: "1",
			height: "100px",
			paddingLeft: "8px",
			justifyContent: "center"
		},
		".info-name": {fontSize: "16px", color: "#000", fontWeight: "500"},
		".info-description": {fontSize: "14px", color: "gray"},
		".info-price": {fontSize: "14px", color: "#e3007f"},
		".info-origin-price": {
			fontSize: "11px",
			color: "#c0c0c0",
			textDecoration: "line-through"
		},
		".control": {
			flexDirection: "row",
			position: "absolute",
			right: "10px",
			bottom: "20px"
		},
		".minus,\r\n.add": {display: "flex", width: "25px", height: "25px"},
		".minus:active": {opacity: "0.7"},
		".add:active": {opacity: "0.7"},
		".none": {display: "none"},
		".count": {
			display: "block",
			width: "40px",
			height: "24px",
			lineHeight: "24px",
			margin: "0 5px",
			color: "#444",
			fontSize: "14px",
			textAlign: "center",
			borderRadius: "12px",
			border: "1px solid #ddd",
			backgroundColor: "#fff"
		},
		".footer": {
			flexDirection: "row",
			justifyContent: "space-between",
			width: "100%",
			height: "50px",
			borderTop: "1px solid #d1d1d1"
		},
		".left": {flexDirection: "row", alignItems: "center", height: "100%"},
		".checkbox": {margin: "8px 8px", width: "15px", height: "15px"},
		".bottomInfo": {fontSize: "10px", color: "#888"},
		".right": {flexDirection: "row", alignItems: "center", height: "100%"},
		".right-info": {alignItems: "flex-end", marginRight: "5px"},
		".right-info-top": {
			display: "flex",
			flexDirection: "row",
			height: "30px",
			alignItems: "center"
		},
		".amount": {color: "#e3007f", fontSize: "16px", fontWeight: "400"},
		".buy-button": {width: "94px", height: "37px"},
		".checkbox-icon": {width: "20px", height: "20px", marginRight: "6px"},
		".footer-text": {fontSize: "14px", color: "#333"}
	};
	apivm.define("shoppingcart", Shoppingcart);
	apivm.render(apivm.h("shoppingcart", null), "body");
})();
