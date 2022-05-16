(function() {
	var Address = /*@__PURE__*/ (function(Component) {
		function Address(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Address.__proto__ = Component;
		Address.prototype = Object.create(Component && Component.prototype);
		Address.prototype.constructor = Address;
		Address.prototype.onLeftButton = function() {
			api.closeWin();
		};
		Address.prototype.onRightButton = function() {
			this.openSetAddressWin();
		};
		Address.prototype.openSetAddressWin = function() {
			api.openWin({
				name: "setaddress",
				url: "../setaddress/setaddress.stml"
			});
		};
		Address.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "收货地址"),
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-right-button",
							onClick: this.onRightButton
						},
						apivm.h("text", {class: "nav-header-text"}, "添加")
					)
				),
				apivm.h(
					"view",
					{class: "content"},
					apivm.h(
						"view",
						{id: "empty", class: "empty"},
						apivm.h("image", {
							class: "empty-icon",
							src: "../../image/address_empty.png"
						})
					)
				)
			);
		};

		return Address;
	})(Component);
	Address.css = {
		".main": {width: "100%", height: "100%"},
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
		".content": {flex: "1"},
		".empty": {alignItems: "center", flex: "1", width: "100%"},
		".empty-icon": {width: "102px", height: "93px", marginTop: "50px"},
		".listView": {width: "100%", height: "100%", backgroundColor: "#eee"},
		".cell": {
			flexDirection: "row",
			alignItems: "center",
			height: "75px",
			backgroundColor: "#fff",
			borderBottom: "1px solid #eee"
		},
		".cell:active": {backgroundColor: "#eee"},
		".left": {alignItems: "center", justifyContent: "center", width: "50px"},
		".icon": {width: "19px", height: "24px"},
		".defaultDesc": {color: "#444", fontSize: "12px"},
		".middle": {flex: "1", justifyContent: "space-around"},
		".middle-top": {color: "#444", fontSize: "14px"},
		".middle-bottom": {flexDirection: "row", marginTop: "10px"},
		".typeDesc": {color: "#e3007f", fontWeight: "bold", fontSize: "13px"},
		".address": {color: "#444", fontSize: "13px"},
		".right": {width: "8px", height: "16px", marginRight: "16px"}
	};
	apivm.define("address", Address);
	apivm.render(apivm.h("address", null), "body");
})();
