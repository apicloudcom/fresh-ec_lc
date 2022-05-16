(function() {
	var MainFrame = /*@__PURE__*/ (function(Component) {
		function MainFrame(props) {
			Component.call(this, props);
			this.data = {
				bannerUrl: "",
				skip: 0,
				LIMIT: 10,
				haveMoreData: true,
				refreshState: "normal"
			};
		}

		if (Component) MainFrame.__proto__ = Component;
		MainFrame.prototype = Object.create(Component && Component.prototype);
		MainFrame.prototype.constructor = MainFrame;
		MainFrame.prototype.fnOpenDetailWin = function(id, wareCount) {
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
		MainFrame.prototype.fnMinus = function() {
			api.toast({
				msg: "减少数量",
				location: "middle"
			});
		};
		MainFrame.prototype.fnAdd = function() {
			api.toast({
				msg: "增加数量",
				location: "middle"
			});
		};
		MainFrame.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "main", "scroll-y": true, "show-scrollbar": false},
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
							apivm.h("text", {class: "info-description"}, "享受清爽汁水融进齿间感觉"),
							apivm.h("text", {class: "info-price"}, "￥18.9"),
							apivm.h("text", {class: "info-origin-price"}, "￥25.8")
						),
						apivm.h(
							"view",
							{class: "control"},
							apivm.h("img", {
								class: "minus",
								"data-index": 0,
								src: "../../image/minus.png",
								onClick: this.fnMinus
							}),
							apivm.h("text", {class: "count"}, "1"),
							apivm.h("img", {
								class: "add",
								"data-index": 0,
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
							apivm.h("img", {
								class: "none",
								"data-index": 1,
								src: "../../image/minus.png",
								onClick: this.fnMinus
							}),
							apivm.h("text", {class: "none"}, "0"),
							apivm.h("img", {
								class: "add",
								"data-index": 1,
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
							apivm.h("img", {
								class: "none",
								"data-index": 2,
								src: "../../image/minus.png",
								onClick: this.fnMinus
							}),
							apivm.h("text", {class: "none"}, "0"),
							apivm.h("img", {
								class: "add",
								"data-index": 2,
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
							apivm.h("img", {
								class: "none",
								"data-index": 3,
								src: "../../image/minus.png",
								onClick: this.fnMinus
							}),
							apivm.h("text", {class: "none"}, "0"),
							apivm.h("img", {
								class: "add",
								"data-index": 3,
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
							apivm.h("img", {
								class: "none",
								"data-index": 4,
								src: "../../image/minus.png",
								onClick: this.fnMinus
							}),
							apivm.h("text", {class: "none"}, "0"),
							apivm.h("img", {
								class: "add",
								"data-index": 4,
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
							apivm.h("text", {class: "info-description"}, "肉肉的 甜甜的"),
							apivm.h("text", {class: "info-price"}, "￥49.9"),
							apivm.h("text", {class: "info-origin-price"}, "￥65.9")
						),
						apivm.h(
							"view",
							{class: "control"},
							apivm.h("img", {
								class: "none",
								"data-index": 5,
								src: "../../image/minus.png",
								onClick: this.fnMinus
							}),
							apivm.h("text", {class: "none"}, "0"),
							apivm.h("img", {
								class: "add",
								"data-index": 5,
								src: "../../image/add.png",
								onClick: this.fnAdd
							})
						)
					)
				),
				apivm.h(
					"view",
					{class: "footer"},
					apivm.h("text", {class: "loadDesc"}, "没有啦！")
				)
			);
		};

		return MainFrame;
	})(Component);
	MainFrame.css = {
		".refresh": {alignItems: "center", justifyContent: "center"},
		".refreshStateDesc": {color: "#e3007f", fontSize: "13px", lineHeight: "40px"},
		".refreshIcon-normal": {
			position: "absolute",
			width: "25px",
			height: "22px",
			bottom: "21px",
			left: "70px",
			transitionProperty: "transform",
			transitionDuration: "100ms",
			transform: "rotate(0)",
			visibility: "visible"
		},
		".refreshIcon-dragging": {transform: "rotate(180deg)"},
		".refreshIcon-refreshing": {visibility: "hidden"},
		".refreshLoading": {
			position: "absolute",
			width: "22px",
			height: "22px",
			bottom: "21px",
			left: "70px",
			visibility: "hidden"
		},
		".refreshLoading-refreshing": {visibility: "visible"},
		".main": {height: "100%", width: "100%"},
		".header": {width: "100%", padding: "4px 8px"},
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
			width: "100%",
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
		".minus, .add": {display: "flex", width: "25px", height: "25px"},
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
			fontSize: "14px",
			color: "#999",
			width: "200px",
			textAlign: "center"
		}
	};
	apivm.define("main_frame", MainFrame);
	apivm.render(apivm.h("main_frame", null), "body");
})();
