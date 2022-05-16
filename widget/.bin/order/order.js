(function() {
	var Order = /*@__PURE__*/ (function(Component) {
		function Order(props) {
			Component.call(this, props);
			this.data = {
				dataList: [],
				count: 0,
				price: 0,
				totalPrice: 0,
				freight: 5.0,
				discounts: 0,
				addressInfo: {
					name: "APICloud",
					mobile: "15100000000",
					typeDesc: "公司",
					address: "中关村科技园区电子城科技园"
				},

				payList: [
					{
						icon: "../../image/icon_balance_pay.png",
						name: "余额支付",
						recommend: true
					},
					{
						icon: "../../image/icon_wxpay.png",
						name: "微信支付",
						recommend: true
					},
					{
						icon: "../../image/icon_alipay.png",
						name: "支付宝",
						recommend: false
					}
				],

				payMethod: "微信支付"
			};
		}

		if (Component) Order.__proto__ = Component;
		Order.prototype = Object.create(Component && Component.prototype);
		Order.prototype.constructor = Order;
		Order.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Order.prototype.onpaymethodchange = function(name) {
			api.toast({
				msg: "付款方式为" + name,
				location: "middle"
			});
		};
		Order.prototype.fnBuy = function() {
			api.toast({
				msg: "演示版本，不能支付",
				location: "middle"
			});
		};
		Order.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "确认订单"),
					apivm.h("view", null)
				),
				apivm.h(
					"scroll-view",
					{class: "scrollView", "scroll-y": "true"},
					apivm.h(
						"view",
						{class: "info-addr"},
						apivm.h("img", {class: "addr-icon", src: "../../image/icon_address.png"}),
						apivm.h(
							"view",
							{class: "addr-middle"},
							apivm.h("text", {class: "text-black"}, "收货人: APICloud 15100000000"),
							apivm.h(
								"view",
								{class: "addr-bottom"},
								apivm.h("text", {class: "text-red"}, "[公司]"),
								apivm.h("text", {class: "text-grey"}, "中关村科技园区电子城科技园")
							)
						),
						apivm.h("img", {
							class: "addr-arrow-icon",
							src: "../../image/item_user_address_right.png"
						})
					),
					apivm.h(
						"view",
						{class: "info-order"},
						apivm.h(
							"view",
							{class: "item-desc"},
							apivm.h("img", {class: "item-icon", src: "../../image/icon_order.png"}),
							apivm.h("text", {class: "text-black"}, "订单信息")
						),
						apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{class: "wareItem"},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/116d90e46e369dbffd0198026efe35ab.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "wareInfo"},
									apivm.h("text", {class: "text-black"}, "佳沛绿奇异果 4个"),
									apivm.h("text", {class: "text-black"}, "￥18.9")
								),
								apivm.h("text", {class: "info-wareCount"}, "1")
							),
							apivm.h(
								"view",
								{class: "wareItem"},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/f568314a65b1d23ae06257e953501af9.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "wareInfo"},
									apivm.h("text", {class: "text-black"}, "泰国龙眼 2斤"),
									apivm.h("text", {class: "text-black"}, "￥29.9")
								),
								apivm.h("text", {class: "info-wareCount"}, "1")
							)
						),
						apivm.h(
							"view",
							{class: "list-item"},
							apivm.h("text", {class: "text-black"}, "数量："),
							apivm.h("text", {class: "text-black"}, "2件")
						),
						apivm.h(
							"view",
							{class: "list-item"},
							apivm.h("text", {class: "text-black"}, "优惠券："),
							apivm.h(
								"view",
								{class: "list-item-coupon"},
								apivm.h("text", {class: "text-grey"}, "未使用 "),
								apivm.h("image", {
									style: "width:9px;height:14px;",
									src: "../../image/arrow_right.png"
								})
							)
						),
						apivm.h(
							"view",
							{class: "list-item"},
							apivm.h("text", {class: "text-black"}, "商品金额："),
							apivm.h("text", {class: "text-red"}, "￥48.8")
						),
						apivm.h(
							"view",
							{class: "list-item"},
							apivm.h("text", {class: "text-black"}, "运费："),
							apivm.h("text", {class: "text-red"}, "￥0")
						),
						apivm.h(
							"view",
							{class: "list-item"},
							apivm.h("text", {class: "text-black"}, "优惠金额："),
							apivm.h("text", {class: "text-red"}, "￥0")
						),
						apivm.h(
							"view",
							{class: "list-item-totalPrice"},
							apivm.h("text", {class: "text-black"}, "实付款："),
							apivm.h("text", {class: "text-red"}, "￥48.8")
						)
					),
					apivm.h(
						"view",
						{class: "info-pay"},
						apivm.h(
							"view",
							{class: "item-desc"},
							apivm.h("image", {class: "item-icon", src: "../../image/order_pay.png"}),
							apivm.h("text", {class: "text-black"}, "付款方式")
						),
						apivm.h(
							"view",
							{
								class: "list-item",
								"data-name": "余额支付",
								onClick: function() {
									return this$1.onpaymethodchange("余额支付");
								}
							},
							apivm.h(
								"view",
								{class: "pay-left"},
								apivm.h("img", {
									class: "payIcon",
									src: "../../image/icon_balance_pay.png"
								}),
								apivm.h("text", {class: "payName"}, "余额支付"),
								apivm.h("img", {
									style: "width:17px;height:17px;",
									src: "../../image/recommend.png"
								})
							),
							apivm.h("img", {
								style: "width:25px;height:25px;",
								src: "../../image/order_on.png"
							})
						),
						apivm.h(
							"view",
							{
								class: "list-item",
								"data-name": "微信支付",
								onClick: function() {
									return this$1.onpaymethodchange("微信支付");
								}
							},
							apivm.h(
								"view",
								{class: "pay-left"},
								apivm.h("img", {class: "payIcon", src: "../../image/icon_wxpay.png"}),
								apivm.h("text", {class: "payName"}, "微信支付"),
								apivm.h("img", {
									style: "width:17px;height:17px;",
									src: "../../image/recommend.png"
								})
							),
							apivm.h("img", {
								style: "width:25px;height:25px;",
								src: "../../image/order_off.png"
							})
						),
						apivm.h(
							"view",
							{
								class: "list-item",
								"data-name": "支付宝",
								onClick: function() {
									return this$1.onpaymethodchange("支付宝");
								}
							},
							apivm.h(
								"view",
								{class: "pay-left"},
								apivm.h("img", {class: "payIcon", src: "../../image/icon_alipay.png"}),
								apivm.h("text", {class: "payName"}, "支付宝")
							),
							apivm.h("img", {
								style: "width:25px;height:25px;",
								src: "../../image/order_off.png"
							})
						)
					)
				),
				apivm.h(
					"view",
					{class: "footer"},
					apivm.h("text", {class: "footer-price"}, "总金额: ￥48.8"),
					apivm.h("img", {
						src: "../../image/confirm.png",
						class: "buy-button",
						onClick: this.fnBuy
					})
				)
			);
		};

		return Order;
	})(Component);
	Order.css = {
		".main": {width: "100%", height: "100%"},
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
		".scrollView": {flex: "1", width: "100%", backgroundColor: "#f0f0f0"},
		".info-addr": {
			flexDirection: "row",
			alignItems: "center",
			width: "100%",
			height: "70px",
			padding: "10px 0",
			backgroundColor: "#fff"
		},
		".addr-icon": {width: "19px", height: "24px", margin: "0 12px"},
		".addr-middle": {flex: "1", justifyContent: "space-between", height: "100%"},
		".addr-bottom": {flexDirection: "row"},
		".text-red": {fontSize: "14px", color: "#e3007f", fontWeight: "400"},
		".text-grey": {color: "#888", fontSize: "14px", fontWeight: "400"},
		".text-black": {color: "#000", fontSize: "14px", fontWeight: "400"},
		".addr-arrow-icon": {width: "8px", height: "16px", margin: "0 12px"},
		".item-desc": {
			flexDirection: "row",
			alignItems: "center",
			height: "40px",
			marginTop: "8px",
			backgroundColor: "#fff"
		},
		".item-icon": {width: "14px", height: "17px", margin: "0 10px"},
		".wareItem": {
			flexDirection: "row",
			height: "70px",
			padding: "8px 10px",
			backgroundColor: "#f1f5f8",
			borderBottom: "1px solid #d1d1d1"
		},
		".thumbnail": {width: "54px", height: "54px", marginRight: "10px"},
		".wareInfo": {flex: "1", justifyContent: "space-between"},
		".info-wareCount": {alignSelf: "flex-end", fontSize: "14px", color: "#333"},
		".list-item": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "0 10px",
			height: "40px",
			backgroundColor: "#fff",
			borderBottom: "1px solid #d1d1d1"
		},
		".list-item-coupon": {flexDirection: "row", alignItems: "center"},
		".list-item-totalPrice": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "flex-end",
			padding: "0 10px",
			height: "40px",
			backgroundColor: "#fff"
		},
		".pay-left": {flexDirection: "row", alignItems: "center"},
		".payIcon": {width: "61px", height: "30px"},
		".payName": {margin: "0 8px", color: "#000", fontSize: "14px"},
		".footer": {
			flexDirection: "row",
			alignItems: "center",
			paddingLeft: "10px",
			width: "100%",
			height: "50px",
			backgroundColor: "black"
		},
		".footer-price": {fontSize: "16px", color: "#fff", marginLeft: "10px"},
		".buy-button": {
			position: "absolute",
			width: "112px",
			height: "40px",
			right: "0",
			top: "5px"
		},
		".safe-area": {backgroundColor: "#000"}
	};
	apivm.define("order", Order);
	apivm.render(apivm.h("order", null), "body");
})();
