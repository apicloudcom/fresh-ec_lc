(function() {
	var Login = /*@__PURE__*/ (function(Component) {
		function Login(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Login.__proto__ = Component;
		Login.prototype = Object.create(Component && Component.prototype);
		Login.prototype.constructor = Login;
		Login.prototype.apiready = function() {
			document.getElementById("username").focus();
		};
		Login.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Login.prototype.fnLogin = function() {
			var usernameValue = document.getElementById("username").value;
			var passwordValue = document.getElementById("password").value;
			if (!usernameValue) {
				this.toast("请输入用户名");
				return;
			}
			if (!passwordValue) {
				this.toast("请输入密码");
				return;
			}
			this.toast("登录");
		};
		Login.prototype.toast = function(msg) {
			api.toast({
				msg: msg,
				location: "middle",
				global: true
			});
		};
		Login.prototype.onRightButton = function() {
			api.openWin({
				name: "register",
				url: "../register/register.stml"
			});
		};
		Login.prototype.fnThirdLogin = function(type) {
			this.toast(type + "登录");
		};
		Login.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "会员登录"),
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-right-button",
							onClick: this.onRightButton
						},
						apivm.h("text", {class: "nav-header-text"}, "注册")
					)
				),
				apivm.h(
					"scroll-view",
					{class: "scrollView", "scroll-y": "true"},
					apivm.h(
						"view",
						{class: "container"},
						apivm.h("input", {id: "username", class: "input", placeholder: "用户名"}),
						apivm.h("input", {
							id: "password",
							class: "input",
							type: "password",
							placeholder: "密码"
						}),
						apivm.h("text", {class: "btn", onclick: this.fnLogin}, "登录"),
						apivm.h(
							"view",
							{class: "third-login"},
							apivm.h("text", {class: "third-login-desc"}, "第三方登录"),
							apivm.h(
								"view",
								{class: "icon-container"},
								apivm.h("image", {
									class: "icon",
									"data-type": "Apple",
									src: "../../image/logo_apple.png",
									onClick: function() {
										return this$1.fnThirdLogin("Apple");
									}
								}),
								apivm.h("image", {
									class: "icon",
									"data-type": "微信",
									src: "../../image/logo_wx.png",
									onClick: function() {
										return this$1.fnThirdLogin("微信");
									}
								})
							)
						)
					)
				)
			);
		};

		return Login;
	})(Component);
	Login.css = {
		".main": {width: "100%", height: "100%"},
		".scrollView": {flex: "1"},
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
		".container": {padding: "20px"},
		".input": {
			width: "100%",
			height: "40px",
			marginBottom: "30px",
			border: "none",
			borderBottom: "1px solid #ddd",
			fontSize: "14px",
			color: "#333"
		},
		".btn": {
			height: "50px",
			backgroundColor: "#e3007f",
			lineHeight: "50px",
			color: "#fff",
			fontSize: "24px",
			textAlign: "center",
			borderRadius: "8px"
		},
		".btn:active": {opacity: "0.8"},
		".third-login": {alignItems: "center", marginTop: "30px"},
		".third-login-desc": {textAlign: "center", fontSize: "14px", color: "#333"},
		".icon-container": {flexDirection: "row", justifyContent: "center"},
		".icon": {
			width: "50px",
			height: "50px",
			margin: "8px",
			borderRadius: "25px",
			backgroundColor: "gray"
		}
	};
	apivm.define("login", Login);
	apivm.render(apivm.h("login", null), "body");
})();
