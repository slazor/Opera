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
	
	this.getListData = function() {
		var lists = JSON.parse(widget.preferences.lists);
		var returnLists = new Array();
		for(var i in lists.lists) {
			returnLists[returnLists.length] = JSON.parse(localStorage.getItem('list_'+lists.lists[i]));
		}
		return returnLists;
	}
	
	this.makeString = function(arr) {
		var string = '';
		for(var i in arr) {
			string = string + i + '=' + arr[i];
		}
		return string;
	}

}