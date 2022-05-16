(function() {
	var Recharge = /*@__PURE__*/ (function(Component) {
		function Recharge(props) {
			Component.call(this, props);
		}

		if (Component) Recharge.__proto__ = Component;
		Recharge.prototype = Object.create(Component && Component.prototype);
		Recharge.prototype.constructor = Recharge;
		Recharge.prototype.apiready = function() {};
		Recharge.prototype.render = function() {
			return apivm.h(
				"scroll-view",
				{class: "recharge-main", "scroll-y": "true"},
				apivm.h(
					"view",
					{class: "recharge-container"},
					apivm.h(
						"view",
						{class: "recharge-item"},
						apivm.h(
							"view",
							{class: "recharge-top"},
							apivm.h("image", {class: "bg-img", src: "../../image/recharge_top.png"}),
							apivm.h(
								"view",
								{class: "recharge-tag"},
								apivm.h("image", {
									class: "bg-img",
									src: "../../image/recharge_tag.png"
								}),
								apivm.h("text", {class: "recharge-tag-text"}, "充就送")
							),
							apivm.h("text", {class: "recharge-price"}, "499￥"),
							apivm.h("text", {class: "recharge-desc"}, "另送50元")
						),
						apivm.h(
							"view",
							{class: "recharge-bottom"},
							apivm.h("image", {
								class: "bg-img",
								src: "../../image/recharge_bottom.png"
							}),
							apivm.h(
								"view",
								{class: "recharge-buttonBg"},
								apivm.h("image", {
									class: "bg-img",
									src: "../../image/recharge_button.png"
								}),
								apivm.h("text", {class: "recharge-button"}, "购买")
							)
						)
					)
				)
			);
		};

		return Recharge;
	})(Component);
	Recharge.css = {
		".recharge-main": {height: "100%", backgroundColor: "#fff"},
		".recharge-container": {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-between"
		},
		".recharge-item": {width: "150px", height: "180px", margin: "5px"},
		".recharge-top": {flex: "4"},
		".bg-img": {position: "absolute", width: "100%", height: "100%"},
		".recharge-tag": {
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			top: "0",
			right: "0",
			width: "50px",
			height: "50px"
		},
		".recharge-tag-text": {
			position: "absolute",
			top: "11px",
			right: "0",
			color: "#ff4401",
			fontSize: "12px",
			textAlign: "center",
			transformOrigin: "center center",
			transform: "rotate(45deg)",
			zIndex: "1000"
		},
		".recharge-price": {
			margin: "20px 10px 0 20px",
			color: "#fff",
			fontSize: "30px",
			fontWeight: "bolder",
			zIndex: "999"
		},
		".recharge-desc": {
			margin: "20px 10px 0 20px",
			fontSize: "20px",
			color: "#fff",
			zIndex: "999"
		},
		".recharge-bottom": {
			flex: "1",
			justifyContent: "center",
			alignItems: "center"
		},
		".recharge-buttonBg": {
			justifyContent: "center",
			alignItems: "center",
			width: "70%",
			height: "55%"
		},
		".recharge-button": {
			width: "100%",
			textAlign: "center",
			color: "#fff",
			fontSize: "14px",
			zIndex: "999"
		},
		".recharge-button:active": {opacity: "0.7"}
	};
	apivm.define("recharge", Recharge);
	apivm.render(apivm.h("recharge", null), "body");
})();
