(function() {
	var Myorderframe = /*@__PURE__*/ (function(Component) {
		function Myorderframe(props) {
			Component.call(this, props);
			this.data = {
				haveData: false
			};
		}

		if (Component) Myorderframe.__proto__ = Component;
		Myorderframe.prototype = Object.create(Component && Component.prototype);
		Myorderframe.prototype.constructor = Myorderframe;
		Myorderframe.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "myorderframe-main"},
				apivm.h(
					"view",
					{class: "myorderframe-empty"},
					apivm.h("img", {class: "empty-img", src: "../../image/myorder_empty.png"})
				)
			);
		};

		return Myorderframe;
	})(Component);
	Myorderframe.css = {
		".myorderframe-main": {
			width: "100%",
			height: "100%",
			backgroundColor: "#fff"
		},
		".myorderframe-list": {width: "100%", height: "100%"},
		".myorderframe-empty": {alignItems: "center", width: "100%", height: "100%"},
		".empty-img": {width: "118px", height: "87px", marginTop: "50px"}
	};
	apivm.define("myorderframe", Myorderframe);
	apivm.render(apivm.h("myorderframe", null), "body");
})();
