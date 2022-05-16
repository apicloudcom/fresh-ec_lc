(function() {
	var StatusBarView = /*@__PURE__*/ (function(Component) {
		function StatusBarView(props) {
			Component.call(this, props);
			this.compute = {
				statusBarHeight: function() {
					if (api.safeArea) {
						return api.safeArea.top;
					} else {
						var res = wx.getSystemInfoSync();
						return res.statusBarHeight;
					}
				}
			};
		}

		if (Component) StatusBarView.__proto__ = Component;
		StatusBarView.prototype = Object.create(Component && Component.prototype);
		StatusBarView.prototype.constructor = StatusBarView;
		StatusBarView.prototype.render = function() {
			return apivm.h("view", {style: "height:" + this.statusBarHeight + "px;"});
		};

		return StatusBarView;
	})(Component);
	apivm.define("status-bar-view", StatusBarView);

	var Navigationbar = /*@__PURE__*/ (function(Component) {
		function Navigationbar(props) {
			Component.call(this, props);
		}

		if (Component) Navigationbar.__proto__ = Component;
		Navigationbar.prototype = Object.create(Component && Component.prototype);
		Navigationbar.prototype.constructor = Navigationbar;
		Navigationbar.prototype.onLeftButton = function(e) {
			api.closeWin();
		};
		Navigationbar.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "nav-container"},
				apivm.h("status-bar-view", null),
				apivm.h(
					"view",
					{class: "nav-header"},
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-left-button",
							onclick: this.props.onLeftButton
								? this.props.onLeftButton
								: this.onLeftButton
						},
						apivm.h("image", {
							width: this.props.leftButtonWidth ? this.props.leftButtonWidth : 11,
							src: this.props.leftButtonIcon
								? this.props.leftButtonIcon
								: "../../image/back.png",
							mode: "widthFix"
						}),
						apivm.h("text", {class: "nav-header-text"}, this.props.leftButtonText)
					),
					apivm.h("text", {class: "nav-header-title"}, this.props.title),
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-right-button",
							onclick: this.props.onRightButton
						},
						apivm.h("image", {
							width: this.props.rightButtonWidth ? this.props.rightButtonWidth : 0,
							src: this.props.rightButtonIcon ? this.props.rightButtonIcon : "",
							mode: "widthFix"
						}),
						apivm.h("text", {class: "nav-header-text"}, this.props.rightButtonText)
					)
				)
			);
		};

		return Navigationbar;
	})(Component);
	Navigationbar.css = {
		".nav-container": {backgroundColor: "#e3007f"},
		".nav-header": {
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
		".nav-right-button": {justifyContent: "flex-end", paddingRight: "10px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"}
	};
	apivm.define("navigationBar", Navigationbar);

	var Balancehelp = /*@__PURE__*/ (function(Component) {
		function Balancehelp(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Balancehelp.__proto__ = Component;
		Balancehelp.prototype = Object.create(Component && Component.prototype);
		Balancehelp.prototype.constructor = Balancehelp;
		Balancehelp.prototype.apiready = function() {};
		Balancehelp.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Balancehelp.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "余额帮助"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "help-content"},
					apivm.h(
						"text",
						{class: "help-text", style: "padding-bottom: 4px;"},
						"关于余额"
					),
					apivm.h(
						"text",
						{class: "help-text"},
						"1）余额是可以在应用内进行支付的货币；"
					),
					apivm.h(
						"text",
						{class: "help-text"},
						"2）可以通过每日签到、自助充值、卡卷兑换、红包分享等方式获得；"
					),
					apivm.h("text", {class: "help-text"}, "3）永久有效，不支持提现。")
				)
			);
		};

		return Balancehelp;
	})(Component);
	Balancehelp.css = {
		".text": {color: "#444", margin: "10px"},
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
		".help-content": {padding: "16px"},
		".help-text": {fontSize: "14px", color: "#666", lineHeight: "24px"}
	};
	apivm.define("balancehelp", Balancehelp);
	apivm.render(apivm.h("balancehelp", null), "body");
})();
