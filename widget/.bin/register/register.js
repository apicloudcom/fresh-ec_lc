(function() {
	var Register = /*@__PURE__*/ (function(Component) {
		function Register(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Register.__proto__ = Component;
		Register.prototype = Object.create(Component && Component.prototype);
		Register.prototype.constructor = Register;
		Register.prototype.apiready = function() {
			document.getElementById("username").focus();
		};
		Register.prototype.fnRegister = function() {
			var usernameValue = document.getElementById("username").value;
			var passwordValue = document.getElementById("password").value;
			var confirmpasswordValue = document.getElementById("confirmpassword").value;
			if (!usernameValue) {
				this.toast("请输入用户名");
				return;
			}
			if (!passwordValue) {
				this.toast("请输入密码");
				return;
			}
			if (passwordValue.length < 6 || passwordValue.length > 12) {
				this.toast("密码格式不正确");
				return;
			}
			if (!confirmpasswordValue) {
				this.toast("请输入确认密码");
				return;
			}
			if (passwordValue != confirmpasswordValue) {
				this.toast("两次输入密码不一致");
				return;
			}
			this.toast("注册");
		};
		Register.prototype.toast = function(msg) {
			api.toast({
				msg: msg,
				location: "middle",
				global: true
			});
		};
		Register.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Register.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "会员注册"),
					apivm.h("view", null)
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
							placeholder: "6~12位密码"
						}),
						apivm.h("input", {
							id: "confirmpassword",
							class: "input",
							type: "password",
							placeholder: "确认密码"
						}),
						apivm.h("text", {class: "btn", onClick: this.fnRegister}, "注册")
					)
				)
			);
		};

		return Register;
	})(Component);
	Register.css = {
		".main": {width: "100%", height: "100%"},
		".scrollView": {flex: "1"},
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
		".btn:active": {opacity: "0.8"}
	};
	apivm.define("register", Register);
	apivm.render(apivm.h("register", null), "body");
})();
