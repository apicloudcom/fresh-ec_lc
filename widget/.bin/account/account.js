(function() {
	var Billhistory = /*@__PURE__*/ (function(Component) {
		function Billhistory(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Billhistory.__proto__ = Component;
		Billhistory.prototype = Object.create(Component && Component.prototype);
		Billhistory.prototype.constructor = Billhistory;
		Billhistory.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "billhistory-main"},
				apivm.h("text", {class: "billhistory-text"}, "暂无记录")
			);
		};

		return Billhistory;
	})(Component);
	Billhistory.css = {
		".billhistory-main": {backgroundColor: "#fff"},
		".billhistory-text": {
			fontSize: "18px",
			color: "#333",
			marginTop: "10px",
			alignSelf: "center"
		}
	};
	apivm.define("billhistory", Billhistory);

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

	var Myorder = /*@__PURE__*/ (function(Component) {
		function Myorder(props) {
			Component.call(this, props);
			this.data = {
				selectedIndex: 0
			};
		}

		if (Component) Myorder.__proto__ = Component;
		Myorder.prototype = Object.create(Component && Component.prototype);
		Myorder.prototype.constructor = Myorder;
		Myorder.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Myorder.prototype.onRightButton = function() {
			api.openWin({
				name: "balancehelp",
				url: "../balancehelp/balancehelp.stml"
			});
		};
		Myorder.prototype.fnSetFrameGroupIndex = function(index) {
			if (this.data.selectedIndex == index) {
				return;
			}
			this.data.selectedIndex = index;
			api.toast({
				msg: "点击menu菜单" + index,
				location: "middle"
			});
		};
		Myorder.prototype.render = function() {
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
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-right-button",
							onClick: this.onRightButton
						},
						apivm.h("image", {
							src: "../../image/accounthelp.png",
							class: "nav-bar-right-img",
							mode: "widthFix"
						})
					)
				),
				apivm.h(
					"view",
					{class: "account-info"},
					apivm.h("text", {class: "account-info-desc"}, "生鲜余额"),
					apivm.h("text", {class: "account-info-detail"}, "￥0")
				),
				apivm.h(
					"view",
					{class: "nav-menu"},
					apivm.h(
						"view",
						{
							class: "item item-selected",
							onClick: function() {
								return this$1.fnSetFrameGroupIndex(0);
							}
						},
						apivm.h("image", {
							class: "radio",
							src: "../../image/account_0_select.png"
						}),
						apivm.h("text", {class: "item-title item-title-selected"}, "充值有礼")
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnSetFrameGroupIndex(1);
							}
						},
						apivm.h("image", {class: "radio", src: "../../image/account_1.png"}),
						apivm.h("text", {class: "item-title"}, "卡券兑换")
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnSetFrameGroupIndex(2);
							}
						},
						apivm.h("image", {class: "radio", src: "../../image/account_2.png"}),
						apivm.h("text", {class: "item-title"}, "账单记录")
					)
				),
				apivm.h(
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
								apivm.h("image", {
									class: "bg-img",
									src: "../../image/recharge_top.png"
								}),
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
				)
			);
		};

		return Myorder;
	})(Component);
	Myorder.css = {
		".main": {width: "100%", height: "100%"},
		".nav-header": {
			backgroundColor: "#e3007f",
			display: "flex",
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
		".nav-bar-right-img": {width: "20px", height: "20px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"},
		".account-info": {
			justifyContent: "center",
			alignItems: "center",
			height: "110px",
			backgroundColor: "#e3007f"
		},
		".account-info-desc": {fontSize: "13px", color: "#fff"},
		".account-info-detail": {
			fontSize: "20px",
			color: "#fff",
			fontWeight: "bold",
			marginTop: "8px"
		},
		".nav-menu": {
			display: "flex",
			flexDirection: "row",
			width: "100%",
			height: "40px",
			backgroundColor: "#f0f0f0",
			alignItems: "center"
		},
		".item": {
			flex: "1",
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			borderBottom: "2px solid #f0f0f0"
		},
		".item-selected": {borderBottom: "2px solid #e3007f"},
		".radio": {width: "18px", height: "14px", marginRight: "8px"},
		".item-title": {color: "#444", fontSize: "14px"},
		".item-title-selected": {color: "#e3007f"},
		".recharge-main": {flex: "1", backgroundColor: "#fff", padding: "16px 12px"},
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
	apivm.define("myorder", Myorder);
	apivm.render(apivm.h("myorder", null), "body");
})();
