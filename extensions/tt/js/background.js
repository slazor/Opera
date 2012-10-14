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

window.addEventListener("load", function() {	
	// Init auto-update
	opera.postError('TT: Auto-update started!');
	update();
}, false);

// Auto-Update function
function update() {
	opera.postError('TT: Lists updated!');
	
	// Re-run update function every "updateInvervall" minutes
	window.setTimeout(update, widget.preferences.updateIntervall * 60000);
}