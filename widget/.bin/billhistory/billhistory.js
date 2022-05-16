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
	apivm.render(apivm.h("billhistory", null), "body");
})();
