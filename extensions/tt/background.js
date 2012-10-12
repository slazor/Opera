var buttonProperties = {
	title: "TT",
	icon: "img/tt.png",
	popup: {
		href: "popup.html",
		width: 300,
		height: 100
	}
}
var button	= opera.contexts.toolbar.createItem(buttonProperties);
var api		= new APIClass('http://railgun.no-ip.info/scraperfront/');
var tt			= new TT();

opera.contexts.toolbar.addItem(button);

function TT() {

	this.resizePopup = function (height) {
		if (height) {
			window.button.popup.height = height;
		}
	}

	this.userLogin = function (data) {
		return api.apiCall('POST', 'User/Login', data);
	}

}