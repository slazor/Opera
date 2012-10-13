var buttonProperties = {
	title: "TT",
	icon: "img/tt-button.png",
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