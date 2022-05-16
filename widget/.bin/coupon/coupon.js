(function() {
	var Coupon = /*@__PURE__*/ (function(Component) {
		function Coupon(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Coupon.__proto__ = Component;
		Coupon.prototype = Object.create(Component && Component.prototype);
		Coupon.prototype.constructor = Coupon;
		Coupon.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Coupon.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "我的优惠券"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "inputBar"},
					apivm.h("input", {class: "input", placeholder: "请输入优惠码"}),
					apivm.h("text", {class: "button"}, "兑换")
				),
				apivm.h(
					"scroll-view",
					{class: "listView", "scroll-y": "true"},
					apivm.h(
						"view",
						{class: "cell"},
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("image", {
								class: "item-bg",
								src: "../../image/coupon_background.png"
							}),
							apivm.h(
								"view",
								{class: "part1"},
								apivm.h("text", {class: "desc"}, "优惠券")
							),
							apivm.h(
								"view",
								{class: "part2"},
								apivm.h("text", {class: "price"}, "50￥")
							),
							apivm.h("view", {class: "part3"}),
							apivm.h(
								"view",
								{class: "part4"},
								apivm.h("text", {class: "part4-top"}, "APP新客户50元体验卷"),
								apivm.h("text", {class: "part4-middle"}, "满99元使用（含运费）"),
								apivm.h("text", {class: "part4-bottom"}, "有效期至2021年10月1日")
							)
						)
					),
					apivm.h(
						"view",
						{class: "cell"},
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("image", {
								class: "item-bg",
								src: "../../image/coupon_background.png"
							}),
							apivm.h(
								"view",
								{class: "part1"},
								apivm.h("text", {class: "desc"}, "优惠券")
							),
							apivm.h(
								"view",
								{class: "part2"},
								apivm.h("text", {class: "price"}, "600￥")
							),
							apivm.h("view", {class: "part3"}),
							apivm.h(
								"view",
								{class: "part4"},
								apivm.h("text", {class: "part4-top"}, "APP新客户600元体验卷"),
								apivm.h("text", {class: "part4-middle"}, "满999元使用（含运费）"),
								apivm.h("text", {class: "part4-bottom"}, "有效期至2021年10月30日")
							)
						)
					)
				)
			);
		};

		return Coupon;
	})(Component);
	Coupon.css = {
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
		".inputBar": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			margin: "12px 10px"
		},
		".input": {
			height: "30px",
			lineHeight: "30px",
			flex: "1",
			padding: "0 12px",
			borderRadius: "15px",
			backgroundColor: "#eee"
		},
		".button": {
			flexShrink: "0",
			marginLeft: "10px",
			width: "80px",
			height: "30px",
			textAlign: "center",
			fontSize: "16px",
			color: "#444",
			lineHeight: "30px",
			borderRadius: "15px",
			border: "1px solid #aaa"
		},
		".button:active": {opacity: "0.7"},
		".listView": {flex: "1", backgroundColor: "#eee"},
		".cell": {flexDirection: "row"},
		".item": {flexDirection: "row", flex: "1", margin: "8px 8px 0 8px"},
		".item-bg": {position: "absolute", width: "100%", height: "100%"},
		".part1": {flex: "22", justifyContent: "center", alignItems: "center"},
		".part2": {flex: "110", justifyContent: "center"},
		".part3": {flex: "18"},
		".part4": {flex: "195", justifyContent: "space-between", padding: "10px"},
		".desc": {
			fontSize: "12px",
			textAlign: "center",
			color: "#e3007f",
			width: "15px"
		},
		".price": {
			fontSize: "32px",
			color: "#fff",
			fontWeight: "bolder",
			marginLeft: "8px"
		},
		".part4-top": {fontSize: "13px", fontWeight: "bold", color: "#fff"},
		".part4-middle": {fontSize: "13px", color: "#fff"},
		".part4-bottom": {marginTop: "3px", fontSize: "11px", color: "#fff"}
	};
	apivm.define("coupon", Coupon);
	apivm.render(apivm.h("coupon", null), "body");
})();
