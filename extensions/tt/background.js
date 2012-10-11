var buttonProperties = {
	title: "TT",
	icon: "img/tt.png",
	popup: {
		href: "popup.html",
		width: 300,
		height: 450
	}
}
var button = opera.contexts.toolbar.createItem(buttonProperties);
opera.contexts.toolbar.addItem(button);



function resizePopup(height) {
	if (height) {
		window.button.popup.height = height;
	}
}