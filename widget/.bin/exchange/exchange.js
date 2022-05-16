(function() {
	var Exchange = /*@__PURE__*/ (function(Component) {
		function Exchange(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Exchange.__proto__ = Component;
		Exchange.prototype = Object.create(Component && Component.prototype);
		Exchange.prototype.constructor = Exchange;
		Exchange.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "exchange-main"},
				apivm.h(
					"scroll-view",
					{class: "exchange-scrollView", "scroll-y": "true", bounces: "false"},
					apivm.h(
						"view",
						{class: "exchange-inputBar"},
						apivm.h("input", {class: "exchange-input", placeholder: "请输入优惠码"}),
						apivm.h("text", {class: "exchange-button"}, "兑换")
					)
				)
			);
		};

		return Exchange;
	})(Component);
	Exchange.css = {
		".exchange-main": {width: "100%", height: "100%"},
		".exchange-scrollView": {height: "50px"},
		".exchange-inputBar": {
			flexDirection: "row",
			alignItems: "center",
			height: "100%"
		},
		".exchange-input": {
			flex: "1",
			margin: "0 10px",
			paddingLeft: "10px",
			height: "30px",
			borderRadius: "15px",
			backgroundColor: "#eee"
		},
		".exchange-button": {
			marginRight: "10px",
			width: "80px",
			height: "30px",
			textAlign: "center",
			fontSize: "16px",
			color: "#444",
			lineHeight: "30px",
			borderRadius: "15px",
			border: "1px solid #aaa"
		},
		".exchange-button:active": {opacity: "0.7"}
	};
	apivm.define("exchange", Exchange);
	apivm.render(apivm.h("exchange", null), "body");
})();
