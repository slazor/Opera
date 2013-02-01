jQuery(function($) {
	var bg = opera.extension.bgProcess;
	var tt = bg.tt;
	var token = new Array();
	
	$('form').submit(function() {
		var userData = JSON.stringify($(this).serializeFormJSON());
		
		var token = tt.userLogin(userData);

		if(typeof(token) == 'string') {
			
			alert('Token: '+token);
			var userInfo = tt.userGetInfo(token);
			
			if(userInfo.username != '' && userInfo.email != '') {
				widget.preferences.request_token	= token;
				widget.preferences.username			= userInfo.username;
				widget.preferences.email			= userInfo.email;
				window.location.href				= 'options.html';
			}
			
		} else {
			alert("Error: "+token.error);
		}
		
		return false;
	});
});