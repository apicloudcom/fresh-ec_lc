(function() {
	var citys = [
		{
			name: "北京市",
			sub: [
				{
					name: "东城区"
				},
				{
					name: "西城区"
				},
				{
					name: "海淀区"
				},
				{
					name: "朝阳区"
				},
				{
					name: "丰台区"
				},
				{
					name: "石景山区"
				},
				{
					name: "昌平区"
				},
				{
					name: "通州区"
				}
			]
		},

		{
			name: "河南省",
			sub: [
				{
					name: "郑州市",
					sub: [
						{
							name: "中原区"
						},
						{
							name: "金水区"
						}
					]
				},

				{
					name: "驻马店市",
					sub: [
						{
							name: "西平县"
						},
						{
							name: "泌阳县"
						}
					]
				}
			]
		}
	];

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

	var Setaddress = /*@__PURE__*/ (function(Component) {
		function Setaddress(props) {
			Component.call(this, props);
			this.data = {
				id: "",
				isDefault: 0,
				region: "",
				type: 0,
				addresstype: ["公司", "住宅", "学校", "其他"],
				selectValue: [0, 0, 0],
				dataList: []
			};
		}

		if (Component) Setaddress.__proto__ = Component;
		Setaddress.prototype = Object.create(Component && Component.prototype);
		Setaddress.prototype.constructor = Setaddress;
		Setaddress.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Setaddress.prototype.apiready = function() {
			var pageParam = api.pageParam;
			if (pageParam.id) {
				this.data.id = pageParam.id;
			}
			if (pageParam.isDefault) {
				this.data.isDefault = pageParam.isDefault;
			}
			if (pageParam.name) {
				$kn.byId("name").value = pageParam.name;
			}
			if (pageParam.mobile) {
				$kn.byId("mobile").value = pageParam.mobile;
			}
			if (pageParam.region) {
				this.data.region = pageParam.region;
			}
			if (pageParam.address) {
				$kn.byId("address").value = pageParam.address;
			}
			if (pageParam.house) {
				$kn.byId("house").value = pageParam.house;
			}
			if (pageParam.type) {
				this.data.type = pageParam.type;
			}
			if (citys && citys.length > 0) {
				this.cityList = citys;
				this.initDataList([0, 0, 0]);
			}
			/*
        var that = this;
        api.readFile({
        	path: '../../res/city.json'
        }, function(ret,err) {
        	if (ret && ret.status) {
        		var cityList = JSON.parse(ret.data);
        		if (cityList.length > 0) {
        			that.cityList = cityList;
        			that.initDataList([0,0,0]);
        		}
        	}
        });
        */
		};
		Setaddress.prototype.initDataList = function(values) {
			var component0 = [];
			for (var i = 0; i < this.cityList.length; i++) {
				component0[i] = this.cityList[i];
			}
			var component1 = component0[values[0]]["sub"];
			var component2 = component1[values[1]]["sub"];
			var dataList = [component0, component1];
			if (component2) {
				dataList[2] = component2;
			} else {
				dataList[2] = [];
			}
			this.data.dataList = dataList;
			// var picker = document.getElementById('picker');
			// picker.setData({
			//     data: dataList
			// });
		};
		Setaddress.prototype.onselectchange = function(e) {
			var value = e.detail.value;
			this.data.selectValue = value;
			var region = "";
			for (var i = 0; i < value.length; i++) {
				var index = value[i];
				var list = this.data.dataList[i];
				if (list.length > index) {
					region += list[index].name;
				}
			}
			this.data.region = region;
		};
		Setaddress.prototype.onselectcolumnchange = function(e) {
			var column = e.detail.column;
			if (column == this.data.dataList.length - 1) {
				return;
			}
			var value = e.detail.value;
			var selectValue = this.data.selectValue;
			selectValue[column] = value;
			if (column == 0) {
				selectValue[1] = 0;
				selectValue[2] = 0;
			} else if (column == 1) {
				selectValue[2] = 0;
			}
			this.initDataList(selectValue);
		};
		Setaddress.prototype.fnSelectAddressType = function(type) {
			this.data.type = type;
		};
		Setaddress.prototype.showToast = function(msg) {
			api.toast({
				msg: msg
			});
		};
		Setaddress.prototype.onRightButton = function() {
			api.confirm(
				{
					title: "提示",
					msg: "删除收货地址",
					buttons: ["确定", "取消"]
				},
				function(ret, err) {
					if (1 == ret.buttonIndex) {
						$kn.ajax(
							{
								url: "addresses/deleteAddress",
								method: "post",
								data: {
									body: {
										id: api.pageParam.id
									}
								}
							},

							function(ret, err) {
								if (ret && ret.data) {
									api.sendEvent({
										name: "updateAddress"
									});

									api.closeWin();
								} else {
									api.toast({
										msg: "删除失败"
									});
								}
							}
						);
					}
				}
			);
		};
		Setaddress.prototype.fnSave = function() {
			var name = $kn.byId("name").value;
			if (!name) {
				this.showToast("请输入收货人姓名");
				return;
			}

			var mobile = $kn.byId("mobile").value;
			if (!mobile) {
				this.showToast("请输入收货人电话号码");
				return;
			}

			var area = $kn.byId("area").value;
			if (!area) {
				this.showToast("请输入所在区域");
				return;
			}

			var address = $kn.byId("address").value;
			if (!address) {
				this.showToast("请输入具体地址");
				return;
			}

			var house = $kn.byId("house").value;
			if (!house) {
				this.showToast("请输入门牌楼号");
				return;
			}
			api.toast({
				msg: "保存地址！"
			});
		};
		Setaddress.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "收货地址"),
					apivm.h("view", null)
				),
				apivm.h(
					"scroll-view",
					{class: "scrollView", "scroll-y": "true"},
					apivm.h(
						"view",
						{class: "wrap"},
						apivm.h(
							"view",
							{class: "item"},
							apivm.h(
								"label",
								{class: "label"},
								apivm.h("img", {
									src: "../../image/select_on.png",
									alt: "",
									class: "checkbox-icon"
								}),
								apivm.h("text", {class: "text"}, "设为默认地址")
							)
						),
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("text", {class: "text"}, "收货人："),
							apivm.h("input", {id: "name", class: "input", placeholder: "收货人姓名"})
						),
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("text", {class: "text"}, "手机号码："),
							apivm.h("input", {
								id: "mobile",
								class: "input",
								placeholder: "收货人手机号码"
							})
						),
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("text", {class: "text"}, "所在区域："),
							apivm.h("input", {
								id: "area",
								class: "input",
								placeholder: "收货人所在区域"
							})
						),
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("text", {class: "text"}, "具体地址："),
							apivm.h("input", {
								id: "address",
								class: "input",
								placeholder: "收货人具体地址"
							})
						),
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("text", {class: "text"}, "楼号门牌："),
							apivm.h("input", {
								id: "house",
								class: "input",
								placeholder: "收货人楼号门牌（例A座3单元1号）"
							})
						),
						apivm.h(
							"view",
							{class: "item"},
							apivm.h("text", {class: "text"}, "地址类型："),
							apivm.h(
								"view",
								{class: "typeScrollView"},
								apivm.h(
									"text",
									{
										class: "type type-selected",
										onClick: function() {
											return this$1.fnSelectAddressType("公司");
										}
									},
									"公司"
								),
								apivm.h(
									"text",
									{
										class: "type",
										onClick: function() {
											return this$1.fnSelectAddressType("住宅");
										}
									},
									"住宅"
								),
								apivm.h(
									"text",
									{
										class: "type",
										onClick: function() {
											return this$1.fnSelectAddressType("学校");
										}
									},
									"学校"
								),
								apivm.h(
									"text",
									{
										class: "type",
										onClick: function() {
											return this$1.fnSelectAddressType("其他");
										}
									},
									"其他"
								)
							)
						),
						apivm.h("text", {class: "saveBtn", onClick: this.fnSave}, "保存")
					)
				)
			);
		};

		return Setaddress;
	})(Component);
	Setaddress.css = {
		".main": {height: "100%", backgroundColor: "#eee"},
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
		".checkbox-icon": {width: "20px", height: "20px", marginRight: "6px"},
		".scrollView": {flex: "1"},
		".item": {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			height: "50px",
			padding: "0 10px",
			borderBottom: "1px solid #eee",
			backgroundColor: "#fff"
		},
		".label": {flexDirection: "row", alignItems: "center"},
		".text": {fontSize: "14px", color: "#000"},
		".input": {flex: "1", border: "none", fontSize: "14px", color: "#333"},
		".select": {paddingRight: "12px"},
		".select:active": {opacity: "0.7"},
		".right-arrow": {width: "6px", height: "11px", marginRight: "10px"},
		".typeScrollView": {
			flexDirection: "row",
			alignItems: "center",
			flex: "1",
			height: "32px",
			overflow: "scroll"
		},
		".type": {
			height: "28px",
			width: "50px",
			marginRight: "10px",
			fontSize: "12px",
			textAlign: "center",
			lineHeight: "28px",
			borderRadius: "4px",
			color: "#888",
			border: "1px solid #888"
		},
		".type-selected": {color: "#e3007f", border: "1px solid #e3007f"},
		".saveBtn": {
			display: "block",
			width: "200px",
			height: "44px",
			marginTop: "10px",
			backgroundColor: "#e3007f",
			borderRadius: "22px",
			textAlign: "center",
			fontSize: "18px",
			color: "#fff",
			lineHeight: "44px",
			marginLeft: "50%",
			transform: "translateX(-50%)"
		},
		".saveBtn:active": {opacity: "0.7"}
	};
	apivm.define("setaddress", Setaddress);
	apivm.render(apivm.h("setaddress", null), "body");
})();
