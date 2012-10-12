jQuery = jQuery;
function APIClass(apiDomain) {
	
	this.apiDomain = apiDomain;
	
	this.apiCall = function(type, api, data) {

		var response;
		var xhr = new XMLHttpRequest();
		xhr.open('POST', this.apiDomain, false);

		xhr.onreadystatechange = function() {
			if(this.readyState == 4) {
				// Error check for fetching the URL
				if(this.status == 200 && this.responseText) {
					response = this.responseText;
				} else {
					opera.postError('EXTENSION ERROR: Can\'t read ' + url);
					return false;
				}
			}
		};

		xhr.send();
		
		return response;

	}
	
}