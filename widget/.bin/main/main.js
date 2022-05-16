(function() {
	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
			this.data = {
				cityName: "选择地区",
				wareTypeList: [
					{
						id: "d34d1470-2bd3-11eb-946e-d192726402e2",
						name: "全部",
						banner:
							"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/165f65aa5d8c3f09a55ab02ba4adf6e2.png"
					},

					{
						id: "56c80da883af652643474b6b",
						name: "水果",
						banner:
							"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/064c7fd3231b97b22a582231042d6a84.png",
						createdAt: "2016-02-20T06:54:32.808Z",
						updatedAt: "2020-06-10T01:59:39.566Z"
					},

					{
						id: "56c80db78d04c83d3d1dedea",
						name: "食材",
						banner:
							"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/ef49d35222390ce909f2b28c64d41cf8.png",
						createdAt: "2016-02-20T06:54:47.996Z",
						updatedAt: "2020-06-10T01:55:49.583Z"
					},

					{
						id: "56c80dc031da9e480de1cb49",
						name: "零食",
						banner:
							"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/c3fa78a5dbb036737b51af3a777aa590.png",
						createdAt: "2016-02-20T06:54:56.243Z",
						updatedAt: "2020-06-10T02:00:10.197Z"
					},

					{
						id: "56c80dc383af652643474b6d",
						name: "牛奶",
						banner:
							"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/7c14ff28b4a15d3a3af2c53356e6435a.png",
						createdAt: "2016-02-20T06:54:59.891Z",
						updatedAt: "2020-06-10T01:59:00.266Z"
					},

					{
						id: "56c80dc88d04c83d3d1dedf3",
						name: "蔬菜",
						banner:
							"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/165f65aa5d8c3f09a55ab02ba4adf6e2.png",
						createdAt: "2016-02-20T06:55:04.285Z",
						updatedAt: "2020-06-10T02:05:58.074Z"
					}
				],

				currentIndex: 0,
				dataList: [],
				bannerUrl: "",
				skip: 0,
				haveMoreData: true,
				refresherTriggered: false,
				wareTypeId: ""
			};
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.apiready = function() {
			var this$1 = this;

			if (api.setStatusBarStyle) {
				api.setStatusBarStyle({
					style: "dark",
					color: "#e1017e"
				});
			}
			api.addEventListener(
				{
					name: "fnSelectCity"
				},
				function(ret) {
					this$1.data.cityName = ret.value.name;
					api.toast({
						msg: "选择城市" + ret.value.name,
						location: "middle"
					});

					api.closeFrame({
						name: "citySelector"
					});
				}
			);
		};
		Main.prototype.fnOpenCitySelectorFrame = function() {
			api.openFrame({
				name: "citySelector",
				url: "../cityselector/cityselector.stml",
				bgColor: "rgba(0, 0, .3, #000)"
			});
		};
		Main.prototype.fnSetNavMenuIndex = function(index, name) {
			console.log(name);
			api.toast({
				msg: "当前点击tab名称为: " + name,
				location: "middle"
			});
		};
		Main.prototype.fnOpenPersonalCenterWin = function() {
			api.openWin({
				name: "personalcenter",
				url: "../personalcenter/personalcenter.stml"
			});
		};
		Main.prototype.onrefresherrefresh = function() {
			api.toast({
				msg: "更新数据!",
				location: "middle"
			});
		};
		Main.prototype.onscrolltolower = function() {
			console.log("滑到底部获取数据!");
		};
		Main.prototype.fnOpenDetailWin = function(id, wareCount) {
			api.openWin({
				name: "ware" + id,
				url: "../ware/ware.stml",
				pageParam: {
					wareId: id,
					wareCount: wareCount
				},

				animation: {
					type: "fade"
				}
			});
		};
		Main.prototype.fnMinus = function(e) {
			api.toast({
				msg: "减少购买数量!",
				location: "middle"
			});
		};
		Main.prototype.fnAdd = function(e) {
			api.toast({
				msg: "增加购买数量!",
				location: "middle"
			});
		};
		Main.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "main"},
				apivm.h(
					"view",
					{class: "header-part"},
					apivm.h(
						"view",
						{class: "header-nav"},
						apivm.h(
							"view",
							{class: "header-left", onClick: this.fnOpenCitySelectorFrame},
							apivm.h("image", {
								class: "header-left-arrow",
								src: "../../image/arrow_down.png"
							}),
							apivm.h("text", {class: "header-left-city", id: "city"}, "北京市")
						),
						apivm.h("text", {class: "header-title"}, "生鲜电商"),
						apivm.h(
							"view",
							{
								class: "header-right",
								onclick: function(event) {
									if (this$1.fnOpenPersonalCenterWin) {
										this$1.fnOpenPersonalCenterWin();
									} else {
										fnOpenPersonalCenterWin();
									}
								}
							},
							apivm.h("image", {
								class: "header-right-icon",
								src: "../../image/home_membercenter.png"
							})
						)
					)
				),
				apivm.h(
					"view",
					{class: "nav"},
					apivm.h(
						"text",
						{
							class: "nav-menu nav-menu-selected",
							onClick: function() {
								return this$1.fnSetNavMenuIndex(0, "全部");
							}
						},
						"全部"
					),
					apivm.h(
						"text",
						{
							class: "nav-menu",
							onClick: function() {
								return this$1.fnSetNavMenuIndex(1, "水果");
							}
						},
						"水果"
					),
					apivm.h(
						"text",
						{
							class: "nav-menu",
							onClick: function() {
								return this$1.fnSetNavMenuIndex(2, "食材");
							}
						},
						"食材"
					),
					apivm.h(
						"text",
						{
							class: "nav-menu",
							onClick: function() {
								return this$1.fnSetNavMenuIndex(3, "零食");
							}
						},
						"零食"
					),
					apivm.h(
						"text",
						{
							class: "nav-menu",
							onClick: function() {
								return this$1.fnSetNavMenuIndex(4, "牛奶");
							}
						},
						"牛奶"
					),
					apivm.h(
						"text",
						{
							class: "nav-menu",
							onClick: function() {
								return this$1.fnSetNavMenuIndex(5, "蔬菜");
							}
						},
						"蔬菜"
					)
				),
				apivm.h(
					"scroll-view",
					{
						"scroll-y": "true",
						class: "warelist",
						"enable-back-to-top": true,
						"refresher-triggered": false,
						onrefresherrefresh: this.onrefresherrefresh,
						onscrolltolower: this.onscrolltolower
					},
					apivm.h(
						"view",
						{class: "header"},
						apivm.h("img", {
							class: "banner",
							src:
								"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/165f65aa5d8c3f09a55ab02ba4adf6e2.png",
							placeholder: "../../image/default_rect.png",
							thumbnail: "false"
						})
					),
					apivm.h(
						"view",
						null,
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76caf", 1);
									}
								},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/116d90e46e369dbffd0198026efe35ab.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "佳沛绿奇异果 4个"),
									apivm.h(
										"text",
										{class: "info-description"},
										"享受清爽汁水融进齿间感觉"
									),
									apivm.h("text", {class: "info-price"}, "￥18.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥25.8")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("img", {
										class: "minus",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "count"}, "1"),
									apivm.h("img", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						),
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76cb0", 0);
									}
								},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/f568314a65b1d23ae06257e953501af9.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "泰国龙眼 2斤"),
									apivm.h("text", {class: "info-description"}, "肉肉的 甜甜的"),
									apivm.h("text", {class: "info-price"}, "￥29.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥39.9")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("image", {
										class: "none",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "none"}, "0"),
									apivm.h("image", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						),
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76cb1", 0);
									}
								},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/5bfeda41003fba5faad8c58f413ac900.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "四川丑柑 2斤"),
									apivm.h(
										"text",
										{class: "info-description"},
										"丑丑的外表埋藏120%超甜内心"
									),
									apivm.h("text", {class: "info-price"}, "￥24.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥28.9")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("image", {
										class: "none",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "none"}, "0"),
									apivm.h("image", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						),
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76cb2", 0);
									}
								},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/ff88121030b3a32f7060c9d82c1e00ed.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "赣南脐橙 4个"),
									apivm.h("text", {class: "info-description"}, "原产地 不催熟 不打蜡"),
									apivm.h("text", {class: "info-price"}, "￥16.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥24.9")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("image", {
										class: "none",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "none"}, "0"),
									apivm.h("image", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						),
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76cb3", 0);
									}
								},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/913dbcb4879dba48f9b861e2ce1d9514.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "新疆库尔勒香梨 10个"),
									apivm.h(
										"text",
										{class: "info-description"},
										"老板只让采孔雀河核心产区的"
									),
									apivm.h("text", {class: "info-price"}, "￥19.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥25.9")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("image", {
										class: "none",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "none"}, "0"),
									apivm.h("image", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						),
						apivm.h(
							"view",
							{class: "cell"},
							apivm.h(
								"view",
								{
									class: "container",
									onClick: function() {
										return this$1.fnOpenDetailWin("56c94a0426f863e874c76cb4", 0);
									}
								},
								apivm.h("img", {
									class: "thumbnail",
									src:
										"http://a8f7e260bce0114731a0.qiniucdn.apicloud-system.com/apicloud/fc611dfaa27138e09f691d5287d9da15.jpg",
									placeholder: "../../image/default_square.png"
								}),
								apivm.h(
									"view",
									{class: "info"},
									apivm.h("text", {class: "info-name"}, "【2袋】恒都澳洲牛腩块 400g"),
									apivm.h("text", {class: "info-description"}, "切好成块儿的方便牛腩肉"),
									apivm.h("text", {class: "info-price"}, "￥49.9"),
									apivm.h("text", {class: "info-origin-price"}, "￥65.9")
								),
								apivm.h(
									"view",
									{class: "control"},
									apivm.h("image", {
										class: "none",
										src: "../../image/minus.png",
										onClick: this.fnMinus
									}),
									apivm.h("text", {class: "none"}, "0"),
									apivm.h("image", {
										class: "add",
										src: "../../image/add.png",
										onClick: this.fnAdd
									})
								)
							)
						)
					),
					apivm.h(
						"view",
						{class: "footer"},
						apivm.h("text", {class: "loadDesc"}, "没有啦！")
					)
				),
				apivm.h("view", {class: "minicart"}, apivm.h("minicart", null))
			);
		};

		return Main;
	})(Component);
	Main.css = {
		".main": {height: "100%"},
		".header-part": {backgroundColor: "#e1017e"},
		".header-nav": {
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "50px"
		},
		".header-left": {
			flexDirection: "row",
			alignItems: "center",
			position: "absolute",
			left: "10px",
			width: "100px",
			height: "100%"
		},
		".header-left:active": {opacity: "0.8"},
		".header-left-arrow": {
			width: "13px",
			height: "8px",
			transitionProperty: "transform",
			transitionDuration: "200ms",
			transform: "rotate(0)",
			marginRight: "4px"
		},
		".header-left-arrow-active": {transform: "rotate(180deg)"},
		".header-left-city": {fontSize: "14px", color: "#fff"},
		".header-title": {color: "white", fontSize: "18px"},
		".header-right": {
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			bottom: "0",
			right: "0",
			width: "40px",
			height: "100%"
		},
		".header-right:active": {opacity: "0.8"},
		".header-right-icon": {width: "30px", height: "30px"},
		".nav": {
			width: "100%",
			height: "40px",
			backgroundColor: "#e1017e",
			whiteSpace: "nowrap",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around"
		},
		".nav-menu": {
			display: "inline-block",
			height: "40px",
			lineHeight: "40px",
			fontSize: "13px",
			color: "#f973b8"
		},
		".nav-menu-selected": {color: "#fff", fontWeight: "bolder"},
		".warelist": {
			width: "100%",
			flex: "1",
			overflowY: "scroll",
			overflowX: "hidden"
		},
		".header": {
			width: "100%",
			padding: "4px 8px",
			boxSizing: "border-box",
			backgroundColor: "white"
		},
		".banner": {width: "100%"},
		".cell": {height: "130px", padding: "0 8px"},
		".container": {
			flexDirection: "row",
			alignItems: "center",
			width: "100%",
			height: "100%",
			borderBottom: "0.5px solid #d1d1d1"
		},
		".container:active": {backgroundColor: "#f8f8f8"},
		".thumbnail": {width: "100px", height: "100px"},
		".info": {
			flex: "1",
			height: "100px",
			paddingLeft: "8px",
			justifyContent: "center"
		},
		".info-name": {fontSize: "16px", color: "#000", fontWeight: "500"},
		".info-description": {fontSize: "14px", color: "gray"},
		".info-price": {fontSize: "14px", color: "#e3007f"},
		".info-origin-price": {
			fontSize: "11px",
			color: "#c0c0c0",
			textDecoration: "line-through"
		},
		".control": {
			flexDirection: "row",
			position: "absolute",
			right: "0",
			bottom: "20px"
		},
		".minus,\n.add": {display: "flex", width: "25px", height: "25px"},
		".minus:active": {opacity: "0.7"},
		".add:active": {opacity: "0.7"},
		".none": {display: "none"},
		".count": {
			display: "block",
			width: "40px",
			height: "24px",
			lineHeight: "24px",
			margin: "0 5px",
			color: "#444",
			fontSize: "14px",
			textAlign: "center",
			borderRadius: "12px",
			border: "1px solid #ddd",
			backgroundColor: "#fff"
		},
		".footer": {height: "44px", justifyContent: "center", alignItems: "center"},
		".loadDesc": {
			width: "200px",
			lineHeight: "44px",
			textAlign: "center",
			fontSize: "14px",
			color: "#999"
		},
		".minicart": {position: "absolute", bottom: "110px"},
		".cityselect": {position: "absolute", width: "100%", height: "100%"}
	};
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();
