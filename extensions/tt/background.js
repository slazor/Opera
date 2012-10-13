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
//var api		= new APIClass('http://railgun.no-ip.info/scraperfront/');
var api		= new APIClass('http://localhost/api.php/');
var tt			= new TT();

opera.contexts.toolbar.addItem(button);

function TT() {

	this.resizePopup = function(height) {
		if (height) {
			window.button.popup.height = height;
		}
	}

	this.userLogin = function(data) {
		var call = api.apiCall('POST', 'User/Login/', data);
		if(call.token) {
			return call.token;
		} else {
			console.log(call);
			return call;
		}
		
	}
	
	this.userGetInfo = function(token) {
		return api.apiCall('GET', 'User/', token);
	}
	
	this.makeString = function(arr) {
		var string = '';
		for(var i in arr) {
			string = string + i + '=' + arr[i];
		}
		return string;
	}

}