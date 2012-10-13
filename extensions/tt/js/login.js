jQuery(function($) {
	var bg = opera.extension.bgProcess;
	var tt = bg.tt;
	var token = new Array();
	
	$('form').submit(function() {
		var userData = $(this).serialize();
		var call = tt.userLogin(userData);

		if(typeof(call) == 'string') {
		
			alert('Token: '+call);
			token['request_token'] = call;
			var userInfo = tt.userGetInfo(tt.makeString(token));
			
			if(userInfo.username != '' && userInfo.email != '') {
				widget.preferences.request_token	= token['request_token'];
				widget.preferences.username			= userInfo.username;
				widget.preferences.email				= userInfo.email;
				window.location.href						= 'options.html';
			}
			
		} else {
		
			alert("Error: "+token.error);
			
		}
		
		return false;
	});
});