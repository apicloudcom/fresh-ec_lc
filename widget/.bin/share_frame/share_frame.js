(function() {
	var ShareFrame = /*@__PURE__*/ (function(Component) {
		function ShareFrame(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) ShareFrame.__proto__ = Component;
		ShareFrame.prototype = Object.create(Component && Component.prototype);
		ShareFrame.prototype.constructor = ShareFrame;
		ShareFrame.prototype.handleShare = function(name) {
			name &&
				api.toast({
					msg: name
				});

			api.closeFrame({
				name: "sharePage"
			});
		};
		ShareFrame.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "sharepage-main"},
				apivm.h("view", {
					class: "sharepage-section",
					onClick: function() {
						return this$1.handleShare("");
					}
				}),
				apivm.h(
					"view",
					{class: "sharepage-footer"},
					apivm.h(
						"view",
						{
							class: "sharepage-col",
							onClick: function() {
								return this$1.handleShare("微信朋友圈");
							}
						},
						apivm.h("image", {
							class: "sharepage-img",
							src: "../../image/share_timeline.png"
						}),
						apivm.h("text", {class: "share-text"}, "微信朋友圈")
					),
					apivm.h(
						"view",
						{
							class: "sharepage-col",
							onClick: function() {
								return this$1.handleShare("微信好友");
							}
						},
						apivm.h("image", {
							class: "sharepage-img",
							src: "../../image/share_friend.png"
						}),
						apivm.h("text", {class: "share-text"}, "微信好友")
					)
				)
			);
		};

		return ShareFrame;
	})(Component);
	ShareFrame.css = {
		".sharepage-main": {
			zIndex: "999",
			height: "100%",
			width: "100%",
			background: "rgba(0, 0, 0, .8)"
		},
		".sharepage-section": {flex: "1"},
		".sharepage-footer": {
			flexDirection: "row",
			width: "100%",
			height: "130px",
			background: "#fff"
		},
		".sharepage-col": {
			flex: "1",
			justifyContent: "center",
			alignItems: "center",
			height: "100%"
		},
		".sharepage-img": {width: "40px", height: "33px", marginBottom: "8px"},
		".share-text": {fontSize: "14px", color: "#333", fontWeight: "400"}
	};
	apivm.define("share_frame", ShareFrame);
	apivm.render(apivm.h("share_frame", null), "body");
})();
