function APIClass(apiDomain) {
	
	this.apiDomain = apiDomain;
	
	this.apiCall = function(type, api, data) {
		
		var response;
		var xhr			= new XMLHttpRequest();
		var params	= data;
		var url			= this.apiDomain+api;
		
		if(type == 'GET') {
			url = url+'?'+params;
		}
		
		xhr.open(type, url, false);
		
		if(type == 'POST') {
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.setRequestHeader("Content-length", params.length);
			xhr.setRequestHeader("Connection", "close");
		}

		xhr.onreadystatechange = function() {
			if(this.readyState == 4) {
			
				if(this.status == 200 && this.responseText) {
					response = this.responseText;
				} else {
					opera.postError('API ERROR: ' + url);
					return false;
				}
				
			}
		};

		xhr.send(params);
		
		return JSON.parse(response);

	}
	
}