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
//var api	= new APIClass('http://railgun.no-ip.info/scraperfront/');
//var api		= new APIClass('http://localhost/api.php/v1/');
var api		= new APIClass('http://www.project-railgun.dev/api/v1/');
var tt		= new TT();

opera.contexts.toolbar.addItem(button);

window.addEventListener("load", function() {	
	// Init auto-update
	console.info('TT: Auto-update started!');
	widget.preferences.updateIntervall = 15;
	update();
}, false);

// Auto-Update function
function update() {
	console.info('TT: Lists updated!');
	tt.getLists();
	// Re-run update function every "updateInvervall" minutes
	window.setTimeout(update, widget.preferences.updateIntervall * 60000);
}