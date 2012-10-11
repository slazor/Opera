jQuery(document).ready(function($) {
	if(widget.preferences.name != undefined) {
		alert(widget.preferences.name);
	}
	$('#save').click(function() {
		widget.preferences.name = "Hello";
	});
});