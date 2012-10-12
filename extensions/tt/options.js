jQuery(function($) {
	var bg = opera.extension.bgProcess;
	var tt = bg.tt;
	
	if(widget.preferences.name != undefined) {
		//alert(widget.preferences.name);
	}
	
	$('#login').click(function() {
		var status = tt.userLogin('the_username');
		
		alert(status);
		
		if(status) {
			return true;
		} else {
			return false;
		}
	});
});