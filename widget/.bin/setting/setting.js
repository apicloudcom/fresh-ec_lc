(function() {
	/*
	 * APICloud JavaScript Library
	 * Copyright (c) 2014 apicloud.com
	 */
	var $kn = {
		byId: function byId(id) {
			return document.getElementById(id);
		},
		ajax: function ajax(p, callback) {
			var _this = this;
			var param = p;
			if (!param.headers) {
				param.headers = {};
			}
			param.headers["x-apicloud-mcm-key"] = "cZKzX7DabDmYyfez";
			if (param.data && param.data.body) {
				param.headers["Content-Type"] = "application/json; charset=utf-8";
			}
			if (param.url) {
				var baseUrl = "https://a8888888888888-pd.apicloud-saas.com/api/";
				param.url = baseUrl + param.url;
			}
			api.ajax(param, function(ret, err) {
				if (callback) callback(ret, err);
				if (ret) {
					var status = ret.status;
					if (status && status == 4001) {
						var didShowLogoutAlert = api.getGlobalData({
							key: "didShowLogoutAlert"
						});

						if (!didShowLogoutAlert) {
							api.setGlobalData({
								key: "didShowLogoutAlert",
								value: true
							});

							_this.setUserInfo("");
							api.alert(
								{
									msg: "登录已失效，请重新登录"
								},
								function() {
									api.setGlobalData({
										key: "didShowLogoutAlert",
										value: false
									});

									api.closeToWin({
										name: "root"
									});
								}
							);
						}
					}
				}
			});
		},
		getUserInfo: function getUserInfo() {
			var value = api.getPrefs({
				key: "userInfo",
				sync: true
			});

			return value ? JSON.parse(value) : "";
		},
		setUserInfo: function setUserInfo(userInfo) {
			api.setPrefs({
				key: "userInfo",
				value: userInfo
			});
		},
		getCurrentCityInfo: function getCurrentCityInfo() {
			var value = api.getPrefs({
				key: "currentCity",
				sync: true
			});

			return value ? JSON.parse(value) : "";
		},
		setCurrentCityInfo: function setCurrentCityInfo(cityInfo) {
			api.setPrefs({
				key: "currentCity",
				value: cityInfo
			});
		},
		getWareTypeList: function getWareTypeList() {
			var value = api.readFile({
				sync: true,
				path: "fs://WareTypeList"
			});

			return value ? JSON.parse(value) : "";
		},
		setWareTypeList: function setWareTypeList(list) {
			api.writeFile({
				path: "fs://WareTypeList",
				data: JSON.stringify(list)
			});
		},
		fitRichText: function fitRichText(richtext, width) {
			var str = '<img style="max-width:' + width + 'px;"';
			var result = richtext.replace(/\<img/gi, str);
			return result;
		}
	};

	var Setting = /*@__PURE__*/ (function(Component) {
		function Setting(props) {
			Component.call(this, props);
			this.data = {
				dataList: [
					{
						title: "清除缓存",
						desc: "0M"
					},
					{
						title: "关于",
						name: "about"
					}
				]
			};
		}

		if (Component) Setting.__proto__ = Component;
		Setting.prototype = Object.create(Component && Component.prototype);
		Setting.prototype.constructor = Setting;
		Setting.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Setting.prototype.apiready = function() {
			var that = this;
			api.getCacheSize(function(ret) {
				var size = ret.size;
				if (size > 1024 * 100) {
					that.data.dataList[0].desc = (size / 1024 / 1024).toFixed(1) + "M";
				}
			});
		};
		Setting.prototype.fnItemAction = function(title) {
			if (title == "清除缓存") {
				api.clearCache(function() {
					api.toast({
						msg: "缓存清除完毕"
					});
				});
			} else {
				api.openWin({
					name: title,
					url: "../" + title + "/" + title + ".stml"
				});
			}
		};
		Setting.prototype.fnLogout = function() {
			api.confirm(
				{
					title: "提示",
					msg: "是否退出登录",
					buttons: ["确定", "取消"]
				},
				function(ret, err) {
					if (1 == ret.buttonIndex) {
						$kn.ajax(
							{
								url: "users/logout",
								method: "post"
							},
							function() {
								$kn.setUserInfo("");
								api.sendEvent({
									name: "onLogout"
								});

								api.closeToWin({
									name: "root"
								});
							}
						);
					}
				}
			);
		};
		Setting.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "设置"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{
						class: "item",
						onClick: function() {
							return this$1.fnItemAction("清除缓存");
						}
					},
					apivm.h(
						"view",
						{class: "item-left"},
						apivm.h("text", {class: "item-title"}, "清除缓存")
					),
					apivm.h(
						"view",
						{class: "item-right"},
						apivm.h("text", {class: "item-desc"}, "0M"),
						apivm.h("image", {
							class: "item-arrow",
							src: "../../image/arrow_right.png"
						})
					)
				),
				apivm.h(
					"view",
					{
						class: "item",
						onClick: function() {
							return this$1.fnItemAction("about");
						}
					},
					apivm.h(
						"view",
						{class: "item-left"},
						apivm.h("text", {class: "item-title"}, "关于")
					),
					apivm.h(
						"view",
						{class: "item-right"},
						apivm.h("text", {class: "item-desc"}),
						apivm.h("image", {
							class: "item-arrow",
							src: "../../image/arrow_right.png"
						})
					)
				),
				apivm.h(
					"text",
					{
						class: "button",
						onclick: function(event) {
							if (this$1.fnLogout) {
								this$1.fnLogout();
							} else {
								fnLogout();
							}
						}
					},
					"退出登录"
				)
			);
		};

		return Setting;
	})(Component);
	Setting.css = {
		".main": {height: "100%"},
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
		".item": {
			padding: "0 10px",
			width: "100%",
			height: "50px",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			borderBottom: "0.5px solid #ddd"
		},
		".item:active": {opacity: "0.7"},
		".item-left": {flexDirection: "row"},
		".item-right": {flexDirection: "row"},
		".item-title": {marginLeft: "10px", fontSize: "14px", color: "#000"},
		".item-desc": {marginRight: "5px", fontSize: "13px", color: "#888"},
		".item-arrow": {width: "9px", height: "14px"},
		".button": {
			height: "50px",
			margin: "20px 32px",
			backgroundColor: "#e3007f",
			lineHeight: "50px",
			color: "#fff",
			fontSize: "20px",
			textAlign: "center",
			borderRadius: "8px"
		},
		".button:active": {opacity: "0.7"}
	};
	apivm.define("setting", Setting);
	apivm.render(apivm.h("setting", null), "body");
})();
