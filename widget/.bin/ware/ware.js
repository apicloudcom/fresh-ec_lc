(function() {
	var Ware = /*@__PURE__*/ (function(Component) {
		function Ware(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Ware.__proto__ = Component;
		Ware.prototype = Object.create(Component && Component.prototype);
		Ware.prototype.constructor = Ware;
		Ware.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Ware.prototype.onRightButton = function() {
			api.openFrame({
				name: "sharePage",
				url: "../share_frame/share_frame.stml"
			});
		};
		Ware.prototype.fnMinus = function() {
			api.toast({
				msg: "减少商品数量"
			});
		};
		Ware.prototype.fnAdd = function() {
			api.toast({
				msg: "增加商品数量"
			});
		};
		Ware.prototype.fnOpenDetailWin = function(id, wareCount) {
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
		Ware.prototype.fnOpenOrderWin = function() {
			api.openWin({
				name: "order",
				url: "../order/order.stml"
			});
		};
		Ware.prototype.fnOpenShoppingCartWin = function() {
			api.openWin({
				name: "shoppingcart",
				url: "../shoppingcart/shoppingcart.stml"
			});
		};
		Ware.prototype.render = function() {
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
						apivm.h("image", {
							src: "../../image/back.png",
							mode: "widthFix",
							class: "nav-bar-left-img"
						})
					),
					apivm.h("text", {class: "nav-header-title"}, "商品详情"),
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-right-button",
							onClick: this.onRightButton
						},
						apivm.h("text", {class: "nav-header-text"}, "分享")
					)
				),
				apivm.h(
					"scroll-view",
					{class: "scrollView", "scroll-y": "true"},
					apivm.h(
						"view",
						{class: "swiper"},
						apivm.h("img", {
							class: "swiper-img",
							src:
								"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/a3f416e37b4a79d69ad63b4b9d711fd9.jpg",
							alt: "img"
						})
					),
					apivm.h(
						"view",
						{class: "info"},
						apivm.h("text", {class: "name"}, "泰国龙眼 2斤"),
						apivm.h("text", {class: "description"}, "肉肉的 甜甜的"),
						apivm.h(
							"view",
							{class: "info-price"},
							apivm.h("text", {class: "price"}, "￥29.9"),
							apivm.h("text", {class: "origin-price"}, "￥39.9")
						),
						apivm.h("text", {class: "stock"}, "仅剩12件")
					),
					apivm.h(
						"view",
						{class: "recommend"},
						apivm.h("text", {class: "recommendTitle"}, "推荐商品"),
						apivm.h(
							"view",
							{class: "recommendList"},
							apivm.h(
								"view",
								{
									class: "recommendItem",
									"data-id": "56c94a0426f863e874c76caf",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76caf", 1);
									}
								},
								apivm.h("img", {
									class: "recommend-thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/116d90e46e369dbffd0198026efe35ab.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h("text", {class: "recommend-info-name"}, "佳沛绿奇异果 4个"),
								apivm.h("text", {class: "recommend-info-price"}, "￥18.9")
							),
							apivm.h(
								"view",
								{
									class: "recommendItem",
									"data-id": "56c94a0426f863e874c76cb1",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76cb1", 1);
									}
								},
								apivm.h("img", {
									class: "recommend-thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/5bfeda41003fba5faad8c58f413ac900.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h("text", {class: "recommend-info-name"}, "四川丑柑 2斤"),
								apivm.h("text", {class: "recommend-info-price"}, "￥24.9")
							)
						)
					),
					apivm.h(
						"view",
						{class: "detail"},
						apivm.h("text", {class: "detailTitle"}, "商品详情"),
						apivm.h(
							"view",
							{class: "goods-detail"},
							apivm.h("text", {class: "goods-detail-text"}, "肉肉的 甜甜的"),
							apivm.h("img", {
								class: "goods-detail-img",
								src:
									"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/bf57b9745c1ee8a13460c3e773aab37c.jpg",
								alt: "img"
							})
						)
					)
				),
				apivm.h(
					"view",
					{class: "footer"},
					apivm.h("image", {
						src: "../../image/minus.png",
						class: "minus",
						onclick: function(event) {
							if (this$1.fnMinus) {
								this$1.fnMinus();
							} else {
								fnMinus();
							}
						}
					}),
					apivm.h("text", {class: "count"}, "1"),
					apivm.h("image", {
						src: "../../image/add.png",
						class: "add",
						onclick: function(event) {
							if (this$1.fnAdd) {
								this$1.fnAdd();
							} else {
								fnAdd();
							}
						}
					}),
					apivm.h("image", {
						src: "../../image/buynow.png",
						class: "buy-button",
						onclick: this.fnOpenOrderWin
					})
				),
				apivm.h(
					"view",
					{class: "minicart"},
					apivm.h(
						"view",
						{class: "__main", onclick: this.fnOpenShoppingCartWin},
						apivm.h("text", {class: "__amount"}, "￥29.9"),
						apivm.h("text", {class: "__count"}, "1")
					)
				)
			);
		};

		return Ware;
	})(Component);
	Ware.css = {
		".main": {
			width: "100%",
			height: "100%",
			background: "#f3f3f3",
			position: "relative"
		},
		".nav-header": {
			backgroundColor: "#e3007f",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			height: "44px"
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
		".nav-right-button": {justifyContent: "flex-end", paddingRight: "10px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"},
		".scrollView": {width: "100%", flex: "1", overflow: "scroll"},
		".swiper": {width: "100%", height: "300px", backgroundColor: "#fff"},
		".swiper-img": {width: "100%", height: "300px"},
		".info": {padding: "20px", marginBottom: "10px", backgroundColor: "#fff"},
		".name": {color: "#000", fontSize: "20px"},
		".description": {color: "#888", fontSize: "15px", marginTop: "4px"},
		".info-price": {
			flexDirection: "row",
			alignItems: "flex-end",
			marginTop: "10px"
		},
		".price": {color: "#e3007f", fontSize: "24px", fontWeight: "bolder"},
		".origin-price": {
			fontSize: "14px",
			color: "#888",
			textDecoration: "line-through"
		},
		".stock": {
			position: "absolute",
			bottom: "20px",
			right: "20px",
			fontSize: "14px",
			color: "#888"
		},
		".recommend": {
			height: "240px",
			padding: "20px",
			backgroundColor: "#fff",
			whiteSpace: "nowrap",
			borderBottom: "10px solid #f3f3f3"
		},
		".recommendTitle": {fontSize: "18px", color: "#000"},
		".recommendList": {
			display: "flex",
			flexDirection: "row",
			flex: "1",
			marginTop: "10px",
			flexWrap: "wrap"
		},
		".recommendItem": {
			width: "100px",
			height: "100%",
			marginRight: "16px",
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start"
		},
		".recommend-thumbnail": {
			width: "100px",
			height: "100px",
			borderRadius: "5px"
		},
		".recommend-info-name": {
			marginTop: "5px",
			fontSize: "12px",
			lineHeight: "24px",
			color: "#333"
		},
		".recommend-info-price": {
			lineHeight: "20px",
			fontSize: "12px",
			color: "#e3007f"
		},
		".detail": {
			padding: "20px 20px 0",
			marginBottom: "10px",
			backgroundColor: "#fff"
		},
		".goods-detail": {padding: "16px 0"},
		".goods-detail-text": {
			fontSize: "14px",
			color: "#333",
			fontWeight: "400",
			marginBottom: "12px"
		},
		".goods-detail-image": {width: "100%"},
		".detailTitle": {fontSize: "18px"},
		".rich-text": {marginTop: "10px"},
		".footer": {
			flexDirection: "row",
			alignItems: "center",
			paddingLeft: "10px",
			width: "100%",
			height: "50px",
			backgroundColor: "black"
		},
		".minus,\r\n.add": {width: "25px", height: "25px"},
		".count": {
			width: "40px",
			height: "24px",
			lineHeight: "24px",
			margin: "0 5px",
			color: "#444",
			fontSize: "14px",
			textAlign: "center",
			borderRadius: "12px",
			backgroundColor: "#fff"
		},
		".buy-button": {
			position: "absolute",
			width: "112px",
			height: "40px",
			right: "0",
			top: "5px"
		},
		".minicart": {position: "fixed", bottom: "110px"},
		".safe-area": {backgroundColor: "#000"},
		".sharepage": {
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0, 0, 0, 0.5)"
		},
		".text_1": {position: "absolute"},
		".text_2": {position: "relative"},
		".__main": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			alignSelf: "flex-start",
			height: "34px",
			minWidth: "34px",
			borderTopRightRadius: "17px",
			borderBottomRightRadius: "17px",
			backgroundColor: "#e3007f"
		},
		".__amount": {color: "#fff", fontSize: "12px", marginRight: "4px"},
		".__count": {
			display: "block",
			marginRight: "2px",
			minWidth: "20px",
			height: "20px",
			lineHeight: "20px",
			borderRadius: "10px",
			backgroundColor: "#fff",
			textAlign: "center",
			color: "#e3007f"
		}
	};
	apivm.define("ware", Ware);
	apivm.render(apivm.h("ware", null), "body");
})();
